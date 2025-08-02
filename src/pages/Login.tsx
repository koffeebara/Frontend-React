import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import { authService } from "../../services/authService";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import backIcon from "../assets/backIcon.svg";

export default function Login() {
  const { email, setEmail, emailMessage, password, setPassword } =
    useFormValidation({ type: "login" });

  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [rememberLogin, setRememberLogin] = useState(false);

  const isValid = email && password && !emailMessage;

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
      navigate("/home");
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoginError("아이디 또는 비밀번호가 올바르지 않습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[1280px] max-w-[1280px] min-w-[480px] bg-green-000 inline-flex flex-col justify-start items-center">
      {/* Main Content */}
      <div className="w-full max-w-[1200px] px-4 pt-6 pb-15 bg-green-000 flex flex-col justify-start items-center gap-4">
        {/* Back Button */}
        <div className="self-stretch px-2 inline-flex justify-start items-center gap-1 p-1">
          <Link
            to="/"
            className="inline-flex items-center gap-1 cursor-pointer"
          >
            <div className="w-4 h-4 relative flex justify-center items-center overflow-hidden">
              <img src={backIcon} alt="Back" className="w-4 h-4" />
            </div>
            <div className="justify-start text-green-700 text-xs font-semibold leading-snug">
              홈으로 돌아가기
            </div>
          </Link>
        </div>

        {/* Login Container */}
        <div className="self-stretch inline-flex justify-start items-start">
          {/* Left Side - Welcome Section */}
          <div className="flex-1 self-stretch max-w-[480px] px-6 py-8 bg-mint-600 rounded-tl-3xl rounded-bl-3xl inline-flex flex-col justify-center items-center gap-8 border-l border-t border-b border-gray-200">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="w-16 h-16 bg-white/40 rounded-[999px] border border-white flex flex-col justify-center items-center">
                <div className="text-center justify-start text-gray-900 text-2xl font-bold leading-[40px]">
                  🌱
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-3">
                <div className="self-stretch text-center justify-start text-white text-3xl font-semibold leading-[48px]">
                  시고르팜에
                  <br />
                  오신 것을 환영합니다!
                </div>
                <div className="self-stretch text-center justify-start text-white text-base font-normal leading-6">
                  전문가와 함께 키우는 건강한 농작물!
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-white/40 rounded-[832.50px] border border-white/40 inline-flex flex-col justify-center items-center">
                  <div className="text-center justify-start text-gray-900 text-lg font-bold leading-normal">
                    📔
                  </div>
                </div>
                <div className="justify-start text-white text-sm font-normal leading-normal">
                  농작물의 성장 일지 확인!
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-white/40 rounded-[832.50px] border border-white/40 inline-flex flex-col justify-center items-center">
                  <div className="text-center justify-start text-gray-900 text-lg font-bold leading-normal">
                    👨‍🌾
                  </div>
                </div>
                <div className="justify-start text-white text-sm font-normal leading-normal">
                  검증된 농부와의 안전한 직거래!
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-white/40 rounded-[832.50px] border border-white/40 inline-flex flex-col justify-center items-center">
                  <div className="text-center justify-start text-gray-900 text-lg font-bold leading-normal">
                    📦
                  </div>
                </div>
                <div className="justify-start text-white text-sm font-normal leading-normal">
                  신선한 농작물 직배송!
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-white/40 rounded-[832.50px] border border-white/40 inline-flex flex-col justify-center items-center">
                  <div className="text-center justify-start text-gray-900 text-lg font-bold leading-normal">
                    🏠
                  </div>
                </div>
                <div className="justify-start text-white text-sm font-normal leading-normal">
                  농장 방문 체험 연계!
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 px-8 py-12 bg-white rounded-tr-3xl rounded-br-3xl inline-flex flex-col justify-start items-center gap-12 border-r border-t border-b border-gray-200">
            <div className="self-stretch flex flex-col justify-start items-center gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch text-center justify-start text-mint-700 text-3xl font-semibold leading-[48px]">
                  로그인
                </div>
                <div className="self-stretch text-center justify-start text-gray-700 text-base font-normal leading-6">
                  로그인하고, 농작물 위탁에 참여하세요!
                </div>
              </div>

              <form
                className="self-stretch flex flex-col justify-start items-center gap-4"
                onSubmit={handleSubmit}
              >
                {/* Email Field */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch inline-flex justify-start items-start">
                    <div className="justify-start text-gray-900 text-base font-semibold leading-6">
                      이메일
                    </div>
                  </div>
                  <input
                    type="email"
                    className={`self-stretch px-6 py-4 bg-gray-50 rounded-2xl border ${
                      emailMessage ? "border-red-500" : "border-black/10"
                    } text-sm font-normal leading-normal placeholder-gray-600`}
                    placeholder="이메일 주소를 입력해주세요."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailMessage && (
                    <div className="pl-0.5 inline-flex justify-center items-center gap-2.5">
                      <div className="justify-start text-red-500 text-xs font-light leading-none">
                        {emailMessage}
                      </div>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch inline-flex justify-start items-start">
                    <div className="justify-start text-gray-900 text-base font-semibold leading-6">
                      비밀번호
                    </div>
                  </div>
                  <input
                    type="password"
                    className={`self-stretch px-6 py-4 bg-gray-50 rounded-2xl border ${
                      loginError ? "border-red-500" : "border-black/10"
                    } text-sm font-normal leading-normal placeholder-gray-600`}
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {loginError && (
                    <div className="pl-0.5 inline-flex justify-center items-center gap-2.5">
                      <div className="justify-start text-red-500 text-xs font-light leading-none">
                        {loginError}
                      </div>
                    </div>
                  )}
                </div>

                {/* Remember Login Checkbox */}
                <div className="self-stretch h-6 px-1 inline-flex justify-start items-center gap-3">
                  <div className="flex justify-start items-start">
                    <input
                      type="checkbox"
                      id="rememberLogin"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(e.target.checked)}
                      className="w-6 h-6 rounded border-[1.50px] border-gray-500"
                    />
                  </div>
                  <label
                    htmlFor="rememberLogin"
                    className="flex justify-start items-center gap-1 cursor-pointer"
                  >
                    <div className="justify-start text-gray-900 text-sm font-semibold leading-normal">
                      로그인 상태 유지
                    </div>
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className={`self-stretch px-6 py-4 rounded-2xl text-sm font-semibold leading-normal transition-colors ${
                    isValid && !isLoading
                      ? "bg-mint-700 text-white hover:bg-mint-800"
                      : "bg-gray-300 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? "로그인 중..." : "로그인"}
                </button>
              </form>
            </div>

            {/* Bottom Links */}
            <div className="w-56 flex flex-col justify-start items-center gap-2">
              <div className="self-stretch h-6 text-center justify-start text-green-700 text-sm font-semibold leading-normal cursor-pointer">
                비밀번호 찾기
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="justify-start text-gray-700 text-sm font-normal leading-normal">
                  계정이 없으신가요?
                </div>
                <Link
                  to="/signup"
                  className="text-right justify-start text-green-700 text-sm font-semibold leading-normal p-2"
                >
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
