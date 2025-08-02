import ReserveCard from "../components/reserve/ReserveCard";
import { Link } from 'react-router-dom';

export default function Reserve() {
  return (
    <>
      <div className="m-12">
        <div className="flex items-center text-mint-700 gap-2 mb-8">
          <Link to="/">홈</Link>
          <span className="text-mint-600">&gt;</span>
          <Link to="/cropdiary">작물 일지</Link>
          <span className="text-mint-600">&gt;</span>
          <span className="text-mint-700">예약하기</span>
        </div>
        <div>
          <p className="title-1">농장이름 농장 방문 예약</p>
          <p className="text-gray-600 my-4">농장에서 안내하는 주의사항 문구 작성되는 영역 농장에서 안내하는 주의사항 문구 작성되는 영역</p>
        </div>
        <div className="flex flex-col gap-4 py-8">
          <ReserveCard
            title="🌱 재배 체험"
            date="08월 15일 목요일 오후 2시"
            address="서울특별시 강남구 논현동"
            availableCount={10}
            schedules={["체험 일정 1", "체험 일정 2", "체험 일정 3"]}
            cautionMessage="농장 방문 시 마스크 착용, 장화 착용이 필수입니다."
          />

        </div>
      </div>
    </>
  )
}
