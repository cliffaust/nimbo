import React from "react";
import Card from "./Card";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function About() {
  return (
    <div className="flex gap-12 justify-center mt-24">
      <Card image={image1} heading={"Great Room Service"}></Card>
      <Card image={image2} heading={"Worldclass Room"}></Card>
      <Card image={image3} heading={"Simply Luxurious"}></Card>
    </div>
  );
}

export default About;
