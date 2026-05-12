import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-rotary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-4">Contact Us</h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Have a question, want to partner with us, or just want to learn more? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Reach Out</h2>
                <p className="text-slate-500">We typically respond within 24 hours on working days.</p>
              </div>

              {[
                { icon: MapPin, label: 'Address', value: 'Rotary Club, District 3210\nPune, Maharashtra — 411001', color: 'bg-blue-50 text-rotary-blue' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210', color: 'bg-gold-50 text-rotary-gold' },
                { icon: Mail, label: 'Email', value: 'info@rotarydistrict3210.org', color: 'bg-green-50 text-green-600' },
                { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 10am – 6pm\nSat: 10am – 2pm', color: 'bg-purple-50 text-purple-600' },
                { icon: Globe, label: 'Website', value: 'www.rotarydistrict3210.org', color: 'bg-slate-100 text-slate-600' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-slate-700 font-semibold text-sm whitespace-pre-line">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-md">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                      className="mt-8 btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            placeholder="Rajesh Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all text-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="rajesh@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all text-slate-800"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all text-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                          <select
                            value={form.subject}
                            onChange={e => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all text-slate-800 bg-white"
                          >
                            <option value="">Select a topic</option>
                            <option>Membership Enquiry</option>
                            <option>Donation / CSR Partnership</option>
                            <option>Volunteer Opportunity</option>
                            <option>Project Collaboration</option>
                            <option>Media & Press</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                        <textarea
                          rows={6}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all text-slate-800 resize-none"
                        />
                      </div>

                      {/* Newsletter opt-in */}
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 accent-rotary-blue w-4 h-4" />
                        <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                          Subscribe to our newsletter for project updates, event invites, and impact stories.
                        </span>
                      </label>

                      <button
                        onClick={handleSubmit}
                        disabled={loading || !form.name || !form.email || !form.message}
                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-4"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-200 h-80 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <MapPin className="w-10 h-10 mx-auto mb-3 text-rotary-blue" />
          <p className="font-bold text-lg">Rotary Club — Pune, Maharashtra</p>
          <p className="text-sm mt-1">Embed Google Maps iframe here with your club's actual address</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
