import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import "./index.css";

const productData = [
  [
    { name: "Basic Tees", value: 400, percentage: 33.33 },
    { name: "Custom Short Pants", value: 300, percentage: 33.33 },
    { name: "Super Hoodies", value: 300, percentage: 33.34 },
  ],
  [
    { name: "Awesome Socks", value: 200, percentage: 25 },
    { name: "Cool Caps", value: 250, percentage: 25 },
    { name: "Stylish Shoes", value: 350, percentage: 50 },
  ],
  [
    { name: "Trendy Bags", value: 150, percentage: 20.67 },
    { name: "Fancy Belts", value: 200, percentage: 22.22 },
    { name: "Chic Sunglasses", value: 150, percentage: 23.78 },
  ],
];

const statusData = {
  initial: "INITIAL",
  pending: "PENDING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const PieChartCard = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(statusData.initial);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getPieChartData = async () => {
      setStatus(statusData.pending);
      const response = await fetch(
        "https://mocki.io/v1/105c62d1-293f-45f7-aa85-5e207e3c614a"
      );

      if (response.ok) {
        setData(productData[index]);
        setStatus(statusData.success);
      } else {
        setStatus(statusData.failure);
      }
    };

    getPieChartData();
  }, [index]);

  const renderSuccessView = () => (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="45%"
          cy="50%"
          innerRadius="50%"
          outerRadius="65%"
          startAngle={0}
          endAngle={360}
          cornerRadius={10}
          paddingAngle={-5}
          width="100%"
          height={200}
        >
          <Cell name={data[0].name} fill="#98D89E" />
          <Cell name={data[1].name} fill="#F6DC7D" />
          <Cell name={data[2].name} fill="#EE8484" />
        </Pie>

        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
          width="30%"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderFailureView = () => <span>Failed to load Chart</span>;

  const renderPendingView = () => (
    <section className="pie-chart-loader"></section>
  );

  const renderPieChart = () => {
    switch (status) {
      case statusData.pending:
        return renderPendingView();
      case statusData.success:
        return renderSuccessView();
      case statusData.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div className="pie-chart-container">
      <div>
        <h1>Top Products</h1>
        <select
          onChange={(e) => {
            setIndex(e.target.value);
          }}
        >
          <option value={0}>May - June 2021</option>
          <option value={1}>June - July 2021</option>
          <option value={2}>July - August 2021</option>
        </select>
      </div>
      {renderPieChart()}
    </div>
  );
};

export default PieChartCard;
