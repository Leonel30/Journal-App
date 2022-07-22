import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Navigate } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element= { <Register/>}></Route>
        <Route path="*" element={<Navigate to="/auth/login"/>}></Route>
    </Routes>
  )
}
