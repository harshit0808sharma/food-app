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
    <div className="w-full min-h-screen flex flex-col bg-yellow-50 p-10 gap-6">
        <div className="w-full text-center">
            <h1 className="font-extrabold text-3xl mb-2">We Serve</h1>
            <p>Lorem ipsum dolor fugiat omnis recusandae, illo, eos quod!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[img, img1, img2, img3, img4, img5].map((image, idx) => (
            <div key={idx} className="flex flex-col items-center px-6 md:px-10 gap-3">
                <Image src={image} alt={`Image ${idx + 1}`} />
                <div className="text-center md:text-left">
                <h2 className="font-extrabold">Yummy Burgers</h2>
                <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
                    accusantium deserunt mollitia quasi consequuntur.
                </p>
                </div>
            </div>
            ))}
        </div>
    </div>

  )
}

export default WeServe;