import React from 'react'

const Login = ({setLogin}) => {
  return (
    <div className='w-[50%] h-[60vh] bg-white rounded-3xl flex shadow-black shadow-md'>
        <div className="flex flex-col items-center justify-center gap-5 bg-transparent basis-[50%]">
            <h2 className='text-4xl font-extrabold'>Login</h2>
            <input type="text" placeholder='Enter Email' className='p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
            <input type="text" placeholder='Enter Password' className='p-2 rounded-md bg-black bg-opacity-5 text-black outline-none'/>
            <button className='px-6 py-2 rounded-md bg-yellow-700 text-white font-semibold'>LOGIN</button>
        </div>
        <div className="w-full h-[100%] p-5 gap-5 flex flex-col items-center justify-center bg-yellow-700 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-2xl rounded-br-2xl basis-[50%]">
            <h1 className='text-white text-3xl font-semibold'>Hello, Friend!</h1>
            <p className='text-white text-sm'>Sign up with your personal details to use all of site features</p>
            <button className='px-6 py-2 rounded-md border-2 border-white bg-transparent text-white font-semibold' onClick={()=> setLogin(false)}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login;