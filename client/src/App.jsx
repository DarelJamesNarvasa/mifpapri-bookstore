import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Research from "./pages/Research";
import WhatWeDo from "./pages/WhatWeDo";
import Activities from "./pages/Activities";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import TrainingWorkshop from "./pages/TrainingWorkshop";

import "./styles/style.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/research" element={<Research />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training-workshop" element={<TrainingWorkshop />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;