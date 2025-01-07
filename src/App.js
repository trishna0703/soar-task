import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import Layout from "./pages/layout/Layout";
import "./index.scss";
import CreditCards from "./pages/creditCards/CreditCards";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/credit-cards" element={<CreditCards />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
