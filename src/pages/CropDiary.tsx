import { Link } from "react-router-dom";

// import React, { useState } from "react";

// const CropDiary: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "all" | "growth" | "management" | "problem"
//   >("all");

//   // 필터 타입 정의
//   const types = [
//     { value: "all", label: "전체 일지" },
//     { value: "growth", label: "성장 기록" },
//     { value: "management", label: "관리 작업" },
//     { value: "problem", label: "문제 해결" },
//   ];

//   // 예시 데이터
//   const diaryEntries = [
//     {
//       type: "growth",
//       date: "07월 15일",
//       title: "토마토 모종 심기 완료",
//       description:
//         "오늘 토마토 모종을 심었습니다. 건강한 모종들이 잘 자라길 바라며 충분한 물과 영양분을 공급해주었습니다.",
//       tags: ["#성장기록", "#모종심기"],
//       color: "orange-400",
//     },
//     {
//       type: "management",
//       date: "07월 20일",
//       title: "첫 번째 물주기 및 지지대 설치",
//       description:
//         "모종들이 뿌리를 잘 내리고 있습니다. 오늘은 지지대를 설치하고 충분한 물을 주었습니다. 성장이 기대됩니다.",
//       tags: ["#관리작업", "#지지대설치"],
//       color: "teal-700",
//     },
//     {
//       type: "problem",
//       date: "07월 25일",
//       title: "병충해 발견 및 대응",
//       description:
//         "잎에 작은 반점이 발견되어 친환경 방제제를 살포했습니다. 조기에 발견해서 다행이며, 지속적인 관찰이 필요합니다.",
//       tags: ["#문제해결", "#병충해방제"],
//       color: "green-500",
//     },
//   ];

//   // 필터링된 항목들
//   const filteredEntries =
//     activeTab === "all"
//       ? diaryEntries
//       : diaryEntries.filter((entry) => entry.type === activeTab);

//   return (
//     <div className="w-full min-h-screen bg-green-50">
//       <div className="w-full max-w-[1280px] mx-auto px-4 py-8">
//         {/* Back Button */}
//         <div className="flex items-center gap-2 mb-6 px-2">
//           <div className="w-4 h-4 flex items-center justify-center">
//             <svg
//               className="w-3 h-3 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </div>
//           <span className="text-green-700 text-sm font-bold">뒤로가기</span>
//         </div>

//         {/* Main Content Container */}
//         <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4">
//           {/* Crop Profile Card */}
//           <div className="w-full min-w-full bg-white rounded-2xl border border-gray-200 p-8 mx-auto">
//             <div className="flex flex-col items-center gap-8">
//               {/* Profile Section */}
//               <div className="flex flex-col items-center gap-4">
//                 <div className="w-28 h-28 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
//                   <span className="text-4xl">🌱</span>
//                 </div>
//                 <div className="text-center">
//                   <h1 className="text-teal-700 text-3xl font-bold mb-2">
//                     토마토
//                   </h1>
//                   <p className="text-gray-600 text-sm">
//                     <span className="font-medium">김농부</span>님의 작물 일지를
//                     확인해 보세요!
//                   </p>
//                 </div>
//               </div>

//               {/* Stats Grid */}
//               <div className="w-full grid grid-cols-4 gap-4">
//                 <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6 text-center">
//                   <div className="text-gray-600 text-sm font-normal mb-2">
//                     재배 진행률
//                   </div>
//                   <div className="flex items-baseline justify-center">
//                     <span className="text-green-700 text-2xl font-bold">
//                       75
//                     </span>
//                     <span className="text-green-700 text-lg font-normal ml-1">
//                       %
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6 text-center">
//                   <div className="text-gray-600 text-sm font-normal mb-2">
//                     참여자
//                   </div>
//                   <div className="flex items-baseline justify-center">
//                     <span className="text-green-700 text-2xl font-bold">
//                       24
//                     </span>
//                     <span className="text-green-700 text-lg font-normal ml-1">
//                       명
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6 text-center">
//                   <div className="text-gray-600 text-sm font-normal mb-2">
//                     재배 기간
//                   </div>
//                   <div className="flex items-baseline justify-center">
//                     <span className="text-green-700 text-2xl font-bold">
//                       90
//                     </span>
//                     <span className="text-green-700 text-lg font-normal ml-1">
//                       일
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6 text-center">
//                   <div className="text-gray-600 text-sm font-normal mb-2">
//                     수확까지
//                   </div>
//                   <div className="flex items-baseline justify-center">
//                     <span className="text-green-700 text-2xl font-bold">
//                       23
//                     </span>
//                     <span className="text-green-700 text-lg font-normal ml-1">
//                       일
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Growing Progress Section */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-8">
//             <h2 className="text-gray-900 text-2xl font-bold text-center mb-8">
//               재배 진행 상황
//             </h2>
//             <div className="relative max-w-4xl mx-auto">
//               {/* Progress Line */}
//               <div className="absolute top-6 left-6 right-6 h-1 bg-gray-300 rounded-full">
//                 <div className="h-full w-3/5 bg-blue-400 rounded-full"></div>
//               </div>

//               {/* Progress Steps */}
//               <div className="flex justify-between items-start relative z-10">
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">😁</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     준비
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">👨‍🌾</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     파종
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-blue-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">🌱</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     발아
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-green-200 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">🌾</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     성장
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">⭐️</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     수확
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 min-w-0 flex-shrink-0">
//                   <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center">
//                     <span className="text-2xl">📦</span>
//                   </div>
//                   <span className="text-gray-700 text-sm font-semibold text-center">
//                     배송
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tab Navigation */}
//           <div className="w-full max-w-[880px] mx-auto">
//             <div className="flex gap-2 mb-4 justify-center">
//               {types.map((type) => (
//                 <button
//                   key={type.value}
//                   onClick={() =>
//                     setActiveTab(
//                       type.value as "all" | "growth" | "management" | "problem"
//                     )
//                   }
//                   className={`w-[211px] h-[40px] rounded-lg border text-sm font-semibold transition-all ${
//                     activeTab === type.value
//                       ? "bg-teal-600 text-white shadow-md"
//                       : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {type.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Diary Timeline */}
//           <div className="relative w-full">
//             {/* Timeline Line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-600"></div>

//             <div className="space-y-8 pl-20">
//               {filteredEntries.map((entry, index) => (
//                 <div key={index} className="relative">
//                   <div
//                     className={`absolute -left-[76px] top-8 w-8 h-8 bg-${entry.color} rounded-full border-4 border-white shadow-md`}
//                   ></div>
//                   <div className="bg-white rounded-2xl border border-gray-200 p-6">
//                     <div className="mb-4">
//                       <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-2">
//                         <span>{entry.date}</span>
//                       </div>
//                       <h3 className="text-gray-900 text-xl font-bold mb-3">
//                         {entry.title}
//                       </h3>
//                       <p className="text-gray-700 text-base leading-relaxed">
//                         {entry.description}
//                       </p>
//                     </div>

//                     {/* Image Gallery */}
//                     <div className="grid grid-cols-3 gap-3 mb-4">
//                       <div className="aspect-[4/3] h-auto bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
//                         <span className="text-2xl">🌱</span>
//                       </div>
//                       <div className="aspect-[4/3] h-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
//                         <span className="text-2xl">💧</span>
//                       </div>
//                       <div className="aspect-[4/3] h-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
//                         <span className="text-2xl">☀️</span>
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2">
//                       {entry.tags.map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className={`px-3 py-1 rounded-full text-sm border ${
//                             entry.type === "growth"
//                               ? "bg-blue-50 text-blue-800 border-blue-200"
//                               : entry.type === "management"
//                                 ? "bg-orange-50 text-orange-800 border-orange-200"
//                                 : "bg-red-50 text-red-800 border-red-200"
//                           }`}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating Action Button */}
//         <div className="fixed bottom-8 right-8">
//           <button className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CropDiary;



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


export default function CropDiary() {
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
          <p className="text-gray-500 text-sm my-4">{farmer}님의 작물 일지를 확인해 보세요!</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
            <SummaryCard title="재배 진행률" summary="000%" />
          </div>
        </div>
        <div>
          <p className="bg-mint-700 rounded-t-lg text-white text-center p-4">농작물 재배 체험이 가능해요!</p>
          <div className="bg-gray-100 px-16 py-8 text-center">
            <p className=" text-gray-500">농장에 방문하고, 우리 농작물이 잘 자라고 있는지 확인해보세요.
              전문가의 도움을 받아 실제 농작물을 키우는 과정을 생생하게 체험할 수 있어요.</p>
            <p className=" text-gray-500">농장 방문은 사전 예약제로 운영되며, 자세한 사항은 농장에 문의해주세요.</p>
          </div>
          <div className="bg-gray-100 pb-4">
            <Link to="/reserve" >
              <p className="text-center bg-mint-600 rounded-lg p-2 mx-10 text-white mx-80">자세히 보기</p>

            </Link>
          </div>

        </div>
        <div className="flex flex-col rounded-2xl p-8 items-center">
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
        <hr className="text-gray-300 mx-16" />
        <div className="w-full max-w-[880px] mx-auto">
          <div className="p-4">
            {/* 필터 버튼 */}
            <div className="flex gap-2 mb-4 justify-center">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setFilter(t.value)}
                  className={`w-[211px] h-[40px]  text-sm
              ${filter === t.value
                      ? "border-b-2 border-green-600"
                      : "text-gray-600"}`}
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
