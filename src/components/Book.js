import React, { useState } from "react";
import image19 from "../images/image19.jpg";
import image20 from "../images/image20.jpg";
import image21 from "../images/image21.jpg";

function Book() {
  const [room, setRoom] = useState({
    full_name: "",
    email: "",
    phone_number: "",
  });

  const backgroundStyle = (image) => {
    return {
      backgroundImage: `linear-gradient(to right, rgba(252, 162, 17, 0.1), rgba(252, 162, 17, 0.1)), url(${image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  };

  const handleOnChangeInput = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };
  return (
    <div className="mb-8 mt-28 px-16 flex bg-gray-50 py-4">
      <div className="flex-grow flex flex-col">
        <h1 className="text-2xl mb-6 font-mono font-bold">Book a Room</h1>
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          name="full_name"
          value={room.full_name}
          onChange={handleOnChangeInput}
          className="input"
          type="email"
          placeholder="Enter your Full Name"
        />
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-4">
          Email
        </label>
        <input
          name="email"
          value={room.email}
          onChange={handleOnChangeInput}
          className="input"
          type="email"
          placeholder="Enter Email"
        />
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-4">
          Phone Number
        </label>
        <input
          name="phone_number"
          value={room.phone_number}
          onChange={handleOnChangeInput}
          className="input"
          type="text"
          placeholder="Enter Phone Number"
        />
        <div class="block text-gray-700 text-sm font-bold mb-4 mt-6">
          Select a Plan
        </div>
        <button className="btn bg-primary-yellow shadow-md mt-4">
          Book Room
        </button>
      </div>
      <div className="relative w-2/4 h-553">
        <div
          className="h-64 w-72 right-0 absolute rounded-md top-0"
          style={backgroundStyle(image19)}
        ></div>
        <div
          className="h-64 w-72 right-0 absolute rounded-md bottom-0"
          style={backgroundStyle(image20)}
        ></div>
        <div
          className="h-64 w-72 absolute rounded-md bottom-32 left-28"
          style={backgroundStyle(image21)}
        ></div>
      </div>
    </div>
  );
}

export default Book;
