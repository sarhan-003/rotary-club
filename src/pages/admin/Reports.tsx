import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  FileText, 
  Download, 
  PieChart, 
  BarChart, 
  TrendingUp, 
  Calendar
} from 'lucide-react';

const Reports: React.FC = () => {
  const reportTypes = [
    { title: 'Annual Financial Report', date: 'Jan 2026 - Dec 2026', size: '2.4 MB', icon: FileText },
    { title: 'Volunteer Impact Study', date: 'Q1 2026', size: '1.8 MB', icon: TrendingUp },
    { title: 'Event Success Metrics', date: 'April 2026', size: '3.1 MB', icon: BarChart },
    { title: 'Donor Demographics', date: 'All Time', size: '1.2 MB', icon: PieChart },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Analytics & Reports</h1>
            <p className="text-slate-500 mt-1">Generate and download comprehensive data insights.</p>
          </div>
          <button className="btn-primary flex items-center space-x-2 px-6 py-2 shadow-lg shadow-rotary-blue/20">
            <Calendar className="w-4 h-4" />
            <span>Schedule Report</span>
          </button>
        </div>

        {/* Report Generation Section */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Generate</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-rotary-blue/30 transition-all group cursor-pointer">
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <PieChart className="w-6 h-6 text-rotary-blue" />
              </div>
              <h4 className="font-bold text-slate-900">Financial Summary</h4>
              <p className="text-xs text-slate-500 mt-1">Generate a breakdown of income and expenses.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-rotary-blue/30 transition-all group cursor-pointer">
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-900">Volunteer Activity</h4>
              <p className="text-xs text-slate-500 mt-1">Report on hours contributed and project impact.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-rotary-blue/30 transition-all group cursor-pointer">
              <div className="p-3 bg-white rounded-xl w-fit shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="font-bold text-slate-900">Donor Retention</h4>
              <p className="text-xs text-slate-500 mt-1">Analyze donor behavior and campaign performance.</p>
            </div>
          </div>
        </div>

        {/* Recent Reports List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 px-2">Recently Generated</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reportTypes.map((report, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-500">
                    <report.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{report.title}</h4>
                    <p className="text-xs text-slate-500">{report.date} • {report.size}</p>
                  </div>
                </div>
                <button className="p-2 text-rotary-blue hover:bg-rotary-blue/10 rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;

import { Users, Heart } from 'lucide-react';
