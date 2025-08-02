import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { fetchProducts } from "../api/Home";
import EmailAlert from "../components/common/EmailAlert";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CropSection from "../components/home/CropSection";
import StepsSection from "../components/home/StepsSection";
import ReviewSection from "../components/home/ReviewSection";
import ExtraCropSection from "../components/home/ExtraCropSection";
import SubscribeSection from "../components/home/SubscribeSection";

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
    deadline: "3일 남음",
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
    deadline: "1일 남음",
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
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("products:", data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowEmailAlert(true);
    }
  };

  const handleConfirmSubscription = () => {
    setShowEmailAlert(false);
    toast.success("구독완료!", {
      position: "bottom-center",
      style: {
        background: "#10b981",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        padding: "12px 20px",
        borderRadius: "9999px",
        marginBottom: "100px",
      },
      duration: 3000,
    });
    setEmail("");
    console.log("이메일 제출:", email);
  };

  const handleCloseAlert = () => {
    setShowEmailAlert(false);
  };

  return (
    <div className="w-full min-h-screen bg-white font-pretendard mt-3 relative">
      <main className="w-full min-h-screen flex flex-col items-center">
        <HeroSection />
        <StatsSection />
        <CropSection cropCards={cropCards} />
        <StepsSection steps={steps} />
        <ReviewSection reviews={reviews} />
        <ExtraCropSection extraCrops={extraCrops} />
        <SubscribeSection
          email={email}
          setEmail={setEmail}
          handleEmailSubmit={handleEmailSubmit}
        />
      </main>

      {/* Email Alert 모달 */}
      {showEmailAlert && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[60]"
          style={{ background: "rgba(0,0,0,0.2)" }}
        >
          <EmailAlert
            email={email}
            onConfirm={handleConfirmSubscription}
            onCancel={handleCloseAlert}
          />
        </div>
      )}

      {/* Toaster는 App.tsx에서 전역으로 렌더링 */}
    </div>
  );
}
