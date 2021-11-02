import React from "react";
import "../css/header.css";
import { gsap } from "gsap";

function Header({ about }) {
  return (
    <div className="header h-95vh w-full relative">
      <div className="px-16 py-4 flex items-center justify-between">
        <div className="font-ceviche text-3xl text-white cursor-pointer">
          Nimbo
        </div>
        <ul className="flex items-center gap-4">
          <li className="text-white font-mono link">Home</li>
          <li
            className="text-white font-mono link"
            onClick={() => about.current.scrollIntoView()}
          >
            About
          </li>
          <li className="text-white font-mono link">Contact us</li>
          <li className="text-white font-mono link">Gallery</li>
          <li className="text-white font-mono link">Book</li>
        </ul>
      </div>
      <div className="absolute top-2/4 left-2/4 w-full -translate-x-2/4 -translate-y-2/4">
        <h1 className="font-noto text-center text-primary-blue-200 text-4xl font-bold tracking-widest">
          Hotel Made for the Fun and Luxury
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <button className="btn shadow-md bg-primary-yellow">
            Book a Room
          </button>
          <button className="btn shadow-md bg-primary-yellow">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
