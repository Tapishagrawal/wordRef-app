import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    const [localUserData, setlocalUserData] = useState(JSON.parse(localStorage.getItem("userCredential")) || [])
    const [state, setState]=useState(false)
    const handleLogin = (userCredential) => {
        const user = localUserData.find(user=>user.email===userCredential.email);
        console.log(user)
        if(user){
            if (+user.password === +userCredential.password) {
                setIsAuth(true)
                localStorage.setItem("isAuth", JSON.stringify(true))
                toast.success('Login Successfull!')
            } else {
                toast.error('Wrong password😱')
            }
        }else{
            toast.error('Wrong email address😱')
        }
    }
    const handleLogout = (navigate) => {
        setIsAuth(false)
        localStorage.setItem("isAuth", JSON.stringify(false))
        return navigate("/login")
    }
    const handleSignup = (userCredential, navigate) => {
        let newLocalData = localUserData
        newLocalData.push(userCredential)
        setlocalUserData(newLocalData)
        localStorage.setItem("userCredential", JSON.stringify(localUserData))
        toast.success("You have registered successfully")
        setState(!state)
        return navigate("/login")
    }
    useEffect(()=>{

    },[state])
    return (
        <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout, handleSignup }}>
            {children}
        </AuthContext.Provider>
    )
}
