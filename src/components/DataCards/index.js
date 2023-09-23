import "./index.css";

const DataCards = () => {
  return (
    <ul className="data-cards-contanier">
      <li className="data-card" key="revenues">
        <div className="data-icon-container container-green">
          <img
            className="data-icon"
            alt="revenues"
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695239247/Vector_2_qgqyf8.png"
          />
        </div>
        <div className="data-card-details">
          <div>
            <p>Total Revenues</p>
            <h1>$2,129,430</h1>
          </div>
          <p>+2.5%</p>
        </div>
      </li>
      <li className="data-card" key="transactions">
        <div className="data-icon-container container-brown">
          <img
            className="data-icon"
            alt="revenues"
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695239247/Vector_3_zz40ci.png"
          />
        </div>
        <div className="data-card-details">
          <div>
            <p>Total Transactions</p>
            <h1>1,520</h1>
          </div>
          <p>+1.7%</p>
        </div>
      </li>
      <li className="data-card" key="likes">
        <div className="data-icon-container container-pink">
          <img
            className="data-icon"
            alt="revenues"
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695239247/Vector_5_n5nyf2.png"
          />
        </div>
        <div className="data-card-details">
          <div>
            <p>Total Likes</p>
            <h1>9,721</h1>
          </div>
          <p>+1.4%</p>
        </div>
      </li>
      <li className="data-card" key="users">
        <div className="data-icon-container container-blue">
          <img
            className="data-icon"
            alt="revenues"
            src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695210502/Board-app/user_icon_lfujaq.png"
          />
        </div>
        <div className="data-card-details">
          <div>
            <p>Total Users</p>
            <h1>9721</h1>
          </div>
          <p>+4.2%</p>
        </div>
      </li>
    </ul>
  );
};

export default DataCards;
