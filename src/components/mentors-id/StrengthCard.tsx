type StrengthCardProps = {
  image: string;
  content: string;
};

export default function StrengthCard({ image, content }: StrengthCardProps) {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <div className="w-full aspect-[4/3] rounded-lg bg-gray-200"></div>
        <div className="cb-p1">{content}</div>

      </div>
    </>
    // <div className="self-stretch inline-flex flex-col justify-start items-center gap-3">
    //   <div data-scale="round" className="self-stretch h-64 relative bg-opacity-200/10 rounded-lg border border-opacity-200/10" >
    //     <div className="self-stretch px-1 inline-flex justify-center items-center">
    //       <div className="kb-p1">{content}</div>
    //     </div>
    //   </div>
    // </div>
  )
}
