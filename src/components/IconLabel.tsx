type IconLabelProps = {
  icon: string;
  text: string;
}

export default function IconLabel({ icon, text }: IconLabelProps) {
  return (
    <div className="flex justify-start items-center gap-4 m-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30">
        {icon}
      </div>
      <p className="text-white">{text}</p>
    </div>
  );
}
