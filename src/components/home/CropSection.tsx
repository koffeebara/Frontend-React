interface CropCard {
  id: number;
  emoji: string;
  name: string;
  farmer: string;
  location: string;
  experience: string;
  rating: string;
  reviews: number;
  price: string;
  weight: string;
  participants: number;
  totalBoxes: number;
  completedBoxes: number;
  percentage: number;
  status: string;
  deadline: string;
  bgColor: string;
}

const CropSection = ({ cropCards }: { cropCards: CropCard[] }) => (
  <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8">
    <div className="flex flex-col items-center gap-2">
      <span className="px-4 py-1 bg-orange-200 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-orange-900 text-sm font-semibold">
        이번 주 인기 농작물
      </span>
      <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
        지금 참여 가능한 위탁 농작물
      </h2>
    </div>
    <div className="w-full flex flex-wrap justify-center gap-8">
      {cropCards.map((crop) => (
        <div
          key={crop.id}
          className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow-md p-6 outline-1 outline-offset-[-1px] outline-opacity-200/20"
        >
          <div className="flex items-center gap-2 text-red-500 text-base font-semibold">
            ⏰ 마감까지 D-{crop.deadline?.replace(/[^0-9]/g, "") || "00"}
          </div>
          <div className="w-full h-48 flex items-center justify-center text-6xl bg-opacity-000/5 rounded-2xl">
            {crop.emoji}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 text-xl font-bold">{crop.name}</div>
            <div className="flex flex-wrap gap-2 text-gray-600 text-xs">
              <span>📍 {crop.farmer}</span>
              <span>{crop.location}</span>
              <span>{crop.experience}</span>
            </div>
            <div className="flex gap-2 text-gray-600 text-xs">
              <span>⭐️ {crop.rating} / 5</span>
              <span>({crop.reviews}개 후기)</span>
            </div>
            <div className="flex gap-2 items-center text-blue-500 text-lg font-bold">
              <span>{crop.price}원</span>
              <span className="text-gray-600 text-sm font-normal">
                박스당 {crop.weight}
              </span>
            </div>
          </div>
          <div className="w-full bg-mint-000 rounded-2xl px-4 py-3 flex flex-col gap-2">
            <div className="flex gap-1 items-center text-gray-800 text-base font-semibold">
              <span>달성률</span>
              <span>{crop.percentage}%</span>
            </div>
            <div className="w-full h-3 bg-cool-gray-100 rounded-full overflow-hidden flex">
              <div
                className="h-3 bg-mint-500 rounded-l-full"
                style={{ width: `${crop.percentage}%` }}
              ></div>
              <div className="flex-1"></div>
            </div>
            <div className="flex gap-1 text-cool-gray-700 text-sm">
              <span>
                총 {crop.totalBoxes}박스 중 {crop.completedBoxes}박스 위탁 완료!
              </span>
            </div>
          </div>
          <button className="w-full mt-2 px-6 py-3 bg-orange-400 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 text-base font-semibold hover:bg-orange-500 transition">
            상품 둘러보기
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default CropSection;
