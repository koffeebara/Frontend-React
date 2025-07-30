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
    <header className="w-full h-20 bg-gradient-to-r from-green-500 to-green-400">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-white text-2xl md:text-3xl font-bold">
          🌱 가상농장
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-green-100">
            작물 둘러보기
          </a>
          <a href="#" className="text-white hover:text-green-100">
            서비스 소개
          </a>
          <a href="#" className="text-white hover:text-green-100">
            고객후기
          </a>
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                className="bg-white/20 border border-white/30 px-4 py-2 rounded text-white hover:bg-white/30"
              >
                마이페이지
              </Link>
              <button
                className="bg-white/20 border border-white/30 px-4 py-2 rounded text-white hover:bg-white/30"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white/20 border border-white/30 px-4 py-2 rounded text-white hover:bg-white/30"
            >
              로그인
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
