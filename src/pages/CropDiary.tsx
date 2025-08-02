import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CropDiary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "growth" | "management" | "problem"
  >("all");
  const navigate = useNavigate();

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

  const handleDetailView = () => {
    navigate("/reserve");
  };

  return (
    <div className="w-[1280px] max-w-[1280px] min-w-[481px] bg-white inline-flex flex-col justify-start items-center">
      <div className="w-full max-w-[1200px] px-4 pt-8 pb-40 relative bg-white flex flex-col justify-start items-center gap-4">
        {/* Back Button */}
        <div className="self-stretch px-2 inline-flex justify-start items-center gap-1">
          <div className="w-4 h-4 relative flex justify-center items-center overflow-hidden">
            <div className="w-5 h-5 left-[-2px] top-[-2px] absolute" />
            <div className="w-1.5 h-2.5 left-[10px] top-[13px] absolute origin-top-left rotate-180 border-[1.4px] border-green-500" />
          </div>
          <div className="justify-start text-mint-700 text-sm font-semibold font-['pretendard'] leading-snug">
            뒤로가기
          </div>
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4">
          {/* Crop Profile Card */}
          <div className="self-stretch px-6 pt-10 pb-8 bg-common-000 rounded-2xl border border-opacity-200 flex flex-col justify-start items-center gap-8">
            <div className="flex flex-col justify-start items-center gap-4">
              <div
                data-value="1:1"
                className="w-28 h-28 bg-opacity-000 rounded-full"
              />
              <div className="flex flex-col justify-start items-center gap-2">
                <div className="text-center justify-start text-mint-700 text-3xl font-bold font-['pretendard'] leading-[48px]">
                  토마토
                </div>
                <div className="inline-flex justify-start items-start">
                  <div className="text-center justify-start text-gray-500 text-xs font-light font-['pretendard'] leading-none">
                    김농부
                  </div>
                  <div className="text-center justify-start text-gray-500 text-xs font-light font-['pretendard'] leading-none">
                    님의 작물 일지를 확인해 보세요!
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch min-w-52 inline-flex justify-center items-start gap-4 flex-wrap content-start">
              <div
                data-showicon="true"
                className="px-16 py-4 bg-green-000 rounded-2xl inline-flex flex-col justify-start items-center gap-2"
              >
                <div className="text-center justify-start text-gray-700 text-base font-normal font-['pretendard'] leading-normal">
                  재배 진행률
                </div>
                <div className="inline-flex justify-start items-center gap-0.5">
                  <div className="text-center justify-start text-mint-700 text-3xl font-semibold font-['pretendard'] leading-9">
                    75
                  </div>
                  <div className="text-center justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                    %
                  </div>
                </div>
              </div>
              <div
                data-showicon="true"
                className="px-16 py-4 bg-green-000 rounded-2xl inline-flex flex-col justify-start items-center gap-2"
              >
                <div className="text-center justify-start text-gray-700 text-base font-normal font-['pretendard'] leading-normal">
                  참여자
                </div>
                <div className="inline-flex justify-start items-center gap-0.5">
                  <div className="text-center justify-start text-mint-700 text-3xl font-semibold font-['pretendard'] leading-9">
                    24
                  </div>
                  <div className="text-center justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                    명
                  </div>
                </div>
              </div>
              <div
                data-showicon="true"
                className="px-16 py-4 bg-green-000 rounded-2xl inline-flex flex-col justify-start items-center gap-2"
              >
                <div className="text-center justify-start text-gray-700 text-base font-normal font-['pretendard'] leading-normal">
                  재배 기간
                </div>
                <div className="inline-flex justify-start items-center gap-0.5">
                  <div className="text-center justify-start text-mint-700 text-3xl font-semibold font-['pretendard'] leading-9">
                    90
                  </div>
                  <div className="text-center justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                    일
                  </div>
                </div>
              </div>
              <div
                data-showicon="true"
                className="px-16 py-4 bg-green-000 rounded-2xl inline-flex flex-col justify-start items-center gap-2"
              >
                <div className="text-center justify-start text-gray-700 text-base font-normal font-['pretendard'] leading-normal">
                  진행중
                </div>
                <div className="inline-flex justify-start items-center gap-0.5">
                  <div className="text-center justify-start text-mint-700 text-3xl font-semibold font-['pretendard'] leading-9">
                    23
                  </div>
                  <div className="text-center justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                    일
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Experience Section */}
          <div className="self-stretch pt-8 pb-2 flex flex-col justify-start items-start">
            <div className="w-[1168px] flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-6 relative bg-mint-700 rounded-tl-2xl rounded-tr-2xl flex flex-col justify-center items-center gap-8">
                  <div className="self-stretch inline-flex justify-center items-center gap-1">
                    <div className="justify-start text-common-000 text-2xl font-bold font-['pretendard'] leading-9">
                      농작물
                    </div>
                    <div className="justify-start text-common-000 text-2xl font-bold font-['pretendard'] leading-9">
                      재배
                    </div>
                    <div className="justify-start text-common-000 text-2xl font-bold font-['pretendard'] leading-9">
                      체험이 가능해요!
                    </div>
                  </div>
                  <div className="w-8 h-8 left-[1112px] top-[26px] absolute inline-flex justify-center items-center overflow-hidden">
                    <div className="w-10 h-10 left-[-4px] top-[-4px] absolute" />
                  </div>
                </div>
                <div className="self-stretch px-6 pt-10 pb-16 bg-cool-gray-000 flex flex-col justify-center items-center gap-12">
                  <div className="flex flex-col justify-start items-center gap-6">
                    <div className="px-4 py-2 rounded-lg inline-flex justify-start items-center gap-1">
                      <div className="flex justify-start items-center">
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          08
                        </div>
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          월
                        </div>
                      </div>
                      <div className="flex justify-start items-center">
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          10
                        </div>
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          일
                        </div>
                      </div>
                      <div className="flex justify-start items-center">
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          토
                        </div>
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          요일
                        </div>
                      </div>
                      <div className="flex justify-start items-center">
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          14
                        </div>
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          시
                        </div>
                      </div>
                      <div className="flex justify-start items-center">
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          00
                        </div>
                        <div className="justify-start text-mint-700 text-2xl font-semibold font-['pretendard'] leading-9">
                          분
                        </div>
                      </div>
                    </div>
                    <div className="text-center justify-start text-gray-700 text-lg font-normal font-['pretendard'] leading-7">
                      농장에 방문하고, 우리 농작물이 잘 자라고 있는지
                      확인해보세요.
                      <br />
                      전문가의 도움을 받아 실제 농작물을 키우는 과정을 생생하게
                      체험할 수 있어요.
                    </div>
                  </div>
                  <div className="w-full max-w-[840px] inline-flex justify-center items-center gap-6">
                    <div
                      className="flex-1 max-w-[800px] px-10 py-4 bg-mint-600 rounded-lg flex justify-center items-center cursor-pointer"
                      onClick={handleDetailView}
                    >
                      <div className="text-center justify-start text-common-000 text-base font-semibold font-['pretendard'] leading-normal">
                        자세히 보기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growing Progress Section */}
          <div className="self-stretch px-5 pt-4 pb-8 bg-common-000 rounded-2xl border border-opacity-100 flex flex-col justify-center items-center gap-4">
            <div
              data-size="large"
              className="pt-2 inline-flex justify-start items-center"
            >
              <div className="justify-start text-common-900 text-3xl font-bold font-['pretendard'] leading-[48px]">
                재배 진행 상황
              </div>
            </div>
            <div className="h-20 max-w-[800px] relative inline-flex justify-start items-start gap-6">
              <div className="w-96 h-0 left-[24px] top-[24px] absolute border-t-4 border-cool-gray-300" />
              <div className="w-52 h-0 left-[24px] top-[24px] absolute border-t-4 border-blue-300" />
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="3"
                  className="self-stretch h-12 bg-blue-200 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    😁
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  준비
                </div>
              </div>
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="3"
                  className="self-stretch h-12 bg-blue-200 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    👨‍🌾
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  파종
                </div>
              </div>
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="3"
                  className="self-stretch h-12 bg-blue-200 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    🌱
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  발아
                </div>
              </div>
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="2"
                  className="self-stretch h-12 bg-green-200 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    🌾
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  성장
                </div>
              </div>
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="1"
                  className="self-stretch h-12 bg-cool-gray-100 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    ⭐️
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  수확
                </div>
              </div>
              <div className="w-12 inline-flex flex-col justify-start items-start gap-2">
                <div
                  data-status="1"
                  className="self-stretch h-12 bg-cool-gray-100 rounded-full border border-opacity-100 flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-700 text-2xl font-bold font-['pretendard'] leading-9">
                    📦
                  </div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-sm font-semibold font-['pretendard'] leading-snug">
                  배송
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="w-[1168px] pt-10 pb-4 inline-flex justify-start items-center">
            <div
              data-active="on"
              className="flex-1 h-12 pt-3 pb-4 border-b-[3px] border-mint-600 flex justify-center items-center"
            >
              <div className="justify-start text-gray-800 text-base font-semibold font-['pretendard'] leading-normal">
                전체 일지
              </div>
            </div>
            <div
              data-active="off"
              className="flex-1 h-12 pt-3 pb-4 flex justify-center items-center"
            >
              <div className="justify-start text-gray-500 text-base font-normal font-['pretendard'] leading-normal">
                성장 기록
              </div>
            </div>
            <div
              data-active="off"
              className="flex-1 h-12 pt-3 pb-4 flex justify-center items-center"
            >
              <div className="justify-start text-gray-500 text-base font-normal font-['pretendard'] leading-normal">
                관리 작업
              </div>
            </div>
            <div
              data-active="off"
              className="flex-1 h-12 pt-3 pb-4 flex justify-center items-center"
            >
              <div className="justify-start text-gray-500 text-base font-normal font-['pretendard'] leading-normal">
                문제 해결
              </div>
            </div>
          </div>

          {/* Diary Timeline */}
          <div className="w-full max-w-[880px] px-4 pt-8 pb-2 rounded-tl-2xl inline-flex justify-start items-start gap-8">
            <div className="w-0 self-stretch border-l-2 border-opacity-200" />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
              {filteredEntries.map((entry, index) => (
                <div
                  key={index}
                  className="self-stretch py-2 relative flex flex-col justify-start items-start"
                >
                  <div
                    data-showimg="true"
                    className="self-stretch px-6 pt-6 pb-8 bg-common-000 rounded-2xl border border-opacity-100 flex flex-col justify-start items-start gap-6"
                  >
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                      <div className="inline-flex justify-start items-center gap-1">
                        <div className="flex justify-start items-center">
                          <div className="justify-start text-mint-700 text-sm font-semibold font-['pretendard'] leading-snug">
                            07
                          </div>
                          <div className="justify-start text-mint-700 text-sm font-semibold font-['pretendard'] leading-snug">
                            월
                          </div>
                        </div>
                        <div className="flex justify-start items-center">
                          <div className="justify-start text-mint-700 text-sm font-semibold font-['pretendard'] leading-snug">
                            15
                          </div>
                          <div className="justify-start text-mint-700 text-sm font-semibold font-['pretendard'] leading-snug">
                            일
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-3">
                        <div
                          data-size="medium"
                          className="self-stretch pt-2 inline-flex justify-start items-center"
                        >
                          <div className="flex-1 justify-start text-common-900 text-2xl font-bold font-['pretendard'] leading-9">
                            {entry.title}
                          </div>
                        </div>
                        <div className="self-stretch justify-start text-gray-700 text-lg font-normal font-['pretendard'] leading-7">
                          {entry.description}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                      <div
                        data-value="5:4"
                        className="flex-1 h-64 bg-opacity-000 rounded-2xl"
                      />
                      <div
                        data-value="5:4"
                        className="flex-1 h-64 bg-opacity-000 rounded-2xl"
                      />
                      <div
                        data-value="1:1"
                        className="flex-1 h-64 bg-opacity-000 rounded-2xl"
                      />
                    </div>
                    <div className="inline-flex justify-start items-start gap-3">
                      {entry.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          data-value={entry.type}
                          className="flex justify-start items-start"
                        >
                          <div
                            data-showmoretext="false"
                            data-showtag="true"
                            className={`px-4 py-1 rounded-full border border-opacity-100 flex justify-start items-center gap-0.5 ${
                              entry.type === "growth"
                                ? "bg-blue-000"
                                : entry.type === "management"
                                  ? "bg-orange-000"
                                  : "bg-red-000"
                            }`}
                          >
                            <div
                              className={`text-center justify-start text-sm font-normal font-['pretendard'] leading-snug ${
                                entry.type === "growth"
                                  ? "text-blue-900"
                                  : entry.type === "management"
                                    ? "text-orange-900"
                                    : "text-red-900"
                              }`}
                            >
                              #
                            </div>
                            <div
                              className={`text-center justify-start text-sm font-semibold font-['pretendard'] leading-snug ${
                                entry.type === "growth"
                                  ? "text-blue-900"
                                  : entry.type === "management"
                                    ? "text-orange-900"
                                    : "text-red-900"
                              }`}
                            >
                              {tag.replace("#", "")}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-8 h-8 left-[-48px] top-[250px] absolute inline-flex justify-center items-center overflow-hidden">
                    <div className="w-10 h-10 left-[-4px] top-[-4px] absolute overflow-hidden">
                      <div
                        className={`w-5 h-5 left-[10px] top-[10px] absolute rounded-full ${
                          entry.type === "growth"
                            ? "bg-mint-600"
                            : "bg-cool-gray-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="w-12 h-12 p-2 left-[1152px] top-[3518px] absolute bg-mint-700 rounded-full flex flex-col justify-center items-center gap-2">
          <div className="w-8 h-8 relative inline-flex justify-center items-center overflow-hidden">
            <div className="w-10 h-10 left-[-4px] top-[-4px] absolute" />
            <div className="w-3 h-5 left-[6px] top-[20px] absolute origin-top-left -rotate-90 border-[2.8px] border-common-000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDiary;
