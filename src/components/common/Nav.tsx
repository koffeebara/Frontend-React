import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Logo from "../../assets/logo.svg";
import { useRef } from "react";

export default function Nav() {
  const { isLoggedIn, removeToken } = useAuthStore();
  const navigate = useNavigate();
  const logoutTimeoutRef = useRef<number | null>(null);
  const isWaitingForSecondClick = useRef<boolean>(false);

  const handleLogout = () => {
    if (isWaitingForSecondClick.current) {
      // 두 번째 클릭 - 실제 로그아웃 실행
      if (logoutTimeoutRef.current) {
        clearTimeout(logoutTimeoutRef.current);
      }
      removeToken();
      navigate("/");
      isWaitingForSecondClick.current = false;
      toast.success("로그아웃되었습니다.");
    } else {
      // 첫 번째 클릭 - 확인 메시지 표시
      isWaitingForSecondClick.current = true;
      toast("3초 안에 한 번 더 클릭하시면 로그아웃됩니다.", {
        duration: 3000,
        icon: "⚠️",
        style: {
          background: "#e9ffd5",
          color: "#000",
          border: "1px solid #309d05",
        },
      });

      // 3초 후 대기 상태 리셋
      logoutTimeoutRef.current = setTimeout(() => {
        isWaitingForSecondClick.current = false;
      }, 3000);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent flex justify-center items-center pt-4 px-0 z-50">
        <div className="w-full max-w-[1200px] px-6 py-2 bg-mint-700 rounded-[999px] inline-flex justify-between items-center shadow">
          {/* 좌측 여백/로고 */}
          <div className="w-28 h-12 p-2.5 inline-flex flex-col justify-center items-center gap-2.5">
            <Link
              to="/"
              className="text-white text-2xl font-bold font-pretendard"
            >
              <img
                src={Logo}
                alt="로고"
                className="w-full h-full object-contain "
              />
            </Link>
          </div>

          <div className="flex justify-end items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link
                  to="/mypage"
                  className="px-4 py-1 bg-white rounded-[999px] border border-black/10 flex justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                    마이페이지
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-white rounded-[999px] border border-black/10 flex justify-center items-center"
                >
                  <div className="text-center justify-start text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                    로그아웃
                  </div>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1 bg-white rounded-[999px] border border-black/10 flex justify-center items-center"
              >
                <div className="text-center justify-start text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                  로그인
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
      {/* Toaster는 App.tsx에서 전역으로 렌더링 */}
    </>
  );
}
