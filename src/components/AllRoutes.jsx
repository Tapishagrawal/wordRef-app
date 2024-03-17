import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
