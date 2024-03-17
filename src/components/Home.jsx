import React from 'react'
import Card from './Card'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-[96vh]'>
      <div className='flex gap-4 justify-around'>
        <Card heading={"save deals in the system"} btnTitle={"Add to Deals"}/>
        <Card heading={"Get deals from the system"} btnTitle={"Check Details"}/>
      </div>
    </div>
  )
}
