import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<null | typeof photos[0]>(null);

  const filters = ['All', 'Events', 'Projects', 'Medical Camps', 'Community'];

  const photos = [
    { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800', category: 'Events', caption: 'Annual District Conference 2025', tall: true },
    { src: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800', category: 'Projects', caption: 'Clean Water Installation — Nashik' },
    { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', category: 'Medical Camps', caption: 'Free Medical Camp — Palghar' },
    { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', category: 'Projects', caption: 'Polio Immunisation Drive 2025', tall: true },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', category: 'Projects', caption: 'Tablet Distribution — Literacy Mission' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', category: 'Community', caption: 'World Polio Day Walk 2025' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Events', caption: 'Annual Charity Gala 2025', tall: true },
    { src: 'https://images.unsplash.com/photo-1542601906897-f18f3e6e64bc?auto=format&fit=crop&q=80&w=800', category: 'Community', caption: 'Tree Plantation Drive — 10,000 Trees' },
    { src: 'https://images.unsplash.com/photo-1521791136364-798a7bc0d267?auto=format&fit=crop&q=80&w=800', category: 'Events', caption: 'New Member Induction Ceremony' },
    { src: 'https://images.unsplash.com/photo-1559027615-cd4428d6715f?auto=format&fit=crop&q=80&w=800', category: 'Community', caption: 'Volunteer Day — District 3210' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', category: 'Projects', caption: 'Women Tailoring Centre — Ahmednagar' },
    { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800', category: 'Medical Camps', caption: 'Health Awareness Campaign 2024' },
  ];

  const filtered = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Our Moments</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-4">Photo Gallery</h1>
            <p className="text-slate-400 text-xl max-w-2xl">
              A visual journey through our service, our community, and the impact we've created together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeFilter === f ? 'bg-rotary-blue text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(photo)}
                className="break-inside-avoid relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${photo.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">{photo.caption}</p>
                    <span className="text-white/70 text-xs font-semibold">{photo.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img src={selected.src} alt={selected.caption} className="w-full rounded-2xl object-contain max-h-[75vh]" />
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-lg">{selected.caption}</p>
                <span className="text-white/50 text-sm">{selected.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
