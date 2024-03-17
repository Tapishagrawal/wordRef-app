import React from 'react'
import Card from './Card'
import toast, { Toaster } from 'react-hot-toast';
export default function Home() {
  const dealAlrt = () =>{
    toast.success('Deal Added Successfully!',{
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }
  const detailAlrt = () =>{
    toast('Your card Detail is Live!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  }
  return (
    <div className='flex justify-center items-center h-[96vh]'>
      <Toaster/>
      <div className='flex gap-4 justify-around'>
        <Card dealAlrt={dealAlrt}  detailAlrt={detailAlrt}/>
      </div>
    </div>
  )
}
