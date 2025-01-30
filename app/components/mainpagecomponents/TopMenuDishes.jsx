'use client'
import Image from 'next/image'
import React from 'react'
import dish1 from '../../../public/images/food25.png'
import dish2 from '../../../public/images/food23.png'
import dish3 from '../../../public/images/food17.png'
// import { useState } from 'react/cjs/react.production.min'

const TopMenuDishes = () => {
    // const [dish1, setDish1] = useState({
    //     id: 13,
    //     categoryId: 4,
    //     productName: "Noodles first",
    //     ratingStar: "4.2",
    //     description: "Loremenim sequi quidem facere molestias, recusandae aperiam!",
    //     price: 35,
    //     imgSrc: dish1,
    //     isAvailable: true,
    // })
    // const [dish2, setDish2] = useState({
    //     id: 11,
    //     categoryId: 4,
    //     productName: "Noodles second",
    //     ratingStar: "4.2",
    //     description: "Loremenim sequi quidem facere molestias, recusandae aperiam!",
    //     price: 55,
    //     imgSrc: dish2,
    //     isAvailable: true,
    // })
    // const [dish3, setDish3] = useState({
    //     id: 8,
    //     categoryId: 3,
    //     productName: "Noodles third",
    //     ratingStar: "4.2",
    //     description: "Loremenim sequi quidem facere molestias, recusandae aperiam!",
    //     price: 35,
    //     imgSrc: dish3,
    //     isAvailable: true,
    // })
  return (
    <div className='w-full min-h-screen flex flex-col gap-4 p-20 bg-yellow-700'>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-extrabold text-white'>Top List</h1>
            <p className='text-white'>Our mainstay menu</p>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div className='w-64 p-2 rounded-[40px] border-2 border-yellow-400 relative cursor-pointer bg-white hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'>
                <Image src={dish1} alt='random' className=''/>
                <div className='flex flex-col gap-2 px-4'>
                    <h2>Star</h2>
                    <h3 className='font-extrabold text-xl'>Noodles three</h3>
                    <p>white plate with dried shrimps</p>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-extrabold text-lg'>12$</h4>
                        <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-10">+</button>
                    </div>
                </div>
            </div>
            <div className='w-80 p-2 rounded-[40px] border-2 border-yellow-400 relative cursor-pointer bg-white hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'>
                <Image src={dish2} alt='random' className=''/>
                <div className='flex flex-col gap-2 px-4'>
                    <h2>Star</h2>
                    <h3 className='font-extrabold text-xl'>Noodles three</h3>
                    <p>white plate with dried shrimps</p>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-extrabold text-lg'>12$</h4>
                        <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-10">+</button>
                    </div>
                </div>
            </div>
            <div className='w-64 p-2 rounded-[40px] border-2 border-yellow-400 relative cursor-pointer bg-white hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out'>
                <Image src={dish3} alt='random' className=''/>
                <div className='flex flex-col gap-2 px-4'>
                    <h2>Star</h2>
                    <h3 className='font-extrabold text-xl'>Noodles three</h3>
                    <p>white plate with dried shrimps</p>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-extrabold text-lg'>12$</h4>
                        <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-10">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMenuDishes