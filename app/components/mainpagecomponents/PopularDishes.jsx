"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FoodItems } from '../data/Data';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
// import { useCart } from '../../context/CartContext';

const PopularDishes = () => {
    const { addToCart } = useCart();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex >= FoodItems.length - 4 ? 0 : prevIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? FoodItems.length - 4 : prevIndex - 1);
    };

    return (
        <div className="flex flex-col gap-6 w-full min-h-screen py-20 px-6 sm:px-10 md:px-20 bg-yellow-700">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl text-white">Popular Dishes</h2>
                <div className="flex gap-2">
                <button
                    className="p-2 border-2 border-yellow-500 rounded-full w-10 text-white"
                    onClick={prevSlide}
                >
                    L
                </button>
                <button
                    className="p-2 bg-yellow-200 border-2 border-yellow-500 rounded-full w-10 text-black"
                    onClick={nextSlide}
                >
                    R
                </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                {FoodItems.slice(currentIndex, currentIndex + 4).map((data, index) => (
                <Link
                    href={`/product?id=${data?.id}`}
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/4"
                >
                    <div className="flex flex-col min-h-[24rem] bg-white rounded-lg gap-1 text-center border-2 border-yellow-400 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <Image
                        src={data?.imgSrc}
                        alt="random"
                        className="w-full h-64 rounded-t-lg object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-extrabold text-lg">{data?.productName}</h3>
                        <h4>{data?.ratingStar}</h4>
                        <p className="text-sm">{data?.description}</p>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h4 className="font-bold">${data?.price}</h4>
                        <button
                        className="p-2 border-2 border-yellow-500 rounded-full w-32 hover:bg-yellow-300 transition duration-500 ease-in-out text-black"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent Link click
                            addToCart(data);
                        }}
                        >
                        Add To Cart
                        </button>
                    </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>

    )
}

export default PopularDishes