import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Globe, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Our Projects', to: '/projects' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ];

  const getInvolved = [
    { label: 'Donate Now', to: '/donate' },
    { label: 'Volunteer With Us', to: '/volunteer' },
    { label: 'Become a Member', to: '/contact' },
    { label: 'Corporate CSR', to: '/contact' },
    { label: 'Admin Login', to: '/login' },
  ];

  const socialLinks = [
    { label: 'Facebook',  href: 'https://facebook.com',  bg: 'hover:bg-blue-600' },
    { label: 'Instagram', href: 'https://instagram.com', bg: 'hover:bg-pink-600' },
    { label: 'LinkedIn',  href: 'https://linkedin.com',  bg: 'hover:bg-[#0077B5]' },
    { label: 'Twitter',   href: 'https://twitter.com',   bg: 'hover:bg-slate-700' },
    { label: 'YouTube',   href: 'https://youtube.com',   bg: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-rotary-gold flex items-center justify-center font-bold text-white text-lg">R</div>
              <div>
                <div className="font-bold text-white leading-tight">Rotary Club</div>
                <div className="text-xs text-slate-400 leading-tight">District 3210 · Pimpri-Chinchwad</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Service Above Self. Making a lasting difference in the lives of communities across Maharashtra since 1985.
            </p>

            {/* Social links as text buttons */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs font-bold transition-all ${s.bg} flex items-center gap-1`}
                >
                  <Globe className="w-3 h-3" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-slate-400 hover:text-rotary-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-rotary-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {getInvolved.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-slate-400 hover:text-rotary-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-rotary-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rotary-gold mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Rotary Bhavan, MG Road,<br />Pimpri-Chinchwad,<br />Pune — 411018, Maharashtra
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rotary-gold shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white text-sm transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rotary-gold shrink-0" />
                <a href="mailto:info@rotaryclub.org" className="text-slate-400 hover:text-white text-sm transition-colors">info@rotaryclub.org</a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-rotary-gold shrink-0" />
                <a href="https://www.rotary.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">www.rotary.org</a>
              </div>
            </div>

            {/* 80G Badge */}
            <div className="mt-6 p-4 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-xs font-bold text-rotary-gold uppercase tracking-wider mb-1">80G Tax Exemption</div>
              <div className="text-xs text-slate-400">All donations eligible for tax deduction under Section 80G of the Income Tax Act, 1961.</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {currentYear} Rotary Club of Pimpri-Chinchwad, District 3210. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;