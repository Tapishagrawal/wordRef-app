import React, { useContext } from 'react'
import Card from './Card'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../contextApi/AuthContextProvider';
export default function Home() {
  const { isAuth } = useContext(AuthContext);

  const dealAlrt = () => {
    if (isAuth) {
      toast.success('Deal Added Successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      toast.error('You are not authorized', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }
  const detailAlrt = () => {
    if (isAuth) {
      toast('Your card Detail is Live!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
    } else {
      toast.error('You are not authorized', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }
  return (
    <div className='flex justify-center items-center h-[96vh]'>
      <div className='flex gap-4 flex-wrap justify-around mt-[350px] w-[95%]'>
        {
          new Array(10).fill(0).map(() => (
            <Card dealAlrt={dealAlrt} detailAlrt={detailAlrt} />
          ))
        }
      </div>
    </div>
  )
}
