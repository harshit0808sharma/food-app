'use client'
import React from 'react'
import HomeContainer from '../components/homecontainer/HomeContainer';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FoodData } from '../components/data/Data';
import { Footer } from '../components/footer/Footer';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/navigation';

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
    <div className="relative min-h-screen bg-yellow-50 flex flex-col">

  {/* Fixed Header */}
  <header className="fixed top-0 left-0 w-full bg-yellow-800 text-white flex flex-col md:flex-row justify-between items-center p-4 md:px-10 z-50 shadow-md gap-3" style={{ height: '80px' }}>
    <h1 className="font-extrabold text-2xl">
      <Link href="/">Foodify</Link>
    </h1>

    {/* Search Box */}
    <div className="flex items-center rounded-full bg-yellow-100 w-full md:w-[35%] justify-between relative px-4 py-1">
      <input
        type="text"
        placeholder="Search Foodify.in"
        onChange={handleChange}
        value={search}
        className="text-black bg-transparent outline-none flex-grow px-2"
      />
      <button
        onClick={handleClick}
        className="text-black w-12 h-10 rounded-r-full bg-yellow-300 font-extrabold border-l border-black flex items-center justify-center"
      >
        S
      </button>

      {searchResult.length > 0 && search.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white rounded-md text-black p-4 shadow-md max-h-60 overflow-auto z-60">
          {searchResult.map((item, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(item.productName)}
              className="cursor-pointer hover:bg-yellow-200 p-1 rounded"
            >
              {item?.productName}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Cart Section */}
    <div className="flex items-center gap-4">
      <p className="absolute top-5 right-10 cursor-pointer flex flex-col items-center">
        {cartItemCount > 0 && (
          <span className="absolute -top-3 text-xs font-semibold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
        <Link href="/cart">Cart</Link>
      </p>
    </div>
  </header>

  {/* Spacer div for header height */}
  <div style={{ height: '80px' }} />

  {/* Wrap categories and main content in a container with padding top */}
  <div className="w-full flex flex-col px-4 md:px-10 pt-6">

    {/* Categories Buttons */}
    <div className="w-full flex flex-wrap justify-center gap-3 mb-6 mt-8 bg-yellow-50">
      {["All", "Veg", "Non-Veg", "Fast", "Other"].map((catName, idx) => (
        <button
          key={idx}
          onClick={() => setCategory(idx)}
          className={`px-4 py-2 border-2 border-black rounded-full w-28 cursor-pointer text-center transition-colors duration-300 ${
            category === idx
              ? "bg-yellow-600 text-white"
              : "text-black bg-yellow-300 hover:bg-yellow-400"
          }`}
        >
          {catName}
        </button>
      ))}
    </div>

    {/* Main Content */}
    <main className="flex-grow">
      <HomeContainer category={category} searchData={searchData} />
    </main>
  </div>

  {/* Footer */}
  <footer>
    <Footer />
  </footer>
</div>



  )
}

export default index;