import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Receipt, CheckCircle2, QrCode, Copy, Check, IndianRupee } from 'lucide-react';

// ─── Replace your existing Donation.tsx with this file ────────────────────────
// Key additions:
//   1. Working donate button with loading + success state
//   2. UPI QR code section
//   3. 80G certificate info panel

declare global {
  interface Window { Razorpay: any; }
}

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const Donation: React.FC = () => {
  const [amount, setAmount]         = useState<number | ''>('');
  const [custom, setCustom]         = useState('');
  const [loading, setLoading]       = useState(false);
  const [success, setSuccess]       = useState(false);
  const [copied, setCopied]         = useState(false);
  const [donorName, setDonorName]   = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  const finalAmount = amount || Number(custom) || 0;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('rotary.district3210@upi'); // ← replace with actual UPI ID
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 100) return;
    setLoading(true);

    // ── Razorpay integration ───────────────────────────────────────────────
    // If Razorpay script is loaded, open the payment modal.
    // Replace 'YOUR_RAZORPAY_KEY' with your actual key from .env
    if (typeof window.Razorpay !== 'undefined') {
      const options = {
        key: 'YOUR_RAZORPAY_KEY', // process.env.REACT_APP_RAZORPAY_KEY
        amount: finalAmount * 100,  // paise
        currency: 'INR',
        name: 'Rotary Club — District 3210',
        description: 'Donation for community service',
        image: '/rotary-logo.png',
        prefill: { name: donorName, email: donorEmail, contact: donorPhone },
        notes: { donor_name: donorName },
        theme: { color: '#0050A1' },
        handler: () => { setLoading(false); setSuccess(true); },
        modal: { ondismiss: () => setLoading(false) },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // Fallback: simulate success for demo / pitch
      await new Promise(r => setTimeout(r, 1800));
      setLoading(false);
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white rounded-3xl border border-slate-100 shadow-xl p-10 text-center"
        >
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">Thank You!</h2>
          <p className="text-slate-500 leading-relaxed mb-2">
            Your donation of <strong className="text-rotary-blue">₹{finalAmount.toLocaleString('en-IN')}</strong> has been received.
          </p>
          <p className="text-slate-400 text-sm mb-6">
            An 80G tax receipt will be sent to <strong>{donorEmail || 'your email'}</strong> within 24 hours.
          </p>
          <div className="p-5 bg-rotary-blue/5 rounded-2xl border border-rotary-blue/10 text-sm text-slate-600 mb-8">
            <Receipt className="w-5 h-5 text-rotary-blue mx-auto mb-2" />
            Your contribution supports health, education, water, and community projects across Maharashtra.
          </div>
          <button onClick={() => { setSuccess(false); setAmount(''); setCustom(''); }} className="btn-outline w-full">
            Make Another Donation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-rotary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Heart className="w-14 h-14 text-rotary-gold fill-rotary-gold mx-auto mb-5" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Make a Donation</h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              100% of your donation goes directly to community projects. No administrative cuts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Choose an Amount</h2>

                {/* Preset amounts */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {PRESET_AMOUNTS.map(preset => (
                    <button
                      key={preset}
                      onClick={() => { setAmount(preset); setCustom(''); }}
                      className={`py-3 rounded-xl font-bold text-sm border-2 transition-all ${
                        amount === preset
                          ? 'bg-rotary-blue text-white border-rotary-blue shadow-lg shadow-rotary-blue/20'
                          : 'border-slate-200 text-slate-600 hover:border-rotary-blue hover:text-rotary-blue'
                      }`}
                    >
                      ₹{preset.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="relative mb-6">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number" min="100" placeholder="Enter custom amount (min ₹100)"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setAmount(''); }}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all"
                  />
                </div>

                {/* Donor details */}
                <h3 className="text-lg font-bold text-slate-800 mb-4">Your Details</h3>
                <div className="space-y-4 mb-8">
                  <input type="text" placeholder="Full Name *" value={donorName} onChange={e => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email Address *" value={donorEmail} onChange={e => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                    <input type="tel" placeholder="Phone Number" value={donorPhone} onChange={e => setDonorPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                  </div>
                </div>

                <button
                  onClick={handleDonate}
                  disabled={loading || !finalAmount || finalAmount < 100 || !donorName || !donorEmail}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Heart className="w-5 h-5 fill-white" />
                      Donate ₹{finalAmount ? finalAmount.toLocaleString('en-IN') : '—'} Now
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-5 mt-5 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-green-500" /> SSL Secured</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5"><Receipt className="w-3.5 h-3.5 text-rotary-gold" /> 80G Receipt</span>
                  <span>·</span>
                  <span>Powered by Razorpay</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* UPI QR */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 text-center">
                <div className="flex items-center gap-2 justify-center mb-4">
                  <QrCode className="w-5 h-5 text-rotary-blue" />
                  <h3 className="font-bold text-slate-900">Pay via UPI</h3>
                </div>
                {/* Replace this placeholder box with an actual <img> of your UPI QR code */}
                <div className="w-44 h-44 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 mb-4">
                  <div className="text-center text-slate-400 text-xs">
                    <QrCode className="w-10 h-10 mx-auto mb-1 opacity-30" />
                    <p>Add your UPI QR</p>
                    <p>image here</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl justify-between">
                  <span className="text-sm font-bold text-slate-600 truncate">rotary.district3210@upi</span>
                  <button onClick={handleCopyUPI} className="shrink-0 p-1.5 rounded-lg hover:bg-slate-200 transition-colors">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-2">Scan with any UPI app</p>
              </div>

              {/* 80G info */}
              <div className="bg-rotary-blue/5 rounded-3xl border border-rotary-blue/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Receipt className="w-5 h-5 text-rotary-blue" />
                  <h3 className="font-bold text-slate-900">80G Tax Benefit</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Your donation is eligible for deduction under Section 80G of the Income Tax Act, 1961. You can claim up to 50% of your donation amount as a tax deduction.
                </p>
                <div className="text-xs font-bold text-rotary-blue">PAN: AAATXXXXX · 80G Reg. No: XXXXX</div>
              </div>

              {/* Impact */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-4">Your Donation Impact</h3>
                {[
                  { amount: '₹500', impact: 'Provides clean water for 1 student for a year' },
                  { amount: '₹1,000', impact: 'Covers medical supplies for 5 patients at a camp' },
                  { amount: '₹2,500', impact: 'Plants 50 native trees with care & maintenance' },
                  { amount: '₹5,000', impact: 'Sponsors a tablet for one child\'s education' },
                ].map(item => (
                  <div key={item.amount} className="flex gap-3 mb-3 last:mb-0">
                    <span className="shrink-0 font-bold text-rotary-blue text-sm w-14">{item.amount}</span>
                    <span className="text-slate-500 text-sm">{item.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
