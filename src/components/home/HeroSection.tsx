
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <section className="w-full max-w-[1200px] px-6 pt-24 pb-16 flex flex-col items-center gap-8 bg-green-000 ">
      <h1 className="text-mint-900 text-[40px] md:text-[48px] font-bold leading-tight text-center">
        농부와 함께 키우는
        <br />
        믿음직한 농작물
      </h1>
      <p className="text-green-600 text-lg md:text-xl text-center">
        농부의 신선한 농작물을 펀딩하고, 성장 과정을 지켜보세요 🌱
      </p>
      <button
        onClick={handleStartClick}
        className="mt-4 px-10 py-4 bg-mint-600 rounded-full shadow-md hover:bg-mint-700 transition text-common-000 text-lg font-semibold"
      >
        시작하기
      </button>
    </section>
  );
};

const HeroSection = () => (
  <section className="w-full max-w-[1200px] px-6 pt-24 pb-16 flex flex-col items-center gap-8 bg-green-000 ">
    <h1 className="text-mint-900 text-[40px] md:text-[48px] font-bold leading-tight text-center">
      농부와 함께 키우는
      <br />
      믿음직한 농작물
    </h1>
    <p className="text-mint-600 text-lg md:text-xl text-center">
      농부의 신선한 농작물을 펀딩하고, 성장 과정을 지켜보세요 🌱
    </p>
    <button className="w-60 mt-4 px-10 py-4 bg-mint-600 rounded-lg shadow-md hover:bg-mint-700 transition text-common-000 text-lg font-semibold">
      시작하기
    </button>
  </section>
);


export default HeroSection;
