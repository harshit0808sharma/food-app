'use client'
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link"
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const {cartItemCount, showMessage} = useCart();
  const {user} = useAuth();
  const router = useRouter();


  return (
    <div
      id="header"
      className="
        w-full fixed top-0 left-0 z-10
        flex flex-row flex-wrap items-center justify-between
        p-4
        bg-transparent
        text-black
        gap-4
      "
    >
      {/* Foodify title always visible with black text */}
      <h1 className="font-extrabold text-2xl whitespace-nowrap text-black">
        <Link href="/">Foodify</Link>
      </h1>

      {/* Menu links */}
      <ul className="flex flex-row flex-wrap gap-4 items-center">
        <Link href="/aboutus" className="cursor-pointer hover:underline whitespace-nowrap text-black">About Us</Link>
        <Link href="/home" className="cursor-pointer hover:underline whitespace-nowrap text-black">Menu</Link>
        <Link href="/reviews" className="cursor-pointer hover:underline whitespace-nowrap text-black">Reviews</Link>

        {user ? (
          <>
            <li className="relative cursor-pointer flex flex-col items-center whitespace-nowrap">
              <span className="absolute -top-5 right-0 bg-red-600 rounded-full px-2 text-xs font-bold text-white">
                {cartItemCount}
              </span>
              <Link href="/cart" className="text-black">Cart</Link>
            </li>
            <li className="flex flex-col items-center md:flex-row md:gap-3 whitespace-nowrap">
              <Link href="/cart/account" className="text-blue-600 font-extrabold hover:underline">Account</Link>
            </li>
          </>
        ) : (
          <button
            onClick={() => router.push('/restaurant')}
            className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 cursor-pointer text-black hover:bg-yellow-400 transition whitespace-nowrap"
          >
            Sign Up
          </button>
        )}
      </ul>

      <span
        className={`absolute bottom-[-45px] right-0 py-2 px-4 text-center bg-green-600 text-white rounded-sm ${
          showMessage ? 'block' : 'hidden'
        }`}
      >
        {cartItemCount} Item Added
      </span>
    </div>

  )
} 
