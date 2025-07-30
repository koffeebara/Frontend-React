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
    description: ["원하는 농작물과", "신뢰할 수 있는 농부를", "선택해주세요"],
  },
  {
    number: 2,
    title: "실시간 관찰",
    description: [
      "농장 일지와 사진을 통해",
      "내 농작물의 성장 과정을",
      "실시간으로 확인하세요",
    ],
  },
  {
    number: 3,
    title: "신선한 수확",
    description: ["수확 후 바로 포장해서", "집까지 신선하게", "배송해드려요"],
  },
];

const stats = [
  { number: "1,250+", label: "참여 농부" },
  { number: "5,680+", label: "위탁 완료" },
  { number: "98%", label: "만족도" },
  { number: "24개월", label: "평균 경력" },
  { number: "100%", label: "친환경 인증" },
];

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("구독 이메일:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute w-20 h-20 left-15 top-40 opacity-60 bg-green-100 rounded-full"></div>
      <div className="absolute w-28 h-28 right-32 top-24 opacity-40 bg-lime-50 rounded-full"></div>
      <div className="absolute w-14 h-14 right-64 top-68 opacity-50 bg-green-100 rounded-full"></div>

      {/* 메인 히어로 섹션 */}
      <section className="w-full h-96 bg-gradient-to-br from-green-100 via-lime-50 to-green-100 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
            믿을 수 있는 농부와 함께
            <br />
            키우는 우리만의 농작물
          </h1>
          <p className="text-lg md:text-xl text-green-700 mb-8">
            직접 농사짓기 어려워도 괜찮아요. 전문 농부가 대신 키워드릴게요!
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white text-lg font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow">
            🚀 지금 시작하기
          </button>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="w-full h-28 bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-green-700">
                {stat.number}
              </div>
              <div className="text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 농작물 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-600 text-white text-sm font-bold px-4 py-1 rounded mb-4">
              🔥 이번 주 인기 농작물
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              🌾 지금 참여 가능한 위탁 농작물
            </h2>
            <p className="text-lg text-green-700">
              신선하고 안전한 농작물을 함께 키워보세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {cropCards.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {crop.status === "HOT" && (
                  <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 inline-block">
                    HOT
                  </div>
                )}

                <div
                  className={`h-48 bg-gradient-to-br ${crop.bgColor} flex items-center justify-center`}
                >
                  <span className="text-7xl">{crop.emoji}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    {crop.name}
                  </h3>
                  <div className="text-sm text-stone-500 mb-1">
                    👨‍🌾 {crop.farmer} | {crop.location} | 농사경력{" "}
                    {crop.experience}
                  </div>
                  <div className="text-sm text-stone-500 mb-4">
                    ⭐ {crop.rating}/5.0 ({crop.reviews}개 후기)
                  </div>
                  <div className="text-lg font-bold text-green-700 mb-6">
                    박스당 {crop.price}원 ({crop.weight})
                  </div>

                  <div className="bg-green-100 p-4 rounded mb-4">
                    <div className="text-sm font-bold text-green-700 mb-2">
                      지금 {crop.participants}명이 참여 중! ✨
                    </div>
                    <div className="w-full bg-neutral-200 h-2.5 rounded-full mb-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full"
                        style={{ width: `${crop.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-stone-500 mb-2">
                      <span>
                        총 {crop.totalBoxes}박스 중 {crop.completedBoxes}박스
                        위탁 완료 ✅
                      </span>
                      <span className="text-green-500 font-bold">
                        {crop.percentage}%
                      </span>
                    </div>
                    {crop.status !== "HOT" && (
                      <div
                        className={`text-xs font-bold ${
                          crop.status === "유기농 인증"
                            ? "text-green-500"
                            : "text-amber-500"
                        }`}
                      >
                        {crop.status === "유기농 인증" ? "🌱" : "🏆"}{" "}
                        {crop.status}
                      </div>
                    )}
                    {crop.deadline && (
                      <div className="text-xs font-bold text-orange-600">
                        ⏰ 마감 임박! {crop.deadline}
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-50 p-3 rounded text-center text-xs font-bold text-orange-600 mb-4">
                    📦 내 박스를 예약하고, 농장 일지를 함께 지켜보세요!
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-400 text-white font-bold py-3 rounded hover:shadow-lg transition-shadow">
                    👉 공동 위탁 참여하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 방법 섹션 */}
      <section className="w-full bg-gradient-to-br from-pink-100 to-sky-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              🤝 가상농장 이용 방법
            </h2>
            <p className="text-lg text-green-700">
              간단한 3단계로 나만의 농작물을 키워보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {step.title}
                </h3>
                <div className="text-sm text-stone-500 space-y-1">
                  {step.description.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="w-full bg-gradient-to-r from-yellow-50 to-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              💬 고객 후기
            </h2>
            <p className="text-lg text-green-700">
              가상농장을 이용한 고객들의 생생한 후기를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-yellow-400 text-xl mb-4">
                  {"⭐".repeat(review.rating)}
                </div>
                <h4 className="text-green-900 font-bold mb-4">
                  "{review.title}"
                </h4>
                <p className="text-stone-500 text-sm mb-6">
                  "{review.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {index === 0 ? "👨" : "👵"}
                  </div>
                  <div>
                    <div className="font-bold text-green-900">
                      {review.name}
                    </div>
                    <div className="text-stone-500 text-sm">
                      {review.location}
                    </div>
                    <div className="text-neutral-400 text-xs">
                      {review.date} 구매
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 농작물 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">
            🌽 다른 농작물도 둘러보세요
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraCrops.map((crop, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-24 bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center">
                  <span className="text-4xl">{crop.emoji}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    {crop.name}
                  </h3>
                  <div className="text-stone-500 text-sm mb-2">
                    {crop.price}원/박스
                  </div>
                  <div className="text-green-500 text-xs">
                    📍 {crop.participants}명 참여 중
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 뉴스레터 구독 섹션 */}
      <section className="w-full bg-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            📧 농장 소식 받아보기
          </h2>
          <p className="text-green-700 mb-8">
            새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요
          </p>

          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 max-w-96 px-4 py-3 border-2 border-green-500 rounded focus:outline-none focus:border-green-600"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-red-400 text-white font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow"
            >
              구독하기
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-stone-500 text-sm">
            <div>✅ 신규 농작물 알림</div>
            <div>✅ 특가 혜택 우선 제공</div>
            <div>✅ 농장 이야기 & 레시피</div>
            <div>✅ 계절별 농작물 추천</div>
            <div>✅ 농부님 인터뷰</div>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="w-full bg-lime-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-green-900 text-center mb-8">
            📞 문의하기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-green-700 font-medium">
                📞 고객센터: 1588-1234
              </div>
              <div className="text-stone-500 text-sm">
                💬 카카오톡: @가상농장
              </div>
            </div>
            <div>
              <div className="text-green-700 font-medium">
                ✉️ 이메일: info@virtualfarm.co.kr
              </div>
              <div className="text-stone-500 text-sm">
                📍 서울시 강남구 테헤란로 123
              </div>
            </div>
            <div>
              <div className="text-green-700 font-medium">
                ⏰ 운영시간: 평일 9:00-18:00
              </div>
              <div className="text-stone-500 text-sm">
                🏢 사업자번호: 123-45-67890
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
