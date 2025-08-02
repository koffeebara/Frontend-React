import React, { useState, useRef, useEffect } from 'react';

export default function ReserveCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0); // 예약 인원 상태
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, count]); // count도 포함하여 높이 재계산

  const handleReserveClick = () => {
    if (!isOpen) {
      setIsOpen(true); // 펼침
    } else {
      // 예약 실행 로직 (예시)
      alert(`예약이 완료되었습니다. 예약 인원: ${count}명`);
    }
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm mb-4">
      {/* 상단 정보 */}
      <div>
        <p className="font-bold text-lg">재배 체험</p>
        <p>00월 00일 0요일 00시 00분</p>
        <p>주소지</p>
        <p>00명 예약 가능</p>
      </div>

      <hr className="my-2" />
      <div>
        <p>체험 일정 1</p>
        <p>체험 일정 2</p>
        <p>체험 일정 3</p>
      </div>

      {/* 애니메이션 영역 */}
      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-700 ease-in-out"
      >
        <div ref={contentRef}>
          <hr className="my-2" />
          {/* 방문 예정 인원 */}
          <div className="flex gap-2 items-center my-2">
            <span>방문 예정 인원</span>
            <button
              onClick={decrement}
              className="border px-2 py-0.5 rounded select-none"
              aria-label="인원 감소"
            >
              -
            </button>
            <span className="min-w-[30px] text-center">{count}명</span>
            <button
              onClick={increment}
              className="border px-2 py-0.5 rounded select-none"
              aria-label="인원 증가"
            >
              +
            </button>
          </div>

          {/* 방문 주의 사항 */}
          <div className="bg-gray-100 p-2 rounded">
            <p className="font-semibold">방문 주의 사항</p>
            <p>농장 방문 시 주의사항을 안내하는 문구 작성되는 영역</p>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <span>방문 주의 사항을 확인했습니다.</span>
            </label>
          </div>
        </div>
      </div>

      {/* 예약하기 버튼 (항상 하나) */}
      <div className="flex justify-end mt-4">
        {/* 닫기 버튼 */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-1 border rounded mr-2"
          >
            닫기
          </button>
        )}
        <button
          onClick={handleReserveClick}
          className="px-4 py-1 border rounded mr-2"
          disabled={isOpen && count === 0} // 0명일 땐 예약 버튼 비활성화
          title={isOpen && count === 0 ? "예약 인원을 선택하세요" : undefined}
        >
          {isOpen ? '예약하기' : '인원 선택'}
        </button>
      </div>
    </div>
  );
}
