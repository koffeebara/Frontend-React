
type StepBoxProps = {
  stepNumber: number;
  title: string;
  content: string;
};

export default function StepBox({ stepNumber, title, content }: StepBoxProps) {
  return (
    <div className="flex items-start gap-4 py-4 rounded-lg w-full">
      {/* 왼쪽 파란 원 */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
        {stepNumber}
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex flex-col justify-between flex-1 h-full">
        {/* 타이틀 */}
        <div className="text-gray-800 font-semibold text-base">{title}</div>

        {/* 콘텐츠 */}
        <div className="text-sm text-gray-600 mt-1">{content}</div>
      </div>
    </div>
  );
}
