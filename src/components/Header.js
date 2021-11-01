import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header h-95vh w-full relative">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <h1 className="font-serif text-3xl font-bold">
          Hotel Made for the Fun and Luxury
        </h1>
      </div>
    </div>
  );
}

export default Header;
