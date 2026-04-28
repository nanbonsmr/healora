import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rivers",
      role: "Digital Nomad",
      content: "Healora changed how I view my productivity. The AI insights helped me realize that my late-night snacks were killing my morning focus.",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "The Health Score is so addictive! It's the first health app that actually makes me want to drink more water and sleep early.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Marcus Thorne",
      role: "Fitness Instructor",
      content: "I recommend Healora to all my clients. It tracks the subtle changes in recovery that most apps completely miss.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      content: "The AI chat feels like talking to a real nutritionist. It's fast, accurate, and incredibly personalized.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Loved by <span className="text-emerald-600">thousands</span> of <br />
              wellness seekers
            </h2>
            <p className="text-lg text-slate-500">
              Join a community of people who are taking control of their health through data and AI.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-emerald-50 px-6 py-4 rounded-3xl border border-emerald-100">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
             </div>
             <div>
                <div className="flex gap-0.5 text-orange-400">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">4.9/5 Average Rating</div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 bg-slate-50 rounded-[40px] relative transition-all hover:bg-emerald-50 group border border-transparent hover:border-emerald-100"
            >
              <Quote className="absolute top-8 right-8 text-emerald-200 group-hover:text-emerald-300 transition-colors" size={48} />
              <div className="flex items-center gap-4 mb-8">
                <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm font-medium text-emerald-600">{item.role}</p>
                </div>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed italic">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
