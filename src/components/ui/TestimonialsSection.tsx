import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// ─── Drop this component inside your Home.tsx ─────────────────────────────────
// Import: import TestimonialsSection from '../../components/ui/TestimonialsSection';
// Place <TestimonialsSection /> after your stats/impact section

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      quote: 'The Rotary Club of Pimpri-Chinchwad changed my life. When I lost my job during COVID, they helped train me as a tailor. Now I earn ₹18,000 a month and support my two daughters\'s education.',
      name: 'Sunita Bhosale',
      role: 'Beneficiary — Women Tailoring Centre, Ahmednagar',
      avatar: 'SB',
      color: 'from-pink-400 to-rose-600',
      rating: 5,
    },
    {
      quote: 'I\'ve been a Rotarian for 11 years. The discipline of service — showing up every week, rain or shine — has made me a better human being. The friendships I\'ve built here are for life.',
      name: 'Rtn. Madhav Kulkarni',
      role: 'Member since 2013, Club President 2022–23',
      avatar: 'MK',
      color: 'from-rotary-blue to-rotary-royal',
      rating: 5,
    },
    {
      quote: 'Our company partnered with Rotary for a CSR water project in three villages. The transparency, execution, and impact reporting were outstanding. We renewed the partnership for a second year.',
      name: 'Mr. Ravi Gokhale',
      role: 'CSR Head, Gokhale Technologies Pvt. Ltd.',
      avatar: 'RG',
      color: 'from-emerald-400 to-green-700',
      rating: 5,
    },
    {
      quote: 'My son was vaccinated through Rotary\'s Polio drive in 2022. I didn\'t know what polio was before — the volunteers educated us, were patient, and gave us hope. We are forever grateful.',
      name: 'Fatima Sheikh',
      role: 'Beneficiary — Polio Immunisation Drive, Palghar',
      avatar: 'FS',
      color: 'from-purple-400 to-violet-700',
      rating: 5,
    },
    {
      quote: 'Volunteering with Rotary as a college student gave me my first real experience of leadership and community. It shaped my career path entirely. I plan to become a member after graduating.',
      name: 'Aryan Deshpande',
      role: 'Interact Club Member, COEP Pune',
      avatar: 'AD',
      color: 'from-rotary-gold to-orange-500',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-12 left-12 w-48 h-48 text-white" />
        <Quote className="absolute bottom-12 right-12 w-48 h-48 text-white rotate-180" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Voices of Impact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
            What People Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-rotary-gold text-rotary-gold" />
                  ))}
                </div>

                <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium italic mb-10 max-w-3xl mx-auto">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-rotary-gold' : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
