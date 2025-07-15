import { useState } from 'react';
import MentorCard from '../components/MentorCard'

const ITEMS_PER_PAGE = 12;
const BUTTONS_PER_GROUP = 10;

export default function Mentors() {
  const mentors = Array.from({ length: 100 }, (_, i) => ({ id: i }));
  const [page, setPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0); // 0번째 그룹부터 시작

  const totalPages = Math.ceil(mentors.length / ITEMS_PER_PAGE);
  const totalGroups = Math.ceil(totalPages / BUTTONS_PER_GROUP);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentMentors = mentors.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="w-[720px] h-[1460px] bg-gray-100 p-4 mx-auto">
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {currentMentors.map((mentor) => (
          <MentorCard key={mentor.id} />
        ))}
      </div>
      <div className="mb-20"></div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-6 space-x-2">
        {/* 이전 버튼 */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          &lt;
        </button>

        {/* 페이지 번호들 */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 bg-gray-300 rounded ${page === i + 1 ? 'font-bold' : 'text-gray-600'
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* 다음 버튼 */}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
