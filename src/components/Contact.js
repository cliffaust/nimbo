import React, { useState } from "react";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

import { useDispatch } from "react-redux";
import messageAction from "../actions/message";

function Contact({ contact }) {
  const [message, setMessage] = useState({
    email: "",
    message: "",
  });

  const backgroundStyle = (image) => {
    return {
      backgroundImage: `linear-gradient(to right, rgba(252, 162, 17, 0.1), rgba(252, 162, 17, 0.1)), url(${image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  };

  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  return (
    <div ref={contact} className="mb-8 mt-28 px-16 flex bg-gray-50 py-4">
      <div className="relative w-2/4 h-553">
        <div
          className="h-64 w-72 absolute rounded-md top-0"
          style={backgroundStyle(image4)}
        ></div>
        <div
          className="h-64 w-72 absolute rounded-md bottom-0"
          style={backgroundStyle(image5)}
        ></div>
        <div
          className="h-64 w-72 absolute rounded-md bottom-32 right-28"
          style={backgroundStyle(image6)}
        ></div>
      </div>
      <div className="flex-grow flex flex-col">
        <h1 className="text-2xl mb-6 font-mono font-bold">Contact Us</h1>
        <input
          name="email"
          value={message.email}
          onChange={handleOnChangeInput}
          className="input"
          type="email"
          placeholder="Enter Email"
        />
        <textarea
          name="message"
          value={message.message}
          onChange={handleOnChangeInput}
          className="input resize-none mt-4"
          id=""
          cols="30"
          rows="15"
          placeholder="Enter Message"
        ></textarea>
        <button
          onClick={() => dispatch(messageAction(message))}
          className="btn bg-primary-yellow shadow-md mt-4"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
