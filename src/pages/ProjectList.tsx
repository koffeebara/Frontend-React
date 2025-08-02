import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ProductCard from "../components/project-list/ProductCard";
import ProductCardList from "../components/project-list/ProductCardList";

// Assets 이미지 import
import grapesImg from "../assets/grapes-8306833_1280.jpg";
import applesImg from "../assets/apples-8212695_1280.jpg";
import carrotImg from "../assets/carrot-1565597_1280.jpg";
import peachImg from "../assets/peach-2632182_1280.jpg";
import watermelonImg from "../assets/watermelon-1808136_1280.jpg";

const slides = [
  {
    id: 1,
    image: grapesImg,
    alt: "포도",
    title: "포도",
    content: "달콤한 포도",
    daysLeft: 15,
    reviewCount: 127,
  },
  {
    id: 2,
    image: applesImg,
    alt: "사과",
    title: "사과",
    content: "신선한 사과",
    daysLeft: 8,
    reviewCount: 89,
  },
  {
    id: 3,
    image: carrotImg,
    alt: "당근",
    title: "당근",
    content: "아삭한 당근",
    daysLeft: 22,
    reviewCount: 156,
  },
  {
    id: 4,
    image: peachImg,
    alt: "복숭아",
    title: "복숭아",
    content: "맛있는 복숭아",
    daysLeft: 3,
    reviewCount: 203,
  },
  {
    id: 5,
    image: watermelonImg,
    alt: "수박",
    title: "수박",
    content: "시원한 수박",
    daysLeft: 12,
    reviewCount: 74,
  },
];

export default function CustomImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000); // 4초마다 슬라이드 이동
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (slide: (typeof slides)[0]) => {
    // 슬라이드 데이터의 ID를 사용하여 CropInfo 페이지로 이동
    // ID를 1000번대로 변환하여 더미 데이터 식별
    const projectId = 1000 + slide.id;
    navigate(`/cropinfo/${projectId}`);
  };

  const handleSideCardClick = (index: number) => {
    // 인덱스에 1000을 더해서 바로 CropInfo 페이지로 이동
    const projectId = 1000 + (index + 1); // index는 0부터 시작하므로 +1
    navigate(`/cropinfo/${projectId}`);
  };

  return (
    <div className="flex flex-col p-8">
      <div className="flex px-8 gap-4">
        <div className="flex-1 h-120 overflow-hidden relative rounded-lg">
          {/* 슬라이드 이미지 영역 */}
          <div
            ref={slideRef}
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full h-full relative cursor-pointer"
                onClick={() => handleCardClick(slide)}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 이전 / 다음 버튼 */}
          <button
            onClick={goToPrev}
            className="absolute w-8 h-8 left-3 top-1/2 -translate-y-1/2 bg-gray-600 z-10 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            ◀
          </button>
          <button
            onClick={goToNext}
            className="absolute w-8 h-8 right-3 top-1/2 -translate-y-1/2 bg-gray-600 z-10 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            ▶
          </button>
        </div>
        <div className="flex flex-col w-80 gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex border border-gray-200 justify-between rounded-lg p-3 cursor-pointer items-center transition-colors ${
                currentIndex === index
                  ? "bg-green-000 border-mint-600"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => handleSideCardClick(index)}
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{slide.title}</p>
                <p className="text-sm text-gray-600">{slide.content}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-mint-700">
                    D-{slide.daysLeft}
                  </span>
                  <span className="text-xs text-gray-500">
                    리뷰 {slide.reviewCount}
                  </span>
                </div>
              </div>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-16 h-16 rounded-lg object-cover ml-2"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4">
        <ProductCardList />
      </div>
    </div>
  );
}
