import React from 'react'

export default function Card({btnTitle, heading}) {
  return (
    <div className='flex w-[35%] h-[200px] gap-5 items-center bg-white border rounded-md'>
        <div className='bg-gradient-to-r from-[#ff781d] to-[#ff3811] w-[320px] h-[130px] -ml-10 rounded-lg transition-all shadow-xl shadow-orange-500/35 hover:-translate-y-1'></div>
        <div>
            <p className='text-sm font-bold text-zinc-400'>23 January  2023</p>
            <h4 className='text-xl font-semibold my-2'>{heading}</h4>
            <p className='text-xs font-semibold text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, a pariatur! Amet perferendis veritatis quasi soluta.</p>
            <button className='bg-gradient-to-r from-[#ff781d] to-[#ff3811] hover:from-[#ff3811] hover:to-[#ff781d] rounded-full py-2 px-3 my-4 text-white text-xs font-semibold'>{btnTitle}</button>
        </div>
    </div>
  )
}
