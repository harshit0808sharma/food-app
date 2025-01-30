"use client"; // Ensuring the component is client-side

import React, { useState, useEffect } from 'react';
import { FoodData } from '../components/data/Data';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Use useSearchParams to read the query params

const ProductPage = () => {
    const { addToCart, cartItemCount, showMessage } = useCart();
    const [data, setData] = useState(FoodData);
    const [newData, setNewData] = useState(null);
    const [isClient, setIsClient] = useState(false); // Flag to check if we're on the client side

    const searchParams = useSearchParams(); // Using useSearchParams to access query params
    const productId = searchParams.get('id'); // Get the 'id' query param from URL

    // useEffect to check if window is available, indicating a client-side render
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true); // Now it's safe to use the router and query params
        }
    }, []);

    // useEffect to fetch the product data when the page is mounted and client-side
    useEffect(() => {
        if (isClient && productId) {
            console.log("Product ID:", productId);  // Debugging: Check if product ID is available

            // Convert productId to number for comparison
            const id = Number(productId); // Ensure the id is a number
            const filterData = data.filter((item) => item?.id === id); // Find the product by id
            
            console.log("Filtered Data:", filterData);  // Debugging: Check if filterData is populated
            
            if (filterData.length > 0) {
                setNewData(filterData[0]); // Set the product data to state if found
            } else {
                console.log("No product found for ID:", id);  // Debugging: If no product is found
            }
        }
    }, [isClient, productId, data]); // Re-run the effect if isClient, productId, or data changes

    // Check if newData is available before rendering
    if (!newData) {
        return <div>Loading...</div>; // Show loading until data is fetched
    }

    return (
        <div className="relative w-full min-h-screen bg-yellow-50 gap-6 flex flex-col items-center justify-center">
            <div className="fixed top-0 w-full flex justify-between bg-transparent px-10 py-4">
                <h1 className="font-extrabold text-2xl text-yellow-800"><Link href="/">Foodify</Link></h1>
                <p className="cursor-pointer flex flex-col items-center relative">
                    <span className="text-black font-semibold">no: {cartItemCount}</span>
                    <Link href="/cart">Cart</Link>
                </p>
                <span className={`absolute bottom-[-45px] right-0 py-2 px-4 text-center bg-green-600 text-white rounded-sm ${showMessage ? 'block' : 'hidden'}`}>{cartItemCount} Item Added</span>
            </div>

            <div className='flex items-center w-[60%] h-[75vh] bg-transparent'>
                <div className=" bg-yellow-800 h-full flex justify-center items-center basis-[50%] shadow-2xl rounded-2xl">
                    <img src={newData?.imgSrc?.src} alt="random" className="w-full h-auto"/>
                </div>
                <div className='flex flex-col gap-4 basis-[50%] p-10 bg-white shadow-2xl h-[70vh] border-y-2 border-r-2 rounded-r-md border-yellow-800'>
                    <h2 className="uppercase text-yellow-800 font-extrabold text-2xl">{newData?.productName}</h2>
                    <p className="text-sm">{newData?.description}</p>
                    <h3 className="text-lg font-light">${newData?.price}</h3>
                    <span className="text-xl">{newData?.ratingStar}</span>
                    <div className="flex items-center gap-5 text-lg">
                        <p>Size : </p>
                        <label htmlFor="small">
                            <input type="radio" name="size" id="small" className=""/>
                            <span>S</span>
                        </label>
                        <label htmlFor="medium">
                            <input type="radio" name="size" id="medium"/>
                            <span>M</span>
                        </label>
                        <label htmlFor="large">
                            <input type="radio" name="size" id="large"/>
                            <span>L</span>
                        </label>
                    </div>
                    <button onClick={() => addToCart(newData)} className="text-white bg-yellow-800 px-6 py-1 inline-block w-[50%]">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;






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