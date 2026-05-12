import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Star, 
  MapPin, 
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  status: 'Active' | 'Pending' | 'Inactive';
  hoursContributed: number;
  joinDate: string;
}

const Volunteers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const volunteers: Volunteer[] = [
    { id: 'VOL001', name: 'Guy Hawkins', email: 'guy.h@example.com', phone: '+91 98765 43210', location: 'Mumbai South', skills: ['Event Planning', 'Public Speaking'], status: 'Active', hoursContributed: 45, joinDate: '2025-10-12' },
    { id: 'VOL002', name: 'Brooklyn Simmons', email: 'brooklyn.s@example.com', phone: '+91 98765 43211', location: 'Mumbai North', skills: ['Social Media', 'Content Writing'], status: 'Active', hoursContributed: 28, joinDate: '2026-01-15' },
    { id: 'VOL003', name: 'Kristin Watson', email: 'kristin.w@example.com', phone: '+91 98765 43212', location: 'Navi Mumbai', skills: ['Medical', 'Logistics'], status: 'Pending', hoursContributed: 0, joinDate: '2026-05-02' },
    { id: 'VOL004', name: 'Cody Fisher', email: 'cody.f@example.com', phone: '+91 98765 43213', location: 'Thane', skills: ['Teaching', 'Mentorship'], status: 'Active', hoursContributed: 120, joinDate: '2024-08-20' },
    { id: 'VOL005', name: 'Bessie Cooper', email: 'bessie.c@example.com', phone: '+91 98765 43214', location: 'Mumbai West', skills: ['Fundraising', 'Design'], status: 'Inactive', hoursContributed: 15, joinDate: '2025-03-10' },
  ];

  const filteredVolunteers = volunteers.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Volunteer Network</h1>
            <p className="text-slate-500 mt-1">Manage and coordinate with the backbone of our club.</p>
          </div>
          <button className="btn-primary flex items-center space-x-2 px-6 py-2 shadow-lg shadow-rotary-blue/20">
            <Users className="w-4 h-4" />
            <span>Add Volunteer</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Volunteers', value: '458', icon: Users, color: 'bg-blue-50 text-blue-600' },
            { label: 'Active This Month', value: '182', icon: Star, color: 'bg-green-50 text-green-600' },
            { label: 'Pending Approval', value: '24', icon: Clock, color: 'bg-orange-50 text-orange-600' },
            { label: 'Avg. Hours/Vol', value: '12.5', icon: CheckCircle2, color: 'bg-purple-50 text-purple-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 p-1 bg-slate-50 rounded-xl w-fit border border-slate-100">
            <button className="px-4 py-1.5 bg-white text-rotary-blue shadow-sm rounded-lg text-sm font-bold">All</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded-lg text-sm font-bold">Active</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded-lg text-sm font-bold">Pending</button>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
            />
          </div>
        </div>

        {/* Volunteers Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-50">
                <th className="px-8 py-4">Volunteer</th>
                <th className="px-8 py-4">Contact</th>
                <th className="px-8 py-4">Skills</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Activity</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredVolunteers.map((v) => (
                <tr key={v.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-rotary-blue/10 text-rotary-blue flex items-center justify-center font-bold">
                        {v.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{v.name}</p>
                        <div className="flex items-center text-[10px] text-slate-500 mt-0.5">
                          <MapPin className="w-3 h-3 mr-1" />
                          {v.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-slate-600">
                        <Mail className="w-3 h-3 mr-2 text-slate-400" />
                        {v.email}
                      </div>
                      <div className="flex items-center text-xs text-slate-600">
                        <Phone className="w-3 h-3 mr-2 text-slate-400" />
                        {v.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-wrap gap-1">
                      {v.skills.slice(0, 2).map(skill => (
                        <span key={skill} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {skill}
                        </span>
                      ))}
                      {v.skills.length > 2 && <span className="text-[10px] text-slate-400">+{v.skills.length - 2} more</span>}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase",
                      v.status === 'Active' ? "bg-green-50 text-green-600" :
                      v.status === 'Pending' ? "bg-orange-50 text-orange-600" : "bg-red-50 text-red-600"
                    )}>
                      {v.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-900">{v.hoursContributed} Hours</p>
                      <p className="text-[10px] text-slate-500">Joined {new Date(v.joinDate).toLocaleDateString()}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Volunteers;
