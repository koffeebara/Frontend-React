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
          <p className="text-gray-600 my-4">우리 농장은 친환경 농법을 기반으로 건강한 먹거리와 자연 속 체험을 제공하는 가족 친화형 농장입니다. 계절마다 다양한 작물 재배와 수확 체험이 가능하며, 아이들과 함께 자연을 느끼며 배울 수 있는 교육적인 프로그램도 마련되어 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 py-8">
          <ReserveCard
            title="🌱 씨뿌리기 체험"
            date="08월 20일 화요일 오전 10시"
            address="경기도 양평군 옥천면 고소리 123-4 해피팜 농장 비닐 하우스"
            availableCount={15}
            schedules={[
              "09:50까지 농장 도착 및 출석 확인",
              "10:00 ~ 10:30 체험 소개 및 안전 교육",
              "10:30 ~ 11:30 씨앗 종류 소개 및 씨뿌리기 실습",
            ]}
            cautionMessage="농장 방문 시 마스크 착용, 장화 착용이 필수입니다. 무단 노쇼 시 이후 체험 참여에 제한될 수 있습니다."
          />

          <ReserveCard
            title="🌿 잡초 뽑기 체험"
            date="08월 23일 금요일 오전 9시"
            address="경기도 양평군 옥천면 고소리 123-4 해피팜 두번째 밭"
            availableCount={8}
            schedules={[
              "08:50까지 현장 도착 및 간단한 간식 제공",
              "09:00 ~ 09:20 안전 장비 착용 및 농장 설명",
              "09:20 ~ 10:30 밭에서 직접 잡초 제거 실습",
            ]}
            cautionMessage="긴 바지와 장갑 착용 권장, 무단 노쇼 시 이후 체험 신청이 제한될 수 있습니다."
          />

          <ReserveCard
            title="🍅 수확 체험"
            date="08월 25일 일요일 오후 4시"
            address="전라남도 순천시 낙안면 남도길 59-1 순천로컬팜"
            availableCount={20}
            schedules={[
              "15:50까지 도착하여 출석 체크",
              "16:00 ~ 16:15 수확 체험 가이드 및 도구 설명",
              "16:15 ~ 17:00 토마토 및 가지 수확 체험",
            ]}
            cautionMessage="덥고 습한 날씨에 대비해 모자와 물을 지참하세요. 무단 불참 시 추후 체험 신청이 제한됩니다."
          />


        </div>
      </div>
    </>
  )
}
