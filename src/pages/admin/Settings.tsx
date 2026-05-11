import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Save,
  Camera
} from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 mt-1">Manage your account and platform preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 space-y-1">
            {[
              { label: 'General', icon: SettingsIcon, active: true },
              { label: 'Profile', icon: User, active: false },
              { label: 'Notifications', icon: Bell, active: false },
              { label: 'Security', icon: Shield, active: false },
              { label: 'Language', icon: Globe, active: false },
            ].map((item) => (
              <button 
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  item.active ? 'bg-rotary-blue text-white shadow-lg shadow-rotary-blue/20' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Section */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Club Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-3xl font-bold text-rotary-blue">R</span>
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-slate-100 rounded-full shadow-lg text-slate-400 hover:text-rotary-blue transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Club Logo</h4>
                    <p className="text-xs text-slate-500 mt-1">Update your club's primary branding.</p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-xs font-bold text-rotary-blue hover:underline">Upload New</button>
                      <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Club Name</label>
                    <input 
                      type="text" 
                      defaultValue="Rotary Club of Mumbai Central"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">District Number</label>
                    <input 
                      type="text" 
                      defaultValue="District 3210"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Club Email</label>
                    <input 
                      type="email" 
                      defaultValue="contact@rotarymumbaicentral.org"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                    <input 
                      type="text" 
                      defaultValue="+91 22 2345 6789"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rotary-blue/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Club Bio / Description</label>
                  <textarea 
                    rows={4}
                    defaultValue="Service Above Self. We are a community of business and professional leaders providing humanitarian service."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rotary-blue/10 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
                Discard Changes
              </button>
              <button className="btn-primary flex items-center space-x-2 px-8 py-3 shadow-lg shadow-rotary-blue/20">
                <Save className="w-4 h-4" />
                <span>Save Configuration</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
