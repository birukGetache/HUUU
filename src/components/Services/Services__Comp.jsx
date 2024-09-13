import { Component } from "react";
import { IoAppsSharp } from "react-icons/io5";
import { FcDeployment } from "react-icons/fc";
import { SiGoogleoptimize } from "react-icons/si";

import { BsLaptop } from "react-icons/bs";

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Servcices For Technology You Need</h1>
          {/* <button className="btn btn-primary">Load More</button> */}
        </div>
        <div>
          <div>
            <div className="icon">
              <IoAppsSharp />
            </div>
            <h4>Application Development</h4>
            <p>
              End-to-end web and mobile app development for your business needs.
            </p>
          </div>
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT Consultation</h4>
            <p>
              Strategic IT consultation for enhanced business efficiency and
              success.
            </p>
          </div>
          <div>
            <div className="icon">
              <FcDeployment />
            </div>
            <h4>Application Deployment</h4>
            <p>
              Efficient deployment of web and mobile applications for seamless
              operations.
            </p>
          </div>
          <div>
            <div className="icon">
              <SiGoogleoptimize />
            </div>
            <h4>SEO Optimization</h4>
            <p>
              Comprehensive SEO optimization for improved online visibility and
              organic growth.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
