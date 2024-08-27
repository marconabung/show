import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppLogo from "../../assets/images/app/joe-logo.png";
import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <header className={`app-header ${darkMode ? "dark" : ""}`}>
      <div className="nav-logo-group">
        <img
          onClick={handleLogoClick}
          src={AppLogo}
          width={100}
          className="app-logo"
        />
        <nav className="app-header-nav">
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          {/* <Link to="/pricing">Pricing</Link> */}
          {/* <Link to="/about">About</Link> */}
        </nav>
      </div>
      {/* <div className="app-header-lang">
        <div onClick={handleToggleDarkMode} className="app-header-mode">
          &#9788;
        </div>
        <div>&#9789;</div>
        <p>Lang: EN</p>
      </div> */}
    </header>
  );
};

export default Header;
