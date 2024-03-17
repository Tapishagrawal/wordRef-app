import React, { useContext, useState } from 'react'
import { AuthContext } from '../contextApi/AuthContextProvider';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const { handleLogin, isAuth } = useContext(AuthContext);

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
    return (
        <div className='flex justify-center items-center h-[88vh]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 border p-5 rounded-sm w-[450px] h-[450px] bg-white'>
                <h1 className='text-3xl font-bold text-zinc-600'>SIGNUP</h1>
                <div className='self-start ml-10'>
                    <h1 className='text-6xl text-indigo-700'>Hello,</h1>
                    <h2 className='text-6xl font-bold text-indigo-800'>Welcome!</h2>
                </div>
                <input onChange={"handleChange"} placeholder='Email' type="text" name='email' value={inputValue.email} className='border outline-none hover:outline-indigo-200 w-[80%] px-2 py-1 rounded text-zinc-600 font-semibold' />
                <input onChange={handleChange} placeholder='Password' type="password" name='password' value={inputValue.password} className='border outline-none hover:outline-indigo-200 w-[80%] px-2 py-1 rounded text-zinc-600 font-semibold' />
                <input type="submit" value={"submit"} className='bg-black text-white py-1 px-14 rounded' />
                <p className='text-sm text-zinc-600 font-medium'>Already have an account? <Link to="/login" className='text-blue-500 font-medium hover:underline'>Login</Link></p>
            </form>
            <div className='bg-gradient-to-r from-blue-500 to-indigo-600 w-[400px] h-[450px]'></div>
        </div>
    )
}
