import React from 'react'
import { Navbar } from '../components/nav/Navbar'
import img from '../../public/images/food14.png'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <>
        <Navbar />
        <div className="w-full min-h-screen flex flex-col pt-20 bg-yellow-50 md:flex-row">
            {/* Left Text Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:px-20">
            <div className="flex flex-col gap-4 max-w-md md:max-w-lg">
                <h1 className="text-3xl font-bold">About Us</h1>
                <h2 className="text-2xl">Have no time to <br /> prepare food?</h2>
                <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, officiis magni dolores minus numquam architecto corrupti expedita laboriosam esse autem quis eos saepe, dolorum in dolorem libero quibusdam ipsa?
                </p>
                <Link href="/home" className="text-white bg-orange-400 px-10 py-2 rounded-md max-w-max hover:bg-orange-500 transition">
                Order Now
                </Link>
            </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
            <Image src={img} alt="About us image" className="w-full max-w-md md:max-w-lg object-cover rounded-lg" />
            </div>
        </div>
    </>

  )
}

export default page