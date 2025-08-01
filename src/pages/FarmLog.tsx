import { useState } from "react";
import IconStep from "../components/farm-log/IconStep";
import RecordCard from "../components/farm-log/RecordCard";
import SummaryCard from "../components/farm-log/SummaryCard";
import type { RecordType } from "../components/farm-log/RecordCard"

const recordData = [
  {
    type: "growthRecord",
    date: "08월 01일",
    title: "새싹이 돋아났어요",
    description: ["오늘 아침, 첫 새싹이 보였어요.", "건강하게 자라고 있어요."],
    tags: ["새싹", "성장", "관찰일지"],
  },
  {
    type: "maintenanceTask",
    date: "08월 02일",
    title: "물 주기",
    description: ["오전 9시에 물을 줬어요.", "토양 상태가 적절했어요."],
    tags: ["급수", "작업일지"],
  },
  {
    type: "issueResolution",
    date: "08월 02일",
    title: "벌레 발견",
    description: ["잎 뒷면에서 해충을 발견했어요.", "친환경 살충제를 사용했어요."],
    tags: ["문제해결", "병해충", "살충"],
  },
  {
    type: "growthRecord",
    date: "08월 03일",
    title: "줄기 길이 측정",
    description: ["10cm 정도로 자랐어요.", "지난주보다 2cm 자랐어요."],
    tags: ["측정", "성장", "줄기"],
  },
  {
    type: "maintenanceTask",
    date: "08월 04일",
    title: "지지대 설치",
    description: ["줄기가 쓰러지지 않도록 지지대를 세웠어요."],
    tags: ["작업", "지지대", "안정화"],
  },
  {
    type: "growthRecord",
    date: "08월 04일",
    title: "잎 색 변화",
    description: ["잎이 진한 녹색으로 변했어요.", "광합성이 활발해졌다는 신호예요."],
    tags: ["잎", "색상변화", "성장과정"],
  },
  {
    type: "issueResolution",
    date: "08월 05일",
    title: "잎 끝 갈변 현상",
    description: ["잎 끝이 마르기 시작했어요.", "수분 공급량을 조절했어요."],
    tags: ["건조", "문제", "대처"],
  },
  {
    type: "maintenanceTask",
    date: "08월 06일",
    title: "잡초 제거",
    description: ["화분 주변 잡초를 제거했어요.", "다른 식물의 성장 방해 요소 제거."],
    tags: ["정비", "잡초", "관리"],
  },
  {
    type: "growthRecord",
    date: "08월 06일",
    title: "꽃 봉오리 발견",
    description: ["작은 꽃봉오리가 하나 생겼어요!", "곧 개화할 것으로 예상돼요."],
    tags: ["꽃", "성장", "기록"],
  },
  {
    type: "issueResolution",
    date: "08월 07일",
    title: "토양 과습",
    description: ["토양에 물이 고여 있었어요.", "배수 상태를 점검했어요."],
    tags: ["토양", "습도", "해결"],
  },
];

const types = [
  { value: "all", label: "전체 일지" },
  { value: "growthRecord", label: "성장 기록" },
  { value: "maintenanceTask", label: "관리 작업" },
  { value: "issueResolution", label: "문제 해결" },
];


export default function FarmLog() {
  const cropName = "작물명";
  const farmer = "농부명";

  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? recordData
    : recordData.filter((item) => item.type === filter as RecordType);

  return (
    <>
      <div className='w-full h-max p-4'>
        {/* 뒤로 가기 */}
        <div className='flex flex-col w-full h-max items-center'>
          <p className='text-green-700 w-full text-left cursor-pointer m-4'>&lt; 뒤로가기</p>
        </div>

        {/* 작물명 */}
        <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl p-8 mb-8 ">
          <img src="/test_img.png" alt="" className="w-[120px] h-[120px] rounded-full my-4" />
          <p className="text-[24px] font-bold text-mint-700">{cropName}</p>
          <p className="text-gray-600 text-sm my-4">{farmer}님의 작물 일지를 확인해 보세요!</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
          </div>
        </div>
        <div className="flex flex-col bg-white border border-gray-300 rounded-2xl p-8 items-center">
          <p className="title-2 mb-4">재배 진행 상황</p>

          <div className="flex  gap-4 justify-center  ">


            <IconStep icon="😀" status="complete" title="준비" />
            <IconStep icon="🧑‍🌾 " status="complete" title="파종" />
            <IconStep icon="🌱" status="complete" title="발아" />
            <IconStep icon="🌾" status="inProgress" title="성장" />
            <IconStep icon="⭐" status="notStarted" title="수확" />
            <IconStep icon="📦" status="notStarted" title="배송" hasNext={false} />
          </div>
        </div>
        <div className="w-full max-w-[880px] mx-auto">
          <div className="p-4">
            {/* 필터 버튼 */}
            <div className="flex gap-2 mb-4 justify-center">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setFilter(t.value)}
                  className={`w-[211px] h-[40px] rounded-lg border text-sm
              ${filter === t.value
                      ? "bg-mint-700 text-white"
                      : "bg-gray-100 border-gray-300"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative m-4 flex flex-col gap-8">
            {/* 세로선 */}
            <div className="absolute top-0 left-0 h-full w-px bg-green-500" />
            {filtered.map((item, idx) => (
              <RecordCard
                key={idx}
                type={item.type as RecordType}
                date={item.date}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>


    </>
  )
}
