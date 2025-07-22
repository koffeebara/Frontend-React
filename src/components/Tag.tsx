type TagProps = {
  tag: string;
}
export default function Tag({ tag }: TagProps) {
  return (
    <>
      <div className="px-2 py-1 bg-sky-100 rounded flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-blue-800 text-xs font-normal font-['Noto_Sans_KR'] leading-none">{tag}</div>
      </div>
    </>
  )
}
