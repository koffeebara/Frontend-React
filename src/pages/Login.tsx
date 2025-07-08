export default function Login() {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4">
      {/* 간단한 소개 */}
      <div className="text-center mb-8">
        <h1 className="text-xl mb-2">시고르토크</h1>
        <div className="bg-gray-200 p-4">
          <p>시크해트크 img 위치</p>
        </div>
      </div>

      {/* 이메일 */}
      <div className="mb-4">
        <input
          className="w-full bg-gray-200 p-4 text-center"
          placeholder="이메일"
        />
      </div>

      {/* 비밀번호 */}
      <div className="mb-4">
        <input
          className="w-full bg-gray-200 p-4 text-center"
          placeholder="비밀번호"
          type="password"
        />
      </div>

      {/* 로그인 */}
      <div className="mb-8">
        <button className="w-full bg-blue-500 p-4 text-center cursor-pointer">
          로그인
        </button>
      </div>

      {/* 하단 텍스트 */}
      <div className="text-center text-gray-500 mb-8">
        <p>이미 계정이 있으신가요?</p>
        <p>
          <a href="#" className="text-blue-500">
            로그인
          </a>
        </p>
      </div>

      {/* 하단 배너 */}
      <div className="bg-gray-300 p-6 text-center">
        <p className="mb-2">간단한 소개 멘트 footer</p>
        <p>© coffeebara.</p>
      </div>
    </div>
  );
}
