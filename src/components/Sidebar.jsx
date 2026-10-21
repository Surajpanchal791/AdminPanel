
import { useState } from "react";

import { NavLink } from "react-router-dom";

const menuGroups = [
  {
    title: "Transactions",
    icon: "💳",
    items: [
      { label: "Deposits", path: "/transactions/deposits" },
      { label: "Withdrawals", path: "/transactions/withdrawals" },
    ],
  },
  {
    title: "Trading",
    icon: "📈",
    items: [
      { label: "Orders", path: "/trading/orders" },
      { label: "Trades", path: "/trading/trades" },
      { label: "Trading Pairs", path: "/trading/pairs" },
    ],
  },
  {
    title: "Assets",
    icon: "🪙",
    items: [
      { label: "Cryptocurrencies", path: "/assets/cryptocurrencies" },
      { label: "Networks", path: "/assets/networks" },
    ],
  },
];

const singleItems = [
  { label: "Users", icon: "👥", path: "/users" },
  { label: "KYC & Compliance", icon: "🛡️", path: "/kyc" },
  { label: "Fees", icon: "💰", path: "/fees" },
  { label: "Risk", icon: "⚠️", path: "/risk" },
  { label: "Reports", icon: "📊", path: "/reports" },
  { label: "Notifications", icon: "🔔", path: "/notifications" },
  {
    label: "Admin Management",
    icon: "🔐",
    path: "/admin-management",
  },
  { label: "Audit Logs", icon: "📋", path: "/audit-logs" },
  { label: "Settings", icon: "⚙️", path: "/settings" },
];

function Sidebar({ isOpen, onClose }) {
  function closeOnMobile() {
    onClose?.();
  }

  return (
    <>
      {/* Overlay for the mobile sidebar */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeOnMobile}
        />
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Sidebar brand */}
        <div className="sidebar-brand">
          <div className="brand-icon">₿</div>

          <div>
            <h2>CryptoAdmin</h2>
            <span>EXCHANGE MANAGEMENT</span>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="sidebar-nav">
          {/* Dashboard */}
          <NavLink
            to="/"
            end
            onClick={closeOnMobile}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">▦</span>
            Dashboard
          </NavLink>

          {/* Direct navigation links */}
          {singleItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={closeOnMobile}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}

          {/* Expandable groups: Transactions, Trading, Assets */}
          {menuGroups.map((group) => (
            <MenuGroup
              key={group.title}
              group={group}
              onNavigate={closeOnMobile}
            />
          ))}

          {/* Remaining direct navigation links */}
          {singleItems.slice(2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={closeOnMobile}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Admin profile */}
        <div className="sidebar-footer">
          <div className="avatar">SA</div>

          <div>
            <strong>Super Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>
    </>
  );
}

function MenuGroup({ group, onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  function toggleGroup() {
    setExpanded((previous) => !previous);
  }

  return (
    <div className="nav-group">
      <button
        type="button"
        className="nav-group-button"
        onClick={toggleGroup}
        aria-expanded={expanded}
      >
        <span className="nav-group-label">
          <span className="nav-icon">{group.icon}</span>
          {group.title}
        </span>

        <span className={`nav-chevron ${expanded ? "expanded" : ""}`}>
          {expanded ? "⌄" : "›"}
        </span>
      </button>

      {expanded && (
        <div className="submenu">
          {group.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={onNavigate}
              className={({ isActive }) =>
                `submenu-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
