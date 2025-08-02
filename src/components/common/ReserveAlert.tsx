interface ReserveAlertProps {
  count: number;
  title: string;
  onConfirm: () => void;

}

export default function ReserveAlert({
  count,
  title,
  onConfirm,
}: ReserveAlertProps) {
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
            예약 알림
          </div>
        </div>
        <div className="self-stretch justify-start text-black text-base font-normal font-pretendard leading-normal">
          [{title}]을 예약하시겠습니까?
          <br />
          <span className="text-mint-700 font-bold">
            인원 수 : {count}
          </span>
          <br />
        </div>
      </div>
      <div className="self-stretch inline-flex justify-end items-center gap-4">

        <button
          onClick={onConfirm}
          className="px-6 py-2 bg-mint-600 rounded border border-mint-600 flex justify-center items-center"
        >
          <div className="text-center justify-start text-white text-base font-semibold font-pretendard leading-normal">
            확인
          </div>
        </button>
      </div>

    </div>
  );
}
