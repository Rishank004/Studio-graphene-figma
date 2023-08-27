import React from "react";
import { useRef } from "react";
import "../Styles/navbar.css";
import { Button, Link } from "react-scroll";
import startwo from "../images/startwo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <p className="shopkart">ShopKart</p>
       
        <nav ref={navRef}>
          <a href="/#">HOME</a>
          <a href="/#">ABOUT</a>
          <a href="/#">
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                outline: "none",
                border: "none",
                borderBottom: "1px solid white",
              }}
              name=""
              id=""
            >
              <option value="">OUR PRODUCTS</option>
              <option value="">electronics</option>
              <option value="">jewelery</option>
              <option value="">men's clothing</option>
              <option value="">women's clothing</option>
            </select>
          </a>
          <a href="/#">CONTACT US</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
