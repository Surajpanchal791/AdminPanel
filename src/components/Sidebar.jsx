import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  ArrowLeftRight,
  TrendingUp,
  Coins,
  Wallet,
  AlertTriangle,
  BarChart3,
  Bell,
  Shield,
  ClipboardList,
  Settings,
  ChevronDown,
  ChevronRight,
  ArrowDownToLine,
  ArrowUpFromLine,
  ListOrdered,
  ArrowLeftRight as TradesIcon,
  Bitcoin,
  Network,
  DollarSign,
} from "lucide-react";

// Expandable sidebar menu
const menuGroups = [
  {
    title: "Transactions",
    icon: ArrowLeftRight,
    items: [
      { label: "Deposits", path: "/transactions/deposits", icon: ArrowDownToLine },
      { label: "Withdrawals", path: "/transactions/withdrawals", icon: ArrowUpFromLine },
    ],
  },
  {
    title: "Trading",
    icon: TrendingUp,
    items: [
      { label: "Orders", path: "/trading/orders", icon: ListOrdered },
      { label: "Trades", path: "/trading/trades", icon: TradesIcon },
      { label: "Trading Pairs", path: "/trading/pairs", icon: BarChart3 },
    ],
  },
  {
    title: "Assets",
    icon: Coins,
    items: [
      { label: "Cryptocurrencies", path: "/assets/cryptocurrencies", icon: Bitcoin },
      { label: "Networks", path: "/assets/networks", icon: Network },
    ],
  },
];

// Direct navigation links
const singleItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Users", icon: Users, path: "/users" },
  { label: "KYC & Compliance", icon: ShieldCheck, path: "/kyc" },
  { label: "Fees", icon: DollarSign, path: "/fees" },
  { label: "Risk", icon: AlertTriangle, path: "/risk" },
  { label: "Reports", icon: BarChart3, path: "/reports" },
  { label: "Notifications", icon: Bell, path: "/notifications" },
  { label: "Admin Management", icon: Shield, path: "/admin-management" },
  { label: "Audit Logs", icon: ClipboardList, path: "/audit-logs" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

// Reusable expandable menu component
function MenuGroup({ group }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = group.icon;

  return (
    <div className="menu-group">
      <button
        type="button"
        className="nav-link menu-group-button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <Icon size={20} className="nav-icon" />

        <span className="nav-label">{group.title}</span>

        {expanded ? (
          <ChevronDown size={16} className="menu-chevron" />
        ) : (
          <ChevronRight size={16} className="menu-chevron" />
        )}
      </button>

      {expanded && (
        <div className="submenu">
          {group.items.map((item) => {
            const ItemIcon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "submenu-link active" : "submenu-link"
                }
              >
                <ItemIcon size={17} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Main sidebar component
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Wallet size={24} />
        </div>

        <div>
          <h2>CryptoAdmin</h2>
          <p>Exchange Management</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-section-title">MAIN MENU</p>

        {singleItems.slice(0, 3).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/" || item.path === "/users" || item.path === "/kyc"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </NavLink>
          );
        })}

        <p className="sidebar-section-title">OPERATIONS</p>

        {menuGroups.map((group) => (
          <MenuGroup key={group.title} group={group} />
        ))}

        {singleItems.slice(3).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="admin-avatar">A</div>
        <div className="admin-info">
          <h4>Admin User</h4>
          <p>Super Administrator</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
