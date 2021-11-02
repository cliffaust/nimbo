import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  const about = useRef(null);
  return (
    <div className="overflow-x-hidden">
      <Header about={about}></Header>
      <About about={about}></About>
      <Contact></Contact>
      <Gallery></Gallery>
      <Book></Book>
      <Footer></Footer>
    </div>
  );
}

export default App;
