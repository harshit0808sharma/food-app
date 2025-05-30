'use client'
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { MainPage } from "./components/main/MainPage";
import PopularDishes from "./components/mainpagecomponents/PopularDishes";
import TopMenuDishes from "./components/mainpagecomponents/TopMenuDishes";
import WeServe from "./components/mainpagecomponents/WeServe";


export default function Home() {

  return (
    <div className="relative min-h-screen bg-yellow-50 flex flex-col">
      <Navbar />

      {/* Main content container */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <MainPage />
        <PopularDishes />
        <WeServe />
        <TopMenuDishes />
      </main>

      <Footer />
    </div>

  );
}

