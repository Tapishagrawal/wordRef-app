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
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input onChange={handleChange} type="text" name='email' value={inputValue.email} className='border' />
        <input onChange={handleChange} type="password" name='password' value={inputValue.password} className='border' />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  )
}
