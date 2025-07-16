import { useState } from 'react';
import MentorCard from '../components/MentorCard'
import Filter from '../components/Filter';
import { categoryOptions } from '../data/categoryOptions';
import { regionOptions } from '../data/regionOptions';
import { mentorDatas } from '../data/testMentorData';
const ITEMS_PER_PAGE = 12;
// const BUTTONS_PER_GROUP = 10; //페이지 그룹 분리(추후 추가)


export default function Mentors() {
  const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string } | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<{ value: string; label: string } | null>(null);

  //필터링 관련
  const filteredMentors = mentorDatas.filter((mentor) => {
    const matchCategory = selectedCategory ? mentor.category === selectedCategory.value : true;
    const matchRegion = selectedRegion ? mentor.region === selectedRegion.value : true;
    return matchCategory && matchRegion;
  });

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedRegion(null);
  };

  //페이지 관련
  // const mentors = filteredMentors;
  const [page, setPage] = useState(1);
  // const [pageGroup, setPageGroup] = useState(0); // 0번째 그룹부터 시작
  const totalPages = Math.ceil(filteredMentors.length / ITEMS_PER_PAGE);
  // const totalGroups = Math.ceil(totalPages / BUTTONS_PER_GROUP);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentMentors = filteredMentors.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="w-[720px] h-[1460px] bg-gray-100 p-4 mx-auto">
      {/* 필터 */}
      <div className='flex gap-4 items-center'>
        <Filter
          label="분야"
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        <Filter
          label="지역"
          options={regionOptions}
          value={selectedRegion}
          onChange={setSelectedRegion}
        />
        <button className='ml-auto mb-4 bg-zinc-300 w-24 h-8 px-3 text-center'
          onClick={handleReset}>초기화</button>
      </div>


      {/* 멘토 카드 */}
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {currentMentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>

      {/* 여백 */}
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
