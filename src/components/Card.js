import React from "react";
import "../css/About.css";

function Card({ image, heading, text }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(252, 162, 17, 0.85), rgba(252, 162, 17, 0.85)), url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="card h-96 w-80 relative" style={backgroundStyle}>
      <div className="mt-auto px-4 py-8 absolute bottom-0">
        <h1 className="text-2xl font-serif mb-4 font-bold text-primary-blue-200">
          {heading}
        </h1>
        <p className="text-primary-blue-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut
          quisquam, optio soluta molestias, rem, sit illum ad cum officiis vel
          voluptatum unde esse minima natus perferendis neque! Illum, optio!
        </p>
        <button className="btn !px-4 shadow-md !py-3 bg-primary-yellow mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
