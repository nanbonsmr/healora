import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "AI Coach", href: "#" },
        { name: "App Download", href: "#" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Health Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" }
  ];

  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="/logo.svg" 
                alt="Healora Logo" 
                className="w-10 h-10 rounded-xl shadow-lg shadow-emerald-200/50 object-cover" 
              />
              <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                Healora
              </span>
            </div>
            <p className="text-lg text-slate-500 max-w-sm mb-10 leading-relaxed">
              Empowering humanity to lead healthier, longer lives through personalized AI guidance and beautiful design.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 font-medium tracking-tight">
            © {currentYear} Healora Inc. Built for a healthier future.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
             <span>Product</span>
             <span>Features</span>
             <span>Pricing</span>
             <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
