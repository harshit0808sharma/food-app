'use client'
import { useCart } from "@/app/context/CartContext";
import Link from "next/link"

export const Navbar = () => {
  const {cartItemCount, showMessage} = useCart();
  return (
    <div className="w-full h-6 p-10 bg-yellow-800 text-white flex justify-between items-center fixed top-0 left-0 z-10" id="header">
        <h1 className="font-extrabold text-2xl text-white"><Link href="/">Foodify</Link></h1>
        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Reviews</li>
          <li className="cursor-pointer flex flex-col items-center relative">
            <span className="text-white font-semibold absolute top-[-20px]">{cartItemCount}</span>
            <Link href="/cart">Cart</Link>
          </li>
          <li className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 cursor-pointer text-center text-black"><Link href="/restaurant">Sign Up</Link></li>
        </ul>
        <span className={`absolute bottom-[-45px] right-0 py-2 px-4 text-center bg-green-600 text-white rounded-sm ${showMessage ? 'block' : 'hidden'}`}>{cartItemCount} Item Added</span>
    </div>
  )
}

{/* <div className=" overflow-hidden flex items-center border-white border-[2px] rounded-full w-[30%]">
    <input className="basis-[80%] p-1 pl-4 bg-transparent text-lg" type="text" placeholder="Search Anything..."/>
    <span className=" basis-[20%] text-blue-900 font-bold bg-yellow-500 w-full h-full p-2 hover:bg-yellow-600 cursor-pointer">Search</span>
</div> */}