const StatsSection = () => (
  <section className="w-full max-w-[1200px] px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl mb-12">
    <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg p-4">
      <span className="text-gray-600 text-base md:text-lg">참여 농부</span>
      <span className="text-green-700 text-2xl md:text-3xl font-bold">
        1,000+
      </span>
    </div>
    <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg p-4">

      <span className="text-gray-600 text-base md:text-lg">위탁 완료</span>
      <span className="text-green-700 text-2xl md:text-3xl font-bold">
        5,000+
      </span>
    </div>
    <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg p-4">

      <span className="text-gray-600 text-base md:text-lg">만족도</span>
      <span className="text-green-700 text-2xl md:text-3xl font-bold">98%</span>
    </div>
    <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg p-4">

      <span className="text-gray-600 text-base md:text-lg">평균 경력</span>
      <span className="text-green-700 text-2xl md:text-3xl font-bold">
        10년
      </span>
    </div>
  </section>
);

export default StatsSection;
