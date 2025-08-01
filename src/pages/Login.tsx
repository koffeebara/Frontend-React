import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks/useFormValidation";
import { authService } from "../../services/authService";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import IconLabel from "../components/IconLabel";

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
    <>
      <div className="w-full mx-auto  px-8">
        {/* 뒤로 가기 */}
        <div className='flex flex-col w-full h-max items-center '>
          <p className='text-green-700 w-full text-left cursor-pointer m-4'>&lt; 홈으로 돌아가기</p>
        </div>
        <div className="flex flex-col w-full h-max justify-center md:flex-row  ">

          {/* 왼쪽 */}
          <div className="flex flex-col items-center w-full md:w-[350px] h-max bg-mint-600 rounded-t-2xl 
        md:h-[690px] md:rounded-t-none md:rounded-l-2xl">
            <img src="/test_img.png" alt="test" className="w-30 m-10" />
            <div className="w-[300px]">
              <p className="title-1 text-white text-center">시고르팜에 오신 것을 환영합니다!</p>
              <p className="text-green-200 text-center m-4">전문가와 함께 키우는 건강한 농작물!</p>
            </div>

            <div className="w-[250px] m-4 flex-col justify-start hidden md:flex">
              <IconLabel icon="🌾" text="실시간 재배 일지 확인" />
              <IconLabel icon="👩‍🌾" text="검증된 농부와 직거래" />
              <IconLabel icon="📦" text="신선한 농작물 직배송" />
              <IconLabel icon="🏠" text="농장 방문 체험 기회" />
            </div>

          </div>
          {/* 오른쪽 */}
          <div className="flex flex-1 flex-col w-full h-[690px] bg-white rounded-b-2xl items-center
        md:rounded-t-none md:rounded-r-2xl mb-8">
            <div className="flex flex-col items-center">
              <p className="title-1 text-green-700 mt-8">로그인</p>
              <p className="text-gray-700 m-2">로그인하고, 농작물 위탁에 참여하세요!</p>

            </div>
            <div className="w-full px-8">
              <form className="mt-8 w-full" onSubmit={handleSubmit}>
                {/* 이메일 */}
                <div className="mt-4 w-full">
                  <p className="mb-2 font-bold">이메일</p>
                  <input
                    type="email"
                    className="w-full h-[50px] bg-gray-100 p-4 rounded-lg 
                  border border-gray-300 text-left"
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {emailMessage && (
                  <p className="ml-4 text-sm text-red-500">{emailMessage}</p>
                )}

                {/* 비밀번호 */}
                <div className="mt-4">
                  <p className="mb-2 font-bold">비밀번호</p>
                  <input
                    className="w-full h-[50px] bg-gray-100 p-4 rounded-lg 
                  border border-gray-300 text-left"
                    placeholder="비밀번호를 입력하세요"
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

                <input type="checkbox" className="mr-2 mt-4" /><span> 로그인 상태 유지 </span>
                {/* 로그인 버튼 */}
                <div className="mt-8">
                  <button
                    className={`w-full h-[50px] p-4 text-center cursor-pointer rounded-lg
            ${isValid && !isLoading ? "bg-mint-700 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
                    disabled={!isValid || isLoading}
                    type="submit"
                  >
                    {isLoading ? "로그인 중..." : "로그인"}
                  </button>
                </div>
              </form>
            </div>
            {/* 하단 텍스트 */}
            <div className="flex flex-1 flex-col justify-center text-gray-500 mb-8 gap-8">
              <div className="flex-grow" />
              <div className="flex justify-center gap-16">
                <p>계정이 없으신가요?</p>
                <p>
                  <Link to="/signup" className="text-green-700">
                    회원가입
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="w-full max-w-md mx-auto mt-8 p-4">
    //   {/* 간단한 소개 */}
    //   <div className="text-center mt-8">
    //     <h1 className="text-xl mb-2">시고르토크</h1>
    //     <div className="bg-gray-200 p-4">
    //       <p>시고르토크 img 위치</p>
    //     </div>
    //   </div>
    //   <form className="mt-8" onSubmit={handleSubmit}>
    //     {/* 이메일 */}
    //     <div className="mt-4">
    //       <input
    //         type="email"
    //         className="w-full bg-gray-200 p-4 text-center"
    //         placeholder="이메일"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     {emailMessage && (
    //       <p className="text-center text-sm text-red-500">{emailMessage}</p>
    //     )}

    //     {/* 비밀번호 */}
    //     <div className="mt-4">
    //       <input
    //         className="w-full bg-gray-200 p-4 text-center"
    //         placeholder="비밀번호"
    //         type="password"
    //         value={password}
    //         autoComplete="current-password"

    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>

    //     {/* 로그인 에러 메시지 */}
    //     {loginError && (
    //       <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
    //         {loginError}
    //       </div>
    //     )}

    //     {/* 로그인 버튼 */}
    //     <div className="mt-8">
    //       <button
    //         className={`w-full p-4 text-center cursor-pointer 
    //         ${isValid && !isLoading ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
    //         disabled={!isValid || isLoading}
    //         type="submit"
    //       >
    //         {isLoading ? "로그인 중..." : "로그인"}
    //       </button>
    //     </div>
    //   </form>

    //   {/* 하단 텍스트 */}
    //   <div className="flex justify-center text-gray-500 mb-8">
    //     <p>계정이 없으신가요?</p>
    //     <p>
    //       <Link to="/signup" className="text-blue-500">
    //         회원가입
    //       </Link>
    //     </p>
    //   </div>

    //   {/* 하단 배너 */}
    //   <div className="bg-gray-300 p-6 text-center">
    //     <p className="mb-2">간단한 소개 멘트 footer</p>
    //     <p>© coffeebara.</p>
    //   </div>
    // </div>
  );
}
