"use client"
import React, { useState } from 'react'
import Login from '../components/loginandsingup/Login'
import SingUp from '../components/loginandsingup/SingUp'
import { Navbar } from '../components/nav/Navbar'

const page = () => {
    const [login, setLogin] = useState(false);
    // console.log(login);
  return (
    <div className='w-full min-h-screen bg-yellow-50 flex items-center justify-center'>
        <Navbar/>
        {
            login?(
                <Login setLogin={setLogin}/>
            ):(
                <SingUp setLogin={setLogin}/>
            )
        }
    </div>
  )
}

export default page