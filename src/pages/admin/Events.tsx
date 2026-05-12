import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  Calendar, 
  Plus, 
  Search, 
  MoreVertical, 
  Users, 
  MapPin, 
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: 'Confirmed' | 'Planning' | 'Completed';
  category: string;
}

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const events: Event[] = [
    { id: 'EV001', title: 'Annual Charity Gala', date: '2026-05-15', time: '19:00', location: 'Grand Ballroom', attendees: 450, status: 'Confirmed', category: 'Fundraiser' },
    { id: 'EV002', title: 'World Polio Day Walk', date: '2026-05-22', time: '07:00', location: 'City Park', attendees: 1200, status: 'Planning', category: 'Awareness' },
    { id: 'EV003', title: 'Blood Donation Drive', date: '2026-06-05', time: '09:00', location: 'Community Center', attendees: 200, status: 'Confirmed', category: 'Medical' },
    { id: 'EV004', title: 'Literacy Workshop', date: '2026-04-10', time: '14:00', location: 'Public Library', attendees: 85, status: 'Completed', category: 'Education' },
    { id: 'EV005', title: 'Clean Water Project', date: '2026-06-15', time: '10:00', location: 'Rural Village', attendees: 50, status: 'Planning', category: 'Service' },
  ];

  const filteredEvents = events.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Event Management</h1>
            <p className="text-slate-500 mt-1">Plan, track, and manage all Rotary Club activities.</p>
          </div>
          <button className="btn-primary flex items-center space-x-2 px-6 py-2 shadow-lg shadow-rotary-blue/20">
            <Plus className="w-4 h-4" />
            <span>Create Event</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Events', value: '42', icon: Calendar, color: 'bg-blue-50 text-blue-600' },
            { label: 'Upcoming', value: '12', icon: Clock, color: 'bg-orange-50 text-orange-600' },
            { label: 'Total Attendees', value: '2.5k', icon: Users, color: 'bg-green-50 text-green-600' },
            { label: 'Pending Action', value: '3', icon: AlertCircle, color: 'bg-red-50 text-red-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 p-1 bg-slate-50 rounded-xl w-fit border border-slate-100">
            <button className="px-4 py-1.5 bg-white text-rotary-blue shadow-sm rounded-lg text-sm font-bold">All Events</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded-lg text-sm font-bold">Upcoming</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 rounded-lg text-sm font-bold">Past</button>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by title or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden group hover:border-rotary-blue/30 transition-all">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    event.status === 'Confirmed' ? "bg-green-50 text-green-600" :
                    event.status === 'Planning' ? "bg-orange-50 text-orange-600" : "bg-slate-50 text-slate-600"
                  )}>
                    {event.status}
                  </div>
                  <button className="p-1 text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-rotary-blue transition-colors">{event.title}</h3>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{event.category}</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="w-4 h-4 mr-3 text-slate-400" />
                    <span>{event.attendees} Registered</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">ID: {event.id}</span>
                <button className="text-xs font-bold text-rotary-blue hover:underline">Edit Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Events;
