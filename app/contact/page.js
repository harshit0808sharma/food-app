import { Navbar } from "../components/nav/Navbar";

const index = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center bg-yellow-50">
        <Navbar/>
        <div className="shadow-2xl w-[50%] min-h-96 bg-yellow-700 relative flex gap-1 items-center ">
            <div className="bg-blue-950 w-80 h-80 flex flex-col gap-4 text-white p-4 shadow-3xl relative left-[-40px]">
                <h2 className="font-extrabold text-white text-2xl">Contact Us</h2>
                <ul className="flex flex-col gap-5">
                    <li>location: street no xxxx</li>
                    <li>hello@gmail.com</li>
                    <li>1234567890</li>
                </ul>
                <ul className="flex gap-4">
                    <li>Insta</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 w-[80%] p-6">
                <h2 className="text-white font-extrabold">Get in Touch</h2>
                <input type="text" placeholder="Your Name" className="p-4 rounded-md bg-slate-100 outline-none"/>
                <input type="text" placeholder="Your Email" className="p-4 rounded-md bg-slate-100 outline-none"/>
                <textarea name="" id="" placeholder="Type you message..." className="p-4 rounded-md bg-slate-100 outline-none"/>
                <button className="bg-blue-950 shadow-lg text-white font-bold text-lg rounded-full pl-8 pr-8 w-[40%]">SEND</button>
            </div>
        </div>
    </div>
  )
}

export default index;