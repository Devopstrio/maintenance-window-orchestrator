import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import OrchestrationDashboard from './pages/OrchestrationDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Maintenance Orchestration engine is currently analyzing global change schedules and calculating dependency risk scores across multi-cloud regions. Automated pre-flight validations and SLA-aware conflict detection will be fully operational once the workflow synchronization is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<OrchestrationDashboard />} />
          <Route path="/calendar" element={<Placeholder name="Maintenance Window Calendar" />} />
          <Route path="/status" element={<Placeholder name="Real-time Orchestration Status" />} />
          <Route path="/dependencies" element={<Placeholder name="Dependency Graph & Conflict Analysis" />} />
          <Route path="/sla" element={<Placeholder name="SLA Compliance & Impact Tracking" />} />
          <Route path="/blackout" element={<Placeholder name="Blackout Window Governance" />} />
          <Route path="/regions" element={<Placeholder name="Multi-Region Coordination" />} />
          <Route path="/comms" element={<Placeholder name="ChatOps & Stakeholder Communication" />} />
          <Route path="/reports" element={<Placeholder name="Executive Change & Compliance Reporting" />} />
          <Route path="/settings" element={<Placeholder name="System & Orchestration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
