import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:higa6038@gmail.com">
          <AiFillMail />
          <span>bayoyoba25@gmail.com</span>
        </a>

        <a href="tel:+251940095914">
          <AiFillPhone />
          <span>+251940095914</span>
        </a>
        <a href="tel:+251941330816">
          <AiFillPhone />
          <span>+251941330816</span>
        </a>
      </div>
    );
  }
}

export default Contact;
