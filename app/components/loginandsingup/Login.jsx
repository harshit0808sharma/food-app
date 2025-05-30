import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = ({setLogin}) => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    const fonundUser = allUsers.find(user => user.email === email && user.password === password);
    if(fonundUser){
      localStorage.setItem('currentUser', JSON.stringify(fonundUser));
      login(fonundUser);
      alert(`Welcome, ${fonundUser.username}`);
      router.replace('/');
    }else{
      alert('Invalid credentials or user not fonund. please sign up.');
    }
  }

  return (
    // <div className='w-[50%] h-[60vh] bg-white rounded-3xl flex shadow-black shadow-md'>
    //     <div className="flex flex-col items-center justify-center gap-5 bg-transparent basis-[50%]">
    //         <h2 className='text-4xl font-extrabold'>Login</h2>
    //         <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter Email' className='p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
    //         <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Password' className='p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
    //         <button onClick={handleLogin} className='px-6 py-2 rounded-md bg-yellow-700 text-white font-semibold'>LOGIN</button>
    //     </div>
    //     <div className="w-full h-[100%] p-5 gap-5 flex flex-col items-center justify-center bg-yellow-700 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-2xl rounded-br-2xl basis-[50%]">
    //         <h1 className='text-white text-3xl font-semibold'>Hello, Friend!</h1>
    //         <p className='text-white text-sm'>Sign up with your personal details to use all of site features</p>
    //         <button className='px-6 py-2 rounded-md border-2 border-white bg-transparent text-white font-semibold' onClick={()=> setLogin(false)}>Sign Up</button>
    //     </div>
    // </div>
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className='w-full max-w-4xl h-auto md:h-[60vh] bg-white rounded-3xl flex flex-col md:flex-row shadow-black shadow-md overflow-hidden'>
          
          <div className="flex flex-col items-center justify-center gap-5 p-8 bg-transparent md:basis-[50%] w-full">
            <h2 className='text-4xl font-extrabold'>Login</h2>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter Email' className='w-full p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Password' className='w-full p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
            <button onClick={handleLogin} className='px-6 py-2 rounded-md bg-yellow-700 text-white font-semibold'>LOGIN</button>
          </div>

          <div className="w-full h-auto p-8 gap-5 flex flex-col items-center justify-center bg-yellow-700 text-white rounded-b-3xl md:rounded-none md:rounded-tr-2xl md:rounded-br-2xl md:basis-[50%]">
            <h1 className='text-3xl font-semibold'>Hello, Friend!</h1>
            <p className='text-sm text-center'>Sign up with your personal details to use all of site features</p>
            <button className='px-6 py-2 rounded-md border-2 border-white bg-transparent text-white font-semibold' onClick={()=> setLogin(false)}>Sign Up</button>
          </div>

        </div>
      </div>

        )
}

export default Login; 