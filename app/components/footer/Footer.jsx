import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex flex-col w-full relative bottom-0 left-0">

        {/* Back to top button */}
        <button className="w-full p-5 text-lg bg-yellow-800 border-b-2 border-white text-white hover:bg-yellow-700 transition">
            <a href="#header">Back To Top</a>
        </button>

        {/* Contact button section */}
        <div className="w-full p-5 bg-yellow-800 border-b-2 border-white text-center">
            <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 cursor-pointer text-black hover:bg-yellow-400 transition">
            <Link href="/contact">Contact</Link>
            </button>
        </div>

        {/* Footer main content */}
        <div className="w-full p-6 bg-yellow-900 text-white flex flex-col md:flex-row md:justify-between md:items-start gap-6">

            {/* Shop Title */}
            <h2 className="text-3xl md:text-5xl rounded-lg text-center md:text-left">
            Shop
            </h2>

            {/* Columns container */}
            <div className="flex flex-col md:flex-row md:gap-12 w-full md:w-auto justify-center">

            {/* Contact column */}
            <ul className="mb-6 md:mb-0 text-center md:text-left">
                <li className="font-bold mb-2">CONTACT</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>

            {/* Connect with column */}
            <ul className="mb-6 md:mb-0 text-center md:text-left">
                <li className="font-bold mb-2">CONNECT WITH</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>

            {/* Sells column */}
            <ul className="mb-6 md:mb-0 text-center md:text-left">
                <li className="font-bold mb-2">SELLS</li>
                <li>Sells on Products</li>
                <li>Sells under 1000</li>
            </ul>

            </div>
        </div>
        </div>

  )
}
