import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
