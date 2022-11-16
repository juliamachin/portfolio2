import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Links from "./Components/Links/Links";
import Data from "./Components/Portfolio/Data";

function App() {
  return (
    <div className="App">
      <Links />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio slides={Data} />} />
      </Routes>
    </div>
  );
}

export default App;
