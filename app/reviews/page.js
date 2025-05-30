import React from 'react'
import Image from 'next/image';
import img from '../../public/images/food24.png'
import { Navbar } from '../components/nav/Navbar';

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col pt-20 bg-yellow-50 md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <Image
            src={img}
            alt="random"
            className="w-3/4 md:w-1/2 object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-3xl font-bold">Reviews</h1>
            <h3 className="text-xl font-semibold">Foodify</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ducimus, officiis magni dolores minus numquam architecto corrupti
              expedita laboriosam esse autem quis eos saepe, dolorum in dolorem
              libero quibusdam ipsa?
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default page;