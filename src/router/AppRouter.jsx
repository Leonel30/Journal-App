import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoute } from '../journal/routes/JournalRoute'
import {CheckingAuth} from '../ui/components/CheckingAuth'

export const AppRouter = () => {

  const {status}=useSelector(state => state.auth);

  useEffect(() => {

  
  }, [])
  



  if(status === 'checking'){
    return <CheckingAuth/>
  }

  return (
   <Routes>
    <Route path="/auth/*" element={<AuthRoutes/>}></Route>
    <Route path="/*" element={<JournalRoute/>}></Route>
   </Routes>
  )
}
