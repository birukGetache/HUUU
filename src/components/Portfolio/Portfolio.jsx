import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
import kabba from "../../assets/kabba.png";
import edl from "../../assets/edl.png"; 
import gojo from "../../assets/gojo.png";
import drummroll from "../../assets/drummroll.png";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: edl,
        title: "Ethio Delivery and Logistics",
        text: "A single platform that seamlessly connects users with convenient transportation services and efficient delivery solutions. Our taxi hailing feature provides a hassle-free and reliable way for users to book a ride anytime, anywhere. Whether they need a quick trip to the office, a ride to the airport, or a convenient mode of transportation for any other purpose, our app has them covered. Our app also includes a robust delivery service, allowing users to send and receive packages with utmost convenience. Whether it's a document, a package, or even groceries, our dedicated delivery fleet is at the users' service",
      },
      {
        img: gojo,
        title: "Gojo Ethiopian Dating app",
        text: "Gojo is a streamlined dating app designed to help users find romantic partners effectively. Featuring an intuitive swipe mechanism, users can quickly express interest and engage with compatible matches. With robust messaging, Gojo ensures safe and meaningful interactions, making it easier to find love or friendship",
      },
      {
        img: kabba,
        title: "Kabba Transport",
        text: "The aim of this project is to develop a robust and user-friendly mobile application that caters to carpooling services in Addis Ababa, serving both children or school transport service and the general public. By leveraging the power of technology and innovative features, the application seeks to revolutionize the way people commute and share rides in the city.",
      },
      {
        img: drummroll,
        title: "Drumm Roll Center Of Children",
        text: "Drumm Roll is a transportation app by Drumm Farm Center for Children, providing safe and convenient transportation for young adults experiencing homelessness. The user-friendly app allows independent booking of essential appointments, empowering youth with responsibility. Volunteer drivers ensure reliable and cost-effective transportation for school, medical appointments, and more.",
      },
      {
        img: "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Cook Like Me",
        text: "CookLikeMe brings the excitement of culinary creation to your smartphone. Modeled after the dynamic, short-form video approach of TikTok, this app allows users to share and discover quick cooking videos that inspire kitchen creativity. Whether you're a novice or a seasoned chef, CookLikeMe connects you with easy-to-follow recipes and cooking tips, making delicious dining an accessible adventure for everyone.",
      },
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <button className="btn btn-primary">More About</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
