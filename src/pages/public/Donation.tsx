import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

const Donation: React.FC = () => {
  const [amount, setAmount] = useState('1000');

  const presets = ['500', '1000', '2500', '5000', '10000'];

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <span className="text-rotary-blue font-bold tracking-widest uppercase text-sm">Empower Communities</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6">
                  Your Contribution <br />
                  <span className="text-rotary-blue underline decoration-rotary-gold underline-offset-8">Changes Lives</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every donation to Rotary contributes to sustainable projects that improve health, support education, and alleviate poverty. Together, we can create lasting change.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Secure, encrypted transactions (Razorpay)',
                  '100% of proceeds go to the selected cause',
                  'Tax-deductible receipts (Section 80G) provided',
                  'Impact reports for every Indian district'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-rotary-blue/5 rounded-3xl border border-rotary-blue/10">
                <div className="flex items-center space-x-4 mb-4">
                  <ShieldCheck className="w-10 h-10 text-rotary-blue" />
                  <div>
                    <h3 className="font-bold text-slate-900">Charity Navigator</h3>
                    <p className="text-sm text-slate-500">4-Star Rating for 14 consecutive years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 sticky top-32"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                <span>Choose Donation Amount</span>
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {presets.map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      amount === val 
                        ? 'bg-rotary-blue text-white shadow-lg shadow-rotary-blue/20' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
                <div className="relative col-span-3 mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Custom Amount"
                    className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rotary-blue/20 font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Select Frequency</p>
                <div className="flex space-x-4 p-1 bg-slate-50 rounded-2xl">
                  <button className="flex-1 py-3 bg-white shadow-sm rounded-xl font-bold text-sm text-rotary-blue border border-slate-100">One-time</button>
                  <button className="flex-1 py-3 text-slate-500 rounded-xl font-bold text-sm hover:bg-white hover:text-rotary-blue transition-all">Monthly</button>
                </div>
              </div>

              <button className="w-full btn-secondary py-5 rounded-2xl text-lg flex items-center justify-center space-x-3 shadow-xl shadow-rotary-gold/20">
                <span>Donate Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-slate-400 text-xs mt-8 font-medium">
                Payments secured by Razorpay. By donating, you agree to our <a href="#" className="underline">Terms of Service</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
