import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-rotary-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h1 className="text-xl font-display font-bold text-white leading-tight">
                ROTARY CLUB
              </h1>
            </Link>
            <p className="text-sm leading-relaxed">
              We are a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change.
            </p>
            <div className="flex space-x-4">
              {[Globe, Globe, Globe, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-colors hover:bg-rotary-blue hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-rotary-blue transition-colors">Our History</Link></li>
              <li><Link to="/events" className="hover:text-rotary-blue transition-colors">Upcoming Events</Link></li>
              <li><Link to="/donate" className="hover:text-rotary-blue transition-colors">Donation Campaigns</Link></li>
              <li><Link to="/volunteer" className="hover:text-rotary-blue transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/blog" className="hover:text-rotary-blue transition-colors">Latest Stories</Link></li>
            </ul>
          </div>

          {/* Causes */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Causes</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-rotary-blue transition-colors">Promoting Peace</a></li>
              <li><a href="#" className="hover:text-rotary-blue transition-colors">Fighting Disease</a></li>
              <li><a href="#" className="hover:text-rotary-blue transition-colors">Providing Clean Water</a></li>
              <li><a href="#" className="hover:text-rotary-blue transition-colors">Supporting Education</a></li>
              <li><a href="#" className="hover:text-rotary-blue transition-colors">Saving Mothers & Children</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rotary-blue shrink-0" />
                <span>123 Rotary Ave, NGO District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rotary-blue shrink-0" />
                <span>+1 (212) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rotary-blue shrink-0" />
                <span>contact@rotaryclub.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Rotary Club NGO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
