import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Logo from "../../assets/logo.svg";

export default function Nav() {
  const { isLoggedIn, removeToken } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <header className="w-full flex justify-center items-center py-3 md:py-4 bg-transparent px-3 md:px-0">
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
  );
}
