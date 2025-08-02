import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

export default function Mypage() {
  const { removeToken } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"진행중" | "수확 완료">("진행중");

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <>
      <div className="w-full min-h-screen  flex flex-col items-center py-6">
        {/* 프로필 및 통계 */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl flex flex-row items-center justify-between gap-8 px-8 py-8 mb-8">
          {/* 프로필 */}
          <div className="flex items-center gap-6 w-auto justify-start">
            <div className="w-20 h-20 rounded-full bg-cool-gray-200 flex items-center justify-center  overflow-hidden">
              <img
                src="/src/assets/agriculture-6749210_1280.jpg"
                alt="프로필"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-mint-700 text-2xl font-bold">김농부</div>
              <div className="text-cool-gray-600 text-xs font-light">
                kimfarmer@email.com
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
                className="flex-1 min-w-[100px] px-4 py-4 bg-green-000 rounded-2xl flex flex-col items-center"
              >
                <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
                <div className="text-green-700 text-xl font-bold">
                  {stat.label === "수확 완료"
                    ? "3"
                    : stat.label === "참여 위탁"
                      ? "7"
                      : "2"}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 탭 버튼 */}
        <div className="w-full max-w-5xl mx-auto flex gap-4 justify-center mb-6">
          <button
            onClick={() => setActiveTab("진행중")}
            className={`flex-1 max-w-xs px-6 py-2 rounded-lg font-semibold shadow transition ${activeTab === "진행중"
              ? "bg-mint-600 text-white hover:bg-mint-700"
              : "bg-cool-gray-100 text-gray-800 hover:bg-cool-gray-200"
              }`}
          >
            진행중
          </button>
          <button
            onClick={() => setActiveTab("수확 완료")}
            className={`flex-1 max-w-xs px-6 py-2 rounded-lg font-semibold shadow transition ${activeTab === "수확 완료"
              ? "bg-mint-600 text-white hover:bg-mint-700"
              : "bg-cool-gray-100 text-gray-800 hover:bg-cool-gray-200"
              }`}
          >
            수확 완료
          </button>
        </div>
        {/* 카드 리스트 */}
        <div className="w-full max-w-5xl mx-auto flex flex-row gap-6 mb-10 items-stretch justify-center">
          {[
            {
              id: 1,
              title: "유기농 토마토 위탁재배",
              farmer: "이농부",
              location: "충남 논산시",
              specialty: "무농약",
              status: "재배중",
              progress: 75,
              image: "/src/assets/tomato.webp",
              category: "진행중",
            },
            {
              id: 2,
              title: "친환경 상추 공동구매",
              farmer: "박농부",
              location: "경기 양평군",
              specialty: "유기농",
              status: "모집중",
              progress: 45,
              image: "/src/assets/chinese-cabbage-5798137_1280.jpg",
              category: "진행중",
            },
            {
              id: 3,
              title: "제주 당근 위탁재배",
              farmer: "최농부",
              location: "제주 서귀포시",
              specialty: "친환경",
              status: "수확완료",
              progress: 100,
              image: "/src/assets/carrot-1565597_1280.jpg",
              category: "수확 완료",
            },
            {
              id: 4,
              title: "유기농 옥수수 재배",
              farmer: "김농부",
              location: "강원 횡성군",
              specialty: "무농약",
              status: "수확완료",
              progress: 100,
              image: "/src/assets/corn.webp",
              category: "수확 완료",
            },
            {
              id: 5,
              title: "친환경 사과 위탁재배",
              farmer: "정농부",
              location: "경북 안동시",
              specialty: "유기농",
              status: "수확완료",
              progress: 100,
              image: "/src/assets/apples-6947409_1280.jpg",
              category: "수확 완료",
            },
          ]
            .filter((project) => project.category === activeTab)
            .map((project) => (
              <div
                key={project.id}
                className="flex-1 min-w-[260px] max-w-md bg-white rounded-2xl shadow-md flex flex-col gap-4 p-6 relative"
              >
                <div
                  className="h-32 rounded-t-2xl bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-mint-700 text-xl font-bold">
                      {project.title}
                    </div>
                    <div className="flex gap-2 items-center text-xs text-gray-600">
                      <span>📍</span>
                      <span>{project.farmer}</span>
                      <span className="mx-1">|</span>
                      <span>{project.location}</span>
                      <span className="mx-1">|</span>
                      <span>{project.specialty}</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex gap-1 text-mint-900">
                        <span>위탁재배</span>
                        <span>{project.status}</span>
                      </div>
                      <div className="flex gap-1 text-mint-700 font-semibold">
                        <span>{project.progress}</span>
                        <span>%</span>
                      </div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-mint-500/70 overflow-hidden flex">
                      <div
                        className="bg-mint-500 h-2 rounded-l-full"
                        style={{ width: `${project.progress}%` }}
                      />
                      <div className="bg-cool-gray-100 h-2 rounded-r-full flex-1" />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => navigate(`/cropinfo/${project.id}`)}
                      className="flex-1 px-4 py-2 bg-blue-100 text-gray-800 rounded font-semibold hover:bg-blue-200 transition"
                    >
                      상세정보
                    </button>
                  </div>
                </div>
                {/* 상태별 뱃지 */}
                {project.status === "재배중" && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-green-100 rounded-full text-green-900 text-sm font-semibold shadow">
                    재배중
                  </div>
                )}
                {project.status === "모집중" && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-red-100 rounded-full text-red-900 text-sm font-semibold shadow">
                    모집중
                  </div>
                )}
                {project.status === "수확완료" && (
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
            {[
              {
                id: 0,
                icon: "🚨",
                title: "재배 상태 업데이트",
                content: "유기농 토마토가 수확 시기에 접어들었습니다.",
                time: "2시간 전",
                bgColor: "bg-red-100",
                textColor: "text-red-700",
              },
              {
                id: 1,
                icon: "💰",
                title: "수익금 정산 완료",
                content: "제주 당근 위탁재배 수익금이 입금되었습니다.",
                time: "1일 전",
                bgColor: "bg-orange-100",
                textColor: "text-orange-700",
              },
              {
                id: 2,
                icon: "📦",
                title: "배송 시작 알림",
                content: "친환경 상추가 오늘 배송 시작됩니다.",
                time: "3일 전",
                bgColor: "bg-blue-100",
                textColor: "text-blue-700",
              },
            ].map((notification) => (
              <div
                key={notification.id}
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition"
                onClick={() => {
                  if (notification.id === 0) {
                    navigate("/cropinfo/1"); // 토마토 프로젝트 상세 페이지
                  } else if (notification.id === 1) {
                    navigate("/cropinfo/3"); // 당근 프로젝트 상세 페이지
                  } else if (notification.id === 2) {
                    navigate("/cropinfo/2"); // 상추 프로젝트 상세 페이지
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold ${notification.bgColor} ${notification.textColor}`}
                  >
                    {notification.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-900 text-lg font-semibold">
                      {notification.title}
                    </div>
                    <div className="text-cool-gray-600 text-base">
                      {notification.content}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <span>{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate("/list")}
              className="px-6 py-3 bg-mint-600 text-white rounded-lg font-semibold hover:bg-mint-700 transition"
            >
              다른 작물 둘러보기
            </button>
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
