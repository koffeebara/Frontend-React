import ReserveCard from "../components/reserve/ReserveCard";

export default function Reserve() {
  return (
    <>
      <div>
        <div>홈 농작물목록 text</div>
        <div>
          <p>농장이름 농장 방문 예약</p>
          <p>농장에서 안내하는 주의사항 문구 작성되는 영역 농장에서 안내하는 주의사항 문구 작성되는 영역</p>
        </div>
        <div>
          <ReserveCard />
          <ReserveCard />
          <ReserveCard />
        </div>
      </div>
    </>
  )
}
