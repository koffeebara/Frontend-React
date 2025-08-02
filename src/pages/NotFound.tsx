
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-mint-50">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">페이지를 찾을 수 없습니다.</p>
        <p className="mt-2 text-gray-500">요청하신 페이지가 존재하지 않거나, 이동된 경우입니다.</p>
        <a href="/" className="mt-6 text-mint-700 hover:underline">홈으로 돌아가기</a>
      </div>
    </>
  );
}

