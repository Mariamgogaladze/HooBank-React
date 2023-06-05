import "./thoughts.css";
import ThoughtsData from "./ThoughstData";

function Thoughts() {
  return (
    <div className="thoughts-container">
      {ThoughtsData.map((item) => (
        <div className="item-div" key={item.key}>
          <div className="first-div">
            <img className="quote" src={item.image} alt="quote" />
            <p className="quote-text">{item.text}</p>
          </div>
          <div className="second-div">
            <div className="profile-div">
              <img className="profile" src={item.profile} alt="profile" />
            </div>
            <div>
              <h2 className="name">{item.name}</h2>
              <p className="position">{item.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thoughts;
