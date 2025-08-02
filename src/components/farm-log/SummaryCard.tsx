type SummaryCardProps = {
  title: string;
  summary: string;
};

export default function SummaryCard({ title, summary }: SummaryCardProps) {
  return (
    <div className="flex flex-col items-center w-[192px] h-[88px] bg-green-50 border border-gray-200 rounded-2xl p-4">
      <p className="text-sm text-gray-500 font-bold">{title}</p>
      <p className="text-xl text-green-700 font-bold mt-2">{summary}</p>
    </div>
  );
}