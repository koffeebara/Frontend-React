interface EmailAlertProps {
  email: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function EmailAlert({
  email,
  onConfirm,
  onCancel,
}: EmailAlertProps) {
  return (
    <div
      data-showbuttongroup="true"
      data-showbuttonmore="true"
      className="w-150 px-8 pt-6 pb-8 relative bg-white rounded-3xl flex flex-col justify-start items-start gap-8 opacity-100"
    >
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div
          data-size="medium"
          className="self-stretch pt-2 inline-flex justify-start items-center"
        >
          <div className="flex-1 justify-start text-mint-700 text-2xl font-bold font-pretendard leading-9">
            이메일 알림
          </div>
        </div>
        <div className="self-stretch justify-start text-black text-base font-normal font-pretendard leading-normal">
          농장 소식을 구독하시겠습니까?
          <br />
          <span className="text-mint-700 font-bold">
            소식 받을 이메일 : {email}
          </span>
          <br />
          새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요!
        </div>
      </div>
      <div className="self-stretch inline-flex justify-end items-center gap-4">
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-white rounded border border-gray-300 flex justify-center items-center"
        >
          <div className="text-center justify-start text-gray-800 text-base font-semibold font-pretendard leading-normal">
            취소
          </div>
        </button>
        <button
          onClick={onConfirm}
          className="px-6 py-2 bg-mint-600 rounded border border-mint-600 flex justify-center items-center"
        >
          <div className="text-center justify-start text-white text-base font-semibold font-pretendard leading-normal">
            확인
          </div>
        </button>
      </div>
      <button
        onClick={onCancel}
        className="w-6 h-6 right-6 top-6 absolute inline-flex justify-center items-center text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    </div>
  );
}
