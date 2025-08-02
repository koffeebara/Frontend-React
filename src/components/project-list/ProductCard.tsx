

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  weightPerBox: string;
  daysLeft: number;
  rating: number;
  reviewCount: number;
};

function ProductCard(props: ProductCardProps) {
  const {
    imageUrl
    title,
    price,
    weightPerBox,
    daysLeft,
    rating,
    reviewCount,
  } = props;

  const renderStars = () => {
    const filled = "★".repeat(rating);
    const empty = "★".repeat(5 - rating);
    return (
      <span>
        <span className="text-orange-400">{filled}</span>
        <span className="text-gray-300">{empty}</span>
      </span>
    );
  };

  return (
    <div className="w-full rounded-2xl  border-gray-300 overflow-hidden bg-white">
      {/* 이미지 및 마감 뱃지 */}
      <div className="relative aspect-[5/5] bg-gray-100">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-white text-red-500 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300">
          마감까지 {daysLeft}일
        </span>
      </div>

      {/* 하단 텍스트 정보 */}
      <div className="flex flex-col p-4">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-blue-600 text-lg font-bold mt-1">
          {price}
          <span className="text-gray-500 text-sm font-normal ml-2">
            박스당 {weightPerBox}
          </span>
        </p>
        <div className="flex items-center gap-1 mt-2">
          {renderStars()}
          <span className="text-sm text-gray-500 ml-1">({reviewCount}개)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
