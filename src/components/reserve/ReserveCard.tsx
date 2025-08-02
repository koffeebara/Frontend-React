import { useState, useRef } from 'react';
import toast, { Toaster } from "react-hot-toast";

import ReserveAlert from '../common/ReserveAlert';

type ReserveCardProps = {
  title: string;
  date: string;
  address: string;
  availableCount: number;
  schedules: string[];        // 체험 일정
  cautionMessage: string;     // 방문 주의 사항
};

export default function ReserveCard({
  title,
  date,
  address,
  availableCount,
  schedules,
  cautionMessage
}: ReserveCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showReserveAlert, setShowReserveAlert] = useState(false);

  const handleReserveClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setShowReserveAlert(true);
    }
  };

  const handleConfirmSubscription = () => {
    setShowReserveAlert(false);
    toast.success("예약 확정!", {
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
      duration: 2000,
    });
    setCount(0);
    console.log("예약 완료");
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-sm mb-4">
      {/* 상단 정보 */}
      <div>
        <p className="font-bold text-xl">{title}</p>
        <p className="text-mint-700 text-lg my-4">{date}</p>
        <p className='text-gray-600 mb-2'>{address}</p>
        <p className='text-gray-600'>{availableCount}명 예약 가능</p>
      </div>

      <hr className="my-4 text-gray-300" />
      <div className='mx-2'>
        {schedules.map((item, idx) => (
          <p key={idx} className='text-gray-600'>- {item}</p>
        ))}
      </div>

      {/* 애니메이션 영역 */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}
        `}
      >
        <div ref={contentRef}>
          <hr className="my-4 text-gray-300" />

          {/* 방문 예정 인원 */}
          <div className="flex gap-2 items-center my-4 justify-between">
            <span className='text-lg font-semibold'>방문 예정 인원</span>
            <div className='border border-gray-300'>
              <button
                onClick={decrement}
                className="w-8 h-8 bg-gray-100 border-r border-gray-300"
                aria-label="인원 감소"
              >
                -
              </button>
              <span className="px-2 text-center">{count}명</span>
              <button
                onClick={increment}
                className="w-8 h-8 bg-gray-100 border-l border-gray-300"
                aria-label="인원 증가"
              >
                +
              </button>
            </div>
          </div>

          {/* 방문 주의 사항 */}
          <div>
            <p className="text-lg font-semibold pb-2">방문 주의 사항</p>
            <p className='text-gray-600'>{cautionMessage}</p>
            <label className="flex items-center gap-2 mt-2 ">
              <input type="checkbox" />
              <span className='font-bold'>방문 주의 사항을 확인했습니다.</span>
            </label>
          </div>
        </div>
      </div>

      {/* 예약하기 버튼 */}
      <div className="flex mt-4">
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gray-100 text-gray-600 px-4 py-1 rounded mr-2"
          >
            닫기
          </button>
        )}
        <button
          onClick={handleReserveClick}
          className="w-full bg-mint-600 text-white px-4 py-1 rounded mr-2"
          disabled={isOpen && count === 0}
          title={isOpen && count === 0 ? "예약 인원을 선택하세요" : undefined}
        >
          {isOpen ? '예약하기' : '인원 선택'}
        </button>
      </div>

      {showReserveAlert && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[60]"
          style={{ background: "rgba(0,0,0,0.2)" }}
        >
          <ReserveAlert
            count={count}
            title={title}
            onConfirm={handleConfirmSubscription}
          />
        </div>
      )}
      <Toaster />
    </div>
  );
}
