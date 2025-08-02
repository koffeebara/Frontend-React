import { useEffect, useRef, useState } from "react";
// import ProductCard from "../components/project-list/ProductCard";
import ProductCardList from "../components/project-list/ProductCardList";

const slides = [
  {
    id: 1,
    image: "/grapes-8306833_1280.jpg",
    alt: "Image 1",
    title: "포도",
    content: "달콤한 포도",
  },
  {
    id: 2,
    image: "/apples-8212695_1280.jpg",
    alt: "Image 2",
    title: "사과",
    content: "신선한 사과",
  },
  {
    id: 3,
    image: "/corn-8028831_1280.jpg",
    alt: "Image 3",
    title: "옥수수",
    content: "노란 옥수수",
  },
  {
    id: 4,
    image: "/peach-2632182_1280.jpg",
    alt: "Image 4",
    title: "복숭아",
    content: "맛있는 복숭아",
  },
  {
    id: 5,
    image: "/watermelon-1808136_1280.jpg",
    alt: "Image 5",
    title: "수박",
    content: "시원한 수박",
  },
];

export default function CustomImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-col p-8">
      <div className="flex px-8">
        <div className="w-full h-96 mx-auto overflow-hidden relative">
          {/* 슬라이드 이미지 영역 */}
          <div
            ref={slideRef}
            className="flex w-300 transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 이전 / 다음 버튼 */}
          <button
            onClick={goToPrev}
            className="absolute w-8 h-8 left-3 top-1/2 -translate-y-1/2 bg-gray-600 z-10  text-white"
          >
            ◀
          </button>
          <button
            onClick={goToNext}
            className="absolute w-8 h-8 right-3 top-1/2 -translate-y-1/2 bg-gray-600 z-10 text-white"
          >
            ▶
          </button>
        </div>
        <div className="hidden md:flex flex-col w-1/4 p-2 gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}

              className={`flex border border-gray-200 justify-between rounded-lg p-2 cursor-pointer items-center ${currentIndex === index ? "bg-green-000" : "bg-white"
                }`}
              onClick={() => goToSlide(index)}
            >
              <div>
                <p>{slide.title}</p>
                <p>{slide.content}</p>
              </div>
              <img src={slide.image} alt="" className="w-8 h-8" />

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
