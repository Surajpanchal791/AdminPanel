
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayouts";

function Dashboard() {
  return (
    <div>
      <h2>Welcome to CryptoAdmin</h2>
      <p>Your exchange overview will appear here.</p>
    </div>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <h2>{title}</h2>
      <p>This module is ready for development.</p>
    </div>
  );
}

function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route 
        path="/users" 
        element={<PlaceholderPage title="Users" />} 
        />

        <Route
         path="/kyc"
          element={<PlaceholderPage title="KYC & Compliance" />}
         />

        <Route
          path="/transactions/deposits"
          element={<PlaceholderPage title="Deposits" />}
        />
        
        <Route
          path="/transactions/withdrawals"
          element={<PlaceholderPage title="Withdrawals" />}
        />

        <Route
          path="/trading/orders"
          element={<PlaceholderPage title="Orders" />}
        />
        <Route
          path="/trading/trades"
          element={<PlaceholderPage title="Trades" />}
        />
        <Route
          path="/trading/pairs"
          element={<PlaceholderPage title="Trading Pairs" />}
        />

        <Route
          path="/assets/cryptocurrencies"
          element={<PlaceholderPage title="Cryptocurrencies" />}
        />
        <Route
          path="/assets/networks"
          element={<PlaceholderPage title="Networks" />}
        />

        <Route path="/fees" element={<PlaceholderPage title="Fees" />} />
        <Route path="/risk" element={<PlaceholderPage title="Risk Monitoring" />} />
        <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
        <Route
          path="/notifications"
          element={<PlaceholderPage title="Notifications" />}
        />
        <Route
          path="/admin-management"
          element={<PlaceholderPage title="Admin Management" />}
        />
        <Route
          path="/audit-logs"
          element={<PlaceholderPage title="Audit Logs" />}
        />
        <Route
          path="/settings"
          element={<PlaceholderPage title="Settings" />}
        />

        <Route
          path="*"
          element={<PlaceholderPage title="404 — Page Not Found" />}
        />
      </Routes>
    </AdminLayout>
  );
}

export default App;
