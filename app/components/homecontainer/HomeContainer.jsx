'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { FoodData } from '../data/Data';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

const HomeContainer = ({category, searchData}) => {
    const {addToCart} = useCart();
    const [data, setData] = useState(FoodData);
    const [filteredData, setFilteredData] = useState(data);

    const filterFunction = () => {
        let filterData = data;
        if(searchData && searchData.trim() !== ""){
            filterData = data.filter(item => item?.productName.toLowerCase().includes(searchData.toLowerCase()))
        }
        if(category > 0){
            filterData = data.filter(item => item?.categoryId === category);
        }
        setFilteredData(filterData);
    }

    useEffect(()=> {
        filterFunction();
    }, [category, searchData])


  return (
    <div className="w-full min-h-screen grid gap-y-5 gap-5 py-10 px-4 sm:px-10 md:px-16 lg:px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {
            filteredData.map((data, index) => (
            <Link href={`/product?id=${data?.id}`} key={data?.id || index}>
                <div className='w-full max-w-xs h-fit rounded-[40px] border-2 border-yellow-400 relative cursor-pointer bg-white 
                                hover:scale-[1.01] hover:shadow-2xl transition-transform duration-500 ease-in-out mx-auto'>
                <Image src={data?.imgSrc} alt='random' className='w-full h-72 object-cover rounded-t-[40px]' />
                <div className='flex flex-col gap-2 p-4'>
                    <h2>Star</h2>
                    <h3 className='font-extrabold text-xl'>{data?.productName}</h3>
                    <p className="text-sm">{data?.description}</p>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-extrabold text-lg'>${data?.price}</h4>
                    <button onClick={() => addToCart(data)} className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-10">+</button>
                    </div>
                </div>
                </div>
            </Link>
            ))
        }
        </div>

  )
}

export default HomeContainer;