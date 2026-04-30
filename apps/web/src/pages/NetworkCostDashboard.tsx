import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Network, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Server,
  Cloud,
  ShieldCheck,
  RotateCcw,
  Signal,
  Share2,
  Lock,
  DollarSign
} from 'lucide-react';

const networkSpendTrendData = [
  { month: 'Jan', egress: 18500, nat: 4200, peering: 2100 },
  { month: 'Feb', egress: 19200, nat: 4500, peering: 2300 },
  { month: 'Mar', egress: 21500, nat: 5100, peering: 2800 },
  { month: 'Apr', egress: 17800, nat: 3900, peering: 2200 }, // Post-optimization
  { month: 'May', egress: 16500, nat: 3500, peering: 2100 },
  { month: 'Jun', egress: 16800, nat: 3600, peering: 2150 },
];

const trafficTypeDistribution = [
  { name: 'Internet Egress', value: 55, color: '#10b981' },
  { name: 'NAT Gateway Processing', value: 25, color: '#059669' },
  { name: 'Inter-Zone (AZ)', value: 12, color: '#047857' },
  { name: 'Inter-Region', value: 8, color: '#064e3b' },
];

const KPI_CARDS = [
  { title: 'Total Network Spend', value: '$42.5k', trend: '-18% vs Last Month', color: 'emerald', icon: DollarSign },
  { title: 'Data Transferred (Out)', value: '185 TB', trend: 'Optimized via CDN', color: 'emerald', icon: ArrowUpRight },
  { title: 'NAT GW Efficiency', value: '88%', trend: 'Endpoints Configured', color: 'emerald', icon: Activity },
  { title: 'Savings Opportunity', value: '$4.2k', trend: 'VPC Endpoints Available', color: 'emerald', icon: ShieldCheck },
];

const NetworkCostDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Network Cloud Economics Center</h1>
          <p className="text-slate-400">Institutional tracking of egress, transit, and edge networking costs with automated traffic optimization.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Analyze Traffic Flows
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Apply Optimizations
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
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
        {/* Spend Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Multi-Cloud Network Spend Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={networkSpendTrendData}>
                <defs>
                  <linearGradient id="colorEgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="egress" stackId="1" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorEgress)" name="Internet Egress" />
                <Area type="monotone" dataKey="nat" stackId="1" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorNat)" name="NAT Gateway Data" />
                <Area type="monotone" dataKey="peering" stackId="1" stroke="#047857" strokeWidth={2} fillOpacity={1} fill="transparent" name="VPC Peering" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Network Cost by Traffic Type</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficTypeDistribution.map((entry, index) => (
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
            {trafficTypeDistribution.map((item) => (
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

      {/* Network Cost Optimization Recommendations Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Actionable Traffic & Network Optimizations</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View All Recommendations</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Optimization Target</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Cloud</th>
                <th className="px-6 py-4 font-semibold">Potential Savings /mo</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'S3 Traffic via NAT GW (Replace with VPC Endpoint)', category: 'Private Link', provider: 'AWS', savings: '$1,250.00' },
                { name: 'High Egress to Edge Locations (Enable CDN Caching)', category: 'CDN Optimization', provider: 'Azure', savings: '$840.00' },
                { name: 'Inter-Region Database Replication (Use Private Link)', category: 'Inter-Region', provider: 'GCP', savings: '$450.50' },
                { name: 'Unused Elastic IPs / Public IPs', category: 'Resource Cleanup', provider: 'AWS', savings: '$120.00' },
              ].map((rec, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{rec.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: NET-OPT-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[10px] font-bold uppercase tracking-wider">
                      {rec.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{rec.provider}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-bold">{rec.savings}</td>
                  <td className="px-6 py-4">
                    <button className="text-xs font-bold text-emerald-500 hover:text-emerald-400">Implement</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NetworkCostDashboard;
