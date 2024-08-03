import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../App.css";
import Tar_logo_black from "../assets/tar.png";

const NavBar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    if (navRef) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <div className="nav_container">
      <img src={Tar_logo_black} />
      <ul ref={navRef} className="nav_list">
        <li onClick={showNavbar}>
          <Link to="/">الرئيسية</Link>
        </li>
        <li onClick={showNavbar}>
          <a href="#skills">المهارات</a>
        </li>
        <li onClick={showNavbar}>
          <a href="#projects">المشاريع</a>
        </li>
        <li onClick={showNavbar}>
          <a href="#contact">تواصل معي</a>
        </li>
        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
          <IoIosCloseCircleOutline />
        </button>
      </ul>
      <button className="nav_btn" onClick={showNavbar}>
        <IoMenu />
      </button>
    </div>
  );
};

export default NavBar;
