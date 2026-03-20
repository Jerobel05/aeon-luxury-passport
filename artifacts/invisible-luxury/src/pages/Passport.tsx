import { AnimatedReveal } from '@/components/AnimatedReveal';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, History } from 'lucide-react';
import { Link } from 'wouter';

export default function Passport() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-12 selection:bg-accent/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Account Abstraction Banner */}
        <AnimatedReveal>
          <div className="w-full bg-accent/10 border border-accent/20 rounded-md p-4 mb-12 flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <p className="text-xs tracking-[0.1em] text-accent font-medium">
              Votre compte est un Smart Account (ERC-4337) — entièrement sécurisé, aucune phrase secrète requise.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Watch Details */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.2} direction="up">
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden h-full">
                {/* decorative watermark */}
                <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                   <ShieldCheck className="w-96 h-96" />
                </div>

                <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-8 relative z-10">
                  <div>
                    <h1 className="font-serif text-3xl md:text-4xl text-white tracking-wide">Patek Philippe</h1>
                    <p className="text-muted-foreground tracking-[0.2em] text-sm uppercase mt-2">Nautilus 5711/1A-010</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-[10px] tracking-wider font-mono">SERIAL: PP-2019-5711-0042</p>
                    <p className="text-accent text-[10px] tracking-wider font-mono mt-1">TOKEN ID: #0042</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center mb-12 relative z-10">
                  <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl"></div>
                    <img 
                      src={`${import.meta.env.BASE_URL}images/watch-isolated.png`} 
                      className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
                      alt="Watch" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-8 gap-x-8 flex-1 w-full">
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Year</span>
                      <span className="text-base text-white font-medium">2019</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Material</span>
                      <span className="text-base text-white font-medium">Stainless Steel 316L</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Movement</span>
                      <span className="text-base text-white font-medium">Cal. 324 S C Auto</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Condition</span>
                      <span className="text-base text-white font-medium">Excellent (A)</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* RIGHT SIDE - Blockchain Cert */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <AnimatedReveal delay={0.4} direction="up" className="h-full">
              <div className="bg-black border border-white/10 rounded-2xl p-8 relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Certificat NFT</h3>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Statut</span>
                    <span className="text-sm text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Authentifié
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Propriétaire</span>
                    <span className="text-sm text-white font-mono">0x9f...2a1b</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Contrat</span>
                    <span className="text-sm text-white/70 font-mono">0x1a2b...3c4d</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Réseau</span>
                    <span className="text-sm text-white">Ethereum Mainnet</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Stockage</span>
                    <span className="text-sm text-white/70 font-mono">ipfs://Qm...xyz</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Émis le</span>
                    <span className="text-sm text-white">12 Mars 2024</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Link href="/resale" className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 hover:border-accent hover:text-accent text-white tracking-[0.2em] text-[11px] uppercase transition-all duration-300">
                    Transférer / Revendre
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* BOTTOM - History Table */}
        <AnimatedReveal delay={0.6} direction="up">
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <History className="w-5 h-5 text-accent" />
              <h3 className="text-white text-sm tracking-[0.2em] uppercase font-medium">Historique de Provenance</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] text-muted-foreground uppercase tracking-widest">
                    <th className="pb-4 font-normal">Date</th>
                    <th className="pb-4 font-normal">Événement</th>
                    <th className="pb-4 font-normal">Détails</th>
                    <th className="pb-4 font-normal">Hash Tx</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-white/80 font-light">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4">14 Oct. 2024</td>
                    <td className="py-4 text-accent">Transfert de propriété</td>
                    <td className="py-4">Transféré via la Marketplace AEON</td>
                    <td className="py-4 font-mono text-[10px] text-white/40">0x88f...9b1a</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4">02 Août 2024</td>
                    <td className="py-4 text-white">Révision</td>
                    <td className="py-4">Révision complète du mouvement au Salon Patek, Genève</td>
                    <td className="py-4 font-mono text-[10px] text-white/40">0x44c...2d9e</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4">12 Mars 2024</td>
                    <td className="py-4 text-white">Passeport Émis</td>
                    <td className="py-4">Numérisation initiale & authentification</td>
                    <td className="py-4 font-mono text-[10px] text-white/40">0x11a...4f7b</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </main>
  );
}
