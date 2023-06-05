import Nav from "./nav/Nav";
import Home from "./homepage/Home";
import "./App.css";
import Analytics from "./analytics/Analytics";
import FinancialOffers from "./financialoffers/FinancialOffers";
import Bill from "./bill/Bill";
import Cards from "./cards/Cards";
import People from "./people/People";
import Service from "./servicesec/Service";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="appdiv">
      <Nav />
      <Home />
      <Analytics />
      <FinancialOffers />
      <Bill />
      <Cards />
      <People />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
