interface ExtraCrop {
  emoji: string;
  name: string;
  price: string;
  participants: number;
}

const ExtraCropSection = ({ extraCrops }: { extraCrops: ExtraCrop[] }) => (
  <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8">
    <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
      다른 농작물 둘러보기
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {extraCrops.map((crop, idx) => (
        <div
          key={idx}
          className="w-full max-w-[320px] flex flex-col gap-4 bg-common-000 rounded-3xl  p-6 border border-opacity-200/20"
        >
          <div className="flex gap-1 items-center text-red-400 text-base font-semibold">
            <span>🚩</span>
            <span>{crop.participants}명 참여중!</span>
          </div>
          <div className="w-full h-40 flex items-center justify-center text-4xl bg-opacity-000/5 rounded-2xl">
            {crop.emoji}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 text-xl font-bold">{crop.name}</div>
            <div className="flex gap-2 items-center text-mint-700 text-lg font-bold">
              <span>{crop.price}원</span>
              <span className="text-gray-600 text-sm font-normal">
                박스당 1박스
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExtraCropSection;
