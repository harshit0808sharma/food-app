import React from 'react'
import Image from 'next/image';
import img from '../../public/images/food24.png'
import { Navbar } from '../components/nav/Navbar';

const page = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full min-h-screen flex flex-col mt-14 md:flex-row'>
            <div className='w-full md:w-1/2'>
                <Image src={img} alt="random" className='w-full h-full object-cover'/>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-6'>
            <div>
                <h1 className='text-3xl font-bold'>Reviews</h1>
                <h3>Foodify</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, officiis magni dolores minus numquam architecto corrupti expedita laboriosam esse autem quis eos saepe, dolorum in dolorem libero quibusdam ipsa?</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default page;