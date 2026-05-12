import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'Health', 'Education', 'Community', 'Environment', 'Announcements'];

  const posts = [
    {
      title: 'How 12 Schools in Nashik Got Clean Water in 60 Days',
      excerpt: 'When our team visited Zilla Parishad School No. 4 in Nashik, the students were drinking from a rusted overhead tank. Eight weeks later, 12 schools have RO systems — and a story worth telling.',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
      tag: 'Community',
      date: 'May 5, 2026',
      readTime: '5 min read',
      author: 'Priya Deshmukh',
      authorRole: 'Project Coordinator',
      featured: true,
    },
    {
      title: 'What a Polio-Free India Would Mean for the World',
      excerpt: 'India was declared polio-free in 2014. But the battle isn\'t over. Our district\'s role in the global End Polio Now campaign has been one of our proudest chapters.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      tag: 'Health',
      date: 'April 28, 2026',
      readTime: '7 min read',
      author: 'Dr. Rajesh Kulkarni',
      authorRole: 'Health Committee Chair',
      featured: false,
    },
    {
      title: '140 Women, One Sewing Machine, and a New Beginning',
      excerpt: 'The Ahmednagar Tailoring Centre began with a single donated industrial sewing machine. Today, 140 graduates are earning a sustainable livelihood. Here\'s their journey.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      tag: 'Community',
      date: 'April 15, 2026',
      readTime: '6 min read',
      author: 'Sangeeta Joshi',
      authorRole: 'Women\'s Empowerment Lead',
      featured: false,
    },
    {
      title: 'Planting 10,000 Trees Was Harder Than We Thought',
      excerpt: 'The math seemed simple: 180 volunteers, one day, 10,000 saplings. Reality was messier, hotter, and ultimately more rewarding. A candid account from our environment team.',
      image: 'https://images.unsplash.com/photo-1542601906897-f18f3e6e64bc?auto=format&fit=crop&q=80&w=800',
      tag: 'Environment',
      date: 'March 22, 2026',
      readTime: '4 min read',
      author: 'Arjun Pawar',
      authorRole: 'Environment Committee',
      featured: false,
    },
    {
      title: 'Annual District Conference 2026 — Key Highlights',
      excerpt: 'The District 3210 Annual Conference brought together 600 Rotarians from across Maharashtra. New initiatives were announced, awards were given, and a new district governor was installed.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      tag: 'Announcements',
      date: 'March 10, 2026',
      readTime: '3 min read',
      author: 'Rotary District 3210',
      authorRole: 'Secretariat',
      featured: false,
    },
    {
      title: 'Tablets, Solar Panels, and 1,100 Children Who Now Read',
      excerpt: 'Phase 2 of our Literacy Mission is complete. We break down what worked, what didn\'t, and why solar-charged tablets were the real game-changer for Pune\'s slum schools.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      tag: 'Education',
      date: 'February 28, 2026',
      readTime: '8 min read',
      author: 'Meera Bhat',
      authorRole: 'Education Committee',
      featured: false,
    },
  ];

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag);
  const featured = posts.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rotary-gold font-bold uppercase tracking-widest text-sm">Stories & Updates</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-4">From the Field</h1>
            <p className="text-slate-400 text-xl max-w-2xl">
              Real stories from the communities we serve, the volunteers who show up, and the change we're creating together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeTag === 'All' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-rotary-gold text-white text-xs font-bold rounded-full">
                  Featured Story
                </div>
              </div>
              <div className="space-y-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rotary-blue uppercase tracking-wider">
                  <Tag className="w-3 h-3" /> {featured.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 group-hover:text-rotary-blue transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue font-bold text-lg">
                    {featured.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{featured.author}</div>
                    <div className="text-xs text-slate-400">{featured.authorRole}</div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 btn-primary">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap mb-10">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTag === t ? 'bg-rotary-blue text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-rotary-blue'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-rotary-blue">
                    {post.tag}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-rotary-blue transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue font-bold text-xs">
                        {post.author[0]}
                      </div>
                      <div className="text-xs font-bold text-slate-600">{post.author}</div>
                    </div>
                    <span className="text-rotary-blue font-bold text-xs flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
