import TagBadge from "./TagBadge"

type MentorCardProps = {
  id: number;
  name: string;
  category: string;
  region: string;
};

export default function MentorCard({ category, region }: MentorCardProps) {
  return (
    <>

      <div className="w-[200px] py-3 bg-zinc-300 inline-flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="px-0.5 inline-flex justify-start items-end gap-2">
            <div className="justify-start text-black text-sm font-normal font-['Noto_Sans_KR'] leading-none">이름이름</div>
            <div className="opacity-40 justify-start text-black text-xs font-normal font-['Noto_Sans_KR'] leading-3">@아이디</div>
          </div>
          <div className="self-stretch h-36 p-2.5 bg-black/20 inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-black text-sm font-bold font-['Noto_Sans_KR'] leading-none">img</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <div className="self-stretch px-0.5 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-start text-black text-sm font-normal font-['Noto_Sans_KR'] leading-tight">소개글 1줄부터<br />소개글 2줄까지</div>
          </div>
          <div className="self-stretch px-0.5 inline-flex justify-start items-start gap-2">
            <TagBadge label={category} />
            <TagBadge label={region} />

          </div>
          <div className="self-stretch px-0.5 inline-flex justify-start items-center gap-1">
            <div className="justify-start text-black text-xs font-normal font-['Noto_Sans_KR'] leading-3">평점</div>
            <div className="opacity-40 justify-start text-black text-xs font-normal font-['Noto_Sans_KR'] leading-3">리뷰수</div>
          </div>
        </div>
      </div >
    </>
  )
}
