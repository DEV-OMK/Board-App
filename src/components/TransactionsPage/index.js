import Navbar from "../Navbar";
import SideBar from "../SideBar";
import "./index.css";

const TransactionsPage = () => (
  <div className="transactions-page">
    <SideBar />
    <div className="transactions-container">
      <Navbar />
      <h1>No Transactions at the moment.</h1>
    </div>
  </div>
);

export default TransactionsPage;
