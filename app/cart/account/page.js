'use client'
import React from 'react'
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
// import { useAuth } from '@/app/context/AuthContext';

const account = () => {
  const { user, deleteAllUsers, logout } = useAuth();

  return (
   <div className="w-full min-h-screen bg-yellow-50 flex flex-col md:flex-row">
    {/* Sidebar */}
    <div className="w-full md:w-1/5 md:bg-yellow-700 md:text-white bg-transparent text-black p-6 flex flex-col md:fixed md:h-full md:top-0 md:left-0">
      {/* Logo */}
      <h2 className="font-extrabold text-2xl mb-6 text-center">
        <Link href="/">Foodify</Link>
      </h2>

      {/* Nav Items */}
      <ul className="flex flex-wrap justify-center md:flex-col md:items-center gap-4 text-sm md:text-base">
        <Link href="/cart" className="text-center cursor-pointer">Cart</Link>
        <Link href="/cart/orders" className="text-center cursor-pointer">Order History</Link>
        <li className="text-center cursor-pointer border-2 border-black md:border-white rounded-md px-2 py-1">
          My Account
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="w-full md:ml-[20%] p-6 md:p-10 flex flex-col gap-4 mt-6 md:mt-0">
      <h1 className="text-3xl font-bold text-orange-400 text-center mb-4">My Account</h1>
      <h2>Name: <span className="font-semibold text-gray-800">{user?.username}</span></h2>
      <h3>Email: <span className="font-semibold text-gray-800">{user?.email}</span></h3>

      <div className="flex flex-wrap gap-4 mt-4">
        <button onClick={logout} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Logout
        </button>
        <button onClick={deleteAllUsers} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
          Delete Account
        </button>
      </div>
    </div>
  </div>

  )
}

export default account;