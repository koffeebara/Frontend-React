import React, { useState } from "react";
import { Link } from "react-router-dom";
const CropInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"details" | "guide" | "reviews">(
    "details"
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* 브레드크럼 */}
      <div className="flex max-w-[1168px] w-full items-center text-mint-700 gap-2 p-6">
        <Link to="/">홈</Link>
        <span className="text-mint-600">&gt;</span>
        <Link to="/list">작물 목록</Link>
        <span className="text-mint-600">&gt;</span>
        <span className="text-mint-700">상세 정보</span>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-[1168px] px-4 pb-8 flex flex-row justify-start items-start gap-8">
        {/* 이미지 섹션 */}
        <div className="w-full flex-1 max-w-[480px] min-w-96 flex flex-col gap-6">
          <div className="w-full aspect-[4/3] h-auto bg-gray-100 rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gray-100"></div>
          </div>
          <div className="px-1 flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-100"></div>
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-100"></div>
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-100"></div>
            </div>
          </div>
        </div>

        {/* 정보 섹션 */}
        <div className="w-full flex-1 min-w-96 flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="pt-2">
              <h1 className="text-gray-900 text-3xl font-bold leading-[48px]">
                유기농 토마토
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              {/* 가격 정보 */}
              <div className=" py-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-mint-700 text-[32px] font-bold">
                  150,000원
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500 text-sm">단위</span>
                    <span className="text-gray-500 text-sm">10kg</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 text-sm">배송비</span>
                    <span className="text-gray-600 text-sm">3,000원</span>
                  </div>
                </div>
              </div>

              {/* 농부 정보 */}
              <div className="px-6 py-4 border border-gray-200 rounded-lg flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span className="text-gray-800 text-base font-semibold">
                    김농부
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <span className="text-gray-600 text-xs">📍</span>
                    <span className="text-gray-600 text-xs">
                      충청남도 논산시
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center gap-0.5">
                    <span className="text-gray-600 text-xs">⭐️</span>
                    <span className="text-gray-600 text-xs">유기농 인증</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 태그 */}
            <div className="flex items-start gap-3">
              <div className="px-4 py-1 bg-green-000 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  유기농
                </span>
              </div>
              <div className="px-4 py-1 bg-green-000 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  토마토
                </span>
              </div>
              <div className="px-4 py-1 bg-green-000 rounded-full border border-green-200 flex items-center gap-0.5">
                <span className="text-green-900 text-sm">#</span>
                <span className="text-green-900 text-sm font-semibold">
                  논산
                </span>
              </div>
            </div>
          </div>

          {/* 참여하기 버튼 */}
          <div className="w-full max-w-[800px]">
            <button className="w-full px-10 py-4 bg-mint-600 rounded-lg text-white text-base font-semibold">
              지금 참여하기
            </button>
          </div>
        </div>
      </div>

      {/* 참여 현황 */}
      <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-5">
        <div className="p-6 bg-green-000 flex flex-col gap-4">
          <div className="flex justify-center items-center gap-1">
            <span className="text-gray-800 text-xl font-bold">🔥 지금</span>
            <span className="text-gray-800 text-xl font-bold">
              25명이 참여 중 🔥
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">참여자</span>
              <span className="text-green-700 text-4xl font-semibold">25</span>
            </div>
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">위탁 완료</span>
              <span className="text-green-700 text-4xl font-semibold">18</span>
            </div>
            <div className="flex-1 px-4 pt-4 pb-3 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-gray-700 text-sm">남은 날짜</span>
              <span className="text-green-700 text-4xl font-semibold">45</span>
            </div>
          </div>
        </div>

        {/* 달성률 */}
        {/* <div className="w-full max-w-[800px] mx-auto flex flex-col gap-2">
          <div className="px-1 flex items-center gap-1">
            <span className="text-gray-800 text-base font-semibold">
              달성률
            </span>
            <span className="text-gray-800 text-base font-semibold">72%</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full border border-gray-200 relative">
            <div className="absolute top-0 left-0 h-full w-[72%] bg-green-500 rounded-full"></div>
          </div>
          <div className="px-1 flex items-center gap-1">
            <span className="text-gray-700 text-sm">총</span>
            <span className="text-gray-700 text-sm">100박스 중</span>
            <span className="text-gray-700 text-sm">72박스 위탁 완료!</span>
          </div>
        </div> */}
      </div>

      {/* 탭 메뉴 */}
      <div className="w-full max-w-[1168px] px-4 pt-10 pb-4 flex">
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${activeTab === "details"
            ? "border-green-600 text-gray-800 font-semibold"
            : "border-transparent text-gray-500"
            }`}
          onClick={() => setActiveTab("details")}
        >
          상세정보
        </button>
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${activeTab === "guide"
            ? "border-green-600 text-gray-800 font-semibold"
            : "border-transparent text-gray-500"
            }`}
          onClick={() => setActiveTab("guide")}
        >
          재배안내
        </button>
        <button
          className={`flex-1 h-12 pt-3 pb-4 flex justify-center items-center border-b-3 ${activeTab === "reviews"
            ? "border-green-600 text-gray-800 font-semibold"
            : "border-transparent text-gray-500"
            }`}
          onClick={() => setActiveTab("reviews")}
        >
          후기
        </button>
      </div>

      {/* 상세정보 */}
      {activeTab === "details" && (
        <>
          {/* 농작물 정보 */}
          <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
            <h2 className="text-gray-900 text-2xl font-bold">🌿 농작물 정보</h2>
            <div className="px-4 py-5 rounded-2xl  flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-full max-w-[800px] aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-100"></div>
                </div>
                <div className="w-full max-w-[800px] flex items-center gap-1">
                  <span className="text-gray-400 text-xs">📷 농작물 사진</span>
                </div>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  품종 소개
                </h3>
                <p className="text-gray-900 text-base">
                  이 토마토는 충청남도 논산의 깨끗한 환경에서 자란 유기농
                  토마토입니다. 화학비료나 농약을 사용하지 않고 자연 그대로의
                  방법으로 재배하여 안전하고 건강한 토마토를 제공합니다.
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  재배 환경
                </h3>
                <p className="text-gray-900 text-base">
                  논산의 비옥한 토양과 깨끗한 물, 충분한 일조량을 받아 자란
                  토마토는 당도가 높고 과육이 단단합니다. 친환경 인증을 받은
                  농장에서 정성스럽게 관리됩니다.
                </p>
              </div>

              <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3">
                <h3 className="text-gray-900 text-lg font-semibold">
                  영양 성분
                </h3>
                <p className="text-gray-900 text-base">
                  리코펜이 풍부하여 항산화 효과가 뛰어나며, 비타민 C와 칼륨이
                  다량 함유되어 있습니다. 저칼로리 고영양 식품으로 건강한 식단을
                  원하는 분들께 추천합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 농장 정보 */}
          <div className="w-full max-w-[1168px] px-8 pt-8 pb-2 flex flex-col gap-6">
            <h2 className="text-gray-900 text-2xl font-bold">🧑‍🌾 농장 정보</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">
                  농장 운영 경력
                </h3>
                <p className="text-gray-900 text-base">
                  30년간 논산에서
                  <br />
                  농업에 종사
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">농장 위치</h3>
                <p className="text-gray-900 text-base">
                  충청남도 논산시
                  <br />
                  친환경 농업지구
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">재배 방식</h3>
                <p className="text-gray-900 text-base">
                  유기농 인증
                  <br />
                  무농약 재배
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50 rounded-lg border border-gray-100 flex flex-col gap-4">
                <h3 className="text-green-800 text-xl font-bold">
                  배송 시스템
                </h3>
                <p className="text-gray-900 text-base">
                  수확 당일 배송
                  <br />
                  신선도 보장
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 재배안내 */}
      {activeTab === "guide" && (
        <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
          <h2 className="text-gray-900 text-2xl font-bold border-t border-gray-100 pt-6">
            📅 재배 일정
          </h2>
          <div className="relative flex flex-col gap-6">
            <div className="absolute left-[12px] top-0 w-0 h-96 border-l-4 border-gray-100"></div>

            {[
              {
                month: 3,
                week: 1,
                title: "씨앗 파종",
                desc: "온실에서 씨앗 파종 시작",
                color: "green",
              },
              {
                month: 4,
                week: 2,
                title: "모종 이식",
                desc: "건강한 모종을 밭으로 이식",
                color: "green",
              },
              {
                month: 5,
                week: 3,
                title: "성장 관리",
                desc: "지주 설치 및 가지치기",
                color: "green",
              },
              {
                month: 6,
                week: 4,
                title: "꽃 개화",
                desc: "토마토 꽃이 피기 시작",
                color: "green",
              },
              {
                month: 7,
                week: 2,
                title: "수확 시작",
                desc: "첫 수확 및 배송 준비",
                color: "orange",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 relative flex justify-center items-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${item.color === "green" ? "bg-green-400" : "bg-orange-300"
                      }`}
                  ></div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-sm font-semibold ${item.color === "green"
                        ? "text-green-600"
                        : "text-orange-500"
                        }`}
                    >
                      {item.month}월 {item.week}주
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 text-base font-semibold">
                      {item.title}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600 text-base">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 후기 */}
      {activeTab === "reviews" && (
        <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex flex-col gap-6">
          <h2 className="text-gray-900 text-2xl font-bold border-t border-gray-100 pt-6">
            💬 후기
          </h2>
          <div className="flex flex-col gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-800 text-base font-semibold">
                        김고객{item}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center gap-0.5">
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400 text-xs">
                        2024년 07월 참가자
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-900 text-xs">4.5 / 5</span>
                  </div>
                </div>

                {index % 2 === 0 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                {index === 1 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                {index === 3 && (
                  <div className="flex gap-2 overflow-hidden">
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                    <div className="flex-1 h-48 max-w-60 min-w-40 bg-gray-100 rounded-lg"></div>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <h4 className="text-gray-900 text-sm font-semibold">
                    정말 맛있는 토마토였어요!
                  </h4>
                  <p className="text-gray-900 text-sm">
                    신선하고 당도가 높아서 가족 모두 만족했습니다. 다음에도 꼭
                    주문하고 싶어요.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 하단 참여하기 버튼 */}
      <div className="w-full max-w-[1168px] px-4 pt-8 pb-2 flex justify-center">
        <div className="w-full max-w-[800px]">
          <button className="w-full px-10 py-4 bg-mint-600 rounded-lg text-white text-base font-semibold">
            지금 참여하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropInfo;
