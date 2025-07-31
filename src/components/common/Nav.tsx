import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Nav() {
  const { isLoggedIn, removeToken } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <header className="w-full flex justify-center items-center py-4 bg-transparent">
      <div className="w-full max-w-[1200px] px-6 py-4 bg-mint-700 rounded-[999px] inline-flex justify-between items-center">
        {/* 좌측 여백/로고 */}
        <div className="w-28 h-12 p-2.5 inline-flex flex-col justify-center items-center gap-2.5">
          <Link
            to="/"
            className="text-common-000 text-2xl font-bold font-pretendard"
          >
            🌱 가상농장
          </Link>
        </div>
        {/* 우측 버튼(로그인/마이페이지/로그아웃) */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                className="px-4 py-1 bg-common-000 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 flex justify-center items-center"
              >
                <span className="text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                  마이페이지
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-common-000 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 flex justify-center items-center"
              >
                <span className="text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                  로그아웃
                </span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 bg-common-000 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-opacity-100/10 flex justify-center items-center"
            >
              <span className="text-gray-800 text-sm font-semibold font-pretendard leading-snug">
                로그인
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
