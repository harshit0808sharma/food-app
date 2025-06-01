'use client'
import { useState } from "react";
import { Navbar } from "../components/nav/Navbar";
import toast from "react-hot-toast";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.success("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.success("Please enter a valid email address.");
      return;
    }

    toast.success("Thank you for contacting us!");
    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-yellow-50 px-4 py-32">
      <Navbar />
      <div className="shadow-2xl bg-yellow-700 w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 p-6 relative">
        {/* Contact Info */}
        <div className="bg-blue-950 text-white p-6 rounded-md md:w-80 md:relative md:left-[-40px] w-full">
          <h2 className="font-extrabold text-2xl mb-6">Contact Us</h2>
          <ul className="flex flex-col gap-4 mb-6">
            <li>Location: street no xxxx</li>
            <li>hello@gmail.com</li>
            <li>1234567890</li>
          </ul>
          <ul className="flex gap-6 text-lg">
            <li className="cursor-pointer hover:underline">Insta</li>
            <li className="cursor-pointer hover:underline">Twitter</li>
            <li className="cursor-pointer hover:underline">Linkedin</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-4 p-4 md:w-[calc(100%-20rem)] w-full">
          <h2 className="text-white font-extrabold text-2xl mb-4">Get in Touch</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-md bg-slate-100 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Email"
            className="p-4 rounded-md bg-slate-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Type your message..."
            className="p-4 rounded-md bg-slate-100 outline-none resize-none h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-950 shadow-lg text-white font-bold text-lg rounded-full px-8 w-40 self-start hover:bg-blue-800 transition"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
