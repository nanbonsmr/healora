import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Globe, Download, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [isComplete, setIsComplete] = useState(false);
  // Using docs.google.com variant which sometimes bypasses Drive preview UI better
  const downloadUrl = "https://docs.google.com/uc?export=download&id=1CnvTBEnpxR4gFYjGQJ9r6achdvs2T50p";

  // Reset completion state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsComplete(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isComplete) return;
    
    // Trigger download via hidden link without target="_blank" to avoid new tab flash
    // If it's a direct download, the browser will stay on this page.
    const link = document.createElement('a');
    link.href = downloadUrl;
    // We don't use target="_blank" to try and keep the experience in-page
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show visual feedback immediately
    setIsComplete(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Header Image/Pattern */}
              <div className="h-32 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-white blur-3xl opacity-30 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 pt-4 text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl border border-slate-50 flex items-center justify-center mx-auto -mt-10 relative z-10 mb-6">
                  <img src="/logo.svg" alt="Healora Logo" className="w-16 h-16 object-cover rounded-2xl" />
                </div>

                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Experience Healora</h2>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                  Join thousands of users improving their wellness daily with AI insights.
                </p>

                <div className="mb-8 min-h-[88px]">
                  {isComplete ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center"
                    >
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Download Started!</h3>
                      <p className="text-sm text-slate-600 leading-relaxed italic">"Check your browser's download queue."</p>
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 active:scale-95"
                      >
                        <Download size={20} />
                        Download Now
                      </button>
                      <button 
                        onClick={onClose}
                        className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition-all active:scale-95"
                      >
                        <Globe size={20} />
                        Open Web App
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4 text-left p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <ShieldCheck size={18} className="text-emerald-600" />
                    Verified & Secure Package
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    No account required to start
                  </div>
                </div>

                <p className="mt-8 text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Supported on iOS, Android & Web
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
