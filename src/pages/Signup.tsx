import { useFormValidation } from "../hooks/useFormValidation";

export default function Signup() {
  const {
    email,
    setEmail,
    emailMessage,
    password,
    setPassword,
    passwordMessage,
    name,
    setName,
    nameMessage,
  } = useFormValidation({ type: "signup" });

  const isValid =
    email &&
    password &&
    name &&
    !emailMessage &&
    !passwordMessage &&
    !nameMessage;

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4">
      {/* 간단한 소개 */}
      <div className="text-center mb-8">
        <h1 className="text-xl mb-2">시고르토크</h1>
        <div className="bg-gray-200 p-4">
          <p>시고르토크 img 위치</p>
        </div>
      </div>

      {/* 이메일 */}
      <div className="mt-4">
        <input
          type="email"
          className="w-full bg-gray-200 p-4 text-center"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {emailMessage && (
        <p className="text-center text-sm text-red-500">{emailMessage}</p>
      )}

      {/* 비밀번호 */}
      <div className="mt-4">
        <input
          className="w-full bg-gray-200 p-4 text-center"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {password.length > 0 && passwordMessage && (
        <p className="text-center text-sm text-red-500">{passwordMessage}</p>
      )}

      {/* 이름 */}
      <div className="mt-4">
        <input
          className="w-full bg-gray-200 p-4 text-center"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {nameMessage && (
        <p className="text-center text-sm text-red-500">{nameMessage}</p>
      )}

      {/* 회원가입 */}
      <div className="mt-8">
        <button
          className={`w-full p-4 text-center cursor-pointer 
            ${isValid ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
          disabled={!isValid}
        >
          회원가입
        </button>
      </div>

      {/* 하단 텍스트 */}
      <div className="flex justify-center text-gray-500 mb-8">
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
