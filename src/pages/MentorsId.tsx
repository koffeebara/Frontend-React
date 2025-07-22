import { useState } from "react";
import StrengthCard from "../components/mentors-id/StrengthCard";
import Tag from "../components/Tag";
import InfoTab from "../components/mentors-id/InfoTab";
import ReviewTab from "../components/mentors-id/ReviewTab";
import TabButton from "../components/mentors-id/TabButton";

export default function MentorsId() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="mx-auto flex flex-col w-full max-w-[1080px] h-[3000px] items-center">
          <div className="w-[90%] max-w-[640px] aspect-[4/3] bg-gray-200 ">내용</div>
          <div data-type="Large" className="self-stretch pl-5 pr-24 pt-6 pb-2 inline-flex justify-start items-center">
            <div className="cb-h1">안녕하십니까, 농부 인생 20년차<br />카피바라입니다. 노하우를 공유하겠습니다.</div>
          </div>
          <div className="self-stretch px-4 py-3 inline-flex justify-start items-center gap-2">
            <Tag tag='서울' />
            <Tag tag='농업' />
          </div>
          <div className="self-stretch px-4 py-1 flex justify-start items-center gap-2">
            <div className="cb-p1">text here</div>
            <div className="cb-caption">@text here</div>
          </div>

          {/* 탭 */}
          <div className="w-full flex m-4">
            <TabButton tabKey="info" label="프로필" activeKey={activeTab} onChange={setActiveTab} />
            <TabButton tabKey="review" label="리뷰" activeKey={activeTab} onChange={setActiveTab} />
          </div>
          <div className="w-full flex">
            {activeTab === 'info' && <InfoTab />}
            {activeTab === 'review' && <ReviewTab />}
          </div>

        </div>
      </div>

    </>
  )
}
