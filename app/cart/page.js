'use client'
import React from 'react'
import img from '../../public/images/food1.png'
import { Navbar } from '../components/nav/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
// import { useCart } from '../context/CartContext';

const page = () => {
    const {cartItems, removeFromCart, cartItemCount, updateQuantity, totalPrice} = useCart();
  return (
    <div className='w-full min-h-screen bg-yellow-50 flex'>
        <div className="p-5 w-[20%] h-screen fixed top-0 left-0 flex flex-col items-center gap-10 text-white bg-yellow-700">
            <h2 className="font-extrabold text-2xl"><Link href="/">Food</Link></h2>
            <ul className='flex flex-col gap-5'>
                <li >Cart</li>
                <li>Checkouts</li>
                <li>Order History</li>
                <li>My Account</li>
            </ul>
        </div>
        <div className='flex flex-col w-full ml-72'>
            <div className="w-full flex justify-end p-5">
                <h3>Profile</h3>
            </div>
            <div className="flex flex-col w-full gap-4">
                <h4 className='w-full text-yellow-800 ml-12'>Cart <span>Totol Items: {cartItemCount}</span></h4>
                <div className="flex items-center justify-between w-[55%] ml-12">
                    <span className="">ICON</span>
                    <span className="">Name</span>
                    <span className="">PRICE</span>
                    <span className="">QUANTITY</span>
                    <span className="">REMOVE</span>
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col w-[65%] h-[75vh] p-8 gap-4  overflow-scroll" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                        {
                            cartItems.length > 0 ? (
                                cartItems.map((data, index)=> (
                                    <div className="flex items-center w-full justify-between border-b  border-black p-4" key={index}>
                                        <span><Image src={data?.imgSrc} alt="random" className='w-16 h-16'/></span>
                                        <span>{data?.productName}</span>
                                        <span>${data?.price}</span>
                                        <div className="flex items-center gap-2">
                                            <button className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold" onClick={()=> updateQuantity(data?.id, 1)}>+</button>
                                            <span className="text-red-500 font-extrabold">Quantity: {data?.quantity}</span>
                                            <button className="w-8 h-8 rounded-full bg-orange-400 text-white font-extrabold" onClick={()=> updateQuantity(data?.id, -1)}>-</button>
                                        </div>
                                        <button onClick={()=> removeFromCart(data?.id)} className="text-white bg-red-600 rounded-md font-bold px-4 py-2">Remove</button>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center justify-center w-[100%] h-[40vh]">
                                    <h1 className="text-red-500 text-4xl font-extrabold">Your Cart is Empty</h1>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col fixed top-32 right-6 gap-5">
                        <div className="flex flex-col bg-yellow-100 rounded-sm p-5 w-80 gap-5">
                            <h2>Summary</h2>
                            <h3><span>Order Total: </span><span>${totalPrice.toFixed(2)}</span></h3>
                            <h4><span className="text-2xl text-blue-600 font-semibold">Subtotal: </span><span className="text-2xl text-blue-600 font-semibold">${totalPrice.toFixed(2)}</span></h4>
                        </div>
                        <button className='w-48 p-2 text-white bg-red-600 rounded-md font-bold'>CHECKOUT ITEMS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page;