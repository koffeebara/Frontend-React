export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* 메인 컨텐츠 */}
      <main className="flex-1 flex flex-col items-center px-2">
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">내가 꿈꾸는 삶과 대화하다</h2>
          <p className="mb-6 text-gray-700">
            내가 원하는 삶을 살고 있는 사람들은
            <br />
            어떤 생각을 가지고 어떤 행동을 하고 있을까?
          </p>
        </div>

        {/* 메인 이미지 영역 */}
        <div className="w-full max-w-xl h-64 bg-gray-300 flex items-center justify-center mb-6">
          img
        </div>

        {/* 시작하기 버튼 */}
        <button className="w-full max-w-xs bg-gray-200 py-3 mb-4 font-semibold">
          시작하기
        </button>

        <div className="mb-8 text-center text-gray-700">
          지금 카페 한잔으로, 내가 꿈꾸는 삶으로 한걸음 더 가까이 보세요.
        </div>

        {/* 카드 리스트 */}
        <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-bold mb-6">
            시고르토크에서 이런 걸 얻어갈 수 있어요.
          </h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            {/* 카드 1 */}
            <div className="flex-1 bg-gray-200 rounded p-4 flex flex-col items-center">
              <div className="w-32 h-24 bg-gray-300 mb-2 flex items-center justify-center">
                img
              </div>
              <div className="font-semibold mb-2">멘토와의 온라인 커피챗</div>
            </div>
            {/* 카드 2 */}
            <div className="flex-1 bg-gray-200 rounded p-4 flex flex-col items-center">
              <div className="w-32 h-24 bg-gray-300 mb-2 flex items-center justify-center">
                img
              </div>
              <div className="font-semibold mb-2">커피챗 내용 요약 리포트</div>
            </div>
            {/* 카드 3 */}
            <div className="flex-1 bg-gray-200 rounded p-4 flex flex-col items-center">
              <div className="w-32 h-24 bg-gray-300 mb-2 flex items-center justify-center">
                img
              </div>
              <div className="font-semibold mb-2">맞춤형 혜택 추천</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="bg-gray-200 px-6 py-2 rounded">시작하기</button>
            <button className="bg-gray-200 px-6 py-2 rounded">둘러보기</button>
          </div>
        </section>
      </main>

      {/* 하단 배너 */}
      <footer className="bg-gray-300 p-6 text-center mt-auto">
        <p className="mb-2">-간단한 소개 멘트-</p>
        <p>© coffeebara.</p>
      </footer>
    </div>
  );
}
