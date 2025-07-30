export default function Footer() {
  return (
    <footer className="w-full bg-green-700 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white text-2xl font-bold mb-4">
              🌱 가상농장
            </div>
            <div className="text-green-200 text-sm mb-8">
              믿을 수 있는 농부와 함께하는 스마트 농업 플랫폼
            </div>

            <div className="text-white font-bold mb-4">서비스</div>
            <div className="space-y-2 text-green-200 text-sm">
              <div>작물 위탁</div>
              <div>농장 일지</div>
              <div>신선 배송</div>
            </div>
          </div>

          <div>
            <div className="text-white font-bold mb-4">고객지원</div>
            <div className="space-y-2 text-green-200 text-sm">
              <div>자주 묻는 질문</div>
              <div>이용 가이드</div>
              <div>고객센터</div>
            </div>
          </div>

          <div>
            <div className="text-white font-bold mb-4">회사소개</div>
            <div className="space-y-2 text-green-200 text-sm">
              <div>회사소개</div>
              <div>채용정보</div>
              <div>보도자료</div>
            </div>

            <div className="text-white font-bold mt-6 mb-4">정책</div>
            <div className="space-y-2 text-green-200 text-sm">
              <div>이용약관</div>
              <div>개인정보처리방침</div>
              <div>환불정책</div>
            </div>
          </div>

          <div>
            <div className="text-white font-bold mb-4">SNS</div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-indigo-700 rounded flex items-center justify-center text-white">
                f
              </div>
              <div className="w-10 h-10 bg-sky-500 rounded flex items-center justify-center text-white">
                T
              </div>
              <div className="w-10 h-10 bg-rose-500 rounded flex items-center justify-center text-white">
                📷
              </div>
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white">
                ▶
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 pt-8 text-center">
          <div className="text-green-300 text-sm mb-2">
            © 2024 가상농장. 함께 키우는 건강한 농작물. All rights reserved.
          </div>
          <div className="text-green-300 text-xs">
            Designed with ❤️ for sustainable farming
          </div>
        </div>
      </div>
    </footer>
  );
}
