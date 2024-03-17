import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

    const handleLogin = (userCredential) => {
        const { email, password } = userCredential;
        if (email === "admin@gmail.com" && password === "123") {
            setIsAuth(true)
            localStorage.setItem("isAuth", JSON.stringify(true))
        }
    }
    const handleLogout = () => {
        setIsAuth(false)
        localStorage.setItem("isAuth", JSON.stringify(false))
    }
    return (
        <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
