import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';
export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    const [localUserData, setlocalUserData] = useState(JSON.parse(localStorage.getItem("userCredential")) || [])
    const handleLogin = (userCredential) => {
        const { email, password } = userCredential;
        if (email === "admin@gmail.com" && password === "123") {
            setIsAuth(true)
            localStorage.setItem("isAuth", JSON.stringify(true))
            toast.success('Login Successfull!')
        } else {
            toast.error('Wrong credential😱')
        }
    }
    const handleLogout = () => {
        setIsAuth(false)
        localStorage.setItem("isAuth", JSON.stringify(false))
    }
    const handleSignup = (userCredential) => {
        let newLocalData = localUserData
        newLocalData.push(userCredential)
        setlocalUserData(newLocalData)
        localStorage.setItem("userCredential", JSON.stringify(localUserData))
        toast.success("You have registered successfully")
    }
    return (
        <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout, handleSignup }}>
            {children}
        </AuthContext.Provider>
    )
}
