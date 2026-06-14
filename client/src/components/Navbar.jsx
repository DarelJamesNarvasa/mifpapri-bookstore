import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/books" onClick={() => setMenuOpen(false)}>
              Books
            </NavLink>
          </li>

          <li>
            <NavLink to="/what-we-do" onClick={() => setMenuOpen(false)}>
              What We Do
            </NavLink>
          </li>

          <li>
            <NavLink to="/activities" onClick={() => setMenuOpen(false)}>
              Activities
            </NavLink>
          </li>

          <li>
            <NavLink to="/get-involved" onClick={() => setMenuOpen(false)}>
              Get Involved
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;