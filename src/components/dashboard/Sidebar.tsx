import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  DollarSign, 
  Users, 
  Heart, 
  Settings, 
  LogOut,
  ChevronRight,
  FileText
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Financials', path: '/admin/financials', icon: DollarSign },
    { name: 'Events', path: '/admin/events', icon: Calendar },
    { name: 'Donations', path: '/admin/donations', icon: Heart },
    { name: 'Volunteers', path: '/admin/volunteers', icon: Users },
    { name: 'Reports', path: '/admin/reports', icon: FileText },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 bg-slate-900 text-slate-400 border-r border-slate-800 flex flex-col">
      {/* Brand */}
      <div className="p-6 border-b border-slate-800">
        <Link to="/admin" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-rotary-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Admin Panel</h2>
            <p className="text-[10px] text-rotary-gold font-bold">Rotary District 3210</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
        <p className="text-[10px] font-bold text-slate-500 uppercase px-3 py-2 tracking-widest">Main Menu</p>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center justify-between p-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-rotary-blue text-white shadow-lg shadow-rotary-blue/20" 
                  : "hover:bg-slate-800 hover:text-white"
              )}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-rotary-blue")} />
                <span className="font-semibold text-sm">{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center space-x-3 mb-4 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
          <div className="w-8 h-8 rounded-full bg-rotary-gold flex items-center justify-center font-bold text-slate-900 text-xs">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">John Doe</p>
            <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors w-full p-2">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
