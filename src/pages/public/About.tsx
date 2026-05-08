import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Integrity', description: 'We maintain the highest ethical standards in everything we do.', icon: Shield },
    { title: 'Diversity', description: 'Rotary connects people of all backgrounds and perspectives.', icon: Users },
    { title: 'Service', description: 'We believe our service changes lives, including our own.', icon: Target },
    { title: 'Leadership', description: 'We are leaders who use our skills to solve problems.', icon: Award },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-20 bg-rotary-blue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Legacy of Service</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For over 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Rotary is a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-3xl font-bold text-rotary-blue mb-1">1.4M+</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase">Global Members</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-3xl font-bold text-rotary-gold mb-1">46K+</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase">Clubs Worldwide</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136364-798a7bc0d267?auto=format&fit=crop&q=80&w=1200" 
                alt="Rotary Team"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-600 font-medium">The principles that guide our service and professional life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-50 text-rotary-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
