import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© SANTHEESH A &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
