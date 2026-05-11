import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  Heart, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  DollarSign, 
  User,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Donation {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  type: 'One-time' | 'Monthly' | 'Corporate';
  status: 'Completed' | 'Pending' | 'Failed';
  campaign: string;
}

const Donations: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'One-time' | 'Monthly' | 'Corporate'>('all');

  const donations: Donation[] = [
    { id: 'DON001', donorName: 'Robert Fox', amount: 5000, date: '2026-05-08', type: 'Monthly', status: 'Completed', campaign: 'Clean Water Initiative' },
    { id: 'DON002', donorName: 'Jane Cooper', amount: 1500, date: '2026-05-08', type: 'One-time', status: 'Completed', campaign: 'General Fund' },
    { id: 'DON003', donorName: 'Acme Corp', amount: 50000, date: '2026-05-07', type: 'Corporate', status: 'Pending', campaign: 'Annual Gala' },
    { id: 'DON004', donorName: 'Wade Warren', amount: 2000, date: '2026-05-06', type: 'Monthly', status: 'Completed', campaign: 'Literacy Project' },
    { id: 'DON005', donorName: 'Esther Howard', amount: 1000, date: '2026-05-05', type: 'One-time', status: 'Failed', campaign: 'Polio Walk' },
  ];

  const filteredDonations = donations.filter(d => filter === 'all' || d.type === filter);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Donation Tracking</h1>
            <p className="text-slate-500 mt-1">Monitor contributions and manage donor relationships.</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
              <Download className="w-4 h-4" />
              <span>Report</span>
            </button>
            <button className="btn-primary flex items-center space-x-2 px-6 py-2 shadow-lg shadow-rotary-blue/20">
              <Heart className="w-4 h-4" />
              <span>Record Donation</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-1 text-xs font-bold text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500">Total Contributions</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">₹18,45,000</h2>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-rotary-gold/10 text-rotary-gold rounded-2xl">
                <User className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-1 text-xs font-bold text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+5%</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500">Active Donors</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">1,240</h2>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-1 text-xs font-bold text-slate-400">
                <span>Target: ₹20L</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500">Campaign Goal Progress</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">92.2%</h2>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 p-1 bg-slate-50 rounded-xl w-fit">
              {['all', 'One-time', 'Monthly', 'Corporate'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setFilter(t as any)}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-sm font-bold transition-all capitalize", 
                    filter === t ? "bg-white text-rotary-blue shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search donor..."
                  className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-rotary-blue/10 w-64"
                />
              </div>
              <button className="p-2 bg-slate-50 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-4">Donor Name</th>
                  <th className="px-8 py-4">Campaign</th>
                  <th className="px-8 py-4">Type</th>
                  <th className="px-8 py-4">Amount</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredDonations.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-[10px]">
                          {d.donorName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{d.donorName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-slate-600 font-medium">{d.campaign}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-lg",
                        d.type === 'Corporate' ? "bg-purple-50 text-purple-600" :
                        d.type === 'Monthly' ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600"
                      )}>
                        {d.type}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="font-bold text-slate-900">₹{d.amount.toLocaleString('en-IN')}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-slate-500">{new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase",
                        d.status === 'Completed' ? "bg-green-50 text-green-600" :
                        d.status === 'Pending' ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
                      )}>
                        {d.status}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Donations;
