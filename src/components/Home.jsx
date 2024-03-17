import React from 'react'
import Card from './Card'
export default function Home() {
  const dealAlrt = () =>{
    alert("deal clcik")
  }
  const detailAlrt = () =>{
    alert("detail clcik")
  }
  return (
    <div className='flex justify-center items-center h-[96vh]'>
      <div className='flex gap-4 justify-around'>
        <Card handleClick={dealAlrt} heading={"save deals in the system"} btnTitle={"Add to Deals"} />
        <Card handleClick={detailAlrt} heading={"Get deals from the system"} btnTitle={"Check Details"} />
      </div>
    </div>
  )
}
