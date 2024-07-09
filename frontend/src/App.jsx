import React from 'react'
import Navbar from './Components/Navbar'
import {Outlet} from 'react-router-dom'
import UserContextProvider from './Components/Context/UserContextProvider'
export default function App() {
  return (
    <UserContextProvider>
      <Navbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
