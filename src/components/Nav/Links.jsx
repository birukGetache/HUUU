import { Component } from "react";
import "./style.css"; // Ensure to import the CSS file

class Links extends Component {
  constructor() {
    super();
    this.links = [
      "home",
      "about",
      "services",
      "portfolio",
      "testimony",
      // "news",
      "contact"
    ];
  }

  render() {
    return (
      <div className="links-container">
        {this.links.map((link, index) => (
          <a
            key={index} // Add key prop for list rendering
            className={!index ? "active" : ""}
            href={`#${link}`}
            style={{width:"100%"}}
          >
            {link}
          </a>
        ))}
      </div>
    );
  }
}

export default Links;
