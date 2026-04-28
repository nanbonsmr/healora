import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Log habits",
      description: "Quickly log your daily activities, sleep, and nutrition with our intuitive interface.",
      icon: <ClipboardCheck size={32} />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "AI Analysis",
      description: "Our advanced neural network analyzes your biometrics to find hidden patterns.",
      icon: <Sparkles size={32} />,
      color: "from-emerald-500 to-primary-600"
    },
    {
      title: "Actionable Insights",
      description: "Receive personalized, science-backed plans to optimize your daily health.",
      icon: <TrendingUp size={32} />,
      color: "from-primary-600 to-primary-800"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            The Science of <span className="text-emerald-600">Simplicity</span>
          </h2>
          <p className="text-lg text-slate-500">
            Three simple steps to transform your relationship with your health.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-1 bg-slate-200 rounded-full" />
          
          <div className="grid lg:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className={`w-24 h-24 mx-auto rounded-[32px] bg-gradient-to-br ${step.color} shadow-lg shadow-emerald-200/50 flex items-center justify-center text-white mb-8`}>
                  {step.icon}
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                     {index + 1}
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                   <p className="text-slate-500 leading-relaxed max-w-xs mx-auto text-sm">
                     {step.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
