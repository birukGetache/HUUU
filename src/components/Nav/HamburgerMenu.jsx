import React, { Component } from "react";
import { RiCloseLine } from "react-icons/ri";
import Links from "./Links"; // Assuming Links can be used inside HamburgerMenu
import "./HamburgerMenu.css"; // Ensure you have the CSS file

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="hamburger-menu">
        <button className="hamburger-icon" onClick={this.toggleMenu}>
          ☰
        </button>
        {isOpen && (
          <div className="menu-overlay">
            <button className="close-btn" onClick={this.closeMenu}>
              <RiCloseLine />
            </button>
            <div className="menu-content">
              <Links />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HamburgerMenu;
