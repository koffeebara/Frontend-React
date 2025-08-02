interface SubscribeSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleEmailSubmit: (e: React.FormEvent) => void;
}

const SubscribeSection = ({
  email,
  setEmail,
  handleEmailSubmit,
}: SubscribeSectionProps) => (
  <section className="w-full max-w-[1200px] px-6 py-12 flex flex-col items-center gap-6 bg-orange-000 rounded-3xl mt-12 mb-16">
    <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
      농장 소식 미리받기
    </h2>
    <p className="text-cool-gray-600 text-base text-center">
      새로운 농작물과 특별 혜택 소식을 가장 먼저 받아보세요!
    </p>
    <form
      onSubmit={handleEmailSubmit}
      className="w-full max-w-[480px] flex gap-3 mt-2"
      noValidate
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 주소를 입력하세요"
        className="flex-1 px-6 py-3 bg-common-000 rounded-full outline-1 outline-offset-[-1px] outline-green-400 text-base"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-600 rounded-full outline-1 outline-offset-[-1px] outline-opacity-100/10 text-common-000 font-semibold hover:bg-green-700 transition"
      >
        구독하기
      </button>
    </form>
  </section>
);

export default SubscribeSection;
