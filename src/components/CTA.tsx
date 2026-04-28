import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative emerald-gradient rounded-[64px] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-emerald-200"
        >
          {/* Animated Background Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[40%] h-[60%] bg-white/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-emerald-300/10 rounded-full blur-[100px]" 
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-8 tracking-widest uppercase">
              <Sparkles size={16} className="fill-current text-white" />
              Limited Beta Offer
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
              Start improving your <br /> health today
            </h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-xl mx-auto leading-relaxed">
              Join 50,000+ users who are already using Healora to monitor their habits and get personalized AI coaching.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-900 font-bold text-lg rounded-2xl hover:bg-emerald-50 transition-all hover:shadow-2xl active:scale-95">
                Join Healora Now
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-bold text-lg rounded-2xl border border-white/30 hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2">
                Download App <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
               <div>
                  <div className="text-3xl font-black mb-1">50k+</div>
                  <div className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">Active Users</div>
               </div>
               <div>
                  <div className="text-3xl font-black mb-1">4.9/5</div>
                  <div className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">App Rating</div>
               </div>
               <div>
                  <div className="text-3xl font-black mb-1">10M+</div>
                  <div className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">Habits Tracked</div>
               </div>
               <div>
                  <div className="text-3xl font-black mb-1">92%</div>
                  <div className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">Success Rate</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
