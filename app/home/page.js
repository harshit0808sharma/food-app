'use client'
import React from 'react'
import HomeContainer from '../components/homecontainer/HomeContainer';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FoodData } from '../components/data/Data';
import { Footer } from '../components/footer/Footer';

const index = () => {
  const [data, setData] = useState(FoodData);
  const {cartItemCount, showMessage} = useCart();
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filterItem = data.filter((item)=> item?.productName.toLowerCase().includes(value.toLowerCase()))
    setSearchResult(filterItem.slice(0, 5));
  }
  // console.log(searchResult)
  const handleResultClick = (productName) =>{
    setSearch(productName);
    setSearchResult([]);
  }
  const handleClick = () => {
    setSearchData(search);
    setSearchResult('')
  }

  return (
    <div className="relative w-full min-h-screen bg-yellow-50 flex flex-col">
      <div className="w-full h-6 p-10 bg-yellow-800 text-white flex justify-between items-center fixed top-0 left-0 z-10">
        <h1 className="font-extrabold text-2xl text-white"><Link href="/">Foodify</Link></h1>
        <div className="flex items-center rounded-full bg-yellow-100 w-[35%] justify-between relative">
          <input type="text" placeholder="Search Foodify.in" onChange={handleChange} value={search} className="text-black bg-transparent outline-none px-4"/> 
          <button onClick={handleClick} className="text-black w-20 h-10 rounded-r-full bg-yellow-300 font-extrabold border-l border-black flex items-center justify-center">S</button>
          {
            searchResult.length > 0 && search.length > 0 && (
              <ul className="absolute top-14 left-0 w-full h-fit bg-white rounded-md text-black p-4 shadow-md">
                {
                  searchResult.map((item, index)=> (
                    <li className="cursor-pointer" key={index} onClick={()=>handleResultClick(item.productName)}>{item?.productName}</li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="flex items-center gap-4">
          <p className="cursor-pointer flex flex-col items-center relative">
            <span className="text-white font-semibold absolute top-[-20px]">{cartItemCount}</span>
            <Link href="/cart">Cart</Link>
          </p>
          <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 cursor-pointer text-center text-black">
            <Link href="/restaurant">Sign Up</Link>
          </button>
        </div>
        <span className={`absolute bottom-[-45px] right-0 py-2 px-4 text-center bg-green-600 text-white rounded-sm ${showMessage ? 'block' : 'hidden'}`}>{cartItemCount} Item Added</span>
      </div>
      <div className="w-full text-center mt-24">
        <button onClick={()=> setCategory(0)} className={`px-2 py-1 mr-4 border-2 border-black rounded-full bg-yellow-600 w-32 cursor-pointer text-center ${category === 0 ? 'text-white' : 'text-black'}`}>All</button>
        <button onClick={()=> setCategory(1)} className={`px-2 py-1 mr-4 border-2 border-black rounded-full bg-yellow-600 w-32 cursor-pointer text-center ${category === 1 ? 'text-white' : 'text-black'}`}>Veg</button>
        <button onClick={()=> setCategory(2)} className={`px-2 py-1 mr-4 border-2 border-black rounded-full bg-yellow-600 w-32 cursor-pointer text-center ${category === 2 ? 'text-white' : 'text-black'}`}>Non-Veg</button>
        <button onClick={()=> setCategory(3)} className={`px-2 py-1 mr-4 border-2 border-black rounded-full bg-yellow-600 w-32 cursor-pointer text-center ${category === 3 ? 'text-white' : 'text-black'}`}>Fast</button>
        <button onClick={()=> setCategory(4)} className={`px-2 py-1 mr-4 border-2 border-black rounded-full bg-yellow-600 w-32 cursor-pointer text-center ${category === 4 ? 'text-white' : 'text-black'}`}>Other</button>
      </div>
      <div className="">
        <HomeContainer category={category} searchData={searchData}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default index;