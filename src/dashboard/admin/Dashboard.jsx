import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats = {},
    isLoading: statsLoading,
    isError: statsError,
    error: statsErrorMsg,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  const {
    data: chartData = [],
    isLoading: chartLoading,
    isError: chartError,
    error: chartErrorMsg,
  } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });

  // Prepare Pie Chart data sorted by date of purchase
  const PieChartData = chartData
    .map((data) => ({
      name: `${data.date.day}/${data.date.month}/${data.date.year}`, // Format date for display
      value: data.quantity,
      dateObj: new Date(`${data.date.year}-${data.date.month}-${data.date.day}`), // Create date object
    }))
    .sort((a, b) => a.dateObj - b.dateObj); // Sort by date

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (statsLoading || chartLoading) {
    return <div>Loading...</div>;
  }

  if (statsError) {
    return <div>Error loading stats: {statsErrorMsg.message}</div>; // Ensure proper error message extraction
  }

  if (chartError) {
    return <div>Error loading chart data: {chartErrorMsg.message}</div>; // Ensure proper error message extraction
  }

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4">Hi, {user.displayName}</h2>

      {/* Stats div */}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
        <div className="stat bg-emerald-300 text-black">
          <div className="stat-figure text-secondary-content text-3xl">
            <TbCurrencyNaira />
          </div>
          <div className="stat-title text-gray-500">Revenue</div>
          <div className="stat-value">
            ₦
            {stats.revenue !== undefined && stats.revenue !== null
              ? stats.revenue.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}
          </div>
          <div className="stat-desc text-gray-500">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-orange-200 text-black">
          <div className="stat-figure text-secondary-content text-3xl">
            <FaUsers />
          </div>
          <div className="stat-title text-gray-500">Users</div>
          <div className="stat-value">{stats.users || 0}</div> {/* Default to 0 if undefined */}
          <div className="stat-desc text-gray-500">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-indigo-400 text-black">
          <div className="stat-figure text-secondary-content text-3xl">
            <FaShoppingCart />
          </div>
          <div className="stat-title text-gray-500">Orders</div>
          <div className="stat-value">{stats.orders || 0}</div> {/* Default to 0 if undefined */}
          <div className="stat-desc text-gray-500">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* Charts and graphs */}
      <div className="mt-16 flex flex-col sm:flex-row">
        {/* Area Chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="revenue" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="quantity"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={PieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {PieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
