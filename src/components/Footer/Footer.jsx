import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <h3>EThioTech</h3>
          <p className="text">
            Highlighting our IT company's tailored solutions, we specialize in
            leveraging cutting-edge technologies like AI and cloud computing to
            meet diverse client needs. With a commitment to seamless integration
            and round-the-clock support, we prioritize client satisfaction.
            Success stories and case studies underscore our ability to deliver
            tangible results, distinguishing us in a competitive market!
          </p>
          {/* <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul> */}
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Application Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT COnsultantation
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Application Deployment
              </a>
            </li>
            <li>
              <a href="#" className="text">
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            {/* <li>
              <address className="text">
                Office: 232 California Road Imperial
              </address>
            </li> */}
            <li>
              <a href="tel:+251940095914" className="text">
                Tel : +251940095914
              </a>
            </li>
            <li>
              <a href="tel:+251941330816" className="text">
                Tel : +251941330816
              </a>
            </li>
            <li>
              <a href="mailto:bura1742@gmail.com" className="text">
                Email: bura1742@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
