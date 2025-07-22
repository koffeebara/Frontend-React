import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

type ReviewCardProps = {
  profileImg: string;      // 프로필 이미지 URL
  name: string;            // 작성자 이름
  userId: string;          // 아이디
  rating: number;          // 별점 (예: 4.5)
  title: string;           // 리뷰 제목
  content: string;         // 리뷰 내용
  reviewImages?: string[]; // 리뷰 사진 여러 개 (optional)
};

export default function ReviewCard({
  profileImg,
  name,
  userId,
  rating,
  title,
  content,
  reviewImages = [],
}: ReviewCardProps) {
  return (
    (
      <div className="flex flex-col gap-2 w-full">
        {/* 프로필 + 이름 + 아이디 + 별점 */}
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="w-10 h-10 relative bg-gray-200 rounded-full" />
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-900">
              <span>{name}</span>
              <span className="text-xs text-gray-600">@{userId}</span>
            </div>
            <div className="flex flex-row items-center">
              <StarSolid className="w-4 h-4 text-yellow-400 mx-2 " />
              <p className="cb-p1"> {rating.toFixed(2)} / 5</p>
            </div>
          </div>
        </div>

        {/* 제목 */}
        <div className="px-5 text-base font-semibold text-gray-900">{title}</div>

        {/* 내용 */}
        <div className="px-5 text-sm text-gray-900 whitespace-pre-wrap">{content}</div>

        {/* 리뷰 이미지 */}

        {reviewImages.length > 0 && (
          <div className="self-stretch p-4 inline-flex justify-start items-start gap-2 ">
            {reviewImages.map((src, idx) => (
              <div className="flex-1 max-w-60 aspect-[4/3] object-cover rounded-lg bg-gray-200"></div>
              // <img
              //   key={idx}
              //   src={src}
              //   alt={`리뷰 이미지 ${idx + 1}`}
              //   className="flex-1 h-44 max-w-60 object-cover rounded-lg border bg-gray-200"
              // />
            ))}
          </div>
        )}
      </div>
    )
  )
}
