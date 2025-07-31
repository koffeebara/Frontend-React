import { useState } from "react";

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

const stats = [
  { number: "1,250+", label: "참여 농부" },
  { number: "5,680+", label: "위탁 완료" },
  { number: "98%", label: "만족도" },
  { number: "24개월", label: "평균 경력" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="w-[1280px] max-w-[1280px] bg-green-000 inline-flex flex-col justify-start items-center font-pretendard">
      {/* 히어로 섹션 */}
      <div className="self-stretch pt-12 pb-8 bg-green-000 flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="text-center text-mint-900 text-4xl font-semibold leading-[56px]">
            농부와 함께 키우는
            <br />
            믿음직한 농작물
          </div>
          <div className="self-stretch text-center text-green-600 text-base leading-normal">
            농부의 신선한 농작물을 펀딩하고, 성장 과정을 지켜보세요 🌱
          </div>
        </div>
        <div className="w-60 max-w-[800px] px-10 py-4 bg-mint-600 rounded-lg inline-flex justify-center items-center">
          <div className="text-center text-common-000 text-base font-semibold leading-normal">
            시작하기
          </div>
        </div>
      </div>
      {/* 통계/카드 섹션 */}
      <div className="w-full max-w-[1200px] px-4 pt-8 pb-40 bg-common-000 flex flex-col justify-start items-center gap-4">
        <div className="self-stretch min-w-96 py-2 inline-flex justify-start items-center gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex-1 inline-flex flex-col justify-start items-center gap-1"
            >
              <div className="self-stretch text-center text-gray-600 text-sm leading-snug">
                {stat.label}
              </div>
              <div className="inline-flex justify-start items-center">
                <div className="text-center text-green-700 text-xl font-bold leading-loose">
                  {stat.number.replace(/[^0-9]/g, "")}
                </div>
                <div className="text-center text-green-700 text-lg leading-7">
                  {stat.number.replace(/[0-9]/g, "")}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 인기 농작물 섹션 */}
        <div className="self-stretch pt-8 pb-2 flex flex-col justify-start items-center gap-6 bg-common-000">
          <div className="self-stretch flex flex-col justify-start items-center gap-1">
            <div className="px-4 py-1 bg-orange-200 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 inline-flex justify-start items-center gap-0.5">
              <div className="text-center text-orange-900 text-sm font-semibold leading-snug">
                이번 주 인기 농작물
              </div>
            </div>
            <div className="self-stretch pt-2 inline-flex justify-start items-center">
              <div className="flex-1 text-center text-gray-900 text-3xl font-bold leading-[48px]">
                지금 참여 가능한 위탁 농작물
              </div>
            </div>
          </div>
          <div className="self-stretch px-2 inline-flex justify-start items-start gap-6 overflow-hidden">
            {cropCards.map((crop) => (
              <div
                key={crop.id}
                className="flex-1 max-w-96 min-w-96 py-1 inline-flex flex-col justify-start items-center gap-6"
              >
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="px-2 inline-flex justify-start items-center">
                    <div className="text-red-500 text-base font-semibold">
                      ⏰ 마감까지 D-
                    </div>
                    <div className="text-red-500 text-base font-semibold">
                      {crop.deadline?.replace(/[^0-9]/g, "") || "00"}
                    </div>
                  </div>
                  <div className="self-stretch p-6 bg-common-000 rounded-3xl outline outline-1 outline-offset-[-1px] outline-opacity-200/20 flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch h-60 bg-opacity-000/5 rounded-2xl flex items-center justify-center text-6xl">
                      {crop.emoji}
                    </div>
                    <div className="self-stretch px-2 flex flex-col justify-start items-start gap-3">
                      <div className="pt-2 inline-flex justify-start items-center">
                        <div className="text-gray-900 text-2xl font-bold leading-9">
                          {crop.name}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch inline-flex justify-start items-center gap-2">
                          <div className="text-gray-600 text-xs font-light leading-none">
                            📍
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            {crop.farmer}
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            {crop.location}
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            {crop.experience}
                          </div>
                        </div>
                        <div className="inline-flex justify-start items-center gap-2">
                          <div className="text-gray-600 text-xs font-light leading-none">
                            ⭐️
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            {crop.rating}
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            / 5
                          </div>
                          <div className="text-gray-600 text-xs font-light leading-none">
                            ({crop.reviews}개 후기)
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center gap-2 flex-wrap content-center">
                        <div className="text-blue-500 text-xl font-bold leading-loose">
                          {crop.price}
                        </div>
                        <div className="text-blue-500 text-xl font-bold leading-loose">
                          원
                        </div>
                        <div className="text-gray-600 text-sm leading-snug">
                          박스당
                        </div>
                        <div className="text-gray-600 text-sm leading-snug">
                          {crop.weight}
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-[800px] px-6 py-4 bg-mint-000 rounded-2xl flex flex-col justify-start items-start gap-2">
                      <div className="px-1 inline-flex justify-start items-center gap-1">
                        <div className="text-gray-800 text-base font-semibold leading-normal">
                          달성률
                        </div>
                        <div className="text-gray-800 text-base font-semibold leading-normal">
                          {crop.percentage}
                        </div>
                        <div className="text-gray-800 text-base font-semibold leading-normal">
                          %
                        </div>
                      </div>
                      <div className="self-stretch h-4 rounded-[999px] inline-flex justify-start items-start">
                        <div
                          className="h-4 bg-mint-500 rounded-tl-[999px] rounded-bl-[999px]"
                          style={{ width: `${crop.percentage}%` }}
                        ></div>
                        <div className="flex-1 h-4 bg-cool-gray-100 rounded-tr-[999px] rounded-br-[999px]"></div>
                      </div>
                      <div className="px-1 inline-flex justify-start items-center gap-1">
                        <div className="text-cool-gray-700 text-sm leading-snug">
                          총
                        </div>
                        <div className="text-cool-gray-700 text-sm leading-snug">
                          {crop.totalBoxes}
                        </div>
                        <div className="text-cool-gray-700 text-sm leading-snug">
                          박스 중
                        </div>
                        <div className="text-cool-gray-700 text-sm leading-snug">
                          {crop.completedBoxes}
                        </div>
                        <div className="text-cool-gray-700 text-sm leading-snug">
                          박스 위탁 완료!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 px-10 py-4 bg-orange-400 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 inline-flex justify-center items-end">
                  <div className="text-center text-common-000 text-base font-semibold leading-normal">
                    상품 둘러보기
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 이용 방법 섹션 */}
        <div className="self-stretch pt-8 pb-2 flex flex-col justify-start items-start gap-2.5 bg-green-200">
          <div className="self-stretch min-w-96 px-6 py-4 bg-green-200 flex flex-col justify-center items-start gap-6">
            <div className="self-stretch pt-2 inline-flex justify-start items-center">
              <div className="flex-1 text-center text-gray-900 text-3xl font-bold leading-[48px]">
                가상농장 이용 방법
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-5 flex-wrap content-center">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex-1 min-w-96 px-6 py-4 bg-common-000 rounded-2xl inline-flex flex-col justify-start items-center gap-6"
                >
                  <div className="flex flex-col justify-start items-center gap-2">
                    <div className="w-8 h-8 bg-mint-600 rounded-[999px] flex flex-col justify-center items-center">
                      <div className="text-center text-common-000 text-sm font-semibold leading-snug">
                        {step.number}
                      </div>
                    </div>
                    <div className="text-center text-gray-900 text-xl font-bold leading-loose">
                      {step.title}
                    </div>
                  </div>
                  <div className="self-stretch text-center text-gray-900 text-base leading-normal">
                    {step.description.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 후기 섹션 */}
        <div className="self-stretch pt-8 pb-2 flex flex-col justify-start items-start gap-2.5 bg-blue-000">
          <div className="self-stretch px-6 py-4 bg-blue-000 flex flex-col justify-start items-center gap-6">
            <div className="self-stretch pt-2 inline-flex justify-start items-center">
              <div className="flex-1 text-center text-gray-900 text-3xl font-bold leading-[48px]">
                생생한 고객 후기
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start gap-4">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-1 max-w-96 p-6 bg-common-000 rounded-2xl outline outline-1 outline-offset-[-1.5px] outline-opacity-100/10 inline-flex flex-col justify-start items-start gap-6"
                >
                  <div className="self-stretch px-1 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch text-cool-gray-800 text-base leading-normal">
                      {"⭐️".repeat(review.rating)}
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start">
                      <div className="text-blue-500 text-base font-semibold leading-normal">
                        “
                      </div>
                      <div className="text-blue-500 text-base font-semibold leading-normal">
                        {review.title}
                      </div>
                      <div className="text-blue-500 text-base font-semibold leading-normal">
                        ”
                      </div>
                    </div>
                    <div className="self-stretch text-cool-gray-800 text-sm leading-snug">
                      {review.content}
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="w-12 h-12 bg-cool-gray-200 rounded-full outline outline-[1.5px] outline-offset-[-1.5px] outline-opacity-100/10 flex justify-center items-center"></div>
                    <div className="inline-flex flex-col justify-center items-start gap-1">
                      <div className="text-blue-800 text-sm font-semibold leading-snug">
                        {review.name}
                      </div>
                      <div className="inline-flex justify-start items-center gap-0.5">
                        <div className="text-cool-gray-300 text-xs font-light leading-none">
                          {review.date
                            .replace(/\./g, "년 ")
                            .replace(/\.$/, "월")}
                        </div>
                        <div className="text-cool-gray-300 text-xs font-light leading-none">
                          {" "}
                          참가자
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 다른 농작물 섹션 */}
        <div className="self-stretch pt-8 pb-2 flex flex-col justify-start items-center gap-6 bg-common-000">
          <div className="self-stretch pt-2 inline-flex justify-start items-center">
            <div className="flex-1 text-center text-gray-900 text-3xl font-bold leading-[48px]">
              다른 농작물 둘러보기
            </div>
          </div>
          <div className="self-stretch inline-flex justify-center items-start gap-4 flex-wrap content-start">
            {extraCrops.map((crop, idx) => (
              <div
                key={idx}
                className="w-96 max-w-96 min-w-52 p-6 bg-common-000 rounded-3xl outline outline-1 outline-offset-[-1px] outline-opacity-200/20 inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="px-2 inline-flex justify-start items-center gap-1">
                  <div className="text-red-400 text-sm font-semibold leading-snug">
                    🚩
                  </div>
                  <div className="text-red-400 text-base font-semibold leading-normal">
                    {crop.participants}
                  </div>
                  <div className="text-red-400 text-base font-semibold leading-normal">
                    명 참여중!
                  </div>
                </div>
                <div className="self-stretch h-60 bg-opacity-000/5 rounded-2xl flex items-center justify-center text-4xl">
                  {crop.emoji}
                </div>
                <div className="self-stretch px-2 flex flex-col justify-start items-start gap-3">
                  <div className="pt-2 inline-flex justify-start items-center">
                    <div className="text-gray-900 text-2xl font-bold leading-9">
                      {crop.name}
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2 flex-wrap content-center">
                    <div className="text-mint-700 text-xl font-bold leading-loose">
                      {crop.price}
                    </div>
                    <div className="text-mint-700 text-xl font-bold leading-loose">
                      원
                    </div>
                    <div className="text-gray-600 text-sm leading-snug">
                      박스당
                    </div>
                    <div className="text-gray-600 text-sm leading-snug">
                      1박스
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 구독 섹션 */}
        <div className="self-stretch pt-16 pb-2 flex flex-col justify-start items-start bg-orange-000">
          <div className="self-stretch px-4 pt-4 pb-6 bg-orange-000 flex flex-col justify-start items-center gap-6">
            <div className="self-stretch flex flex-col justify-start items-center gap-3">
              <div className="pt-2 inline-flex justify-start items-center">
                <div className="text-center text-gray-900 text-2xl font-bold leading-9">
                  농장 소식 미리받기
                </div>
              </div>
              <div className="self-stretch text-center text-cool-gray-600 text-sm leading-snug">
                새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요!
              </div>
            </div>
            <form
              onSubmit={handleEmailSubmit}
              className="self-stretch px-2 inline-flex justify-center items-center gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 max-w-[800px] min-w-60 px-6 py-3 bg-common-000 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-green-400 text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 flex justify-center items-center"
              >
                <div className="text-center text-common-000 text-sm font-semibold leading-snug">
                  구독하기
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
