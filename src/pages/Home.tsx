
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CropSection from "../components/home/CropSection";
import StepsSection from "../components/home/StepsSection";
import ReviewSection from "../components/home/ReviewSection";
import ExtraCropSection from "../components/home/ExtraCropSection";
import SubscribeSection from "../components/home/SubscribeSection";
import EmailAlert from "../components/common/EmailAlert";
import {
  fetchProducts,
  fetchProductsReview1,
  fetchProductsReview2,
} from "../api/Home";
import type { ProductResponse, ReviewResponse } from "../api/Home";


const dummyExtraCrops = [
  { emoji: "🥕", name: "유기농 당근", price: "15,000", participants: 12 },
  { emoji: "🥬", name: "친환경 배추", price: "25,000", participants: 8 },
  { emoji: "🥒", name: "무농약 오이", price: "18,000", participants: 20 },
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
import { fetchProducts } from "../api/Home";
import toast from "react-hot-toast";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CropSection from "../components/home/CropSection";
import StepsSection from "../components/home/StepsSection";
import ReviewSection from "../components/home/ReviewSection";
import ExtraCropSection from "../components/home/ExtraCropSection";
import SubscribeSection from "../components/home/SubscribeSection";
import EmailAlert from "../components/common/EmailAlert";

export default function Home() {

  // 9개 상품을 각각 변수로 저장
  const [product1, setProduct1] = useState<any>(null);
  const [product2, setProduct2] = useState<any>(null);
  const [product3, setProduct3] = useState<any>(null);
  const [product4, setProduct4] = useState<any>(null);
  const [product5, setProduct5] = useState<any>(null);
  const [product6, setProduct6] = useState<any>(null);
  const [product7, setProduct7] = useState<any>(null);
  const [product8, setProduct8] = useState<any>(null);
  const [product9, setProduct9] = useState<any>(null);

  // 리뷰 상태 - ReviewSection에서 사용하는 형태로 정의
  const [reviews, setReviews] = useState<
    | {
        id: number;
        rating: number;
        title: string;
        content: string;
        name: string;
        location: string;
        date: string;
      }[]
    | null
  >(null);


  useEffect(() => {
    const loadProducts = async () => {
      try {

        const apiResponse = await fetchProducts();
        if (apiResponse.success && apiResponse.response) {
          const products = apiResponse.response;

          // API 데이터를 그대로 사용 (더미 데이터 병합은 CropSection에서 처리)
          setProduct1(products[0] || null);
          setProduct2(products[1] || null);
          setProduct3(products[2] || null);
          setProduct4(products[3] || null);
          setProduct5(products[4] || null);
          setProduct6(products[5] || null);
          setProduct7(products[6] || null);
          setProduct8(products[7] || null);
          setProduct9(products[8] || null);
        }
      } catch (error) {
        console.error("상품 데이터 로딩 실패:", error);
        // API 실패시 null로 설정 (더미 데이터는 CropSection에서 처리)
        setProduct1(null);
        setProduct2(null);
        setProduct3(null);

      }
    };

    const loadReviews = async () => {
      try {
        // 여러 상품의 리뷰를 가져와서 병합
        const [review1Response, review2Response] = await Promise.all([
          fetchProductsReview1(),
          fetchProductsReview2(),
        ]);

        const allReviews: ReviewResponse[] = [];

        if (review1Response.success && review1Response.response) {
          allReviews.push(...review1Response.response);
        }

        if (review2Response.success && review2Response.response) {
          allReviews.push(...review2Response.response);
        }

        // API 데이터를 ReviewSection 형태로 변환
        const transformedReviews = allReviews.map((review) => ({
          id: review.id,
          rating: Math.floor(review.rating), // rating을 정수로 변환
          title:
            review.comment.length > 20
              ? review.comment.substring(0, 20) + "..."
              : review.comment, // comment를 title로 사용
          content: review.comment,
          name: review.authorName,
          location: "참가자", // API에 location 정보가 없으므로 기본값
          date: new Date(review.createdAt)
            .toLocaleDateString("ko-KR")
            .replace(/\//g, "."), // 날짜 형식 변환
        }));

        setReviews(transformedReviews.length > 0 ? transformedReviews : null);
      } catch (error) {
        console.error("리뷰 데이터 로딩 실패:", error);
        setReviews(null);
      }
    };

    loadProducts();
    loadReviews();
  }, []);
  const [email, setEmail] = useState("");
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  // 더미데이터만 사용, API 호출 및 product1~product9 상태 제거

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
        <CropSection
          product1={product1}
          product2={product2}
          product3={product3}
        />
        <StepsSection steps={steps} />
        <ReviewSection reviews={reviews || undefined} />
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
