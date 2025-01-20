import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import Work from "./Work.jsx";
import CV from "./CV.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">INICIO</Link>
        <Link to="/work">OBRAS</Link>
        <Link to="/cv">CV</Link>
        <Link to="/contact">CONTACTAME</Link>
      </nav>
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <p>PABLO DRETTE</p>
        <p>S.L.P., MÉXICO</p>
        <p>2025</p>
      </footer>
    </Router>
  );
}

export default App;
