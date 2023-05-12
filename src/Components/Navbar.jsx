import { useRef } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "./Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/#">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <a className="about" href="/#">
          About Us
        </a>
        <a href="/#">
          <div className="search-nav">
            <input className="search" type="search" placeholder="Search" />
            <HiOutlineMagnifyingGlass className="icon" />
          </div>
        </a>
        <a href="/#">
          <button className="login">Log in</button>
        </a>
        <a href="/#">
          <button className="signup">Sing Up</button>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
