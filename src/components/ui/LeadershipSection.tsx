import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Award } from 'lucide-react';

// ─── Drop this component inside your existing About.tsx ───────────────────────
// Import it at the top: import LeadershipSection from '../../components/ui/LeadershipSection';
// Then place <LeadershipSection /> anywhere inside your About page JSX

const LeadershipSection: React.FC = () => {
  const board = [
    {
      name: 'Rtn. Suresh Mehta',
      role: 'President 2025–26',
      profession: 'Managing Director, Mehta Industries',
      avatar: 'SM',
      color: 'from-rotary-blue to-rotary-royal',
      badge: 'President',
      email: 'president@rotaryclub.org',
    },
    {
      name: 'Rtn. Anita Kapoor',
      role: 'Secretary',
      profession: 'CEO, AK Legal Associates',
      avatar: 'AK',
      color: 'from-rotary-azure to-rotary-blue',
      badge: 'Secretary',
      email: 'secretary@rotaryclub.org',
    },
    {
      name: 'Rtn. Vikram Joshi',
      role: 'Treasurer',
      profession: 'CA, Joshi & Partners',
      avatar: 'VJ',
      color: 'from-rotary-gold to-orange-500',
      badge: 'Treasurer',
      email: 'treasurer@rotaryclub.org',
    },
    {
      name: 'Rtn. Dr. Priya Naik',
      role: 'Service Projects Chair',
      profession: 'Director, City General Hospital',
      avatar: 'PN',
      color: 'from-green-500 to-emerald-700',
      badge: 'Projects',
      email: 'projects@rotaryclub.org',
    },
    {
      name: 'Rtn. Arun Desai',
      role: 'Community Service Chair',
      profession: 'Founder, Desai NGO Network',
      avatar: 'AD',
      color: 'from-purple-500 to-purple-800',
      badge: 'Community',
      email: 'community@rotaryclub.org',
    },
    {
      name: 'Rtn. Sunita Rao',
      role: 'Membership Chair',
      profession: 'HR Director, TechPark Solutions',
      avatar: 'SR',
      color: 'from-pink-500 to-rose-700',
      badge: 'Membership',
      email: 'membership@rotaryclub.org',
    },
  ];

  const pastPresidents = [
    { name: 'Rtn. Manoj Patil', year: '2024–25' },
    { name: 'Rtn. Deepa Kulkarni', year: '2023–24' },
    { name: 'Rtn. Ramesh Gupta', year: '2022–23' },
    { name: 'Rtn. Sheetal Bane', year: '2021–22' },
    { name: 'Rtn. Harish Tiwari', year: '2020–21' },
    { name: 'Rtn. Neha Sancheti', year: '2019–20' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 mb-4">Board of Directors</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our club is guided by a committed board of experienced professionals who volunteer their time, skills, and passion for service.
          </p>
        </motion.div>

        {/* Board Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {board.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Top color band with avatar */}
              <div className={`h-28 bg-gradient-to-br ${member.color} relative`}>
                <div className="absolute -bottom-8 left-7">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white`}>
                    {member.avatar}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {member.badge}
                  </span>
                </div>
              </div>

              <div className="pt-12 px-7 pb-7">
                <h3 className="text-lg font-bold text-slate-900 mb-0.5 group-hover:text-rotary-blue transition-colors">
                  {member.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-rotary-gold" />
                  <span className="text-sm font-bold text-rotary-blue">{member.role}</span>
                </div>
                <p className="text-slate-400 text-sm mt-1 mb-5">{member.profession}</p>

                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rotary-blue transition-colors px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0077B5] transition-colors px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50">
                    <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Presidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-rotary-gold/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-rotary-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Past Presidents</h3>
              <p className="text-slate-400 text-sm">The leaders who shaped our club's legacy</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {pastPresidents.map((pp) => (
              <div key={pp.name} className="text-center p-4 rounded-2xl bg-slate-50 hover:bg-rotary-blue/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue font-bold text-sm mx-auto mb-3">
                  {pp.name.split(' ').slice(-1)[0][0]}{pp.name.split(' ').slice(-2)[0][0]}
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug mb-1">{pp.name.replace('Rtn. ', '')}</div>
                <div className="text-xs text-rotary-gold font-bold">{pp.year}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
