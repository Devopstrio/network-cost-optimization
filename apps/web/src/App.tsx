import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import NetworkCostDashboard from './pages/NetworkCostDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Network Cost Optimization Platform is actively analyzing flow logs, tracking egress rates, and scanning for traffic anomalies. Optimization recommendations will be populated here once the FinOps analysis engines complete their current run.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<NetworkCostDashboard />} />
          <Route path="/flows" element={<Placeholder name="Traffic Flow Analytics (VPC/VNet Flow Logs)" />} />
          <Route path="/breakdown" element={<Placeholder name="Network Cost Breakdown Matrix" />} />
          <Route path="/egress" element={<Placeholder name="Internet Egress Optimization" />} />
          <Route path="/peering" element={<Placeholder name="VPC/VNet Peering Cost Analysis" />} />
          <Route path="/nat" element={<Placeholder name="NAT Gateway & Private Link Cost Optimization" />} />
          <Route path="/cdn" element={<Placeholder name="CDN & Edge Services Analytics" />} />
          <Route path="/anomalies" element={<Placeholder name="Network Cost Anomaly Detection" />} />
          <Route path="/chargeback" element={<Placeholder name="Network Chargeback & Cost Attribution" />} />
          <Route path="/settings" element={<Placeholder name="Platform Settings & Billing Integrations" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
