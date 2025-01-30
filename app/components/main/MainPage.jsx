import Image from "next/image"
import img from '../../../public/images/food16.png'
import food23 from '../../../public/images/food23.png'
import Link from "next/link"

export const MainPage = () => {
  return (
    <div className="w-[100%] min-h-screen flex flex-col justify-center p-10 gap-10 mt-10">
        <div className="w-full h-60 p-5 flex justify-between items-center basis-1/2">
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-extrabold">We Serve The Test <br/>You Love</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur quidem corporis, voluptates ovident.</p>
                <div className="flex gap-5">
                  <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32">Explore Food</button>
                  <button className="p-2 border-2 border-yellow-500 rounded-full w-32"><Link href="/home">Search</Link></button>
                </div>
            </div>
            <div className="relative basis-1/2">
              <div className="flex items-center rounded-full bg-yellow-100 p-10">
                  <Image src={food23} alt="random" className="w-96 h-96"/>
                  <div className="flex flex-col gap-5">
                    <button className="p-2 bg-white rounded-full flex items-center gap-1"><Image src={img} alt="random" className="w-6 h-6 rounded-full"/>Dishes</button>
                    <button className="p-2 bg-white rounded-full flex items-center gap-1"><Image src={img} alt="random" className="w-6 h-6 rounded-full"/>Dessert</button>
                    <button className="p-2 bg-white rounded-full flex items-center gap-1"><Image src={img} alt="random" className="w-6 h-6 rounded-full"/>Drinks</button>
                    <button className="p-2 bg-white rounded-full flex items-center gap-1"><Image src={img} alt="random" className="w-6 h-6 rounded-full"/>Platter</button>
                    <button className="p-2 bg-white rounded-full flex items-center gap-1"><Image src={img} alt="random" className="w-6 h-6 rounded-full"/>Snacks</button>
                  </div>
              </div>
            </div>
        </div>
        {/* <Items/> */}
    </div>
  )
}
