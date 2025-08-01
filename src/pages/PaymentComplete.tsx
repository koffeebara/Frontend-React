import StepBox from "../components/StepBox"

export default function PaymentComplete() {
  const farmer = "홍길동"
  const item = "옥수수 두 상자"
  return (
    <>
      <div className="flex flex-col p-4 gap-4 bg-gray-200 ">
        <div className="flex flex-col items-center w-full h-[264px] bg-mint-700 rounded-2xl ">
          <img src="/test_img.png" alt="" className="my-10" />
          <p className="text-[40px] text-white mb-4">결제가 완료됐습니다!</p>
          <p className="text-gray-100">{farmer}님의 {item} 공동 위탁에 성공적으로 참여하셨습니다. </p>

        </div>
        <div className="flex flex-col w-full h-max bg-white rounded-2xl p-4 gap-8 mb-8">
          {/* 신청 내역 */}
          <div className="p-8 border border-gray-300 bg-lime-50 rounded-2xl">
            <p className="title-2 pb-4">신청 내역</p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-gray-500">작물명</p>
                <p className="text-gray-500">작물금액</p>
                <p className="text-gray-500">주문수량</p>
                <p className="text-gray-500">배송비</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>작물명</p>
                <p>작물명</p>
                <p>작물명</p>
                <p>작물명</p>
              </div>
            </div>
            <hr className="my-4 text-gray-300" />
            <div className="flex justify-between">
              <p className="font-bold">총 금액</p>
              <p className="font-bold">000,000원</p>
            </div>
          </div>

          {/* 결제 및 전달 안내 */}
          <div className="p-8 border border-gray-300 bg-yellow-50 rounded-2xl">
            <p className="title-2 pb-4">결제 및 전달 안내</p>
            <p className="mb-4">실제 결제는 위탁이 성공적으로 모집 완료된 이후 진행됩니다. 목표 달성 시, 결제 안내 메일/SMS를 발송해드리니 참고해주세요.</p>
            <p>본 작물의 예상 수확시기는 <span className="text-mint-700">00년 00월 00일</span>입니다.</p>

          </div>

          {/* 진행 단계 안내 */}
          <div className="p-8 border border-gray-300 bg-sky-100 rounded-2xl">
            <p className="title-2 pb-4">진행 단계 안내</p>
            <StepBox stepNumber={1} title="모집 완료 대기" content="목표한 수량이 모두 모집될 경우, 위탁이 시작됩니다." />
            <StepBox stepNumber={2} title="결제 안내 수신" content="모집이 완료 후, 연락처로 결제 안내를 보내드립니다." />
            <StepBox stepNumber={3} title="재배 일지 확인" content="재배 일지를 통해 성장 과정을 확인할 수 있습니다." />
            <StepBox stepNumber={4} title="배송 시작" content="수확 완료 후, 농작물은 안전하게 포장되어 배송됩니다." />

          </div>
          <button className="bg-mint-700 text-white rounded-xl h-15">다른 작물 둘러보기</button>
          <button className="bg-gray-200 rounded-xl h-15 mb-8">농장 일지 미리보기</button>
        </div>
      </div>
    </>
  )
}
