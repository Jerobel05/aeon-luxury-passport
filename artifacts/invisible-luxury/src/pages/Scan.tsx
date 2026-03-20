import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { AnimatedReveal } from '@/components/AnimatedReveal';

export default function Scan() {
  const [scanning, setScanning] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setScanning(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <AnimatePresence mode="wait">
          {scanning ? (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-white font-serif text-2xl mb-2">Analyse en cours</h2>
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-12">Restez immobile</p>
              
              {/* Scanner UI */}
              <div className="relative w-72 h-72 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm">
                {/* Simulated watch preview */}
                <motion.img 
                  src={`${import.meta.env.BASE_URL}images/watch-isolated.png`}
                  className="w-48 h-48 object-contain opacity-50 grayscale"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />

                {/* Pulsing ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-accent/40"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Scanning line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-accent shadow-[0_0_15px_rgba(200,160,100,0.8)]"
                  animate={{ y: [0, 288, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {/* Success glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Montre Identifiée</h3>
                <h2 className="text-white font-serif text-3xl mb-6">Patek Philippe</h2>
                
                <div className="w-full bg-black/40 rounded-lg p-4 mb-8 border border-white/5">
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Modèle</span>
                      <span className="text-sm text-white font-medium">Nautilus</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Référence</span>
                      <span className="text-sm text-white font-medium">5711/1A-010</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Année</span>
                      <span className="text-sm text-white font-medium">2019</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Matériau</span>
                      <span className="text-sm text-white font-medium">Acier</span>
                    </div>
                  </div>
                </div>

                <Link href="/passport" className="w-full block py-4 bg-accent text-accent-foreground font-medium text-xs tracking-[0.2em] uppercase text-center hover:bg-accent/90 transition-colors">
                  Voir le Passeport Numérique
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
