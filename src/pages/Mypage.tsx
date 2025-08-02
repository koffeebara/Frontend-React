import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export default function Mypage() {
  const { removeToken } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    toast.success("로그아웃되었습니다.");
    navigate("/");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-green-50 flex flex-col items-center py-6">
        {/* 프로필 및 통계 */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md flex flex-row items-center justify-between gap-8 px-8 py-8 mb-8">
          {/* 프로필 */}
          <div className="flex items-center gap-6 w-auto justify-start">
            <div className="w-20 h-20 rounded-full bg-cool-gray-200 flex items-center justify-center border border-gray-200" />
            <div className="flex flex-col gap-1.5">
              <div className="text-mint-700 text-2xl font-bold">이름</div>
              <div className="text-cool-gray-600 text-xs font-light">
                0000@email.com
              </div>
            </div>
          </div>
          {/* 통계 */}
          <div className="flex flex-1 gap-4 w-auto justify-end mt-0">
            {(
              [
                { label: "수확 완료", color: "green" },
                { label: "참여 위탁", color: "green" },
                { label: "진행중", color: "green" },
              ] as const
            ).map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[100px] px-4 py-4 bg-green-100 rounded-2xl border border-green-200 flex flex-col items-center"
              >
                <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
                <div className="text-green-700 text-xl font-bold">000</div>
              </div>
            ))}
          </div>
        </div>
        {/* 탭 버튼 */}
        <div className="w-full max-w-5xl mx-auto flex gap-4 justify-center mb-6">
          <button className="flex-1 max-w-xs px-6 py-2 bg-mint-600 text-white rounded-lg font-semibold shadow hover:bg-mint-700 transition">
            진행중
          </button>
          <button className="flex-1 max-w-xs px-6 py-2 bg-cool-gray-100 text-gray-800 rounded-lg font-semibold shadow hover:bg-cool-gray-200 transition">
            수확 완료
          </button>
        </div>
        {/* 카드 리스트 */}
        <div className="w-full max-w-5xl mx-auto flex flex-row gap-6 mb-10 items-stretch justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex-1 min-w-[260px] max-w-md bg-white rounded-2xl shadow-md flex flex-col gap-4 p-6 relative"
            >
              <div className="h-32 bg-opacity-5 rounded-t-2xl bg-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-mint-700 text-xl font-bold">title</div>
                  <div className="flex gap-2 items-center text-xs text-gray-600">
                    <span>📍</span>
                    <span>이름</span>
                    <span className="mx-1">|</span>
                    <span>사는 지역</span>
                    <span className="mx-1">|</span>
                    <span>특이사항</span>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-1 text-mint-900">
                      <span>텍스트</span>
                      <span>진행중</span>
                    </div>
                    <div className="flex gap-1 text-mint-700 font-semibold">
                      <span>000</span>
                      <span>%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 rounded-full bg-mint-500/70 overflow-hidden flex">
                    <div
                      className="bg-mint-500 h-2 rounded-l-full"
                      style={{ width: "50%" }}
                    />
                    <div className="bg-cool-gray-100 h-2 rounded-r-full flex-1" />
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  <button className="flex-1 px-4 py-2 bg-blue-100 text-gray-800 rounded font-semibold hover:bg-blue-200 transition">
                    상세정보
                  </button>
                  <button className="flex-1 px-4 py-2 bg-cool-gray-100 text-gray-800 rounded font-semibold hover:bg-cool-gray-200 transition">
                    참여취소
                  </button>
                </div>
              </div>
              {/* 상태별 뱃지 */}
              {i === 0 && (
                <div className="absolute top-4 right-4 px-4 py-1 bg-green-100 rounded-full text-green-900 text-sm font-semibold shadow">
                  재배중
                </div>
              )}
              {i === 1 && (
                <div className="absolute top-4 right-4 px-4 py-1 bg-red-100 rounded-full text-red-900 text-sm font-semibold shadow">
                  모집중
                </div>
              )}
              {i === 2 && (
                <div className="absolute top-4 right-4 px-4 py-1 bg-blue-100 rounded-full text-blue-900 text-sm font-semibold shadow">
                  수확완료
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 최근 알림 */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-10">
          <div className="text-gray-900 text-2xl font-bold mb-6">최근 알림</div>
          <div className="flex flex-col gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold ${
                      i === 0
                        ? "bg-red-100 text-red-700"
                        : i === 1
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {i === 0 ? "🚨" : i === 1 ? "💰" : "📦"}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-900 text-lg font-semibold">
                      texttext
                    </div>
                    <div className="text-cool-gray-600 text-base">texttext</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <span>0</span>
                  <span>시간 전</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p
          className="cursor-pointer text-gray-500 text-sm hover:text-green-700 transition p-2"
          onClick={handleLogout}
        >
          로그아웃
        </p>
      </div>
    </>
  );
}
