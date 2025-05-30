import Image from "next/image"
import img from '../../../public/images/food16.png'
import food23 from '../../../public/images/food23.png'
import Link from "next/link"

export const MainPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center p-6 gap-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Text Content */}
        <div className="flex flex-col gap-5 md:basis-1/2 max-w-md md:max-w-none">
          <h2 className="text-4xl font-extrabold">
            We Serve The Test <br /> You Love
          </h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur quidem corporis, voluptates ovident.
          </p>
          <div className="flex gap-5 flex-wrap">
            <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 hover:bg-yellow-400 transition">
              Explore Food
            </button>
            <button className="p-2 border-2 border-yellow-500 rounded-full w-32 hover:bg-yellow-100 transition">
              <Link href="/home">Search</Link>
            </button>
          </div>
        </div>

        {/* Right Image + Buttons */}
        <div className="relative md:basis-1/2 flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-yellow-100 rounded-3xl p-6 md:p-10">
          <Image src={food23} alt="random" className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl" />

          <div className="flex flex-wrap md:flex-col gap-3">
            {["Dishes", "Dessert", "Drinks", "Platter", "Snacks"].map((item) => (
              <button
                key={item}
                className="p-2 bg-white rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition"
              >
                <Image src={img} alt={item} className="w-6 h-6 rounded-full" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
