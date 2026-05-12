import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Public Pages
const Home      = React.lazy(() => import('./pages/public/Home'));
const About     = React.lazy(() => import('./pages/public/About'));
const Events    = React.lazy(() => import('./pages/public/Events'));
const Donation  = React.lazy(() => import('./pages/public/Donation'));
const Volunteer = React.lazy(() => import('./pages/public/Volunteer'));

// ─── NEW pages added ───────────────────────────────────────────────────────────
const Projects  = React.lazy(() => import('./pages/public/Projects'));
const Blog      = React.lazy(() => import('./pages/public/Blog'));
const Gallery   = React.lazy(() => import('./pages/public/Gallery'));
const Contact   = React.lazy(() => import('./pages/public/Contact'));
// ──────────────────────────────────────────────────────────────────────────────

// Auth Pages
const Login = React.lazy(() => import('./pages/auth/Login'));

// Admin Pages
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const Financials     = React.lazy(() => import('./pages/admin/Financials'));
const AdminEvents    = React.lazy(() => import('./pages/admin/Events'));
const Donations      = React.lazy(() => import('./pages/admin/Donations'));
const Volunteers     = React.lazy(() => import('./pages/admin/Volunteers'));
const Settings       = React.lazy(() => import('./pages/admin/Settings'));
const Reports        = React.lazy(() => import('./pages/admin/Reports'));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <React.Suspense fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rotary-blue" />
              </div>
            }>
              <Routes>
                {/* ── Public Routes ─────────────────────────────────── */}
                <Route path="/"          element={<Home />} />
                <Route path="/about"     element={<About />} />
                <Route path="/events"    element={<Events />} />
                <Route path="/donate"    element={<Donation />} />
                <Route path="/volunteer" element={<Volunteer />} />

                {/* ── NEW Public Routes ─────────────────────────────── */}
                <Route path="/projects"  element={<Projects />} />
                <Route path="/blog"      element={<Blog />} />
                <Route path="/gallery"   element={<Gallery />} />
                <Route path="/contact"   element={<Contact />} />

                {/* ── Auth Routes ───────────────────────────────────── */}
                <Route path="/login" element={<Login />} />

                {/* ── Admin Routes (Protected) ──────────────────────── */}
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/admin/financials" element={<ProtectedRoute><Financials /></ProtectedRoute>} />
                <Route path="/admin/events"     element={<ProtectedRoute><AdminEvents /></ProtectedRoute>} />
                <Route path="/admin/donations"  element={<ProtectedRoute><Donations /></ProtectedRoute>} />
                <Route path="/admin/volunteers" element={<ProtectedRoute><Volunteers /></ProtectedRoute>} />
                <Route path="/admin/reports"    element={<ProtectedRoute><Reports /></ProtectedRoute>} />
                <Route path="/admin/settings"   element={<ProtectedRoute><Settings /></ProtectedRoute>} />

                {/* ── Fallback ──────────────────────────────────────── */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </React.Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
