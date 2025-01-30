import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex flex-col relative bottom-0 left-0 w-full">
        <button className="w-full inline-block p-5 text-lg bg-yellow-800 border-b-2 border-white text-white"><a href="#header">Back To Top</a></button>
        <div className="w-full inline-block p-5 bg-yellow-800 border-b-2 border-white text-center">
            <button className="p-2 border-2 border-yellow-500 rounded-full bg-yellow-300 w-32 cursor-pointer text-center text-black"><Link href="/contact">Contact</Link></button>
        </div>
        <div className="w-full p-6 items-center bg-yellow-900 text-white flex justify-between">
            <h2 className="text-5xl text-white rounded-lg">Shop</h2>
            <ul>
                <li>CONTACT</li>
                <li>Contact US</li>
                <li>About Us</li>
            </ul>
            <ul>
                <li>CONNECT WITH</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
            <ul>
                <li>SELLS</li>
                <li>Sells on Products</li>
                <li>Sells under 1000</li>
            </ul>
        </div>
    </div>
  )
}
