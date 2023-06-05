import React from "react";
import "./home.css";
import robot from "./robot.png";
import discount from "./Discount.svg";
import GetStarted from "../getstarted/GetStarted";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="introduction-container">
        <div className="discount">
          <img src={discount} alt="discaount" />
          <p className="introduction-first-p">
            <span className="percent-span">20%</span> DISCOUNT FOR{" "}
            <span className="percent-span">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="introduction-div">
          <div className="wh-gr-2"></div>
          <h1 className="introduction-h1">
            The Next <span className="generation-span">Generation</span> Payment
            Method.
          </h1>
          <div>
            <GetStarted />
          </div>
        </div>
        <p className="introduction-p">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="robot-container">
        <img className="robot" src={robot} alt="robot" />
      </div>
    </div>
  );
}
export default Home;
