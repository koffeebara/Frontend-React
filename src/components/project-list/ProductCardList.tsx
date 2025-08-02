import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchLatestProjects, type ProjectResponse } from "../../api/Home";


interface ProjectCardData {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  weightPerBox: string;
  daysLeft: number;
  rating: number;
  reviewCount: number;
  farmer?: {
    name: string;
    location: string;
    specialNote: string;
  };
  projectId?: number;
}

const dummyData: ProjectCardData[] = Array.from({ length: 33 }, (_, i) => ({
  id: i,
  imageUrl: "/test_img.png",
  title: `title ${i + 1}`,
  price: "000,000원",
  weightPerBox: "00kg",
  daysLeft: i % 5,
  rating: 4,
  reviewCount: i * 3,
}));


const ITEMS_PER_PAGE = 12;

export default function ProductCardList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const apiResponse = await fetchLatestProjects();
        if (apiResponse.success && apiResponse.response) {
          setProjects(apiResponse.response);
        } else {
          console.error("프로젝트 데이터 로드 실패:", apiResponse.error);
        }
      } catch (error) {
        console.error("프로젝트 로드 중 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const goToNextPage = (i: number) => {
    setCurrentPage(i);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/cropInfo/${projectId}`);
  };

  // API 데이터가 있으면 사용하고, 없으면 더미 데이터 사용
  const dataToShow: ProjectCardData[] =
    projects.length > 0
      ? projects.map((project) => ({
        id: project.projectId,
        imageUrl: project.productImageUrl,
        title: project.projectTitle,
        price: `${project.price.toLocaleString()}원`,
        weightPerBox: "1박스",
        daysLeft: Math.floor(Math.random() * 30),
        rating: 4 + Math.random(),
        reviewCount: Math.floor(Math.random() * 50),
        farmer: project.farmer,
        projectId: project.projectId,
      }))
      : dummyData;

  const totalPages = Math.ceil(dataToShow.length / ITEMS_PER_PAGE);
  const pagedData = dataToShow.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg">프로젝트를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="">
      {/* 카드 리스트 */}
      <div className="grid grid-cols-4 gap-10 my-10">
        {pagedData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleProjectClick(item.projectId || item.id)}
            className="cursor-pointer"
          >
            <ProductCard {...item} />
          </div>
        ))}
      </div>

      {/* 페이지네이션 버튼 */}
      <div className="flex justify-center gap-2 mb-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToNextPage(i)}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentPage === i
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
