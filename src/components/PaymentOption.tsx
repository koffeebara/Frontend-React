type PaymentOptionProps = {
  id: string;
  label: string;
  description: string;
  icon: string;
  bg: string;
  selected: boolean;
  onSelect: () => void;
};

export default function PaymentOption({
  id,
  label,
  description,
  icon,
  bg,
  selected,
  onSelect,
}: PaymentOptionProps) {
  return (
    <label
      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all
        ${selected ? 'bg-green-100 border-green-500' : 'bg-white border-gray-300'}
      `}
      onClick={onSelect}
    >
      {/* 체크박스 (시각적 요소용) */}
      <div
        className={`w-5 h-5 rounded-sm border border-gray-400
          ${selected ? 'bg-green-600' : 'bg-white'}
        `}
      />

      {/* 아이콘 + 텍스트 */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bg}`}>
          <span className="text-xl">{icon}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{label}</span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>
    </label>
  );
}
