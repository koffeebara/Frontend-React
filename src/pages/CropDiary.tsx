import React, { useState } from "react";

const CropDiary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "growth" | "management" | "problem"
  >("all");

  // 필터 타입 정의
  const types = [
    { value: "all", label: "전체 일지" },
    { value: "growth", label: "성장 기록" },
    { value: "management", label: "관리 작업" },
    { value: "problem", label: "문제 해결" },
  ];

  // 예시 데이터
  const diaryEntries = [
    {
      type: "growth",
      date: "07월 15일",
      title: "토마토 모종 심기 완료",
      description:
        "오늘 토마토 모종을 심었습니다. 건강한 모종들이 잘 자라길 바라며 충분한 물과 영양분을 공급해주었습니다.",
      tags: ["#성장기록", "#모종심기"],
      color: "orange-400",
    },
    {
      type: "management",
      date: "07월 20일",
      title: "첫 번째 물주기 및 지지대 설치",
      description:
        "모종들이 뿌리를 잘 내리고 있습니다. 오늘은 지지대를 설치하고 충분한 물을 주었습니다. 성장이 기대됩니다.",
      tags: ["#관리작업", "#지지대설치"],
      color: "teal-700",
    },
    {
      type: "problem",
      date: "07월 25일",
      title: "병충해 발견 및 대응",
      description:
        "잎에 작은 반점이 발견되어 친환경 방제제를 살포했습니다. 조기에 발견해서 다행이며, 지속적인 관찰이 필요합니다.",
      tags: ["#문제해결", "#병충해방제"],
      color: "green-500",
    },
  ];

  // 필터링된 항목들
  const filteredEntries =
    activeTab === "all"
      ? diaryEntries
      : diaryEntries.filter((entry) => entry.type === activeTab);

  return (
    <div className="w-full min-h-screen bg-green-50">
      <div className="w-full max-w-[1280px] md:max-w-[480px] lg:max-w-[1280px] mx-auto px-4 md:px-4 py-8 md:py-0">
        {/* Back Button */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-4 h-4 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <span className="text-green-700 text-sm font-bold">뒤로가기</span>
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-[1200px] md:max-w-[384px] lg:max-w-[1200px] mx-auto flex flex-col gap-4 md:gap-4">
          {/* Crop Profile Card */}
          <div className="w-full min-w-full md:w-96 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mx-auto">
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Profile Section */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-28 h-28 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🌱</span>
                </div>
                <div className="text-center">
                  <h1 className="text-teal-700 text-2xl md:text-3xl font-bold mb-2">
                    토마토
                  </h1>
                  <p className="text-gray-600 text-xs md:text-sm">
                    <span className="font-bold md:font-medium">김농부</span>님의
                    작물 일지를 확인해 보세요!
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-teal-50 rounded-2xl border border-teal-100 p-4 md:p-6 text-center">
                  <div className="text-gray-600 text-sm font-bold md:font-normal mb-2">
                    재배 진행률
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-green-700 text-xl md:text-2xl font-bold">
                      75
                    </span>
                    <span className="text-green-700 text-lg font-bold md:font-normal ml-1">
                      %
                    </span>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-2xl border border-teal-100 p-4 md:p-6 text-center">
                  <div className="text-gray-600 text-sm font-bold md:font-normal mb-2">
                    참여자
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-green-700 text-xl md:text-2xl font-bold">
                      24
                    </span>
                    <span className="text-green-700 text-lg font-bold md:font-normal ml-1">
                      명
                    </span>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-2xl border border-teal-100 p-4 md:p-6 text-center">
                  <div className="text-gray-600 text-sm font-bold md:font-normal mb-2">
                    재배 기간
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-green-700 text-xl md:text-2xl font-bold">
                      90
                    </span>
                    <span className="text-green-700 text-lg font-bold md:font-normal ml-1">
                      일
                    </span>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-2xl border border-teal-100 p-4 md:p-6 text-center">
                  <div className="text-gray-600 text-sm font-bold md:font-normal mb-2">
                    수확까지
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-green-700 text-xl md:text-2xl font-bold">
                      23
                    </span>
                    <span className="text-green-700 text-lg font-bold md:font-normal ml-1">
                      일
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growing Progress Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
            <h2 className="text-gray-900 text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
              재배 진행 상황
            </h2>
            <div className="relative max-w-sm md:max-w-4xl mx-auto">
              {/* Progress Line */}
              <div className="absolute top-6 left-6 right-6 h-1 bg-gray-300 rounded-full">
                <div className="h-full w-3/5 bg-blue-400 rounded-full"></div>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between items-start relative z-10 overflow-x-auto md:overflow-visible">
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">😁</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    준비
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">👨‍🌾</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    파종
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🌱</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    발아
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🌾</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    성장
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">⭐️</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    수확
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-xl md:text-2xl">📦</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-semibold text-center">
                    배송
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="w-full max-w-[880px] mx-auto">
            <div className="flex gap-2 mb-4 justify-center">
              {types.map((type) => (
                <button
                  key={type.value}
                  onClick={() =>
                    setActiveTab(
                      type.value as "all" | "growth" | "management" | "problem"
                    )
                  }
                  className={`w-[211px] h-[40px] rounded-lg border text-sm font-semibold transition-all ${
                    activeTab === type.value
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Diary Timeline */}
          <div className="relative w-full">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-green-600"></div>

            <div className="space-y-6 md:space-y-8 pl-16 md:pl-20">
              {filteredEntries.map((entry, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -left-[60px] md:-left-[76px] top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 bg-${entry.color} rounded-full border-3 md:border-4 border-white shadow-md`}
                  ></div>
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 md:gap-2 text-green-600 text-sm font-semibold mb-2">
                        <span>{entry.date}</span>
                      </div>
                      <h3 className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        {entry.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {entry.description}
                      </p>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-3 gap-1.5 md:gap-3 mb-4">
                      <div className="aspect-[4/3] h-20 md:h-auto bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                        <span className="text-lg md:text-2xl">🌱</span>
                      </div>
                      <div className="aspect-[4/3] h-20 md:h-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                        <span className="text-lg md:text-2xl">💧</span>
                      </div>
                      <div className="aspect-[4/3] h-20 md:h-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
                        <span className="text-lg md:text-2xl">☀️</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs md:text-sm border ${
                            entry.type === "growth"
                              ? "bg-blue-50 text-blue-800 border-blue-200"
                              : entry.type === "management"
                                ? "bg-orange-50 text-orange-800 border-orange-200"
                                : "bg-red-50 text-red-800 border-red-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8">
          <button className="w-12 h-12 md:w-14 md:h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropDiary;
