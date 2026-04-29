import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, CheckCircle2, Droplets, Moon, Zap, HeartPulse } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-40 lg:pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            ✨ AI-Powered Wellness
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Your AI-Powered <br />
            <span className="text-emerald-600">Daily Health Coach</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
            Track habits, get smart insights, and improve your health with personalized AI guidance designed just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 emerald-gradient text-white font-bold rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
            >
              Get Started Free <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all hover:bg-slate-50 active:scale-95 flex items-center justify-center gap-2">
              See How It Works
            </button>
          </div>
          
          <div className="pt-12 grid grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-3">💧</div>
              <div className="font-bold text-sm mb-1">Smart Tracking</div>
              <p className="text-[11px] text-slate-400 leading-tight">Sleep, water, habits, and more in one place.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center mb-3">🧠</div>
              <div className="font-bold text-sm mb-1">AI Insights</div>
              <p className="text-[11px] text-slate-400 leading-tight">Data-driven personalized recommendations.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-3">⚡</div>
              <div className="font-bold text-sm mb-1">Health Score</div>
              <p className="text-[11px] text-slate-400 leading-tight">A single metric to track your total wellness.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Phone Mockup Frame */}
          <div className="relative w-[280px] h-[560px] bg-slate-800 rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
            {/* Screen Content */}
            <div className="w-full h-full bg-white flex flex-col p-6 pt-12">
              <div className="flex justify-between items-center mb-6">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Good morning, Alex!</div>
                <img src="/logo.svg" className="w-8 h-8 rounded-full shadow-sm" alt="Healora Icon" />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center mb-6">
                <div className="text-4xl font-black text-emerald-600">92</div>
                <div className="text-[10px] uppercase font-bold text-emerald-800 tracking-tighter">Your Health Score</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[11px] font-bold">
                  <span>Daily Goals</span>
                  <span className="text-emerald-500">80%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full">
                  <div className="w-[80%] h-full bg-emerald-500 rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-lg font-bold">7.5h</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Sleep</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-lg font-bold">2.4L</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Water</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">AI Assistant Insight</span>
                </div>
                <p className="text-[11px] text-slate-500 italic leading-relaxed">
                  "Based on your activity, try sleeping 30 mins earlier tonight for recovery."
                </p>
              </div>
            </div>
            
            {/* Camera Cutout */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-12 glass p-4 rounded-2xl shadow-xl w-48"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/100?u=sarah" alt="User" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Sarah Jenkins</div>
                <div className="text-[10px] text-emerald-600 font-bold">Pro User</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 italic leading-snug">
              "Healora completely changed how I look at my habits!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
