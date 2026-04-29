import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Smartphone } from 'lucide-react';

interface AppPreviewProps {
  onDownload: () => void;
}

export default function AppPreview({ onDownload }: AppPreviewProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-800 rounded-[48px] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/30 rounded-full blur-[120px]" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold mb-6 tracking-wide uppercase">
                <ShieldCheck size={14} />
                Medical Grade Security
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                An ecosystem designed <br />
                <span className="text-emerald-400">for your lifestyle</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 backdrop-blur-sm">
                    <Smartphone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Native Mobile Apps</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Available on iOS and Android with full HealthKit and Google Fit synchronization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 backdrop-blur-sm">
                    <Cpu size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Advanced AI Engine</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Our adapted Llama 3 health model adapts to your unique physiology over time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <img 
                  onClick={onDownload}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-10 hover:opacity-80 transition-opacity cursor-pointer" 
                />
                <img 
                  onClick={onDownload}
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Play Store" 
                  className="h-10 hover:opacity-80 transition-opacity cursor-pointer" 
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <motion.div 
                initial={{ rotate: 10, y: 50, opacity: 0 }}
                whileInView={{ rotate: 5, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Secondary Mockup (Health Score) */}
                <div className="absolute -left-32 top-20 w-[240px] h-[480px] bg-slate-800 rounded-[40px] border-[6px] border-slate-700 shadow-2xl hidden md:block overflow-hidden rotate-[-12deg]">
                   <div className="w-full h-full bg-white p-6 pt-10">
                      <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">WEEKLY TREND</div>
                      <div className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Activity Score</div>
                      <div className="flex items-end gap-2 h-32 mb-8">
                         {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                           <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-emerald-500 shadow-lg shadow-emerald-200' : 'bg-slate-100'}`} />
                         ))}
                      </div>
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 mb-4">
                         <div className="text-[10px] font-bold text-emerald-700 mb-1 uppercase tracking-widest">INSIGHT</div>
                         <p className="text-[11px] text-slate-600">Your energy peaks between 10am-12pm.</p>
                      </div>
                   </div>
                </div>

                {/* Main Mockup (AI Chat) */}
                <div className="relative w-[300px] h-[610px] bg-slate-800 rounded-[50px] border-[8px] border-slate-700 shadow-2xl overflow-hidden z-20">
                  <div className="w-full h-full bg-slate-50 flex flex-col pt-12">
                    <div className="px-6 pb-4 border-b border-slate-100 bg-white shadow-sm flex items-center gap-3">
                      <img src="/logo.svg" className="w-8 h-8 rounded-full object-cover" alt="AI Chatbot" />
                      <span className="font-bold text-slate-900 text-sm">Health AI</span>
                    </div>
                    
                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      <div className="p-3 bg-white rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-700 max-w-[85%]">
                        Hello! I see your heart rate variability was lower last night.
                      </div>
                      <div className="p-3 bg-emerald-600 rounded-2xl rounded-tr-none shadow-sm text-[11px] text-white max-w-[85%] ml-auto">
                        Yes, why was it lower?
                      </div>
                      <div className="p-3 bg-white rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-700 max-w-[85%]">
                        It likely correlates with the late meal you logged at 9:30 PM.
                      </div>
                    </div>
                    
                    <div className="p-4 mt-auto">
                      <div className="h-10 bg-white border border-slate-100 rounded-full flex items-center px-4 text-[10px] text-slate-400">
                        Type a message...
                      </div>
                    </div>
                  </div>
                  {/* Camera Cutout */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
