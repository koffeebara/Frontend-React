import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Logo from "../../assets/logo.svg";
import toast, { Toaster } from "react-hot-toast";
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#374151",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            padding: "12px 16px",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        }}
      />
      <header className="w-full bg-green-000 flex justify-center items-center py-3 md:py-4 px-3 md:px-0">
        <div className="w-full max-w-[1200px] px-4 md:px-6 py-3 md:py-4 bg-mint-700 rounded-[999px] flex justify-between items-center">
          {/* 좌측 여백/로고 */}
          <div className="w-20 md:w-28 h-10 md:h-12 p-2 md:p-2.5 flex flex-col justify-center items-center gap-2.5">
            <Link
              to="/"
              className="text-common-000 text-xl md:text-2xl font-bold font-pretendard"
            >
              <img
                src={Logo}
                alt="로고"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/mypage"
                  className="px-3 md:px-4 py-1 bg-common-000 rounded-[999px] border border-gray-200 flex justify-center items-center"
                >
                  <span className="text-gray-800 text-xs md:text-sm font-semibold font-pretendard leading-snug">
                    마이페이지
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:flex px-3 md:px-4 py-1 bg-common-000 rounded-[999px] border border-gray-200 justify-center items-center"
                >
                  <span className="text-gray-800 text-xs md:text-sm font-semibold font-pretendard leading-snug">
                    로그아웃
                  </span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3 md:px-4 py-1 bg-common-000 rounded-[999px] border border-gray-200 flex justify-center items-center"
              >
                <span className="text-gray-800 text-xs md:text-sm font-semibold font-pretendard leading-snug">
                  로그인
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
