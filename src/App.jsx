import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Work from "./Work.jsx";
import CV from "./CV.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="fixed top-0 w-full p-4 z-10 flex justify-end items-center min-h-[8vh]">
          <Link to="/" className="mx-4">INICIO</Link>
          <Link to="/work" className="mx-4">OBRAS</Link>
          <Link to="/cv" className="mx-4">CV</Link>
          <Link to="/contact" className="mx-4">CONTACTAME</Link>
        </nav>
        <div className="flex-1 pt-[8vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="flex justify-between p-4">
          <p>PABLO DRETTE</p>
          <p>S.L.P., MÉXICO</p>
          <p>2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
