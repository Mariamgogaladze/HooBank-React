import "./people.css";
import Thoughts from "../thoughts/Thoughts";

function People() {
  return (
    <div className="people-container">
      <div className="title-container">
        <h1 className="topic-h1">What people are saying about us</h1>
        <p className="topic-p">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Thoughts />
    </div>
  );
}

export default People;
