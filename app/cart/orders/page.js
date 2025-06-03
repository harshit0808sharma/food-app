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
                <Image className="w-40 h-32" src={img1} alt="loading" />
                <p className="text-xl font-bold">Loading...</p>
            </div>
            );
        }

  return (
    <div className="w-full min-h-screen bg-yellow-50 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 md:bg-yellow-700 md:text-white bg-transparent text-black py-6 flex flex-col md:fixed md:h-full md:top-0 md:left-0">
            {/* Logo */}
            <h2 className="font-extrabold text-2xl mb-6 text-center">
                <Link href="/">Foodify</Link>
            </h2>

            {/* Nav Items */}
            <ul className="flex flex-wrap justify-center md:flex-col md:items-center gap-4 text-sm md:text-base">
                <Link href="/cart" className="text-center cursor-pointer">Cart</Link>
                <li className="text-center cursor-pointer border-2 border-black md:border-white rounded-md px-2 py-1">Order History</li>
                <Link href="/cart/account" className="text-center cursor-pointer">
                My Account
                </Link>
            </ul>
        </div>
        <div className="flex flex-col w-full md:ml-[20%] gap-4 pt-24 md:pt-5">
            {
            <table className='min-w-full text-sm text-left'>
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
                    {
                        orderedItems !== null ? (
                            orderedItems.map((item, index) => (
                            <tr className='border-b text-center' key={index}>
                                <td className='py-4'><Image src={item?.imgSrc} alt="random" className='w-16 h-16 object-cover rounded-md'/></td>
                                <td>{item?.productName}</td>
                                <td>{item?.price} $</td>
                                <td>{item?.quantity}</td>
                                <td className='align-middle'>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    </div>
                                </td>
                                <td><hr/></td>
                            </tr>
                        ))
                        ) : (
                            <div className="flex items-center justify-center w-full h-[40vh]">
                                <h1 className="text-red-500 text-4xl font-extrabold">You have not placed any items!</h1>
                            </div>
                        )
                    }
                </tbody>
            </table>
            }
        </div>
    </div>
  )
}

export default page