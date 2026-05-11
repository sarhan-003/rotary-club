import React, { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        {/* Left Side - Visual */}
        <div className="hidden md:block relative bg-rotary-blue p-12 overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-rotary-blue font-bold text-xl">R</span>
              </div>
              <h1 className="text-xl font-display font-bold text-white leading-tight uppercase tracking-tighter">
                ROTARY CLUB
              </h1>
            </Link>

            <div>
              <h2 className="text-4xl font-display font-bold leading-tight mb-6">
                Management <br /> Platform
              </h2>
              <p className="text-blue-100 text-lg">
                Access your dashboard to manage events, financials, and volunteers efficiently.
              </p>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <Shield className="w-10 h-10 text-rotary-gold" />
              <div>
                <p className="text-sm font-bold">Secure Access</p>
                <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Enterprise Grade Protection</p>
              </div>
            </div>
          </div>

          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500">Sign in to your administrative account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-2xl animate-shake">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-rotary-blue/10 font-medium transition-all" 
                  placeholder="admin@rotary.org"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-rotary-blue hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-rotary-blue/10 font-medium transition-all" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-rotary-blue focus:ring-rotary-blue" id="remember" />
              <label htmlFor="remember" className="text-sm font-semibold text-slate-600 cursor-pointer">Keep me signed in for 30 days</label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-5 rounded-2xl text-lg flex items-center justify-center space-x-3 shadow-xl shadow-rotary-blue/20 disabled:opacity-70"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-12 text-center text-slate-400 text-sm">
            Not an admin? <Link to="/" className="text-rotary-blue font-bold hover:underline">Go back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

