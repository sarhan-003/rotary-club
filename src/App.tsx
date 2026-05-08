import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
const Home = React.lazy(() => import('./pages/public/Home'));
const About = React.lazy(() => import('./pages/public/About'));
const Events = React.lazy(() => import('./pages/public/Events'));
const Donation = React.lazy(() => import('./pages/public/Donation'));
const Volunteer = React.lazy(() => import('./pages/public/Volunteer'));

// Auth Pages
const Login = React.lazy(() => import('./pages/auth/Login'));

// Admin Pages
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const Financials = React.lazy(() => import('./pages/admin/Financials'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <React.Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rotary-blue"></div>
            </div>
          }>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/volunteer" element={<Volunteer />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              
              {/* Admin Routes (Simplified for now, will add protection later) */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/financials" element={<Financials />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
