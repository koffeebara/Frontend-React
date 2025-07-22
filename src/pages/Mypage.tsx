import { useState } from "react";
import ArrowDownIcon from "../assets/IconArrowDown.svg";

export default function Mypage() {
  const [activeTab, setActiveTab] = useState("수락 대기");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl p-4 bg-white border-b border-gray-100 flex justify-between items-center">
        <div className="w-20 h-8 relative">
          {/* Logo placeholder */}
          <div className="text-amber-800 font-bold text-lg">LOGO</div>
        </div>
        <div className="px-4 py-1.5 bg-amber-700 rounded-full">
          <div className="text-white text-sm font-semibold">마이페이지</div>
        </div>
      </div>

      <div className="w-full max-w-6xl pb-28 bg-white flex flex-col items-center">
        {/* 나의 커피챗 섹션 */}
        <div className="self-stretch pl-5 pr-6 md:pr-24 pt-6 pb-2 flex justify-start items-center">
          <div className="flex-1 text-gray-900 text-xl font-semibold">
            나의 커피챗
          </div>
        </div>

        <div className="self-stretch px-4 pt-2 pb-6 flex flex-col justify-start items-start gap-4">
          {/* 탭 버튼들 */}
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {["수락 대기", "진행 예정", "진행 완료"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full border text-sm font-semibold ${
                  activeTab === tab
                    ? "bg-amber-700 text-white border-amber-700"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 커피챗 카드 */}
          <div className="self-stretch px-4 py-5 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-3">
            <div className="self-stretch px-1 flex justify-between items-center">
              <div className="text-gray-600 text-sm">김멘토와의 커피챗</div>
              <div className="flex items-center gap-0.5 text-gray-600 text-sm">
                <span>07월 25일 신청</span>
              </div>
            </div>

            <div className="self-stretch flex flex-col md:flex-row justify-start items-center gap-6">
              {/* 멘토 이미지 */}
              <div className="w-full md:flex-1 h-48 md:h-80 md:max-w-96 md:min-w-48 bg-gray-100 rounded-lg border border-gray-200"></div>

              {/* 멘토 정보 */}
              <div className="w-full md:flex-1 md:min-w-60 px-1 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-900 text-xl font-semibold">
                    김멘토
                  </div>
                  <div className="flex items-start gap-0.5">
                    <span className="text-amber-800 text-sm">[</span>
                    <span className="text-amber-800 text-sm">
                      소프트웨어 엔지니어
                    </span>
                    <span className="text-amber-800 text-sm">]</span>
                  </div>
                </div>

                <div className="self-stretch flex flex-col gap-4">
                  <div className="self-stretch flex items-start gap-2">
                    <div className="text-gray-900 text-base font-semibold">
                      - 진행 날짜
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 text-base">
                        07월 30일 14:00
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch flex items-start gap-2">
                    <div className="text-gray-900 text-base font-semibold">
                      - 진행 장소
                    </div>
                    <div className="text-gray-900 text-base">온라인</div>
                  </div>
                  <div className="self-stretch flex items-start gap-2">
                    <div className="text-gray-900 text-base font-semibold">
                      - 멘토 연락처
                    </div>
                    <div className="flex-1 text-gray-900 text-base">
                      수락 시 공개됩니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch pt-4 flex flex-col gap-2.5">
              <button className="self-stretch py-3 bg-sky-500 rounded-lg text-white text-base font-semibold hover:bg-sky-600">
                멘토에게 메시지 보내기
              </button>
            </div>
          </div>
        </div>

        {/* 리포트 생성 섹션 */}
        <div className="self-stretch pl-5 pr-6 md:pr-24 pt-6 pb-2 flex justify-start items-center">
          <div className="flex-1 text-gray-900 text-xl font-semibold">
            리포트 생성
          </div>
        </div>

        <div className="self-stretch px-4 pt-2 pb-6 flex flex-col justify-start items-center gap-3">
          <div className="self-stretch flex flex-col gap-4">
            <div className="self-stretch py-20 bg-gray-100 rounded-lg border border-gray-200 flex justify-center items-center">
              <div className="text-center text-gray-700 text-sm font-semibold">
                음성 파일을 업로드하거나
                <br />
                선택해 주세요.
              </div>
            </div>
            <div className="self-stretch h-7 p-1 flex items-center gap-2">
              <div className="text-gray-700 text-sm">업로드</div>
              <div className="flex-1 h-2 bg-amber-700 rounded-full border border-gray-200"></div>
              <div className="flex items-center">
                <span className="w-6 text-right text-gray-700 text-sm">
                  100
                </span>
                <span className="text-right text-gray-700 text-sm">% 완료</span>
              </div>
            </div>
          </div>
          <div className="self-stretch pt-4 flex flex-col gap-2.5">
            <button className="self-stretch py-3 bg-sky-500 rounded-lg text-white text-base font-semibold hover:bg-sky-600">
              리포트 생성하기
            </button>
          </div>
        </div>

        {/* 생성된 리포트 섹션 */}
        <div className="self-stretch pl-5 pr-6 md:pr-24 pt-6 pb-2 flex justify-start items-center">
          <div className="flex-1 text-gray-900 text-xl font-semibold">
            생성된 리포트
          </div>
        </div>

        <div className="self-stretch px-4 pt-2 pb-6 flex flex-col gap-2.5">
          <div className="self-stretch px-4 py-5 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6">
            <div className="self-stretch flex flex-col gap-4">
              <div className="self-stretch flex flex-col gap-1">
                <div className="self-stretch px-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div className="text-gray-900 text-xl font-semibold">
                    커피챗 인사이트 리포트
                  </div>
                  <div className="flex items-center gap-0.5 text-gray-600 text-sm">
                    <span>생성날짜 2024년 07월 25일</span>
                  </div>
                </div>
                <div className="self-stretch py-1 flex items-center gap-2">
                  <div className="px-2 py-1 bg-sky-100 rounded text-blue-800 text-xs">
                    커리어 상담
                  </div>
                  <div className="px-2 py-1 bg-sky-100 rounded text-blue-800 text-xs">
                    소프트웨어
                  </div>
                </div>
              </div>
              <div className="self-stretch px-1 pt-6 border-t border-gray-200 flex flex-col gap-2">
                <div className="text-gray-900 text-sm">
                  멘토님과의 유익한 대화를 통해 많은 인사이트를 얻었습니다.
                  <br />
                  특히 커리어 전환에 대한 구체적인 조언과 실무 경험을 바탕으로
                  한 실질적인 팁들이 매우 도움이 되었습니다.
                </div>
              </div>
            </div>
            <div className="self-stretch pt-4 flex justify-start items-start gap-2.5">
              <button className="flex-1 py-3 bg-gray-200 rounded-lg text-gray-700 text-base font-semibold hover:bg-gray-300">
                공유하기
              </button>
              <button className="flex-1 py-3 bg-sky-500 rounded-lg text-white text-base font-semibold hover:bg-sky-600">
                저장하기
              </button>
            </div>
          </div>
        </div>

        {/* 리포트 목록 섹션 */}
        <div className="self-stretch pl-5 pr-6 md:pr-24 pt-6 pb-2 flex justify-start items-center">
          <div className="flex-1 text-gray-900 text-xl font-semibold">
            리포트 목록
          </div>
        </div>

        <div className="self-stretch px-4 pt-2 pb-6 flex flex-col md:flex-row md:justify-start md:items-center gap-4 md:gap-6 md:flex-wrap">
          {/* 리포트 카드들 */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-full md:flex-1 md:max-w-md md:min-w-80 px-4 py-5 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <div className="self-stretch flex flex-col gap-4">
                <div className="self-stretch flex flex-col gap-1">
                  <div className="self-stretch px-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="text-gray-900 text-xl font-semibold">
                      커피챗 리포트 #{index}
                    </div>
                    <div className="flex items-center gap-0.5 text-gray-600 text-sm">
                      <span>생성날짜 2024년 07월 {20 + index}일</span>
                    </div>
                  </div>
                  <div className="self-stretch py-1 flex items-center gap-2">
                    <div className="px-2 py-1 bg-sky-100 rounded text-blue-800 text-xs">
                      커리어 상담
                    </div>
                    <div className="px-2 py-1 bg-sky-100 rounded text-blue-800 text-xs">
                      IT
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-1 pt-6 border-t border-gray-200 flex flex-col gap-2">
                  <div className="text-gray-900 text-sm">
                    멘토님과의 대화에서 얻은 주요 인사이트들을 정리한
                    리포트입니다...
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-4 flex justify-start items-start gap-2.5">
                <button className="flex-1 py-3 bg-sky-500 rounded-lg text-white text-base font-semibold hover:bg-sky-600">
                  펼쳐서 확인하기
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full max-w-72 py-3 bg-white rounded-lg border border-gray-200 flex justify-center items-center gap-2 hover:bg-gray-50">
          <span className="text-gray-800 text-base font-semibold">더보기</span>
          <img src={ArrowDownIcon} alt="더보기 아이콘" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
