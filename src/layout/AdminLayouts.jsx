
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((previous) => !previous);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <main className="main-area">
        <Navbar onMenuClick={toggleSidebar} />

        <section className="page-content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;
