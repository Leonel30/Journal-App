import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';
import { Journal } from '../pages/Journal'

export const JournalRoute = () => {
  return (
    <Routes>
        <Route path="/" element= { <Journal/>}></Route>
        <Route path="*" element= { <Navigate to="/"/> } > </Route>
    </Routes>
  )
}
