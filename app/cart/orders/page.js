'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import img from '../../../public/images/food16.png'
import img1 from '../../../public/images/CheckAnimation.gif'
import Image from 'next/image';
import { useOrder } from '@/app/context/OrderContext';

const page = () => {
    const { loading, orderVisible } = useOrder();
    const [orderedItems, setOrderedItems] = useState(null);
    useEffect(()=> {
        const storedItems = localStorage.getItem('cartItems');
        if(storedItems && orderVisible){
            setOrderedItems(JSON.parse(storedItems));
        } else {
            setOrderedItems([]);
        }
    }, [orderVisible])
    
    // console.log(orderVisible);

      if (loading || orderedItems === null) {
            return (
            <div className="w-full h-screen flex justify-center items-center flex-col gap-1">
                <Image className="w-52" src={img1} alt="loading" />
                <p className="text-xl font-bold">Loading...</p>
            </div>
            );
        }

  return (
    <div className="w-full min-h-screen bg-yellow-50 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 bg-transparent md:bg-yellow-700 text-black md:text-white py-6 flex flex-col md:fixed md:h-full md:top-0 md:left-0">
            {/* Logo */}
            <h2 className="font-extrabold text-2xl mb-6 text-center">
            <Link href="/">Foodify</Link>
            </h2>

            {/* Nav Items */}
            <ul className="flex flex-wrap justify-center md:flex-col md:items-center gap-4 text-sm md:text-base">
            <li>
                <Link href="/cart" className="text-center cursor-pointer block">Cart</Link>
            </li>
            <li>
                <Link
                href="/order-history"
                className="text-center cursor-pointer border-2 border-black md:border-white rounded-md px-2 py-1 block"
                >
                Order History
                </Link>
            </li>
            <li>
                <Link href="/cart/account" className="text-center cursor-pointer block">
                My Account
                </Link>
            </li>
            </ul>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col w-full md:ml-[20%] gap-4 pt-24 md:pt-5 px-4">
            {orderedItems && orderedItems.length > 0 ? (
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                <thead>
                    <tr className="bg-gray-100 text-gray-600">
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedItems.map((item, index) => (
                    <tr key={index} className="border-b text-center">
                        <td className="py-4">
                        <Image
                            src={item?.imgSrc}
                            alt="product"
                            className="w-16 h-16 object-cover rounded-md mx-auto"
                        />
                        </td>
                        <td>{item?.productName}</td>
                        <td>{item?.price} $</td>
                        <td>{item?.quantity}</td>
                        <td>
                        <div className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span>Active</span>
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            ) : (
            <div className="flex items-center justify-center w-full h-[40vh]">
                <h1 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                You have not placed any items!
                </h1>
            </div>
            )}
        </main>
        </div>

  )
}

export default page