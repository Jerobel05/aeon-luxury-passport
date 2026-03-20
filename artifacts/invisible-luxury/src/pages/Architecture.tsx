import { AnimatedReveal } from '@/components/AnimatedReveal';
import { ArrowDown } from 'lucide-react';

export default function Architecture() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        
        <AnimatedReveal>
          <div className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Sous le Capot</h1>
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs">Architecture Technique & Flux</p>
          </div>
        </AnimatedReveal>

        {/* Diagram 1: System Architecture */}
        <section className="mb-32">
          <AnimatedReveal direction="up" delay={0.1}>
            <h2 className="text-accent text-sm tracking-[0.2em] uppercase mb-10 border-b border-white/10 pb-4">1. Architecture Système</h2>
            
            <div className="flex flex-col items-center max-w-2xl mx-auto">
              
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-lg">
                <span className="text-white font-serif text-xl block mb-1">Appareil Utilisateur</span>
                <span className="text-muted-foreground text-xs font-mono">Mobile / Desktop</span>
              </div>
              
              <div className="py-4"><ArrowDown className="text-white/20" /></div>
              
              <div className="w-full bg-accent/10 border border-accent/30 rounded-lg p-6 text-center shadow-lg">
                <span className="text-accent font-serif text-xl block mb-1">AEON Frontend</span>
                <span className="text-accent/60 text-xs font-mono">React / wagmi / viem</span>
              </div>
              
              <div className="py-4"><ArrowDown className="text-white/20" /></div>
              
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <span className="text-white font-serif text-lg block mb-1">ERC-4337 Bundler</span>
                  <span className="text-muted-foreground text-xs font-mono">Gestion des Tx</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <span className="text-white font-serif text-lg block mb-1">Paymaster</span>
                  <span className="text-muted-foreground text-xs font-mono">Sponsor sans frais</span>
                </div>
              </div>

              <div className="py-4"><ArrowDown className="text-white/20" /></div>
              
              <div className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center shadow-lg">
                <span className="text-purple-300 font-serif text-xl block mb-1">Smart Account</span>
                <span className="text-purple-300/60 text-xs font-mono">Contrat Portefeuille ERC-4337</span>
              </div>

              <div className="py-4"><ArrowDown className="text-white/20" /></div>

              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
                  <span className="text-blue-300 font-serif text-lg block mb-1">Watch NFT</span>
                  <span className="text-blue-300/60 text-xs font-mono">Contrat ERC-721</span>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 text-center">
                  <span className="text-emerald-300 font-serif text-lg block mb-1">IPFS / Arweave</span>
                  <span className="text-emerald-300/60 text-xs font-mono">Métadonnées Décentralisées</span>
                </div>
              </div>

            </div>
          </AnimatedReveal>
        </section>

        {/* Diagram 2: Sequence Diagram */}
        <section className="mb-32">
          <AnimatedReveal direction="up" delay={0.2}>
            <h2 className="text-accent text-sm tracking-[0.2em] uppercase mb-10 border-b border-white/10 pb-4">2. Flux de Séquence (Mint NFT)</h2>
            
            <div className="overflow-x-auto pb-8">
              <div className="min-w-[800px] bg-black border border-white/10 rounded-xl p-8 font-mono text-xs">
                {/* Headers */}
                <div className="grid grid-cols-5 text-accent border-b border-white/10 pb-4 mb-4 font-bold tracking-widest uppercase">
                  <div>User</div>
                  <div>Frontend</div>
                  <div>Service IA</div>
                  <div>IPFS</div>
                  <div>Blockchain</div>
                </div>

                {/* Rows */}
                <div className="space-y-4 text-white/80">
                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-span-2 flex items-center">
                      <span className="w-full text-right pr-4">Scanne la montre</span>
                      <div className="flex-1 h-px bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-2 col-span-2 flex items-center">
                      <span className="w-full text-right pr-4">Identifier l'image</span>
                      <div className="flex-1 h-px bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-2 col-span-2 flex items-center flex-row-reverse">
                      <span className="w-full text-left pl-4 text-accent/80">Données montre retournées</span>
                      <div className="flex-1 h-px bg-accent/20 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-l border-accent/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-2 col-span-3 flex items-center">
                      <span className="w-full text-right pr-4">Stocker Métadonnées (JSON)</span>
                      <div className="flex-1 h-px bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-2 col-span-3 flex items-center flex-row-reverse">
                      <span className="w-full text-left pl-4 text-accent/80">ipfs://hash retourné</span>
                      <div className="flex-1 h-px bg-accent/20 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-l border-accent/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-2 col-span-4 flex items-center">
                      <span className="w-full text-right pr-4 text-purple-300">Émettre NFT (ERC-4337 UserOp)</span>
                      <div className="flex-1 h-px bg-purple-500/30 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-purple-500/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 items-center relative">
                    <div className="col-start-1 col-span-5 flex items-center flex-row-reverse">
                      <span className="w-full text-left pl-4 text-green-400">NFT Émis & Certificat Prêt</span>
                      <div className="flex-1 h-px bg-green-500/30 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-l border-green-500/50 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedReveal>
        </section>

        {/* Diagram 3: Smart Contract Architecture */}
        <section>
          <AnimatedReveal direction="up" delay={0.3}>
            <h2 className="text-accent text-sm tracking-[0.2em] uppercase mb-10 border-b border-white/10 pb-4">3. Écosystème des Contrats Intelligents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-white/10 -z-10"></div>
              
              <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 font-serif text-xl text-white">1</div>
                <h3 className="text-lg font-serif text-white mb-2">WatchNFT.sol</h3>
                <span className="text-accent text-[10px] tracking-wider uppercase block mb-6">ERC-721 Core</span>
                <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">mint()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">transfer()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">getPassport()</li>
                </ul>
              </div>

              <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 font-serif text-xl text-white">2</div>
                <h3 className="text-lg font-serif text-white mb-2">WatchPassport.sol</h3>
                <span className="text-accent text-[10px] tracking-wider uppercase block mb-6">Registre de Métadonnées</span>
                <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">updateCertificate()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">addHistory()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">verifyAuthenticity()</li>
                </ul>
              </div>

              <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 font-serif text-xl text-white">3</div>
                <h3 className="text-lg font-serif text-white mb-2">WatchMarket.sol</h3>
                <span className="text-accent text-[10px] tracking-wider uppercase block mb-6">ERC-4337 Enabled</span>
                <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">listForSale()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">buyWatch()</li>
                  <li className="flex items-center gap-2 before:content-['+'] before:text-white/20">sponsorGas()</li>
                </ul>
              </div>
            </div>
          </AnimatedReveal>
        </section>

      </div>
    </main>
  );
}
