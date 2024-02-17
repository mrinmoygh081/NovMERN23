import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Details from "./pages/Details";
import Recap from "./pages/Recap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/details" element={<Details />} />
          <Route path="/recap" element={<Recap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
