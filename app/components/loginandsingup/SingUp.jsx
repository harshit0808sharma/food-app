import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext';
import toast from 'react-hot-toast';

const SingUp = ({setLogin}) => {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

    if(!username || !email || !password){
      toast.success("please fill all fields");
      return;
    }
    const newUser = {username, email, password};
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    const alreadyExists = allUsers.some(user => user.eamil === email);
    if(alreadyExists){
      toast.success('User already exists. Please Login.');
      return;
    }
    allUsers.push(newUser);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    login(newUser);
    toast.success("Sign Up Successfully!");
    router.replace('/');
  }


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className='w-full max-w-4xl h-auto md:h-[70vh] bg-white rounded-3xl flex flex-col md:flex-row shadow-black shadow-md overflow-hidden'>
        
        {/* Left Side - Sign Up Form */}
        <div className="flex flex-col items-center justify-center gap-5 p-8 bg-transparent w-full md:basis-[50%]">
          <h2 className='text-4xl font-extrabold'>Sign Up</h2>
          <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Enter Username' className='w-full p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
          <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter Email' className='w-full p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
          <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Password' className='w-full p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
          <button className='px-6 py-2 rounded-md bg-yellow-700 text-white font-semibold' onClick={handleSignUp}>Sign Up</button>
        </div>

        {/* Right Side - Welcome Box */}
        <div className="w-full h-auto p-8 gap-5 flex flex-col items-center justify-center bg-yellow-700 text-white rounded-b-3xl md:rounded-none md:rounded-tr-2xl md:rounded-br-2xl md:basis-[50%]">
          <h1 className='text-3xl font-semibold'>Hello, Friend!</h1>
          <p className='text-sm text-center'>Login your account that is already created</p>
          <button className='px-6 py-2 rounded-md border-2 border-white bg-transparent text-white font-semibold' onClick={()=> setLogin(true)}>Login</button>
        </div>

      </div>
    </div>

  )
}

export default SingUp 