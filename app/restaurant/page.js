"use client"
import React, { useEffect, useState } from 'react'
import Login from '../components/loginandsingup/Login'
import SingUp from '../components/loginandsingup/SingUp'
import { Navbar } from '../components/nav/Navbar'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const page = () => {
    const { isLoggedIn } = useAuth();
    const [login, setLogin] = useState(false);
    const router = useRouter();

    useEffect(()=> {
        if(isLoggedIn){
            router.replace('/');
        }
    }, [isLoggedIn])

    

  return (
    <div className='w-full min-h-screen bg-yellow-50 flex items-center justify-center'>
        <Navbar setLogin={setLogin}/>
        {!isLoggedIn && ( login ? (
                <Login setLogin={setLogin}/>
            ):(
                <SingUp setLogin={setLogin}/>
            )
        )
        }
    </div>
  )
}

export default page