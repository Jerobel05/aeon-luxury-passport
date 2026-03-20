export default function Slide11Bilan() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 60%)"
      }} />

      <div className="relative flex h-full">
        <div className="w-[45vw] flex flex-col justify-center px-[7vw]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>10 — Bilan & Apports</div>
          <h2 className="font-serif leading-[1.0] font-light mb-[3vh]" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Ce que ce projet démontre
          </h2>
          <p className="text-[1.6vw] font-light leading-relaxed mb-[2vh]" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
            AEON démontre qu'une UX grand public peut être construite par-dessus des protocoles Web3 complexes, sans exposer aucune complexité à l'utilisateur.
          </p>
          <p className="text-[1.6vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.65 }}>
            Le projet est entièrement fonctionnel côté frontend avec simulation blockchain réaliste.
          </p>
        </div>

        <div className="w-[55vw] flex flex-col justify-center px-[4vw] gap-[1.8vh]">
          <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[0.5vh]" style={{ color: "var(--aeon-gold)" }}>Réalisations</div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>✓</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Application React complète — 5 pages, design luxe ultra-dark</div>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>✓</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Simulation réaliste de scan IA, authentification et NFT</div>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>✓</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>ERC-4337 Account Abstraction modélisé avec Paymaster gasless</div>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>✓</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>3 diagrammes UML embarqués dans l'app — architecture, séquence, contrats</div>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.15)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>✓</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Interface entièrement en français avec toggle EN/FR</div>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-xl p-[2vh] mt-[0.5vh]" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.3)" }}>
            <div className="text-[1.5vw] flex-shrink-0" style={{ color: "var(--aeon-gold)" }}>→</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.85 }}>Perspective : déploiement sur testnet Ethereum (Sepolia) + IA vision réelle (GPT-4o)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
