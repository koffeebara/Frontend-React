import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import { authService } from "../../services/authService";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

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

  const { setToken } = useAuthStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    setSignupError("");

    try {
      console.log("회원가입 시도:", { email, password, name });
      const signupResponse = await authService.signup({
        email,
        password,
        name,
      });
      console.log("회원가입 성공:", signupResponse);

      // 회원가입 후 자동 로그인
      const loginResponse = await authService.login({ email, password });
      console.log("자동 로그인 성공:", loginResponse);
      setToken(loginResponse.accessToken);
      navigate("/");
    } catch (error) {
      console.error("회원가입 실패:", error);
      const errorMessage =
        error instanceof Error ? error.message : "회원가입에 실패했습니다.";
      setSignupError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4">
      {/* 간단한 소개 */}
      <div className="text-center mb-8">
        <h1 className="text-xl mb-2">시고르토크</h1>
        <div className="bg-gray-200 p-4">
          <p>시고르토크 img 위치</p>
        </div>
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
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

        {/* 회원가입 에러 메시지 */}
        {signupError && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {signupError}
          </div>
        )}

        {/* 회원가입 */}
        <div className="mt-8">
          <button
            className={`w-full p-4 text-center cursor-pointer 
            ${isValid && !isLoading ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
            disabled={!isValid || isLoading}
            type="submit"
          >
            {isLoading ? "회원가입 중..." : "회원가입"}
          </button>
        </div>
      </form>

      {/* 하단 텍스트 */}
      <div className="flex justify-center text-gray-500 mb-8">
        <p>이미 계정이 있으신가요?</p>
        <p>
          <Link to="/login" className="text-blue-500">
            로그인
          </Link>
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
