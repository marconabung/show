import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Error404 from "./pages/Error404/Error404";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
// import Home from "./pages/Home/Home"
import "./App.css";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
