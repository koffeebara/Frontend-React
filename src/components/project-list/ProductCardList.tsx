import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchLatestProjects, type ProjectResponse } from "../../api/Home";

// Assets 이미지 import
import grapesImg from "../../assets/grapes-8306833_1280.jpg";
import applesImg from "../../assets/apples-8212695_1280.jpg";
import carrotImg from "../../assets/carrot-1565597_1280.jpg";
import peachImg from "../../assets/peach-2632182_1280.jpg";
import watermelonImg from "../../assets/watermelon-1808136_1280.jpg";
import avocadoImg from "../../assets/avocado-8498520_1280.jpg";
import cabbageImg from "../../assets/chinese-cabbage-5798137_1280.jpg";
import kimchiImg from "../../assets/kimchi-7613319_1280.jpg";
import shrimpImg from "../../assets/shrimp-599792_1280.jpg";
import soilImg from "../../assets/soil-8080788_1280.jpg";
import carrotWebp from "../../assets/carrot.webp";
import cornWebp from "../../assets/corn.webp";
import potatoeWebp from "../../assets/potatoe.webp";
import sweetpotatoWebp from "../../assets/sweetpotato.webp";
import tomatoWebp from "../../assets/tomato.webp";

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

// 이미지 배열
const productImages = [
  grapesImg,
  applesImg,
  carrotImg,
  peachImg,
  watermelonImg,
  avocadoImg,
  cabbageImg,
  kimchiImg,
  shrimpImg,
  soilImg,
  carrotWebp,
  cornWebp,
  potatoeWebp,
  sweetpotatoWebp,
  tomatoWebp,
];

// 실제 프로젝트 데이터 (CropInfo에서 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000 순서로 매칭)
const realProjectData = [
  {
    id: 0,
    imageUrl: tomatoWebp,
    title: "천안 청양고추 매운맛 체험 농장",
    price: "11,000원",
    weightPerBox: "1박스",
    daysLeft: 20,
    rating: 4.0,
    reviewCount: 160,
    projectId: 0,
  },
  {
    id: 1,
    imageUrl: cabbageImg,
    title: "천안 온실 배추 사랑 담은 재배",
    price: "30,000원",
    weightPerBox: "1박스",
    daysLeft: 20,
    rating: 4.0,
    reviewCount: 180,
    projectId: 1000,
  },
  {
    id: 2,
    imageUrl: soilImg,
    title: "원주 숲속 표고버섯 품은 생태농장",
    price: "17,000원",
    weightPerBox: "1박스",
    daysLeft: 19,
    rating: 4.0,
    reviewCount: 200,
    projectId: 2000,
  },
  {
    id: 3,
    imageUrl: sweetpotatoWebp,
    title: "원주 햇살 고구마 달콤이 스토리",
    price: "16,000원",
    weightPerBox: "1박스",
    daysLeft: 18,
    rating: 4.0,
    reviewCount: 220,
    projectId: 3000,
  },
  {
    id: 4,
    imageUrl: carrotImg,
    title: "원주 토종콩 흙내음 가득 프로젝트",
    price: "18,000원",
    weightPerBox: "1박스",
    daysLeft: 17,
    rating: 4.0,
    reviewCount: 240,
    projectId: 4000,
  },
  {
    id: 5,
    imageUrl: grapesImg,
    title: "달콤한 포도",
    price: "200원",
    weightPerBox: "2kg",
    daysLeft: 30,
    rating: 4.0,
    reviewCount: 50,
    projectId: 5000,
  },
  {
    id: 6,
    imageUrl: applesImg,
    title: "신선한 사과",
    price: "250원",
    weightPerBox: "3kg",
    daysLeft: 29,
    rating: 4.1,
    reviewCount: 60,
    projectId: 6000,
  },
  {
    id: 7,
    imageUrl: carrotWebp,
    title: "아삭한 당근",
    price: "300원",
    weightPerBox: "4kg",
    daysLeft: 28,
    rating: 4.2,
    reviewCount: 70,
    projectId: 7000,
  },
  {
    id: 8,
    imageUrl: peachImg,
    title: "맛있는 복숭아",
    price: "350원",
    weightPerBox: "2kg",
    daysLeft: 27,
    rating: 4.3,
    reviewCount: 80,
    projectId: 8000,
  },
];

// 상품명 배열 (기존 더미 데이터용)
const productTitles = [
  "달콤한 포도",
  "신선한 사과",
  "아삭한 당근",
  "맛있는 복숭아",
  "시원한 수박",
  "영양만점 아보카도",
  "신선한 배추",
  "건강한 김치",
  "싱싱한 새우",
  "유기농 흙",
  "프리미엄 당근",
  "달콤한 옥수수",
  "포근한 감자",
  "고구마",
  "빨간 토마토",
];

// 실제 데이터와 더미 데이터 결합
const dummyData: ProjectCardData[] = [
  ...realProjectData,
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 9,
    imageUrl: productImages[(i + 9) % productImages.length],
    title: productTitles[(i + 9) % productTitles.length],
    price: `${(150 + (i % 20) * 50).toLocaleString()}원`,
    weightPerBox: `${2 + (i % 3)}kg`,
    daysLeft: Math.max(1, 30 - (i % 30)), // 1~30일 사이의 고정값
    rating: 4.0 + (i % 10) * 0.1, // 4.0~4.9 사이의 고정값
    reviewCount: 50 + (i % 20) * 10, // 50~240 사이의 고정값
    projectId: (i + 9) * 1000, // 9000부터 시작하는 더미 데이터용 고유 projectId
  })),
];

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

  const handleProjectClick = (index: number, projectId: number) => {
    const calculatedId = index * 1000;
    navigate(`/cropinfo/${calculatedId}`);
  };

  // API 데이터가 있으면 사용하고, 없으면 더미 데이터 사용
  const dataToShow: ProjectCardData[] =
    projects.length > 0
      ? projects.map((project, index) => ({
          id: project.projectId,
          imageUrl: project.productImageUrl,
          title: project.projectTitle,
          price: `${project.price.toLocaleString()}원`,
          weightPerBox: "1박스",
          daysLeft: Math.max(1, 25 - (index % 25)), // 1~25일 사이의 고정값
          rating: 4.0 + (index % 10) * 0.1, // 4.0~4.9 사이의 고정값
          reviewCount: 80 + (index % 15) * 20, // 80~360 사이의 고정값
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
        {pagedData.map((item, index) => {
          const actualIndex = currentPage * ITEMS_PER_PAGE + index;
          return (
            <div
              key={item.id}
              onClick={() =>
                handleProjectClick(actualIndex, item.projectId || item.id)
              }
              className="cursor-pointer"
            >
              <ProductCard {...item} />
            </div>
          );
        })}
      </div>

      {/* 페이지네이션 버튼 */}
      <div className="flex justify-center gap-2 mb-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToNextPage(i)}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              currentPage === i
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
