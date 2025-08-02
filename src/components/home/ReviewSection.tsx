interface Review {
  rating: number;
  title: string;
  content: string;
  name: string;
  location: string;
  date: string;
}

const ReviewSection = ({ reviews }: { reviews: Review[] }) => (
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
                {review.date.replace(/\./g, "년 ").replace(/\.$/, "월")} 참가자
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewSection;
