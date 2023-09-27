import React from "react";
import "./Footer.css";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
  BiLogoGmail,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerBox">
          <p className="logo" id="logo">
            Spetech
          </p>
          <p className="footerTitle">Contact</p>
          <p className="strong2">
            <p className="leftContent">Address :</p>
            <p className="footerContent" id="footerContent">
              2-55, Medchal Dist, Hyderabad City, Telangana, India
            </p>
          </p>
          <p className="strong2">
            <p className="leftContent">Mail ID :</p>
            <p className="footerContent" id="footerContent">
              helpcenter@spetech.com
            </p>
          </p>
          <p className="strong2">
            <p className="leftContent">Phone NO :</p>
            <p className="footerContent" id="footerContent">
              +91 7993000049, +91 7993000050
            </p>
          </p>
          <p className="strong2">
            <p className="leftContent">Hours :</p>
            <p className="footerContent" id="footerContent">
              10:00 - 18:00, Mon - Sat
            </p>
          </p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Company</p>
          <p className="footerContent">About</p>
          <p className="footerContent">Delivery Information</p>
          <p className="footerContent">Privacy Policy</p>
          <p className="footerContent">Terms & Conditions</p>
          <p className="footerContent">Contact</p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Account</p>
          <p className="footerContent">View Cart</p>
          <p className="footerContent">Help & Support</p>
          <p className="footerContent">Wishlist</p>
          <p className="footerContent">Track my Orders</p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Follow US</p>
          <div className="iconContainer">
            <div className="icon">
              <BiLogoFacebook size={"20px"} className="iconClass" />
            </div>
            <div className="icon">
              <BiLogoLinkedin size={"20px"} className="iconClass" />
            </div>
            <div className="icon">
              <BiLogoInstagram size={"20px"} className="iconClass" />
            </div>
            <div className="icon">
              <BiLogoYoutube size={"20px"} className="iconClass" />
            </div>
            <div className="icon">
              <BiLogoTwitter size={"20px"} className="iconClass" />
            </div>
            <div className="icon">
              <BiLogoGmail size={"20px"} className="iconClass" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
