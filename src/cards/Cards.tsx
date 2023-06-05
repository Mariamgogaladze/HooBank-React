import "./cards.css";
import Topic from "../topic/Topic";
import Button from "../btn/Button";
import cards from "./card.png";

function Cards() {
  return (
    <div className="cards-container" id="solution">
      <div className="card-container">
        <Topic
          title={"Find a better card deal in few easy steps."}
          description={
            "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
          }
        />
        <Button />
      </div>
      <div className="cardimage-div">
        <div className="wh-gr-3"></div>
        <div className="pk-gr-3"></div>
        <img className="cards" src={cards} alt="cards" />
      </div>
    </div>
  );
}

export default Cards;
