import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import { authService } from "../../services/authService";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function Login() {
  const {
    email,
    setEmail,
    emailMessage,
    password,
    setPassword,
    passwordMessage,
  } = useFormValidation({ type: "login" });

  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const isValid = email && password && !emailMessage && !passwordMessage;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    setLoginError("");

    try {
      console.log("로그인 시도:", { email, password });
      const response = await authService.login({ email, password });
      console.log("로그인 성공:", response);
      setToken(response.accessToken);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoginError("아이디 또는 비밀번호가 올바르지 않습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4">
      {/* 간단한 소개 */}
      <div className="text-center mt-8">
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
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 로그인 에러 메시지 */}
        {loginError && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {loginError}
          </div>
        )}

        {/* 로그인 버튼 */}
        <div className="mt-8">
          <button
            className={`w-full p-4 text-center cursor-pointer 
            ${isValid && !isLoading ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
            disabled={!isValid || isLoading}
            type="submit"
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </div>
      </form>

      {/* 하단 텍스트 */}
      <div className="flex justify-center text-gray-500 mb-8">
        <p>계정이 없으신가요?</p>
        <p>
          <Link to="/signup" className="text-blue-500">
            회원가입
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
