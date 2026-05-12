// ─── PATCH for your existing Volunteer.tsx ────────────────────────────────────
//
// The key fix: the submit button now shows a loading spinner and success screen.
// Replace your existing handleSubmit and the bottom of the JSX with this pattern.
//
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Clock, Users, Award } from 'lucide-react';

const Volunteer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    occupation: '', skills: '', availability: '', motivation: '', experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: Replace with your actual API call, e.g. fetch('/api/volunteer', { method: 'POST', body: JSON.stringify(form) })
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = form.firstName && form.lastName && form.email && form.phone && form.motivation;

  if (submitted) {
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
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">
            Application Received!
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            Thank you, <strong>{form.firstName}</strong>! Your volunteer application has been submitted successfully.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Our team will review your application and reach out to you at <strong>{form.email}</strong> within 3–5 working days.
          </p>
          <div className="grid grid-cols-3 gap-4 p-5 bg-slate-50 rounded-2xl mb-8">
            <div className="text-center">
              <Clock className="w-6 h-6 text-rotary-blue mx-auto mb-1" />
              <div className="text-xs font-bold text-slate-600">Review Time</div>
              <div className="text-xs text-slate-400">3–5 Days</div>
            </div>
            <div className="text-center border-x border-slate-200">
              <Users className="w-6 h-6 text-rotary-gold mx-auto mb-1" />
              <div className="text-xs font-bold text-slate-600">Team Size</div>
              <div className="text-xs text-slate-400">480+ Members</div>
            </div>
            <div className="text-center">
              <Award className="w-6 h-6 text-green-500 mx-auto mb-1" />
              <div className="text-xs font-bold text-slate-600">Certificate</div>
              <div className="text-xs text-slate-400">Provided</div>
            </div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', occupation: '', skills: '', availability: '', motivation: '', experience: '' }); }}
            className="btn-outline w-full"
          >
            Submit Another Application
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
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-bold mb-6">
              <Heart className="w-4 h-4 text-rotary-gold fill-rotary-gold" />
              Service Above Self
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Volunteer With Us</h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              Join 480+ volunteers making a real difference across Maharashtra. Your time and skills can change lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Volunteer Application Form</h2>
            <div className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: 'First Name', name: 'firstName', placeholder: 'Rajesh', required: true },
                  { label: 'Last Name',  name: 'lastName',  placeholder: 'Sharma',  required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{f.label} {f.required && '*'}</label>
                    <input
                      type="text" name={f.name} value={(form as any)[f.name]}
                      onChange={handleChange} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="rajesh@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Occupation / Profession</label>
                  <input type="text" name="occupation" value={form.occupation} onChange={handleChange} placeholder="e.g. Doctor, Engineer, Teacher"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Availability</label>
                  <select name="availability" value={form.availability} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all bg-white">
                    <option value="">Select availability</option>
                    <option>Weekdays only</option>
                    <option>Weekends only</option>
                    <option>Both weekdays & weekends</option>
                    <option>Flexible / Project-based</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Skills & Expertise</label>
                <input type="text" name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. Medical, Teaching, Project Management, Photography..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Why do you want to volunteer with us? *</label>
                <textarea rows={4} name="motivation" value={form.motivation} onChange={handleChange}
                  placeholder="Tell us about your motivation to serve the community..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all resize-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Previous Volunteering Experience (if any)</label>
                <textarea rows={3} name="experience" value={form.experience} onChange={handleChange}
                  placeholder="Share any past volunteer, NGO, or community work..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rotary-blue focus:ring-2 focus:ring-rotary-blue/10 outline-none transition-all resize-none" />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !isValid}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-white" /> Submit Application
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting, you agree to be contacted by our volunteer coordinator. Your information is kept private and never shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
