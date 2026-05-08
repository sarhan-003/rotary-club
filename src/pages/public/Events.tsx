import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Share2, Users } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Annual Charity Gala 2026',
      date: 'May 15, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Hyatt Regency, New York',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
      category: 'Fundraiser',
      price: '$150',
    },
    {
      title: 'World Polio Day Awareness Walk',
      date: 'May 22, 2026',
      time: '08:00 AM - 12:00 PM',
      location: 'Central Park South, NY',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
      category: 'Community Service',
      price: 'Free',
    },
    {
      title: 'Medical Mission to South Asia',
      date: 'June 05, 2026',
      time: 'Full Day Event',
      location: 'Mumbai Medical Center, India',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
      category: 'Health',
      price: 'Volunteer Basis',
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Upcoming Events</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join us in our missions. Every event is an opportunity to make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-rotary-blue">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-rotary-gold font-bold text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-rotary-blue transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 text-slate-500 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-500 text-sm">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>Admission: <span className="font-bold text-slate-900">{event.price}</span></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <button className="btn-primary px-6 py-2.5 text-sm">
                      Register Now
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-rotary-blue hover:bg-slate-50 rounded-xl transition-all">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
