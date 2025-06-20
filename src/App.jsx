import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from "./components/Header";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div className="bg-[#FFFFF] min-h-screen">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

