import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoute } from '../journal/routes/JournalRoute'

export const AppRouter = () => {
  return (
   <Routes>
    <Route path="/auth/*" element={<AuthRoutes/>}></Route>
    <Route path="/*" element={<JournalRoute/>}></Route>
   </Routes>
  )
}
