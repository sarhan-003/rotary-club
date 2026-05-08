import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar, 
  Plus, 
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', donations: 4000, expenses: 2400 },
  { name: 'Feb', donations: 3000, expenses: 1398 },
  { name: 'Mar', donations: 2000, expenses: 9800 },
  { name: 'Apr', donations: 2780, expenses: 3908 },
  { name: 'May', donations: 1890, expenses: 4800 },
  { name: 'Jun', donations: 2390, expenses: 3800 },
  { name: 'Jul', donations: 3490, expenses: 4300 },
];

const COLORS = ['#0050A1', '#F7A81B', '#0190D4', '#002D5D'];

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Revenue', value: '$124,500', change: '+12.5%', isUp: true, icon: DollarSign, color: 'bg-blue-50 text-blue-600' },
    { title: 'Total Expenses', value: '$45,200', change: '-2.4%', isUp: false, icon: TrendingDown, color: 'bg-red-50 text-red-600' },
    { title: 'New Volunteers', value: '148', change: '+24.1%', isUp: true, icon: Users, color: 'bg-green-50 text-green-600' },
    { title: 'Upcoming Events', value: '12', change: 'This Month', isUp: true, icon: Calendar, color: 'bg-orange-50 text-orange-600' },
  ];

  const recentTransactions = [
    { id: 1, name: 'Annual Gala Sponsorship', category: 'Revenue', amount: '+$15,000', date: '2 hours ago', status: 'Completed' },
    { id: 2, name: 'Medical Camp Supplies', category: 'Expense', amount: '-$2,400', date: '5 hours ago', status: 'Pending' },
    { id: 3, name: 'Education Fund Donation', category: 'Revenue', amount: '+$500', date: 'Yesterday', status: 'Completed' },
    { id: 4, name: 'Community Center Rent', category: 'Expense', amount: '-$1,200', date: 'Yesterday', status: 'Completed' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Welcome back, District Governor. Here's what's happening today.</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-slate-200 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors">
              Download Report
            </button>
            <button className="btn-primary px-4 py-2 flex items-center space-x-2 text-sm">
              <Plus className="w-4 h-4" />
              <span>New Campaign</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center space-x-1 text-xs font-bold ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{stat.change}</span>
                  {stat.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-slate-900">Financial Growth</h3>
              <select className="bg-slate-50 border-none text-xs font-bold rounded-lg px-3 py-2 outline-none">
                <option>Last 7 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0050A1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0050A1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="donations" stroke="#0050A1" strokeWidth={3} fillOpacity={1} fill="url(#colorDonations)" />
                  <Area type="monotone" dataKey="expenses" stroke="#F7A81B" strokeWidth={3} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-8">Expense Allocation</h3>
            <div className="h-[250px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Events', value: 400 },
                      { name: 'Salaries', value: 300 },
                      { name: 'Admin', value: 200 },
                      { name: 'Marketing', value: 100 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold">$45.2K</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Total Spend</span>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              {['Events', 'Salaries', 'Admin', 'Marketing'].map((cat, i) => (
                <div key={cat} className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                    <span className="text-slate-600">{cat}</span>
                  </div>
                  <span className="font-bold text-slate-900">40%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900">Recent Transactions</h3>
              <Link to="/admin/financials" className="text-xs font-bold text-rotary-blue hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${tx.category === 'Revenue' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      {tx.category === 'Revenue' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{tx.name}</p>
                      <p className="text-[10px] text-slate-500">{tx.date} • {tx.status}</p>
                    </div>
                  </div>
                  <span className={`font-bold ${tx.category === 'Revenue' ? 'text-green-600' : 'text-slate-900'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900">Next Events</h3>
              <button className="text-xs font-bold text-rotary-blue hover:underline">Calendar</button>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Annual Charity Gala', date: 'May 15, 2026', attendance: '450 Expected', status: 'Confirmed' },
                { title: 'World Polio Day Walk', date: 'May 22, 2026', attendance: '1,200 Expected', status: 'Planning' },
                { title: 'Blood Donation Drive', date: 'June 05, 2026', attendance: '200 Expected', status: 'Confirmed' },
              ].map((event, i) => (
                <div key={i} className="flex items-start justify-between">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 shrink-0">
                      <span className="text-[10px] font-bold text-rotary-blue uppercase">{event.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold text-slate-900 leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">{event.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{event.attendance}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${event.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                    {event.status}
                  </div>
                </div>
              ))}
              <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2">
                <span>Go to Event Manager</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
