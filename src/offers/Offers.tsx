import React from "react";
import offersData from "./OffersData";
import "./offers.css";

function Offers() {
  return (
    <div className="offers-div">
      {offersData.map((offer, key) => (
        <div key={offer.key} className="offer-item">
          <div>
            <div className="offer-image-container">
              <img className="offer-image" src={offer.image} alt="offer" />
            </div>
          </div>
          <div>
            <h2 className="offer-h2">{offer.title}</h2>
            <p className="offer-p">{offer.offer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
