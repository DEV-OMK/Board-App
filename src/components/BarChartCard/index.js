import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./index.css";

const itemData = [
  [
    { name: "week 1", users: 200, guests: 250 },
    { name: "week 2", users: 200, guests: 150 },
    { name: "week 3", users: 800, guests: 250 },
    { name: "week 4", users: 100, guests: 50 },
  ],
  [
    { name: "week 5", users: 600, guests: 100 },
    { name: "week 6", users: 300, guests: 350 },
    { name: "week 7", users: 400, guests: 450 },
    { name: "week 8", users: 900, guests: 550 },
  ],
  [
    { name: "week 9", users: 150, guests: 200 },
    { name: "week 10", users: 400, guests: 300 },
    { name: "week 11", users: 700, guests: 350 },
    { name: "week 12", users: 250, guests: 100 },
  ],
];

const statusData = {
  initial: "INITIAL",
  pending: "PENDING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const BarChartCard = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(statusData.initial);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getBarChartData = async () => {
      setStatus(statusData.pending);
      const response = await fetch(
        "https://mocki.io/v1/105c62d1-293f-45f7-aa85-5e207e3c614a"
      );

      if (response.ok) {
        setData(itemData[index]);
        setStatus(statusData.success);
      } else {
        setStatus(statusData.failure);
      }
    };

    getBarChartData();
  }, [index]);

  const renderSuccessView = () => (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tickCount={9}
            axisLine={false}
            tickLine={false}
            scale="linear"
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            viewBox={{ x: 0, y: 0, width: 100, height: 100 }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{
              paddingBottom: "25px",
            }}
          />
          <Bar
            dataKey="guests"
            fill="#98D89E"
            radius={[6, 6, 0, 0]}
            maxBarSize={35}
          />
          <Bar
            dataKey="users"
            fill="#EE8484"
            maxBarSize={35}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderFailureView = () => <span>Failed to load Chart</span>;

  const renderPendingView = () => (
    <section className="bar-chart-loader"></section>
  );

  const renderBarChart = () => {
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
    <div className="bar-chart-container">
      <h1>Activities</h1>
      <select
        onChange={(e) => {
          setIndex(e.target.value);
        }}
      >
        <option value={0}>May - June 2021</option>
        <option value={1}>June - July 2021</option>
        <option value={2}>July - August 2021</option>
      </select>
      {renderBarChart()}
    </div>
  );
};

export default BarChartCard;
