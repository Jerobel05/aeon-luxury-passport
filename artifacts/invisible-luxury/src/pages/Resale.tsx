import { useState } from 'react';
import { AnimatedReveal } from '@/components/AnimatedReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Info, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

export default function Resale() {
  const [price, setPrice] = useState('45.5');
  const [note, setNote] = useState('');
  const [isListed, setIsListed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleList = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsListed(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-12 selection:bg-accent/30 flex items-center justify-center">
      <div className="max-w-xl w-full">
        
        <AnimatedReveal>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl text-white mb-4">Marché Secondaire</h1>
            <p className="text-muted-foreground font-light text-sm tracking-widest uppercase">Mettre en vente votre Nautilus 5711/1A-010</p>
          </div>
        </AnimatedReveal>

        <AnimatePresence mode="wait">
          {!isListed ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <form onSubmit={handleList} className="space-y-8">
                
                <div>
                  <label className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                    Prix de vente (ETH)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Tag className="h-5 w-5 text-accent" />
                    </div>
                    <input 
                      type="number" 
                      step="0.1"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="block w-full bg-black border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white text-xl font-serif focus:outline-none focus:border-accent/50 transition-colors"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-muted-foreground text-sm">~ $125,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                    Note sur l'état (Optionnel)
                  </label>
                  <textarea 
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Décrivez l'état de la montre, révisions récentes..."
                    className="block w-full bg-black border border-white/10 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none placeholder:text-white/20"
                  />
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 flex gap-3">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-accent/80 leading-relaxed">
                    Propulsé par Account Abstraction (ERC-4337). Les frais de transaction sont pris en charge. Aucun ETH requis dans votre portefeuille.
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-accent-foreground font-medium text-xs tracking-[0.2em] uppercase text-center hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Signature...
                    </>
                  ) : (
                    "Mettre en vente"
                  )}
                </button>

              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h2 className="font-serif text-3xl text-white mb-4">Mise en vente réussie</h2>
              
              <p className="text-muted-foreground mb-8 font-light text-balance leading-relaxed">
                Votre montre est maintenant en vente pour <span className="text-white font-medium">{price} ETH</span>. 
                Lors de l'achat, l'acheteur recevra automatiquement le passeport NFT et l'historique complet de provenance.
              </p>

              <div className="flex flex-col gap-4">
                <Link href="/passport" className="w-full py-4 bg-white/10 text-white font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/20 transition-colors text-center block">
                  Retour au Passeport
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
