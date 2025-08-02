type Status = 'complete' | 'inProgress' | 'notStarted';

type IconStepProps = {
  icon: string;
  status: Status;
  title: string;
  hasNext?: boolean; // 다음 스텝이 있다면 작대기 표시
};

export default function IconStep({ icon, status, title, hasNext = true }: IconStepProps) {
  const colorMap = {
    complete: 'bg-blue-200',
    inProgress: 'bg-green-200',
    notStarted: 'bg-gray-200',
  };

  return (
    <div className="flex items-center">
      {/* 아이콘 + 타이틀 */}

      <div className="flex flex-col">

        <div className="flex items-center mb-4">

          <div className={`${colorMap[status]} rounded-full z-10 w-10 h-10 flex items-center justify-center text-white`}>
            {icon}
          </div>
          <div className="absolute ml-4">
            {hasNext && (
              <div className={`h-1 w-10 ${status === 'inProgress' ? colorMap['notStarted'] : colorMap[status]}`} />)}
          </div>

        </div>
        <div className="text-sm text-center">{title}</div>

      </div>



    </div>
  );
}
