import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  const about = useRef(null);
  const contact = useRef(null);
  const gallery = useRef(null);
  const book = useRef(null);
  return (
    <div className="overflow-x-hidden">
      <Header
        about={about}
        contact={contact}
        gallery={gallery}
        book={book}
      ></Header>
      <About about={about}></About>
      <Contact contact={contact}></Contact>
      <Gallery gallery={gallery}></Gallery>
      <Book book={book}></Book>
      <Footer></Footer>
    </div>
  );
}

export default App;
