import React from 'react'
import StrengthCard from './StrengthCard'
import Tag from '../Tag'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
export default function InfoTab() {
  return (
    <>
      <div className="flex flex-col items-start justify-start text-left w-full p-4">
        <div className='cb-h1'>title here</div>
        <div className='cb-p1 my-4'>title here</div>
        <div className='cb-p1 my-4'>title here</div>
        <div className='cb-h1'>title here</div>
        <div className='w-full flex gap-2 '>
          <StrengthCard image="" content="text here" />
          <StrengthCard image="" content="text here" />
          <StrengthCard image="" content="text here" />
        </div>
        <div className='cb-h1 my-4'>title here</div>
        <div className='flex gap-2'>
          <Tag tag='text here' />
          <Tag tag='text here' />
          <Tag tag='text here' />
          <Tag tag='text here' />
        </div>
        <div className='cb-p1 my-8 px-2 border-l-4 border-b-yellow-800 '>title here</div>
        <div className='cb-p1'>title here</div>

        <div className="w-full aspect-[4/3] rounded-lg bg-gray-200"></div>

        {/* 시간 */}
        <div className='cb-h1 my-4'>title here</div>
        <div className='cb-p1 flex gap-2'><CalendarIcon className="w-5 h-5" />title here</div>
        <div className='cb-p1 flex gap-2'><ClockIcon className="w-5 h-5" />title here</div>
      </div>
    </>
  )
}
