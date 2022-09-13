import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <span className="globe">
        <i className="fa-sharp fa-solid fa-globe"></i>
      </span>{" "}
      <span className="menu">MENU</span>
    </div>
  );
};

export default Header;
