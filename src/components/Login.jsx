import React, { useContext, useState } from 'react'
import { AuthContext } from '../contextApi/AuthContextProvider';
import {Navigate} from "react-router-dom"

export default function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { handleLogin, handleLogout, isAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(pre => {
      return {
        ...pre,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(inputValue)
  }

  if(isAuth){
    return <Navigate to="/"/>
  }

  return (
    <div className='flex justify-center items-center h-[88vh]'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 border p-5 rounded-sm w-[350px] bg-white'>
        <h1 className='text-3xl font-bold text-zinc-600'>LOGIN</h1>
        <div className='w-[150px] h-[150px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-md'></div>
        <input onChange={handleChange} type="text" name='email' value={inputValue.email} className='border outline-none hover:outline-indigo-200 w-full px-2 py-1 rounded' />
        <input onChange={handleChange} type="password" name='password' value={inputValue.password} className='border outline-none hover:outline-indigo-200 w-full px-2 py-1 rounded' />
        <input type="submit" value={"submit"} className='bg-black text-white py-1 px-14 rounded'/>
      </form>
    </div>
  )
}
