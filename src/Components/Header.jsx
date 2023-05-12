import React from "react";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <FiPhone className="phone" />
        <p className="number">+88-01885-XXX-XXX</p>
        <p className="number"> Contract Us</p>
      </div>
    </div>
  );
};

export default Header;
