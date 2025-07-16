export default function TagBadge({ label }: { label: string }) {
  return (
    <div className="px-2 py-1 bg-black/20 flex justify-center items-center gap-2.5">
      <div className="text-center text-black text-xs font-normal leading-3">{label}</div>
    </div>
  )
}