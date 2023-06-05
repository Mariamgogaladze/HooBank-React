import React from "react";
import "./bill.css";
import bill from "./bill.png";
import apple from "./apple.svg";
import google from "./google.svg";
import Topic from "../topic/Topic";

function Bill() {
  return (
    <div className="bill-container" id="features">
      <div className="billcard-container">
        <div className="white2-gradient"></div>
        <div className="pink-gradient"></div>
        <img className="bill" src={bill} alt="Bill cards" />
      </div>
      <div className="bill-control">
     <Topic title={"Easily control your billing & invoicing."} description={"Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."}/>
        <div className="methods-container">
          <img className="apple" src={apple} alt="apple pay" />
          <img className='google'src={google} alt="google pay" />
        </div>
      </div>
    </div>
  );
}

export default Bill;

