import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'
export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={
        <Home />
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
