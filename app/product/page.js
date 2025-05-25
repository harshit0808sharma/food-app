import React, { Suspense } from 'react'
import ProductPageClient from './ProductPageClient'


const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ProductPageClient/>
    </Suspense>
  )
}

export default page




// "use client";
// import React from 'react';
// import { useSearchParams } from 'next/navigation';
// import { FoodData } from '../components/data/Data';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useCart } from '../context/CartContext';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const page = () => {
//     const { addToCart, cartItemCount, showMessage } = useCart();
//     const [data, setData] = useState(FoodData);
//     const [newData, setNewData] = useState(null);

//     const router = useRouter();
//     const { query } = router;
//     const id = query.id;

//     const dataFetch = () => {
//         const filterData = data.filter((item)=> item?.id === Number(id));
//         setNewData(filterData[0]);

//     }
//     useEffect(()=>{
//         dataFetch();
//     }, [id])
//     // console.log(newData)


//   return (
//     <div className="relative w-full min-h-screen bg-yellow-50 gap-6 flex flex-col items-center justify-center">
//         <div className="fixed top-0 w-full flex justify-between bg-transparent px-10 py-4">
//             <h1 className="font-extrabold text-2xl text-yellow-800"><Link href="/">Foodify</Link></h1>
//             <p className="cursor-pointer flex flex-col items-center relative">
//                 <span className="text-black font-semibold">no: {cartItemCount}</span>
//                 <Link href="/cart">Cart</Link>
//             </p>
//             <span className={`absolute bottom-[-45px] right-0 py-2 px-4 text-center bg-green-600 text-white rounded-sm ${showMessage ? 'block' : 'hidden'}`}>{cartItemCount} Item Added</span>
//         </div>
        
//         <div className='flex items-center w-[60%] h-[75vh] bg-transparent'>
//             <div className=" bg-yellow-800 h-full flex justify-center items-center basis-[50%] shadow-2xl rounded-2xl">
//                 {/* <Image src={newData?.imgSrc?.src} alt={newData?.productName} width={newData?.imgSrc?.width || 1280} height={newData?.imgSrc?.height || 1280}  className="w-full h-auto"/> */}
//                 <img src={newData?.imgSrc?.src} alt="random" className="w-full h-auto"/>
//             </div>
//             <div className='flex flex-col gap-4 basis-[50%] p-10 bg-white shadow-2xl h-[70vh] border-y-2 border-r-2 rounded-r-md border-yellow-800'>
//                 <h2 className="uppercase text-yellow-800 font-extrabold text-2xl">{newData?.productName}</h2>
//                 <p className="text-sm">{newData?.description}</p>
//                 <h3 className="text-lg font-light">${newData?.price}</h3>
//                 <span className="text-xl">{newData?.ratingStar}</span>
//                 <div className="flex items-center gap-5 text-lg">
//                     <p>Size : </p>
//                     <label htmlFor="small">
//                         <input type="radio" name="size" id="small" className=""/>
//                         <span>S</span>
//                     </label>
//                     <label htmlFor="medium">
//                         <input type="radio" name="size" id="medium"/>
//                         <span>M</span>
//                     </label>
//                     <label htmlFor="large">
//                         <input type="radio" name="size" id="large"/>
//                         <span>L</span>
//                     </label>
//                 </div>
//                 <button onClick={()=> addToCart(newData)} className="text-white bg-yellow-800 px-6 py-1 inline-block w-[50%]">ADD TO CART</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default page;