export default function Footer() {
  return (
    <footer className="w-full self-stretch py-7 bg-mint-700 inline-flex flex-col justify-end items-center gap-4">
      <div className="text-center text-gray-000 text-xs font-light font-['pretendard'] leading-none">
        나 대신 전문가가 키워주는 신선한 농작물!
        <br />
        내가 펀딩한 농작물의 성장을 온라인으로 지켜보고, 집으로 배송 받아보세요.
        <br />
        언제 어디서나 믿음직한 농작물 구매, 성장을 기록하는 시고르팜 🌱
      </div>
      <div className="w-36 h-3.5 relative">
        <div className="flex items-center justify-center text-center text-mint-900 text-[10px] font-['pretendard'] leading-none">
          © Team. coffeebara ☕️
        </div>
      </div>
    </footer>
  );
}
