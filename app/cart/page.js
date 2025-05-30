'use client'
import React, { useEffect, useState } from 'react'
import img from '../../public/images/food1.png'
import { Navbar } from '../components/nav/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
// import { useCart } from '../context/CartContext';

const page = () => {
    const { cartItems, removeFromCart, cartItemCount, updateQuantity, totalPrice} = useCart();

  return (
    <div className='w-full min-h-screen bg-yellow-50 flex flex-col md:flex-row'>
        {/* Sidebar */}
        <div className="p-5 w-full md:w-[20%] md:h-screen bg-yellow-700 text-white flex md:flex-col items-center md:items-start gap-10 fixed md:static top-0 left-0 z-20">
            <h2 className="font-extrabold text-2xl"><Link href="/">Food</Link></h2>
            <ul className="flex md:flex-col gap-5 w-full justify-around md:justify-start">
            <li className="text-center cursor-pointer border-2 border-white rounded-md px-4 py-2">Cart</li>
            <li className="text-center cursor-pointer px-4 py-2">Order History</li>
            <Link href="/cart/account" className="text-center cursor-pointer px-4 py-2">My Account</Link>
            </ul>
        </div>

        {/* Main Content */}
        <div className='flex flex-col w-full md:ml-[20%] p-5 gap-4'>
            <div className="w-full flex justify-end">
            <h3>Profile</h3>
            </div>

            <h4 className='text-yellow-800 ml-0 md:ml-12'>
            Cart <span>Total Items: {cartItemCount}</span>
            </h4>

            <div className="flex items-center justify-between w-full max-w-full md:w-[55%] ml-0 md:ml-12 px-2 md:px-0">
            <span>ICON</span>
            <span>Name</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>REMOVE</span>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col w-full p-4 gap-4">
            <div className="flex flex-col w-full gap-4 overflow-auto max-h-[60vh]">
                {cartItems?.length > 0 ? (
                cartItems.map((data, index) => (
                    <div
                        className="flex flex-col md:flex-row md:items-center w-full justify-between border-b border-black p-4 gap-4"
                        key={index}
                        >
                        {/* ✅ Row 1: Image, Product Name, Price (Always Visible) */}
                        <div className="grid grid-cols-3 w-full md:flex md:w-auto md:gap-4">
                            <div className="flex justify-center">
                            <Image src={data?.imgSrc} alt="product" className="w-16 h-16" />
                            </div>
                            <div className="flex justify-center items-center font-semibold text-center">
                            {data?.productName}
                            </div>
                            <div className="flex justify-center items-center font-bold text-yellow-900">
                            ${data?.price}
                            </div>
                        </div>

                        {/* ✅ Row 2: Quantity Controls & Remove Button (Only on small screens) */}
                        <div className="grid grid-cols-3 w-full gap-4 md:hidden">
                            <div className="col-span-2 flex justify-center items-center gap-2">
                            <button
                                className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold"
                                onClick={() => updateQuantity(data?.id, 1)}
                            >
                                +
                            </button>
                            <span className="text-red-500 font-extrabold whitespace-nowrap">
                                Quantity: {data?.quantity}
                            </span>
                            <button
                                className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold"
                                onClick={() => updateQuantity(data?.id, -1)}
                            >
                                -
                            </button>
                            </div>
                            <div className="flex justify-center items-center">
                            <button
                                onClick={() => removeFromCart(data?.id)}
                                className="text-white bg-red-600 rounded-md font-bold px-4 py-2"
                            >
                                Remove
                            </button>
                            </div>
                        </div>

                        {/* ✅ Desktop Controls (hidden on small screens) */}
                        <div className="hidden md:flex md:items-center md:gap-4">
                            <div className="flex items-center gap-2">
                            <button
                                className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold"
                                onClick={() => updateQuantity(data?.id, 1)}
                            >
                                +
                            </button>
                            <span className="text-red-500 font-extrabold whitespace-nowrap">
                                Quantity: {data?.quantity}
                            </span>
                            <button
                                className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold"
                                onClick={() => updateQuantity(data?.id, -1)}
                            >
                                -
                            </button>
                            </div>
                            <button
                            onClick={() => removeFromCart(data?.id)}
                            className="text-white bg-red-600 rounded-md font-bold px-4 py-2"
                            >
                            Remove
                            </button>
                        </div>
                        </div>


                ))
                ) : (
                <div className="flex items-center justify-center w-full h-[40vh]">
                    <h1 className="text-red-500 text-4xl font-extrabold">Your Cart is Empty</h1>
                </div>
                )}
            </div>

            {/* Summary & Checkout at Bottom */}
            {cartItems?.length > 0 && (
                <div className="w-full flex flex-col bg-yellow-100 rounded-sm p-5 mt-6 gap-4">
                <h2 className="text-xl font-bold">Summary</h2>
                <div className="flex justify-between">
                    <span>Order Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-blue-600 text-xl font-semibold">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className='w-full md:w-48 p-2 text-white bg-red-600 rounded-md font-bold mt-4 self-center'>CHECKOUT ITEMS</button>
                </div>
            )}
            </div>
        </div>
        </div>

  )
}

export default page;