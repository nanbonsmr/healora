import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  BrainCircuit, 
  BarChart3, 
  LineChart, 
  BellRing, 
  MessageCircle 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Smart Health Tracking",
      description: "Automatically track sleep, water, steps, and daily habits with minimal effort.",
      icon: <Activity className="text-primary-600" size={28} />,
      color: "bg-primary-50"
    },
    {
      title: "AI-Powered Insights",
      description: "Go beyond numbers. Get deep behavioral insights and personalized recommendations.",
      icon: <BrainCircuit className="text-purple-600" size={28} />,
      color: "bg-purple-50"
    },
    {
      title: "Daily Health Score",
      description: "A single, intuitive score that summarizes your overall physical and mental wellness.",
      icon: <BarChart3 className="text-orange-600" size={28} />,
      color: "bg-orange-50"
    },
    {
      title: "Predictive Analysis",
      description: "Our AI detects patterns in your data to suggest proactive lifestyle improvements.",
      icon: <LineChart className="text-blue-600" size={28} />,
      color: "bg-blue-50"
    },
    {
      title: "Smart Reminders",
      description: "Context-aware notifications for hydration, posture, sleep, and critical habits.",
      icon: <BellRing className="text-rose-600" size={28} />,
      color: "bg-rose-50"
    },
    {
      title: "AI Health Chat",
      description: "Ask anything, from workout tips to nutrition and get instant, science-backed advice.",
      icon: <MessageCircle className="text-indigo-600" size={28} />,
      color: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Powerful Tools for a <br />
              <span className="text-primary-600">Healthier You</span>
            </h2>
            <p className="text-lg text-gray-600">
              Healora combines advanced biometric tracking with cutting-edge AI to give you a complete picture of your health.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-white rounded-[32px] border border-slate-100 shadow-soft hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
