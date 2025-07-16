import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Mypage() {
  const removeToken = useAuthStore((state) => state.removeToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center px-2">
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold mb-4">마이페이지</h1>
          <p>여기에 사용자 정보를 표시합니다.</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full max-w-xs bg-red-500 text-white py-3 mb-4 font-semibold rounded hover:bg-red-600"
        >
          로그아웃
        </button>
      </main>
    </div>
  );
}
