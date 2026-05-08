import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe, Heart, ArrowRight } from 'lucide-react';

const Volunteer: React.FC = () => {
  const benefits = [
    { title: 'Personal Growth', desc: 'Develop leadership skills and gain professional experience.', icon: BookOpen },
    { title: 'Global Network', desc: 'Connect with people from all over the world.', icon: Globe },
    { title: 'Make an Impact', desc: 'Create lasting change in your local community.', icon: Heart },
    { title: 'Recognition', desc: 'Earn certificates and badges for your contributions.', icon: Users },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Become a <br /><span className="text-rotary-gold">Person of Action</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                Join our volunteer network and help us solve the world's most pressing challenges. No matter your skills, there's a place for you in Rotary.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <h3 className="text-3xl font-bold text-white">1.4M</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Volunteers</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-800"></div>
                <div>
                  <h3 className="text-3xl font-bold text-white">200+</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Countries</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4428d6715f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Volunteers at work"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-rotary-blue/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rotary-blue shadow-sm mb-6">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Volunteer Application</h2>
              <p className="text-slate-500">Tell us about yourself and how you want to contribute.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-rotary-blue/10 font-medium" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-rotary-blue/10 font-medium" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Areas of Interest</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Community Service', 'Health & Medicine', 'Youth Mentorship', 'Environment'].map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-rotary-blue focus:ring-rotary-blue" />
                      <span className="text-sm font-semibold text-slate-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Why do you want to join?</label>
                <textarea className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-rotary-blue/10 font-medium h-32 resize-none" placeholder="Share your motivation..."></textarea>
              </div>

              <button className="w-full btn-primary py-5 rounded-2xl text-lg flex items-center justify-center space-x-3 shadow-xl shadow-rotary-blue/20">
                <span>Submit Application</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
