export default function Alert() {
  return (
    <div
      data-showbuttongroup="true"
      data-showbuttonmore="true"
      className="w-72 max-w-[480px] px-8 pt-6 pb-8 relative bg-Common-common-000 rounded-3xl inline-flex flex-col justify-start items-start gap-8"
    >
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div
          data-size="medium"
          className="self-stretch pt-2 inline-flex justify-start items-center"
        >
          <div className="flex-1 justify-start text-Mint-mint-700 text-2xl font-bold font-['pretendard'] leading-9">
            Label
          </div>
        </div>
        <div className="self-stretch justify-start text-black text-base font-normal font-['pretendard'] leading-normal">
          본문 텍스트 본문 텍스트
          <br />
          본문 텍스트
        </div>
      </div>
      <div className="self-stretch inline-flex justify-end items-center gap-4">
        <div
          data-value="default"
          className="px-6 py-2 bg-Common-common-000 rounded outline outline-1 outline-offset-[-1px] outline-Opacity-opacity-200/20 flex justify-center items-center"
        >
          <div className="text-center justify-start text-Gray-gray-800 text-base font-semibold font-['pretendard'] leading-normal">
            btn1
          </div>
        </div>
        <div
          data-value="default"
          className="px-6 py-2 bg-Mint-mint-600 rounded outline outline-1 outline-offset-[-1px] outline-Opacity-opacity-100/10 flex justify-center items-center"
        >
          <div className="text-center justify-start text-Common-common-000 text-base font-semibold font-['pretendard'] leading-normal">
            btn2
          </div>
        </div>
      </div>
      <div className="w-6 h-6 left-[256px] top-[24px] absolute inline-flex justify-center items-center overflow-hidden">
        <div className="w-7 h-7 left-[-3px] top-[-3px] absolute" />
      </div>
    </div>
  );
}
