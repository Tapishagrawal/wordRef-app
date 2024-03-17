import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../contextApi/AuthContextProvider'
export default function Navbar() {
  const { isAuth, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <Link to={"/"}>Home</Link>
      {isAuth ?
        <button onClick={handleLogout}>Logout</button>
        :
        <Link to={"/login"}>Login</Link>
      }
    </div>
  )
}
