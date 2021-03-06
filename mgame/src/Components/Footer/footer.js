import React from "react";
import "./footer.css";
import logo from "../../logo.svg";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Footer = props => (
  <footer className="footer">
    <div className="bottom">
      Clicky Game!
      <img alt="react" src={logo} />
    </div>
  </footer>
);

export default Footer;
