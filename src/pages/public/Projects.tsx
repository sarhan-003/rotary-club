import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, MapPin, ArrowRight, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Health', 'Education', 'Water', 'Environment', 'Community'];

  const projects = [
    {
      title: 'Clean Water for 12 Rural Schools',
      category: 'Water',
      status: 'Completed',
      location: 'Nashik, Maharashtra',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
      description: 'Installed RO water purification systems in 12 government schools, benefiting over 4,800 students with access to clean drinking water daily.',
      impact: '4,800 students',
      budget: '₹18.6 Lakhs',
      volunteers: 34,
    },
    {
      title: 'Mobile Medical Camp — Tribal Villages',
      category: 'Health',
      status: 'Completed',
      location: 'Palghar District, Maharashtra',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Organized 8 free medical camps across tribal villages. Free checkups, medicines, and referrals for 2,200+ patients including maternal health services.',
      impact: '2,200+ patients',
      budget: '₹9.4 Lakhs',
      volunteers: 52,
    },
    {
      title: 'Literacy Mission — Tablet Learning Kits',
      category: 'Education',
      status: 'Ongoing',
      location: 'Pune Urban Slums',
      year: '2025–26',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      description: 'Distributing solar-charged tablets preloaded with NCERT curriculum to children in urban slums. Currently in Phase 2 covering 3 more wards.',
      impact: '1,100 children',
      budget: '₹15 Lakhs',
      volunteers: 28,
    },
    {
      title: 'Tree Plantation Drive — 10,000 Trees',
      category: 'Environment',
      status: 'Completed',
      location: 'Pune–Nashik Highway, MH',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1542601906897-f18f3e6e64bc?auto=format&fit=crop&q=80&w=800',
      description: 'Planted 10,000 native species trees along a 40km highway corridor in partnership with the Maharashtra Forest Department and local village panchayats.',
      impact: '10,000 trees',
      budget: '₹4.2 Lakhs',
      volunteers: 180,
    },
    {
      title: 'End Polio Now — Immunisation Drive',
      category: 'Health',
      status: 'Ongoing',
      location: 'District 3210, India',
      year: '2024–26',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      description: 'Our flagship campaign in partnership with WHO and GOI. Administering oral polio vaccines in under-served communities. 99% eradication milestone achieved globally.',
      impact: '50,000+ children',
      budget: '₹50 Lakhs',
      volunteers: 210,
    },
    {
      title: 'Skill India — Women Tailoring Centre',
      category: 'Community',
      status: 'Completed',
      location: 'Ahmednagar, Maharashtra',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      description: 'Established a vocational training centre for women, offering 6-month tailoring and embroidery courses. 140 women trained, 90% placed with income.',
      impact: '140 women',
      budget: '₹6.8 Lakhs',
      volunteers: 15,
    },
  ];

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-rotary-blue overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-rotary-gold rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Every project starts with a problem and ends with lasting change. Here's the work we're most proud of.
            </p>
            <div className="flex justify-center gap-12 mt-12">
              {[
                { label: 'Projects Completed', value: '48+' },
                { label: 'Lives Impacted', value: '1.2L+' },
                { label: 'Funds Deployed', value: '₹2.4Cr+' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-rotary-gold">{s.value}</div>
                  <div className="text-sm text-blue-200 font-semibold mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? 'bg-rotary-blue text-white shadow-lg shadow-rotary-blue/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-rotary-blue">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      project.status === 'Completed'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-rotary-gold/90 text-white'
                    }`}>
                      {project.status === 'Completed'
                        ? <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Done</span>
                        : <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Ongoing</span>
                      }
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-bold opacity-80">{project.year}</div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rotary-blue transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl mb-5">
                    <div className="text-center">
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Impact</div>
                      <div className="text-sm font-bold text-rotary-blue">{project.impact}</div>
                    </div>
                    <div className="text-center border-x border-slate-200">
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Budget</div>
                      <div className="text-sm font-bold text-slate-800">{project.budget}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Volunteers</div>
                      <div className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                        <Users className="w-3 h-3" />{project.volunteers}
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 group-hover:bg-rotary-blue group-hover:text-white group-hover:border-rotary-blue transition-all">
                    View Full Report <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
