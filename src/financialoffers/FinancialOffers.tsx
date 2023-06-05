import Offers from "../offers/Offers";
import "./financialoffers.css";
import Topic from "../topic/Topic";
import Button from "../btn/Button";

function FinancialOffers() {
  return (
    <div className="Financial-container" id="About">
      <div className="financial-div">
        <Topic
          title={"You do the business, we’ll handle the money."}
          description={
            "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
          }
        />
        <Button />
      </div>
      <div className="offers-container">
        <Offers />
      </div>
    </div>
  );
}

export default FinancialOffers;
