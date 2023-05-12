import React from "react";
import "./Footer.css";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAtlas } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>BD Office Address</h4>
              <ul>
                <li>
                  <a href="#">
                    <FiPhone /> +8801XXXXXXXX{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <FiPhone /> +8801XXXXXXXX
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <CiLocationOn />
                    Dhaka Tower, L XX, XX Topkhana Rd, Purana Paltan, Dhaka XX
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>USA Office Address</h4>
              <ul>
                <li>
                  <a href="#">
                    <FiPhone />
                    +1470 XXXXXX(USA)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiPhone />
                    +1 470 XXXXXX(USA)
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <CiLocationOn />
                    USA Address: XXX Arbor Creek Ln, Doraville, GA XXXX
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <a href="#">
                    <MdOutlineFacebook /> <FaInstagramSquare /> <FaTwitter />{" "}
                    <FaWhatsapp />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiMail /> XYZ@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaAtlas /> www.XYZ.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
