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
    <div className="w-[100%] min-h-screen grid grid-cols-4 gap-y-5 py-10 px-20">
        {
            filteredData.map((data, index)=> (
                <Link href={`/product?id=${data?.id}`}>
                    <div key={index} className='w-72 h-fit rounded-[40px] border-2 border-yellow-400 relative cursor-pointer bg-white hover:scale-101 hover:shadow-2xl transition duration-500 ease-in-out'>
                        <Image src={data?.imgSrc} alt='random' className='w-72 h-72'/>
                        <div className='flex flex-col gap-2 p-4'>
                            <h2>Star</h2>
                            <h3 className='font-extrabold text-xl'>{data?.productName}</h3>
                            <p className="text-sm">{data?.description}</p>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-extrabold text-lg'>{data?.price}</h4>
                                <button onClick={()=> addToCart(data)} className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-10">+</button>
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