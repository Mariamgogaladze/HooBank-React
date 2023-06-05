import { useState } from "react";
import "./nav.css";
import logo from "./logo.svg";
import menu from "./menu.png";
import close from "./close.png";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const handleCloseBtn = () => {
    setToggle(false);
  };
  return (
    <div className="nav-container">
      <div className="image-container">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className={`menu-container ${toggle ? "hide" : ""}`}>
        <img
          className="menu-image"
          src={menu}
          alt="menu"
          onClick={toggleMenu}
        />
      </div>
      <div className={`list-container ${toggle ? "show" : "hide"}`}>
        <ul>
          <li className="nav-item-image">
            <img src={close} alt="close" onClick={handleCloseBtn} />
          </li>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#About">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a href="#solution">Solution</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
