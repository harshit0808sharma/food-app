import React from 'react'
import img from '../../../public/images/food25.png'
import img1 from '../../../public/images/food1.png'
import img2 from '../../../public/images/food14.png'
import img3 from '../../../public/images/food16.png'
import img4 from '../../../public/images/food17.png'
import img5 from '../../../public/images/food20.png'
import Image from 'next/image';

const WeServe = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-yellow-50 p-10 gap-2'>
        <div className='w-full text-center'>
            <h1 className='font-extrabold text-3xl'>We Serve</h1>
            <p>Lorem ipsum dolor fugiat omnis recusandae, illo, eos quod!</p>
        </div>
        <div className='grid grid-cols-3 gap-0'>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img1} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img2} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img3} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img4} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
            <div className='flex flex-col items-center px-16 gap-1'>
                <Image src={img5} alt="random" />
                <div className='px-10'>
                    <h2 className='font-extrabold'>Yummy Bergers</h2>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium deserunt mollitia quasi consequuntur</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeServe;