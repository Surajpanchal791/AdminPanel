
import { useLocation } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/users": "All Users",
    "/users/active": "Active Users",
    "/users/restricted": "Restricted Users",
    "/kyc/pending": "Pending KYC",
    "/kyc/approved": "Approved KYC",
    "/kyc/rejected": "Rejected KYC",
    "/transactions/deposits": "Deposits",
    "/transactions/withdrawals": "Withdrawals",
    "/trading/orders": "Orders",
    "/trading/trades": "Trades",
    "/trading/pairs": "Trading Pairs",
    "/assets/cryptocurrencies": "Cryptocurrencies",
    "/assets/networks": "Networks",
    "/fees": "Fees",
    "/risk": "Risk Monitoring",
    "/reports": "Reports",
    "/notifications": "Notifications",
    "/admin-management": "Admin Management",
    "/audit-logs": "Audit Logs",
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Page Not Found";

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <div>
          <h3>{title}</h3>
          <p>Crypto Exchange Administration</p>
        </div>
      </div>

      <div className="navbar-right">
        <button className="notification-button">
          🔔 Notifications
        </button>

        <div className="navbar-profile">
          <div className="avatar">SA</div>
          <span>Super Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
