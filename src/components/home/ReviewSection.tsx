interface Review {
  id?: number;
  rating: number;
  title: string;
  content: string;
  name: string;
  location: string;
  date: string;
}

// 더미 리뷰 데이터
const defaultReviewData: Review[] = [
  {
    id: 1,
    rating: 5,
    title: "정말 신선하고 맛있어요!",
    content:
      "처음 이용해봤는데 농장 일지를 통해 성장 과정을 지켜보는 재미가 쏠쏠했어요. 감자도 크고 맛있어서 만족합니다!",
    name: "박○○님",
    location: "경기도 성남시",
    date: "2024.11.08",
  },
  {
    id: 2,
    rating: 5,
    title: "믿을 수 있는 농부님들!",
    content:
      "농부님이 매일 올려주시는 농장 일지를 보며 안심하고 기다릴 수 있었어요. 상추가 정말 싱싱하고 맛있습니다!",
    name: "이○○님",
    location: "부산시 해운대구",
    date: "2024.10.28",
  },
];

interface ReviewSectionProps {
  reviews?: Review[];
}

const ReviewSection = ({ reviews: apiReviews }: ReviewSectionProps) => {
  // API 데이터와 더미 데이터를 병합하는 함수
  const mergeReviewsWithDefaults = (
    apiReviews: Review[] | null | undefined
  ): Review[] => {
    if (apiReviews && apiReviews.length > 0) {
      return apiReviews;
    }
    return defaultReviewData;
  };

  const reviews = mergeReviewsWithDefaults(apiReviews);

  return (
    <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col gap-8 bg-blue-000 rounded-3xl mt-12">
      <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center mb-4">
        생생한 고객 후기
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="w-full max-w-[380px] flex flex-col gap-4 bg-common-000 rounded-2xl shadow p-6 border border-opacity-100/10"
          >
            <div className="flex gap-2 items-center text-cool-gray-800 text-base">
              {"⭐️".repeat(review.rating)}
            </div>
            <div className="flex gap-1 items-center text-blue-500 text-base font-semibold">
              <span>"</span>
              <span>{review.title}</span>
              <span>"</span>
            </div>
            <div className="text-cool-gray-800 text-sm">{review.content}</div>
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
  );
};

export default ReviewSection;
