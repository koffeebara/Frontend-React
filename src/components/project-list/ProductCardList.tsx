import { useState } from "react";
import ProductCard from "./ProductCard";

const dummyData = Array.from({ length: 33 }, (_, i) => ({
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

  const goToNextPage = (i: number) => {
    setCurrentPage(i);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);
  const pagedData = dummyData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="">
      {/* 카드 리스트 */}
      <div className="grid grid-cols-4 gap-10 my-10">
        {pagedData.map((item) => (
          <ProductCard key={item.id} {...item} />
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
