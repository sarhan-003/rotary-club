import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, TreePine, Droplets, GraduationCap, IndianRupee } from 'lucide-react';

// ─── Replace your existing static stats section in Home.tsx with this ─────────
// Import: import ImpactCounters from '../../components/ui/ImpactCounters';
// Place <ImpactCounters /> in your Home page JSX

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

interface StatProps {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
  bgColor: string;
  started: boolean;
}

const StatCard: React.FC<StatProps> = ({ icon: Icon, label, value, suffix, prefix = '', color, bgColor, started }) => {
  const count = useCountUp(value, 2200, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
    >
      <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <div className="text-4xl font-display font-bold text-slate-900 mb-1 tabular-nums">
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

const ImpactCounters: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Heart,         label: 'Lives Impacted',      value: 120000, suffix: '+',     prefix: '',  color: 'text-red-500',       bgColor: 'bg-red-50' },
    { icon: Users,         label: 'Active Volunteers',   value: 480,    suffix: '+',     prefix: '',  color: 'text-rotary-blue',   bgColor: 'bg-blue-50' },
    { icon: Droplets,      label: 'Clean Water Pts.',    value: 38,     suffix: '',      prefix: '',  color: 'text-cyan-500',      bgColor: 'bg-cyan-50' },
    { icon: GraduationCap, label: 'Students Supported',  value: 6800,   suffix: '+',     prefix: '',  color: 'text-purple-500',    bgColor: 'bg-purple-50' },
    { icon: TreePine,      label: 'Trees Planted',       value: 10000,  suffix: '+',     prefix: '',  color: 'text-green-600',     bgColor: 'bg-green-50' },
    { icon: IndianRupee,   label: 'Funds Mobilised',     value: 240,    suffix: ' Lakhs',prefix: '₹', color: 'text-rotary-gold',   bgColor: 'bg-yellow-50' },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Measurable Change</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every number here is a person, a family, a community transformed. These aren't just statistics — they're stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-rotary-blue rounded-3xl text-white text-center"
        >
          <p className="text-blue-100 text-lg mb-2">Rotary Club of Pimpri-Chinchwad — District 3210</p>
          <p className="text-2xl font-bold">
            Serving communities across Maharashtra since <span className="text-rotary-gold">1985</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCounters;
