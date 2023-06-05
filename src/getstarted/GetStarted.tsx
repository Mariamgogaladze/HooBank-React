import React from "react";
import "./getstarted.css";
import arrow from "./arrow-up.svg";

function GetStarted() {
  return (
    <div className="getstarted">
      <div className="circle">
        <div className="circle-container-div">
          <span className="circle-span">Get</span>
          <img className="arrow" src={arrow} alt="arrow-up" />
        </div>
        <p className="circle-span">Started</p>
      </div>
    </div>
  );
}

export default GetStarted;
