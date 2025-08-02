import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchProjectDiaries, type DiaryResponse } from "../api/Home";

// 더미 상품 데이터 (ProductCardList와 동일한 구조)
import grapesImg from "../assets/grapes-8306833_1280.jpg";
import applesImg from "../assets/apples-8212695_1280.jpg";
import carrotImg from "../assets/carrot-1565597_1280.jpg";
import peachImg from "../assets/peach-2632182_1280.jpg";
import watermelonImg from "../assets/watermelon-1808136_1280.jpg";
import avocadoImg from "../assets/avocado-8498520_1280.jpg";
import cabbageImg from "../assets/chinese-cabbage-5798137_1280.jpg";
import kimchiImg from "../assets/kimchi-7613319_1280.jpg";
import shrimpImg from "../assets/shrimp-599792_1280.jpg";
import soilImg from "../assets/soil-8080788_1280.jpg";
import carrotWebp from "../assets/carrot.webp";
import cornWebp from "../assets/corn.webp";
import potatoeWebp from "../assets/potatoe.webp";
import sweetpotatoWebp from "../assets/sweetpotato.webp";
import tomatoWebp from "../assets/tomato.webp";

const productImages = [
  grapesImg,
  applesImg,
  carrotImg,
  peachImg,
  watermelonImg,
  avocadoImg,
  cabbageImg,
  kimchiImg,
  shrimpImg,
  soilImg,
  carrotWebp,
  cornWebp,
  potatoeWebp,
  sweetpotatoWebp,
  tomatoWebp,
];

const productTitles = [
  "달콤한 포도",
  "신선한 사과",
  "아삭한 당근",
  "맛있는 복숭아",
  "시원한 수박",
  "영양만점 아보카도",
  "신선한 배추",
  "건강한 김치",
  "싱싱한 새우",
  "유기농 흙",
  "프리미엄 당근",
  "달콤한 옥수수",
  "포근한 감자",
  "고구마",
  "빨간 토마토",
];

const farmerNames = [
  "김농부",
  "이농부",
  "박농부",
  "최농부",
  "정농부",
  "강농부",
  "조농부",
  "윤농부",
  "장농부",
  "임농부",
  "한농부",
  "오농부",
  "서농부",
  "신농부",
  "권농부",
];

const locations = [
  "충청남도 논산시",
  "전라남도 나주시",
  "경상북도 상주시",
  "강원도 춘천시",
  "제주특별자치도 제주시",
  "전라북도 김제시",
  "경상남도 밀양시",
  "충청북도 괴산군",
  "경기도 여주시",
  "전라남도 고흥군",
  "강원도 횡성군",
  "경상북도 안동시",
  "충청남도 부여군",
  "전라북도 고창군",
  "경상남도 합천군",
];

// 더미 데이터에서 상품 정보를 가져오는 함수
const getProductInfo = (projectId: number) => {
  // ProductCardList의 realProjectData와 정확히 매칭 (0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000)
  const realProjectData = [
    {
      id: 0,
      title: "천안 청양고추 매운맛 체험 농장",
      imageUrl: tomatoWebp,
      price: "11,000원",
      weightPerBox: "1박스",
      daysLeft: 20,
      rating: 4.0,
      reviewCount: 160,
    },
    {
      id: 1000,
      title: "천안 온실 배추 사랑 담은 재배",
      imageUrl: cabbageImg,
      price: "30,000원",
      weightPerBox: "1박스",
      daysLeft: 20,
      rating: 4.0,
      reviewCount: 180,
    },
    {
      id: 2000,
      title: "원주 숲속 표고버섯 품은 생태농장",
      imageUrl: soilImg,
      price: "17,000원",
      weightPerBox: "1박스",
      daysLeft: 19,
      rating: 4.0,
      reviewCount: 200,
    },
    {
      id: 3000,
      title: "원주 햇살 고구마 달콤이 스토리",
      imageUrl: sweetpotatoWebp,
      price: "16,000원",
      weightPerBox: "1박스",
      daysLeft: 18,
      rating: 4.0,
      reviewCount: 220,
    },
    {
      id: 4000,
      title: "원주 토종콩 흙내음 가득 프로젝트",
      imageUrl: carrotImg,
      price: "18,000원",
      weightPerBox: "1박스",
      daysLeft: 17,
      rating: 4.0,
      reviewCount: 240,
    },
    {
      id: 5000,
      title: "달콤한 포도",
      imageUrl: grapesImg,
      price: "200원",
      weightPerBox: "2kg",
      daysLeft: 30,
      rating: 4.0,
      reviewCount: 50,
    },
    {
      id: 6000,
      title: "신선한 사과",
      imageUrl: applesImg,
      price: "250원",
      weightPerBox: "3kg",
      daysLeft: 29,
      rating: 4.1,
      reviewCount: 60,
    },
    {
      id: 7000,
      title: "아삭한 당근",
      imageUrl: carrotWebp,
      price: "300원",
      weightPerBox: "4kg",
      daysLeft: 28,
      rating: 4.2,
      reviewCount: 70,
    },
    {
      id: 8000,
      title: "맛있는 복숭아",
      imageUrl: peachImg,
      price: "350원",
      weightPerBox: "2kg",
      daysLeft: 27,
      rating: 4.3,
      reviewCount: 80,
    },
  ];

  // 실제 데이터에서 찾기
  const realProduct = realProjectData.find(
    (product) => product.id === projectId
  );
  if (realProduct) {
    return {
      id: projectId,
      title: realProduct.title,
      imageUrl: realProduct.imageUrl,
      price: realProduct.price,
      weightPerBox: realProduct.weightPerBox,
      daysLeft: realProduct.daysLeft,
      rating: realProduct.rating,
      reviewCount: realProduct.reviewCount,
      farmer: {
        name: farmerNames[Math.floor(projectId / 1000) % farmerNames.length],
        location: locations[Math.floor(projectId / 1000) % locations.length],
        specialNote: "친환경 농법으로 정성껏 기른 농산물입니다.",
      },
    };
  }

  // 기존 더미 데이터 로직
  const index = Math.floor(projectId / 1000);
  return {
    id: projectId,
    title: productTitles[index % productTitles.length],
    imageUrl: productImages[index % productImages.length],
    price: `${150 + (index % 20) * 50}원`,
    weightPerBox: `${2 + (index % 3)}kg`,
    daysLeft: Math.max(1, 30 - (index % 30)),
    rating: 4.0 + (index % 10) * 0.1,
    reviewCount: 50 + (index % 20) * 10,
    farmer: {
      name: farmerNames[index % farmerNames.length],
      location: locations[index % locations.length],
      specialNote: "친환경 농법으로 정성껏 기른 농산물입니다.",
    },
  };
};

const CropInfo: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "details" | "guide" | "reviews" | "diaries"
  >("diaries");
  const [diaries, setDiaries] = useState<DiaryResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState<any>(null);

  useEffect(() => {
    if (projectId) {
      const id = parseInt(projectId);
      loadProjectDiaries(id);

      // 더미 데이터에서 상품 정보 가져오기
      const product = getProductInfo(id);
      setProductInfo(product);
    }
  }, [projectId]);

  const handleAddToCart = () => {
    if (!productInfo) return;

    // 상품 정보를 localStorage에 저장
    const cartItem = {
      projectId: projectId,
      name: productInfo.title,
      price: productInfo.price * 1000, // 천원 단위로 변환
      quantity: 1,
      imageUrl: productInfo.imageUrl,
      farmer: productInfo.farmer.name,
      location: productInfo.farmer.location,
    };

    localStorage.setItem("selectedProduct", JSON.stringify(cartItem));
    navigate("/cart");
  };

  const handleGoToCropDiary = () => {
    navigate("/cropdiary");
  };

  const loadProjectDiaries = async (id: number) => {
    try {
      setLoading(true);
      const apiResponse = await fetchProjectDiaries(id);
      if (apiResponse.success && apiResponse.response) {
        setDiaries(apiResponse.response);
        console.log("Loaded diaries:", apiResponse.response);
      } else {
        console.error("일지 데이터 로드 실패:", apiResponse.error);
      }
    } catch (error) {
      console.error("일지 로드 중 에러:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "GROWING":
        return "성장 중";
      case "HARVESTED":
        return "수확 완료";
      case "PLANTED":
        return "파종 완료";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "GROWING":
        return "bg-green-100 text-green-800";
      case "HARVESTED":
        return "bg-orange-100 text-orange-800";
      case "PLANTED":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = "";

    for (let i = 0; i < fullStars; i++) {
      stars += "⭐";
    }
    if (hasHalfStar) {
      stars += "⭐";
    }
    while (stars.length < 5) {
      stars += "☆";
    }

    return stars.substring(0, 5);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      {/* 브레드크럼 */}
      <div className="w-full max-w-[1200px] px-4 pt-8 pb-4">
        <div className="px-2 flex items-center gap-1">
          <span className="text-green-700 text-sm font-semibold">홈</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-green-700 text-sm font-semibold">
            농작물 상세
          </span>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-[1168px] px-4 pb-8 flex flex-row justify-start items-start gap-8">
        {/* 이미지 섹션 */}
        <div className="w-full flex-1 max-w-[480px] min-w-96 flex flex-col gap-6">
          <div className="w-full aspect-[4/3] h-auto bg-gray-100 rounded-2xl overflow-hidden">
            {productInfo ? (
              <img
                src={productInfo.imageUrl}
                alt={productInfo.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100"></div>
            )}
          </div>
          <div className="px-1 flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              {productInfo ? (
                <img
                  src={productInfo.imageUrl}
                  alt={productInfo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100"></div>
              )}
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              {productInfo ? (
                <img
                  src={productInfo.imageUrl}
                  alt={productInfo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100"></div>
              )}
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              {productInfo ? (
                <img
                  src={productInfo.imageUrl}
                  alt={productInfo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100"></div>
              )}
            </div>
          </div>
        </div>

        {/* 정보 섹션 */}
        <div className="w-full flex-1 min-w-96 flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="pt-2">
              <h1 className="text-gray-900 text-3xl font-bold leading-[48px]">
                {productInfo ? productInfo.title : "유기농 토마토"}
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              {/* 가격 정보 */}
              <div className="px-6 py-4 bg-green-100 rounded-lg flex flex-col gap-1.5">
                <div className="flex items-center">
                  <span className="text-gray-800 text-xl font-bold">
                    {productInfo ? productInfo.price : "150,000원"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 text-sm">단위</span>
                    <span className="text-gray-600 text-sm">
                      {productInfo ? productInfo.weightPerBox : "10kg"}
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 text-sm">배송비</span>
                    <span className="text-gray-600 text-sm">3,000원</span>
                  </div>
                </div>
              </div>

              {/* 농부 정보 */}
              <div className="px-6 py-4 bg-gray-50 rounded-lg flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span className="text-gray-800 text-base font-semibold">
                    {productInfo ? productInfo.farmer.name : "김농부"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <span className="text-gray-600 text-xs">📍</span>
                    <span className="text-gray-600 text-xs">
                      {productInfo
                        ? productInfo.farmer.location
                        : "충청남도 논산시"}
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-0.5">
                    <span className="text-gray-600 text-xs">⭐️</span>
                    <span className="text-gray-600 text-xs">유기농 인증</span>
                  </div>
                </div>
              </div>

              {/* 평점 정보 */}
              <div className="px-6 py-4 bg-yellow-50 rounded-lg border border-yellow-200 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">
                    {productInfo
                      ? renderStars(productInfo.rating)
                      : "⭐⭐⭐⭐⭐"}
                  </span>
                  <span className="text-gray-900 text-base font-semibold">
                    {productInfo ? productInfo.rating.toFixed(1) : "4.5"}
                  </span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 text-sm">
                  {productInfo
                    ? `${productInfo.reviewCount}개의 후기`
                    : "150개의 후기"}
                </span>
              </div>
            </div>

            {/* 태그 */}
            <div className="flex items-start gap-3">
              <div className="px-4 py-1 bg-green-50 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  유기농
                </span>
              </div>
              <div className="px-4 py-1 bg-green-50 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  토마토
                </span>
              </div>
              <div className="px-4 py-1 bg-green-50 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  논산
                </span>
              </div>
            </div>
          </div>

          {/* 결제 버튼 */}
          <div className="w-full max-w-[800px]">
            <button
              onClick={handleAddToCart}
              className="w-full px-10 py-4 bg-green-600 rounded-lg text-white text-base font-semibold hover:bg-green-700 transition"
            >
              결제하기
            </button>
          </div>
        </div>
      </div>

      {/* 참여 현황 */}
      <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-5">
        <div className="p-6 bg-blue-50 flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-800 text-xl font-bold">🔥 지금</span>
            <span className="text-gray-800 text-xl font-bold">
              25명이 참여 중 🔥
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">참여자</span>
              <span className="text-blue-400 text-4xl font-semibold">25</span>
            </div>
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">위탁 완료</span>
              <span className="text-blue-400 text-4xl font-semibold">18</span>
            </div>
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">남은 날짜</span>
              <span className="text-blue-400 text-4xl font-semibold">45</span>
            </div>
          </div>
        </div>

        {/* 달성률 */}
        <div className="w-full max-w-[800px] mx-auto flex flex-col gap-2">
          <div className="px-1 flex items-center gap-1">
            <span className="text-gray-800 text-base font-semibold">
              달성률
            </span>
            <span className="text-gray-800 text-base font-semibold">72%</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full border border-gray-200 relative">
            <div className="absolute top-0 left-0 h-full w-[72%] bg-green-500 rounded-full"></div>
          </div>
          <div className="px-1 flex items-center gap-1">
            <span className="text-gray-700 text-sm">총</span>
            <span className="text-gray-700 text-sm">100박스 중</span>
            <span className="text-gray-700 text-sm">72박스 위탁 완료!</span>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="w-full max-w-[1168px] px-4 pt-10 pb-4 flex">
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${
            activeTab === "details"
              ? "border-green-600 text-gray-800 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          상세정보
        </button>
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${
            activeTab === "guide"
              ? "border-green-600 text-gray-800 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("guide")}
        >
          재배안내
        </button>
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${
            activeTab === "reviews"
              ? "border-green-600 text-gray-800 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          후기
        </button>
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${
            activeTab === "diaries"
              ? "border-green-600 text-gray-800 font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("diaries")}
        >
          농장 일지
        </button>
      </div>

      {/* 상세정보 */}
      {activeTab === "details" && (
        <>
          {/* 농작물 정보 */}
          <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
            <h2 className="text-gray-900 text-2xl font-bold">🌿 농작물 정보</h2>
            <div className="px-4 py-5 rounded-2xl border border-gray-300 flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-full max-w-[800px] aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-100"></div>
                </div>
                <div className="w-full max-w-[800px] flex items-center gap-1">
                  <span className="text-gray-400 text-xs">📷 농작물 사진</span>
                </div>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  품종 소개
                </h3>
                <p className="text-gray-900 text-base">
                  이 토마토는 충청남도 논산의 깨끗한 환경에서 자란 유기농
                  토마토입니다. 화학비료나 농약을 사용하지 않고 자연 그대로의
                  방법으로 재배하여 안전하고 건강한 토마토를 제공합니다.
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  재배 환경
                </h3>
                <p className="text-gray-900 text-base">
                  논산의 비옥한 토양과 깨끗한 물, 충분한 일조량을 받아 자란
                  토마토는 당도가 높고 과육이 단단합니다. 친환경 인증을 받은
                  농장에서 정성스럽게 관리됩니다.
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  영양 성분
                </h3>
                <p className="text-gray-900 text-base">
                  리코펜이 풍부하여 항산화 효과가 뛰어나며, 비타민 C와 칼륨이
                  다량 함유되어 있습니다. 저칼로리 고영양 식품으로 건강한 식단을
                  원하는 분들께 추천합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 농장 정보 */}
          <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
            <h2 className="text-gray-900 text-2xl font-bold">🧑‍🌾 농장 정보</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">
                  농장 운영 경력
                </h3>
                <p className="text-gray-900 text-base">
                  30년간 논산에서
                  <br />
                  농업에 종사
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">농장 위치</h3>
                <p className="text-gray-900 text-base">
                  충청남도 논산시
                  <br />
                  친환경 농업지구
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">재배 방식</h3>
                <p className="text-gray-900 text-base">
                  유기농 인증
                  <br />
                  무농약 재배
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">
                  배송 시스템
                </h3>
                <p className="text-gray-900 text-base">
                  수확 당일 배송
                  <br />
                  신선도 보장
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 재배안내 */}
      {activeTab === "guide" && (
        <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
          <h2 className="text-gray-900 text-2xl font-bold border-t border-gray-100 pt-6">
            📅 재배 일정
          </h2>
          <div className="relative flex flex-col gap-6">
            <div className="absolute left-[12px] top-0 w-0 h-96 border-l-4 border-gray-100"></div>

            {[
              {
                month: 3,
                week: 1,
                title: "씨앗 파종",
                desc: "온실에서 씨앗 파종 시작",
                color: "green",
              },
              {
                month: 4,
                week: 2,
                title: "모종 이식",
                desc: "건강한 모종을 밭으로 이식",
                color: "green",
              },
              {
                month: 5,
                week: 3,
                title: "성장 관리",
                desc: "지주 설치 및 가지치기",
                color: "green",
              },
              {
                month: 6,
                week: 4,
                title: "꽃 개화",
                desc: "토마토 꽃이 피기 시작",
                color: "green",
              },
              {
                month: 7,
                week: 2,
                title: "수확 시작",
                desc: "첫 수확 및 배송 준비",
                color: "orange",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 relative flex justify-center items-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${
                      item.color === "green" ? "bg-green-400" : "bg-orange-300"
                    }`}
                  ></div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        item.color === "green"
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      {item.month}월 {item.week}주
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 text-base font-semibold">
                      {item.title}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600 text-base">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 후기 */}
      {activeTab === "reviews" && (
        <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
          <h2 className="text-gray-900 text-2xl font-bold border-t border-gray-100 pt-6">
            💬 후기
          </h2>

          {/* 후기 요약 */}
          <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-yellow-400 text-2xl">
                {productInfo ? renderStars(productInfo.rating) : "⭐⭐⭐⭐⭐"}
              </span>
              <span className="text-gray-900 text-xl font-bold">
                {productInfo ? productInfo.rating.toFixed(1) : "4.5"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-900 text-base font-semibold">
                {productInfo
                  ? `총 ${productInfo.reviewCount}개의 후기`
                  : "총 150개의 후기"}
              </span>
              <span className="text-gray-600 text-sm">
                참여자들의 실제 후기를 확인해보세요
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-800 text-base font-semibold">
                        김고객{item}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center gap-0.5">
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400 text-xs">
                        2024년 07월 참가자
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">
                      {productInfo
                        ? renderStars(productInfo.rating)
                        : "⭐⭐⭐⭐⭐"}
                    </span>
                    <span className="text-gray-900 text-xs">
                      {productInfo
                        ? `${productInfo.rating.toFixed(1)} / 5`
                        : "4.5 / 5"}
                    </span>
                  </div>
                </div>

                {index % 2 === 0 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                {index === 1 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                {index === 3 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <h4 className="text-gray-900 text-sm font-semibold">
                    정말 맛있는 토마토였어요!
                  </h4>
                  <p className="text-gray-900 text-sm">
                    신선하고 당도가 높아서 가족 모두 만족했습니다. 다음에도 꼭
                    주문하고 싶어요.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 농장 일지 */}
      {activeTab === "diaries" && (
        <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
          <h2 className="text-gray-900 text-2xl font-bold border-t border-gray-100 pt-6">
            📝 농장 일지 (프로젝트 ID: {projectId})
          </h2>

          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="text-lg">일지를 불러오는 중...</div>
            </div>
          ) : diaries.length > 0 ? (
            <div className="flex flex-col gap-6">
              {diaries.map((diary) => (
                <div
                  key={diary.diaryId}
                  className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(diary.status)}`}
                        >
                          {getStatusText(diary.status)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(diary.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-800 text-base leading-relaxed">
                        {diary.content}
                      </p>
                    </div>
                  </div>

                  {diary.imageUrl && (
                    <div className="w-full max-w-[400px] aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={diary.imageUrl}
                        alt="농장 일지 사진"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  {diary.tag && (
                    <div className="flex flex-wrap gap-2">
                      {diary.tag.split(",").map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          #{tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="text-gray-500">
                아직 등록된 농장 일지가 없습니다.
              </div>
            </div>
          )}
        </div>
      )}

      {/* 하단 작물일기 버튼 */}
      <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex justify-center">
        <div className="w-full max-w-[800px]">
          <button
            onClick={handleGoToCropDiary}
            className="w-full px-10 py-4 bg-green-600 rounded-lg text-white text-base font-semibold hover:bg-green-700 transition"
          >
            작물일기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropInfo;
