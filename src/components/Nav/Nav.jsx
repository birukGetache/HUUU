import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import Links from "./Links";
import HamburgerMenu from "./HamburgerMenu";
import "./style.css";

const Nav = () => {
  // Media query hook to check if screen width is less than or equal to 700px
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <nav>
      <div className="container container__nav">
        <Logo />
        {isMobile ? <HamburgerMenu /> : <Links />}
        {/* Optional components like Quote and Search */}
        {/* <Quote /> */}
        {/* <Search /> */}
      </div>
    </nav>
  );
}

export default Nav;
