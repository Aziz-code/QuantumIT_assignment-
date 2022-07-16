import React, { useState } from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { FaBars } from "../../node_modules/react-icons/fa";
import { FaBorderStyle } from "../../node_modules/react-icons/fa";
import { ImCross } from "../../node_modules/react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">
          <div className="lg">
            <FaBorderStyle />
          </div>{" "}
          Bisnes
        </h3>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <div className="home">
            <li style={{ color: "deepskyblue" }}>Home</li>
          </div>
          <div className="about">
            <li>About</li>
          </div>
          <div className="skills">
            <li>Projects</li>
          </div>

          <div className="services">
            <li>Services</li>
          </div>
          <div className="home">
            <li>contact</li>
          </div>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
