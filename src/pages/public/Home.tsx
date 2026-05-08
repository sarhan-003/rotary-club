import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { label: 'Members in India', value: '1.5L+', icon: Users, color: 'text-blue-600' },
    { label: 'Active Projects', value: '12K+', icon: Globe, color: 'text-green-600' },
    { label: 'Donations Raised', value: '₹500Cr+', icon: Heart, color: 'text-red-600' },
    { label: 'District Clubs', value: '3,500+', icon: Award, color: 'text-yellow-600' },
  ];

  const campaigns = [
    {
      title: 'End Polio Now',
      description: 'Our top priority is the eradication of polio worldwide. We are 99% of the way there.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      raised: 85,
      goal: '₹50 Lakhs',
    },
    {
      title: 'Clean Water for Rural Schools',
      description: 'Installing RO water systems in government schools across rural India.',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
      raised: 62,
      goal: '₹25 Lakhs',
    },
    {
      title: 'Literacy Mission 2026',
      description: 'Providing tablet-based learning kits to children in urban slums and remote villages.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      raised: 45,
      goal: '₹15 Lakhs',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-rotary-gold rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Rotary Club of India - District 3210
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Service Above <span className="text-rotary-gold">Self</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Join the largest network of volunteers in India dedicated to solving local and national challenges. From rural literacy to health missions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/donate" className="btn-secondary text-center text-lg px-8 py-4">
                Donate to a Cause
              </Link>
              <Link to="/volunteer" className="btn-outline border-white text-white hover:bg-white hover:text-rotary-blue text-center text-lg px-8 py-4">
                Join as Volunteer
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className={stat.color + " flex justify-center mb-4"}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
                Urgent Campaigns
              </h2>
              <p className="text-slate-600">
                These causes need your immediate attention. Your contribution can change a life today.
              </p>
            </div>
            <Link to="/donate" className="hidden md:flex items-center space-x-2 text-rotary-blue font-bold hover:underline">
              <span>View All Campaigns</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rotary-blue shadow-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-rotary-blue transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-rotary-blue">{campaign.raised}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${campaign.raised}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-rotary-blue rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Goal: <span className="font-bold text-slate-900">{campaign.goal}</span></span>
                      <span className="text-rotary-gold font-bold">Donate Now</span>
                    </div>
                  </div>

                  <Link
                    to={`/donate/${campaign.title.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full inline-block text-center py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-900 group-hover:bg-rotary-blue group-hover:text-white group-hover:border-rotary-blue transition-all"
                  >
                    Support Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200"
                  alt="Our Mission"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rotary-gold/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rotary-blue/20 rounded-full blur-3xl" />
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Our Seven Areas <br /> of <span className="text-rotary-blue">Focus</span>
              </h2>
              <p className="text-slate-600 mb-10 text-lg">
                Rotary is dedicated to causes that build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Promoting peace',
                  'Fighting disease',
                  'Providing clean water',
                  'Saving mothers & children',
                  'Supporting education',
                  'Growing local economies',
                  'Protecting the environment'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-rotary-gold shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
