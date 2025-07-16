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
    <div className="m-w-screen flex flex-col justify-center items-center">
      <nav className="w-full p-4 border-l border-r border-b border-gray-500 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-lg font-bold">
            <Link to="/">시고르토크</Link>
          </div>
          {isLoggedIn ? (
            <div className="flex gap-2">
              <Link
                to="/mypage"
                className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                마이페이지
              </Link>
              <button
                className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-700"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              로그인
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
