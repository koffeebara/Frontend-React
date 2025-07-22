import React from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewTab() {
  return (
    <div className="flex flex-col items-start justify-start text-left w-full m-5">
      <ReviewCard
        profileImg="https://i.pravatar.cc/40?img=12"
        name="홍길동"
        userId="honggildong"
        rating={4.5}
        title="아주 만족스러워요!"
        content={`배송도 빠르고 포장도 꼼꼼했습니다.
제품 퀄리티도 좋고 다음에 또 주문할 것 같아요.`}
        reviewImages={[
          'https://placekitten.com/200/200',
          'https://placekitten.com/201/200',
          'https://placekitten.com/202/200',
        ]}
      />

      <ReviewCard
        profileImg="https://i.pravatar.cc/40?img=12"
        name="홍길동"
        userId="honggildong"
        rating={4.5}
        title="아주 만족스러워요!"
        content={`배송도 빠르고 포장도 꼼꼼했습니다.
제품 퀄리티도 좋고 다음에 또 주문할 것 같아요.`}
      />
    </div>

  )
}
