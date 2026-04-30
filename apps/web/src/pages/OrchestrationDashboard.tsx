import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Calendar, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Database,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldAlert,
  Boxes
} from 'lucide-react';

const executionSuccessData = [
  { day: 'Mon', success: 98, failure: 2 },
  { day: 'Tue', success: 100, failure: 0 },
  { day: 'Wed', success: 95, failure: 5 },
  { day: 'Thu', success: 99, failure: 1 },
  { day: 'Fri', success: 97, failure: 3 },
  { day: 'Sat', success: 100, failure: 0 },
  { day: 'Sun', success: 100, failure: 0 },
];

const maintenanceSeverityBreakdown = [
  { name: 'Critical', value: 15, color: '#e11d48' },
  { name: 'High', value: 25, color: '#f59e0b' },
  { name: 'Medium', value: 40, color: '#3b82f6' },
  { name: 'Low', value: 20, color: '#10b981' },
];

const KPI_CARDS = [
  { title: 'Scheduled Windows', value: '42', trend: 'Active Next 7d', color: 'amber', icon: Calendar },
  { title: 'Execution Success', value: '98.4%', trend: '+0.5% MoM', color: 'amber', icon: CheckCircle2 },
  { title: 'SLA Impact Risk', value: 'Low', trend: '4 At Risk', color: 'amber', icon: ShieldAlert },
  { title: 'Avg. Recovery Time', value: '12m', trend: 'MTTR Rollback', color: 'amber', icon: Clock },
];

const OrchestrationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Maintenance Orchestration Hub</h1>
          <p className="text-slate-400">Institutional coordination, automated execution, and governance of hybrid infrastructure changes.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Conflict Analysis
          </button>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Schedule New Window
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-amber-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-amber-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Execution Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Change Execution Reliability (Success Rate)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={executionSuccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="success" stackId="a" fill="#d97706" radius={[0, 0, 0, 0]} name="Success %" />
                <Bar dataKey="failure" stackId="a" fill="#e11d48" radius={[4, 4, 0, 0]} name="Failure %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Severity Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Maintenance Severity Matrix</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={maintenanceSeverityBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {maintenanceSeverityBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {maintenanceSeverityBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* active windows Ledger */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Maintenance Execution Ledger</h3>
          <button className="text-amber-400 hover:text-amber-300 text-sm font-medium">View Conflict Graph</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Maintenance window</th>
                <th className="px-6 py-4 font-semibold">Risk Score</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Orchestration Steps</th>
                <th className="px-6 py-4 font-semibold">Target Systems</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Core Database Patching', risk: '85/100', status: 'In Progress', steps: '4/12', systems: 'db-prod-cluster' },
                { name: 'Kubernetes Node Upgrade', risk: '45/100', status: 'Scheduled', steps: '0/8', systems: 'k8s-us-east' },
                { name: 'Legacy ERP Firewall Update', risk: '92/100', status: 'Pre-Check', steps: '2/5', systems: 'legacy-erp-gw' },
              ].map((maint, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{maint.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: MW-2026-X45</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      parseInt(maint.risk) > 80 ? 'bg-rose-500/10 text-rose-500' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {maint.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      maint.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500 animate-pulse' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {maint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium italic">{maint.steps} Completed</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{maint.systems}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrchestrationDashboard;
