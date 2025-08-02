
export type RecordType = 'growthRecord' | 'maintenanceTask' | 'issueResolution';

type RecordCardProps = {
  type: RecordType;
  date: string;
  title: string;
  description: string[];
  tags: string[];
  avatarUrl?: string;
};

const typeConfig = {
  growthRecord: {
    dotColor: 'bg-blue-500',
    label: '성장 기록',
  },
  maintenanceTask: {
    dotColor: 'bg-yellow-500',
    label: '관리 작업',
  },
  issueResolution: {
    dotColor: 'bg-red-500',
    label: '문제 해결',
  },
};

const tagColorMap = {
  growthRecord: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
  },
  maintenanceTask: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
  },
  issueResolution: {
    bg: 'bg-red-100',
    text: 'text-red-800',
  },
};

export default function RecordCard({
  type,
  date,
  title,
  description,
  tags,
}: RecordCardProps) {
  const { dotColor } = typeConfig[type];

  return (
    <div className="relative flex">
      {/* 왼쪽 세로선 + 점 */}
      <div className="flex flex-col items-start mr-8">
        <div className="w-0.5 flex-1" />
        <div className={`w-4 h-4 rounded-full -m-2 ${dotColor} mt-1 mb-1`} />
        <div className="w-0.5 flex-1 " />
      </div>

      {/* 카드 */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 w-full">
        <p className="text-green-600 text-sm font-semibold">{date}</p>
        <h2 className="text-lg font-bold mt-1">{title}</h2>
        <div className="text-sm text-gray-700 mt-2 space-y-1">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* 이미지 3개 자리 */}
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 aspect-[4/3] bg-gray-100 rounded-xl max-w-[33%]"
            />
          ))}
        </div>

        {/* 태그 + 아바타 */}
        <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-sm px-2 py-1 rounded-full ${tagColorMap[type].bg} ${tagColorMap[type].text}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>


        {/* 타입 라벨 */}
        {/* <div className="mt-2 text-xs text-gray-500">{label}</div> */}
      </div>
    </div>
  );
}
