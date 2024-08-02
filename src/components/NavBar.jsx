import { Link } from "react-router-dom";
import "../App.css";
import Tar_logo_black from "../assets/tar.png";

const NavBar = () => {
  return (
    <div className="nav_container">
      <img src={Tar_logo_black} />
      <ul>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/skils">المهارات</Link>
        </li>
        <li>
          <Link to="/projects">المشاريع</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
