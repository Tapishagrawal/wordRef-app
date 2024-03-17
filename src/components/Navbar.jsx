import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../contextApi/AuthContextProvider'
import  { Toaster } from 'react-hot-toast';
export default function Navbar() {
  const { isAuth, handleLogout } = useContext(AuthContext);
  return (
    <div className='w-full py-5  flex gap-5 border-b px-5'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Link className='font-semibold hover:text-orange-600' to={"/"}>Home</Link>
      {isAuth ?
        <button className='font-semibold hover:text-orange-600' onClick={handleLogout}>Logout</button>
        :
        <Link className='font-semibold hover:text-orange-600' to={"/login"}>Login</Link>
      }
    </div>
  )
}
