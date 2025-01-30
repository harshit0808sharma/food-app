'use client'
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { MainPage } from "./components/main/MainPage";
import PopularDishes from "./components/mainpagecomponents/PopularDishes";
import TopMenuDishes from "./components/mainpagecomponents/TopMenuDishes";
import WeServe from "./components/mainpagecomponents/WeServe";


export default function Home() {

  return (
    <div className="relative min-h-screen bg-yellow-50">
      <Navbar/>
      <MainPage/>
      <PopularDishes/>
      <WeServe/>
      <TopMenuDishes/>
      <Footer/>
    </div>
  );
}

