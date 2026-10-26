
import {
  Users,
  ChartNoAxesCombined,
  ArrowLeftRight,
  ShieldAlert,
  ArrowDownToLine,
  UserPlus,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "./Dashboard.css";

// Mock data for the trading volume chart
const volumeData = [
  { day: "Mon", volume: 1000000 },
  { day: "Tue", volume: 1500000 },
  { day: "Wed", volume: 1250000 },
  { day: "Thu", volume: 2000000 },
  { day: "Fri", volume: 1750000 },
  { day: "Sat", volume: 2500000 },
  { day: "Sun", volume: 2250000 },
];

// Mock data for recent activity
const activities = [
  {
    id: 1,
    title: "New user registered",
    detail: "user_1048",
    time: "5 minutes ago",
    status: "New",
    type: "user",
  },
  {
   id: 2,
   title: "Deposit received",
   detail: "TXN-20841 · ₹2,500",
   time: "18 minutes ago",
   status: "Completed",
   type: "deposit",
  },
  {
    id: 3,
    title: "KYC verification submitted",
    detail: "user_0872",
    time: "32 minutes ago",
    status: "Pending",
    type: "kyc",
  },
  {
   id: 4,
   title: "Withdrawal processed",
   detail: "TXN-20835 · ₹850",
   time: "1 hour ago",
   status: "Completed",
   type: "withdrawal",
  },
];

// Reusable KPI card
function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${color}`}>
          <Icon size={22} />
        </div>

        <span className="stat-change">
          <TrendingUp size={14} />
          {change}
        </span>
      </div>

      <p className="stat-title">{title}</p>
      <h2 className="stat-value">{value}</h2>
      <p className="stat-description">Compared with last month</p>
    </div>
  );
}

// Recent activity icon
function ActivityIcon({ type }) {
  if (type === "user") return <UserPlus size={19} />;
  if (type === "deposit") return <ArrowDownToLine size={19} />;
  if (type === "kyc") return <ShieldAlert size={19} />;

  return <ArrowLeftRight size={19} />;
}

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Page heading */}
      <div className="dashboard-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your exchange.</p>
        </div>

        <span className="dashboard-date">Last 7 days</span>
      </div>

      {/* KPI cards */}
      <div className="stats-grid">
        <StatCard
          title="Total Users"
          value="24,580"
          change="+12.8%"
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Trading Volume"
          value="₹1.28 Cr"
          change="+8.4%"
          icon={ChartNoAxesCombined}
          color="green"
        />

        <StatCard
          title="Transactions"
          value="8,642"
          change="+5.2%"
          icon={ArrowLeftRight}
          color="purple"
        />

        <StatCard
          title="Pending KYC"
          value="146"
          change="Needs review"
          icon={ShieldAlert}
          color="orange"
        />
      </div>

      {/* Chart */}
      <section className="dashboard-panel chart-panel">
        <div className="panel-heading">
          <div>
            <h2>Trading Volume</h2>
            <p>Daily trading activity for the last 7 days</p>
          </div>

          <span className="chart-total">₹1.325 Cr total</span>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={volumeData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="volumeGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#3b82f6"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor="#3b82f6"
                    stopOpacity={0.02}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickFormatter={(value) => {
                 if (value >= 10000000) {
                  return `₹${(value / 10000000).toFixed(1)}Cr`;
                 }

                if (value >= 100000) {
                 return `₹${(value / 100000).toFixed(0)}L`;
                }

                 return `₹${value.toLocaleString("en-IN")}`;
             }}
                width={55}
              />

              <Tooltip
               formatter={(value) => [
               `₹${Number(value).toLocaleString("en-IN")}`,
               "Trading Volume",
            ]}
            />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#volumeGradient)"
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Bottom section */}
      <div className="dashboard-bottom">
        {/* Recent activity */}
        <section className="dashboard-panel activity-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest events across your exchange</p>
            </div>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <div className="activity-item" key={activity.id}>
                <div className={`activity-icon ${activity.type}`}>
                  <ActivityIcon type={activity.type} />
                </div>

                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p>{activity.detail}</p>
                  <span>{activity.time}</span>
                </div>

                <span
                  className={`status-badge ${activity.status.toLowerCase()}`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Alerts */}
        <section className="dashboard-panel alerts-panel">
          <div className="panel-heading">
            <div>
              <h2>Alerts</h2>
              <p>Items that may need attention</p>
            </div>
          </div>

          <div className="alert-item warning-alert">
            <AlertTriangle size={20} />
            <div>
              <h3>KYC reviews pending</h3>
              <p>146 users are awaiting verification.</p>
            </div>
          </div>

          <div className="alert-item danger-alert">
            <ShieldAlert size={20} />
            <div>
              <h3>Risk cases to review</h3>
              <p>8 flagged activities need investigation.</p>
            </div>
          </div>

          <div className="alert-item success-alert">
            <CheckCircle size={20} />
            <div>
              <h3>System status</h3>
              <p>All demo services are operating normally.</p>
            </div>
          </div>
        </section>
      </div>

      <p className="mock-data-note">
        Demo dashboard · All figures and activities are mock data.
      </p>
    </div>
  );
}

export default Dashboard;
