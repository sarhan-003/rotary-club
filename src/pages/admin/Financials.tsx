import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  Plus, 
  Filter, 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  MoreVertical,
  FileText
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Transaction {
  id: string;
  type: 'expense' | 'revenue';
  category: string;
  amount: number;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  event: string;
  addedBy: string;
}

const Financials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'expense' | 'revenue'>('all');

  const transactions: Transaction[] = [
    { id: 'TX001', type: 'revenue', category: 'Sponsorship', amount: 5000, date: '2026-05-01', status: 'approved', event: 'Annual Gala', addedBy: 'Sarah Connor' },
    { id: 'TX002', type: 'expense', category: 'Venue', amount: 1200, date: '2026-05-02', status: 'approved', event: 'Annual Gala', addedBy: 'John Doe' },
    { id: 'TX003', type: 'expense', category: 'Food & Catering', amount: 800, date: '2026-05-03', status: 'pending', event: 'Youth Workshop', addedBy: 'Sarah Connor' },
    { id: 'TX004', type: 'revenue', category: 'Donation', amount: 2500, date: '2026-05-04', status: 'approved', event: 'Polio Walk', addedBy: 'Admin' },
    { id: 'TX005', type: 'expense', category: 'Marketing', amount: 450, date: '2026-05-05', status: 'rejected', event: 'Clean Water Project', addedBy: 'Mike Ross' },
  ];

  const filteredTransactions = transactions.filter(t => filter === 'all' || t.type === filter);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Financial Management</h1>
            <p className="text-slate-500 mt-1">Track every dollar, manage budgets, and oversee NGO revenue flows.</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
            <button className="btn-primary flex items-center space-x-2 px-6 py-2 shadow-lg shadow-rotary-blue/20">
              <Plus className="w-4 h-4" />
              <span>New Entry</span>
            </button>
          </div>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-rotary-blue p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">Net Balance</p>
              <h2 className="text-4xl font-bold mb-6">₹8,52,400.00</h2>
              <div className="flex items-center space-x-2 text-xs font-bold bg-white/10 w-fit px-3 py-1 rounded-full border border-white/10">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span>+15% from last month</span>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400">Total Revenue</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">₹12,45,000</h2>
            <p className="text-sm text-slate-500 mt-2">from 15 active campaigns</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                <TrendingDown className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400">Total Expenses</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">₹3,92,600</h2>
            <p className="text-sm text-slate-500 mt-2">across 8 events this month</p>
          </div>
        </div>

        {/* Transactions Table Section */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 p-1 bg-slate-50 rounded-xl w-fit">
              <button 
                onClick={() => setFilter('all')}
                className={cn("px-4 py-1.5 rounded-lg text-sm font-bold transition-all", filter === 'all' ? "bg-white text-rotary-blue shadow-sm" : "text-slate-500 hover:text-slate-700")}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('revenue')}
                className={cn("px-4 py-1.5 rounded-lg text-sm font-bold transition-all", filter === 'revenue' ? "bg-white text-green-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}
              >
                Revenue
              </button>
              <button 
                onClick={() => setFilter('expense')}
                className={cn("px-4 py-1.5 rounded-lg text-sm font-bold transition-all", filter === 'expense' ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}
              >
                Expenses
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Filter by event or ID..."
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
                  <th className="px-8 py-4">Transaction ID</th>
                  <th className="px-8 py-4">Category</th>
                  <th className="px-8 py-4">Event / Project</th>
                  <th className="px-8 py-4">Amount</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-3">
                        <div className={cn("p-2 rounded-lg", tx.type === 'revenue' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600")}>
                          {tx.type === 'revenue' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{tx.id}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm font-semibold text-slate-700">{tx.category}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{tx.event}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={cn("font-bold", tx.type === 'revenue' ? "text-green-600" : "text-slate-900")}>
                        {tx.type === 'revenue' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-slate-500">{tx.date}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className={cn(
                        "inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        tx.status === 'approved' ? "bg-green-50 text-green-600" :
                        tx.status === 'pending' ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
                      )}>
                        {tx.status === 'approved' ? <CheckCircle2 className="w-3 h-3" /> :
                         tx.status === 'pending' ? <Clock className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                        <span>{tx.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-rotary-blue hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between text-sm text-slate-500 font-semibold">
            <p>Showing {filteredTransactions.length} of {transactions.length} entries</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Financials;
