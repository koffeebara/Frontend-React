import { useState } from "react";
import Alert from "../components/common/Alert";

const cropCards = [
  {
    id: 1,
    emoji: "🍅",
    name: "무농약 대추방울토마토",
    farmer: "김농부",
    location: "경기도 양평군",
    experience: "15년",
    rating: "4.9",
    reviews: 127,
    price: "20,000",
    weight: "2kg",
    participants: 25,
    totalBoxes: 300,
    completedBoxes: 180,
    percentage: 60,
    status: "HOT",
    deadline: "5일 남음",
    bgColor: "from-red-400 to-orange-400",
  },
  {
    id: 2,
    emoji: "🥔",
    name: "유기농 감자 세트",
    farmer: "이농부",
    location: "강원도 평창군",
    experience: "12년",
    rating: "4.7",
    reviews: 89,
    price: "18,000",
    weight: "3kg",
    participants: 18,
    totalBoxes: 200,
    completedBoxes: 90,
    percentage: 45,
    status: "유기농 인증",
    bgColor: "from-amber-400 to-yellow-300",
  },
  {
    id: 3,
    emoji: "🥬",
    name: "친환경 쌈채소 모음",
    farmer: "박농부",
    location: "충남 아산시",
    experience: "8년",
    rating: "4.8",
    reviews: 156,
    price: "15,000",
    weight: "1.5kg",
    participants: 32,
    totalBoxes: 150,
    completedBoxes: 120,
    percentage: 80,
    status: "베스트셀러",
    bgColor: "from-green-300 to-green-300",
  },
];

const extraCrops = [
  { emoji: "🥕", name: "유기농 당근", price: "15,000", participants: 12 },
  { emoji: "🥬", name: "친환경 배추", price: "25,000", participants: 8 },
  { emoji: "🥒", name: "무농약 오이", price: "18,000", participants: 20 },
];

const reviews = [
  {
    rating: 5,
    title: "정말 신선하고 맛있어요!",
    content:
      "처음 이용해봤는데 농장 일지를 통해 성장 과정을 지켜보는 재미가 쏠쏠했어요. 감자도 크고 맛있어서 만족합니다!",
    name: "박○○님",
    location: "경기도 성남시",
    date: "2024.11.08",
  },
  {
    rating: 5,
    title: "믿을 수 있는 농부님들!",
    content:
      "농부님이 매일 올려주시는 농장 일지를 보며 안심하고 기다릴 수 있었어요. 상추가 정말 싱싱하고 맛있습니다!",
    name: "이○○님",
    location: "부산시 해운대구",
    date: "2024.10.28",
  },
];

const steps = [
  {
    number: 1,
    title: "농작물 선택",
    description: [
      "마음에 드는 농작물과 농부를 찾아",
      "농작물 위탁에 참여하세요.",
    ],
  },
  {
    number: 2,
    title: "실시간 관찰",
    description: [
      "농부가 작성하는 농장 일지를 통해",
      "농작물의 성장을 지켜보세요.",
    ],
  },
  {
    number: 3,
    title: "안전한 배송",
    description: ["수확한 신선한 농작물을", "집에서 편하게 받아보세요."],
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    <Alert />;
    console.log("이메일 제출:", email);
  };

  return (
    <>
      {/* 메인 홈 페이지 */}
      <div className="w-full min-h-screen bg-green-000 font-pretendard">
        <div className="self-stretch px-4 pt-12 pb-10 bg-green-50 flex flex-col justify-start items-center gap-10">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="text-center text-green-900 text-4xl font-semibold leading-[56px] font-pretendard px-4">
              농부와 함께 키우는
              <br />
              믿음직한 농작물
            </div>
            <div className="self-stretch text-center text-green-600 text-base font-normal leading-normal font-pretendard px-6">
              농부의 신선한 농작물을 펀딩하고, 성장 과정을 지켜보세요 🌱
            </div>
          </div>
          <div className="w-60 px-10 py-4 bg-green-600 rounded-lg inline-flex justify-center items-center">
            <div className="text-center text-white text-base font-semibold leading-normal font-pretendard">
              시작하기
            </div>
          </div>
        </div>
        <div className="self-stretch px-4 pt-8 pb-8 bg-white flex flex-col justify-start items-center gap-8">
          {/* 통계 섹션 */}
          <div className="w-full max-w-sm py-4 inline-flex justify-start items-center gap-4">
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="text-center text-gray-600 text-sm font-normal leading-snug font-pretendard">
                참여 농부
              </div>
              <div className="inline-flex justify-start items-center">
                <div className="text-center text-green-700 text-xl font-bold leading-loose font-pretendard">
                  125
                </div>
                <div className="text-center text-green-700 text-lg font-normal leading-7 font-pretendard">
                  +
                </div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="text-center text-gray-600 text-sm font-normal leading-snug font-pretendard">
                위탁 완료
              </div>
              <div className="inline-flex justify-start items-center">
                <div className="text-center text-green-700 text-xl font-bold leading-loose font-pretendard">
                  568
                </div>
                <div className="text-center text-green-700 text-lg font-normal leading-7 font-pretendard">
                  +
                </div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="text-center text-gray-600 text-sm font-normal leading-snug font-pretendard">
                만족도
              </div>
              <div className="inline-flex justify-start items-center">
                <div className="text-center text-green-700 text-xl font-bold leading-loose font-pretendard">
                  98
                </div>
                <div className="text-center text-green-700 text-lg font-normal leading-7 font-pretendard">
                  %
                </div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="text-center text-gray-600 text-sm font-normal leading-snug font-pretendard">
                평균 경력
              </div>
              <div className="inline-flex justify-start items-center">
                <div className="text-center text-green-700 text-xl font-bold leading-loose font-pretendard">
                  24
                </div>
                <div className="text-center text-green-700 text-lg font-normal leading-7 font-pretendard">
                  개월
                </div>
              </div>
            </div>
          </div>

          {/* 인기 농작물 섹션 헤더 */}
          <div className="w-full pt-8 pb-4 flex flex-col justify-start items-center gap-4">
            <div className="px-4 py-1 bg-orange-100 rounded-full border border-orange-200 inline-flex justify-start items-center gap-0.5">
              <div className="text-center text-orange-900 text-sm font-semibold font-pretendard leading-snug">
                이번 주 인기 농작물
              </div>
            </div>
            <div className="pt-2 inline-flex justify-start items-center">
              <div className="flex-1 text-center text-gray-900 text-2xl font-bold font-pretendard leading-9">
                지금 참여 가능한 위탁 농작물
              </div>
            </div>
          </div>

          {/* 인기 농작물 카드 */}
          <div className="w-full flex flex-col justify-center items-center gap-6 px-2">
            {cropCards.map((crop) => (
              <div
                key={crop.id}
                className="w-full max-w-[340px] flex flex-col gap-4 bg-white rounded-3xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex items-center gap-2 text-red-500 text-base font-semibold px-2">
                  ⏰ 마감까지 D-{crop.deadline?.replace(/[^0-9]/g, "") || "00"}
                </div>
                <div className="w-full h-60 flex items-center justify-center text-6xl bg-gray-50 rounded-2xl">
                  {crop.emoji}
                </div>
                <div className="flex flex-col gap-3 px-2">
                  <div className="pt-2">
                    <div className="text-gray-900 text-xl font-bold">
                      {crop.name}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-xs">📍</span>
                      <span className="text-gray-600 text-xs">
                        {crop.farmer}
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600 text-xs">
                        {crop.location}
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600 text-xs">
                        {crop.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-xs">⭐️</span>
                      <span className="text-gray-600 text-xs">
                        {crop.rating} / 5
                      </span>
                      <span className="text-gray-600 text-xs">
                        ({crop.reviews}개 후기)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl font-bold">
                      {crop.price}원
                    </span>
                    <span className="text-gray-600 text-sm">
                      박스당 {crop.weight}
                    </span>
                  </div>
                </div>
                <div className="w-full px-6 py-4 bg-green-50 rounded-2xl flex flex-col gap-2">
                  <div className="px-1 flex items-center gap-1">
                    <span className="text-gray-800 text-base font-semibold">
                      달성률
                    </span>
                    <span className="text-gray-800 text-base font-semibold">
                      {crop.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden flex border border-gray-200">
                    <div
                      className="h-full bg-green-500 rounded-l-full"
                      style={{ width: `${crop.percentage}%` }}
                    ></div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="px-1 flex items-center gap-1">
                    <span className="text-gray-700 text-sm">총</span>
                    <span className="text-gray-700 text-sm">
                      {crop.totalBoxes}박스 중
                    </span>
                    <span className="text-gray-700 text-sm">
                      {crop.completedBoxes}박스 위탁 완료!
                    </span>
                  </div>
                </div>
                <button className="w-60 mx-auto mt-2 px-10 py-4 bg-orange-400 rounded-full border border-gray-200 text-white text-base font-semibold hover:bg-orange-500 transition">
                  상품 둘러보기
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 이용 방법 섹션 */}
        <div className="self-stretch px-4 py-12 flex flex-col gap-8 bg-green-200 rounded-3xl">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
            가상농장 이용 방법
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-full max-w-[320px] flex flex-col items-center gap-4 bg-common-000 rounded-2xl shadow p-6"
              >
                <div className="w-10 h-10 bg-mint-600 rounded-full flex items-center justify-center text-common-000 text-lg font-bold">
                  {step.number}
                </div>
                <div className="text-gray-900 text-lg font-bold text-center">
                  {step.title}
                </div>
                <div className="text-gray-900 text-base text-center flex flex-col gap-1">
                  {step.description.map((line, idx) => (
                    <span key={idx}>{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 후기 섹션 */}
        <div className="self-stretch px-4 py-12 flex flex-col gap-8 bg-blue-000 rounded-3xl mt-12">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
            생생한 고객 후기
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-2xl shadow p-6 border border-opacity-100/10"
              >
                <div className="flex gap-2 items-center text-cool-gray-800 text-base">
                  {"⭐️".repeat(review.rating)}
                </div>
                <div className="flex gap-1 items-center text-blue-500 text-base font-semibold">
                  <span>“</span>
                  <span>{review.title}</span>
                  <span>”</span>
                </div>
                <div className="text-cool-gray-800 text-sm">
                  {review.content}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 bg-cool-gray-200 rounded-full flex items-center justify-center"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-800 text-sm font-semibold">
                      {review.name}
                    </span>
                    <span className="text-cool-gray-300 text-xs">
                      {review.date.replace(/\./g, "년 ").replace(/\.$/, "월")}{" "}
                      참가자
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 다른 농작물 섹션 */}
        <div className="self-stretch px-4 py-12 flex flex-col gap-8 mt-8">
          <h2 className="text-gray-900 text-2xl font-bold text-center">
            다른 농작물 둘러보기
          </h2>
          <div className="flex flex-col gap-6 px-2">
            {extraCrops.map((crop, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col gap-4 bg-white rounded-3xl shadow p-6 border border-gray-100"
              >
                <div className="flex gap-1 items-center text-red-400 text-base font-semibold px-2">
                  <span>🚩</span>
                  <span>{crop.participants}명 참여중!</span>
                </div>
                <div className="w-full h-32 flex items-center justify-center text-4xl bg-gray-50 rounded-2xl">
                  {crop.emoji}
                </div>
                <div className="flex flex-col gap-3 px-2">
                  <div className="pt-2">
                    <div className="text-gray-900 text-xl font-bold">
                      {crop.name}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-green-700 text-xl font-bold">
                      {crop.price}원
                    </span>
                    <span className="text-gray-600 text-sm">박스당 1박스</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 구독 섹션 */}
        <div className="self-stretch px-4 py-12 bg-orange-50 rounded-3xl mt-8 mx-4 mb-8">
          <div className="px-4 pt-4 pb-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-900 text-2xl font-bold text-center">
                농장 소식 미리받기
              </h2>
              <p className="text-gray-600 text-sm text-center">
                새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요!
              </p>
            </div>
            <form
              onSubmit={handleEmailSubmit}
              className="px-2 flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="w-full px-6 py-3 bg-white rounded-full border border-green-400 text-base"
                required
              />
              <button
                type="submit"
                className="w-auto px-6 py-2 bg-green-600 rounded-full border border-gray-200 text-white font-semibold hover:bg-green-700 transition self-center"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 데스크탑/태블릿: 기존 반응형 Home UI */}
      <div className="w-full min-h-screen bg-green-000 font-pretendard">
        <main className="w-full min-h-screen flex flex-col items-center">
          {/* 히어로 섹션 */}
          <section className="w-full max-w-[1200px] px-6 pt-24 pb-16 flex flex-col items-center gap-8">
            <h1 className="text-mint-900 text-[40px] md:text-[48px] font-bold leading-tight text-center">
              농부와 함께 키우는
              <br />
              믿음직한 농작물
            </h1>
            <p className="text-green-600 text-lg md:text-xl text-center">
              농부의 신선한 농작물을 펀딩하고, 성장 과정을 지켜보세요 🌱
            </p>
            <button className="mt-4 px-10 py-4 bg-mint-600 rounded-full shadow-md hover:bg-mint-700 transition text-common-000 text-lg font-semibold">
              시작하기
            </button>
          </section>

          {/* 통계 섹션 */}
          <section className="w-full max-w-[1200px] px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-common-000 rounded-3xl shadow-sm mb-12">
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-600 text-base md:text-lg">
                참여 농부
              </span>
              <span className="text-green-700 text-2xl md:text-3xl font-bold">
                1,250+
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-600 text-base md:text-lg">
                위탁 완료
              </span>
              <span className="text-green-700 text-2xl md:text-3xl font-bold">
                5,680+
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-600 text-base md:text-lg">만족도</span>
              <span className="text-green-700 text-2xl md:text-3xl font-bold">
                98%
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-600 text-base md:text-lg">
                평균 경력
              </span>
              <span className="text-green-700 text-2xl md:text-3xl font-bold">
                24개월
              </span>
            </div>
          </section>

          {/* 인기 농작물 섹션 */}
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
                    ⏰ 마감까지 D-
                    {crop.deadline?.replace(/[^0-9]/g, "") || "00"}
                  </div>
                  <div className="w-full h-48 flex items-center justify-center text-6xl bg-opacity-000/5 rounded-2xl">
                    {crop.emoji}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-gray-900 text-xl font-bold">
                      {crop.name}
                    </div>
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
                        총 {crop.totalBoxes}박스 중 {crop.completedBoxes}박스
                        위탁 완료!
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

          {/* 이용 방법 섹션 */}
          <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8 bg-green-200 rounded-3xl">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
              가상농장 이용 방법
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="w-full max-w-[320px] flex flex-col items-center gap-4 bg-common-000 rounded-2xl shadow p-6"
                >
                  <div className="w-10 h-10 bg-mint-600 rounded-full flex items-center justify-center text-common-000 text-lg font-bold">
                    {step.number}
                  </div>
                  <div className="text-gray-900 text-lg font-bold text-center">
                    {step.title}
                  </div>
                  <div className="text-gray-900 text-base text-center flex flex-col gap-1">
                    {step.description.map((line, idx) => (
                      <span key={idx}>{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 후기 섹션 */}
          <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8 bg-blue-000 rounded-3xl mt-12">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
              생생한 고객 후기
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[340px] flex flex-col gap-4 bg-common-000 rounded-2xl shadow p-6 border border-opacity-100/10"
                >
                  <div className="flex gap-2 items-center text-cool-gray-800 text-base">
                    {"⭐️".repeat(review.rating)}
                  </div>
                  <div className="flex gap-1 items-center text-blue-500 text-base font-semibold">
                    <span>“</span>
                    <span>{review.title}</span>
                    <span>”</span>
                  </div>
                  <div className="text-cool-gray-800 text-sm">
                    {review.content}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 bg-cool-gray-200 rounded-full flex items-center justify-center"></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-blue-800 text-sm font-semibold">
                        {review.name}
                      </span>
                      <span className="text-cool-gray-300 text-xs">
                        {review.date.replace(/\./g, "년 ").replace(/\.$/, "월")}{" "}
                        참가자
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 다른 농작물 섹션 */}
          <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
              다른 농작물 둘러보기
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {extraCrops.map((crop, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[320px] flex flex-col gap-4 bg-common-000 rounded-3xl shadow p-6 border border-opacity-200/20"
                >
                  <div className="flex gap-1 items-center text-red-400 text-base font-semibold">
                    <span>🚩</span>
                    <span>{crop.participants}명 참여중!</span>
                  </div>
                  <div className="w-full h-40 flex items-center justify-center text-4xl bg-opacity-000/5 rounded-2xl">
                    {crop.emoji}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-gray-900 text-xl font-bold">
                      {crop.name}
                    </div>
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

          {/* 구독 섹션 */}
          <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col items-center gap-6 bg-orange-000 rounded-3xl mt-12 mb-16">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
              농장 소식 미리받기
            </h2>
            <p className="text-cool-gray-600 text-base text-center">
              새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요!
            </p>
            <form
              onSubmit={handleEmailSubmit}
              className="w-full max-w-[480px] flex gap-3 mt-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-3 bg-common-000 rounded-full outline-1 outline-offset-[-1px] outline-green-400 text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 font-semibold hover:bg-green-700 transition"
              >
                구독하기
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
