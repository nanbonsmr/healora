import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      description: "Perfect for getting started with basic tracking.",
      features: [
        "Basic habit tracking",
        "Step & Sleep integration",
        "Weekly health overview",
        "Standard AI insights (Limited)",
        "Single device sync"
      ],
      buttonText: "Start for Free",
      popular: false
    },
    {
      name: "Pro Plan",
      price: "12",
      description: "Complete AI health guidance for super-users.",
      features: [
        "Unlimited habit & activity logs",
        "Advanced predictive analysis",
        "Daily personalized AI plans",
        "Priority health coach chat",
        "Multi-device synchronization",
        "Custom goals & reports"
      ],
      buttonText: "Get Pro Now",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Simple, <span className="text-emerald-600">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-slate-500">
            Invest in your future self. Start for free and upgrade when you're ready for more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-10 rounded-[48px] border-2 transition-all duration-300 ${
                plan.popular 
                ? 'bg-slate-800 border-emerald-600 shadow-2xl shadow-emerald-900/20' 
                : 'bg-white border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 emerald-gradient text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/40 flex items-center gap-1.5">
                  <Zap size={12} className="fill-current" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>${plan.price}</span>
                  <span className={`text-lg ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                </div>
                <p className={`${plan.popular ? 'text-slate-400' : 'text-slate-600'}`}>{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-emerald-600/20 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                      <Check size={14} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-[0.98] ${
                plan.popular 
                ? 'emerald-gradient text-white hover:opacity-90 hover:shadow-lg hover:shadow-emerald-600/30' 
                : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-sm text-gray-500">
          All plans include a 14-day money-back guarantee. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
