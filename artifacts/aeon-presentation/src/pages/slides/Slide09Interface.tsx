export default function Slide09Interface() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(201,169,110,0.07) 0%, transparent 55%)"
      }} />

      <div className="relative flex flex-col h-full px-[7vw] py-[7vh]">
        <div className="mb-[3.5vh]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1vh]" style={{ color: "var(--aeon-gold)" }}>08 — Interface Utilisateur</div>
          <h2 className="font-serif leading-[1.0] font-light" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            5 pages · 1 expérience fluide
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-[1.5vw]">
          <div className="rounded-xl p-[2.5vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.15em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>01 · Accueil</div>
            <div className="text-[1.5vw] font-serif font-light mb-[1.5vh]" style={{ color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>Landing</div>
            <div className="text-[1.3vw] font-light flex-1" style={{ color: "var(--aeon-muted)" }}>
              Hero animé, accroche luxe, CTA vers le scan. Animation de texte Framer Motion.
            </div>
          </div>
          <div className="rounded-xl p-[2.5vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.15em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>02 · Scanner</div>
            <div className="text-[1.5vw] font-serif font-light mb-[1.5vh]" style={{ color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>Scan IA</div>
            <div className="text-[1.3vw] font-light flex-1" style={{ color: "var(--aeon-muted)" }}>
              Animation de scan, barres d'analyse, révélation progressive du résultat.
            </div>
          </div>
          <div className="rounded-xl p-[2.5vh] flex flex-col" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.35)" }}>
            <div className="text-[1.1vw] tracking-[0.15em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>03 · Passeport</div>
            <div className="text-[1.5vw] font-serif font-light mb-[1.5vh]" style={{ color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>Certificat NFT</div>
            <div className="text-[1.3vw] font-light flex-1" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              Données NFT, historique de provenance, infos blockchain complètes.
            </div>
          </div>
          <div className="rounded-xl p-[2.5vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.15em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>04 · Revente</div>
            <div className="text-[1.5vw] font-serif font-light mb-[1.5vh]" style={{ color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>Marché</div>
            <div className="text-[1.3vw] font-light flex-1" style={{ color: "var(--aeon-muted)" }}>
              Formulaire de mise en vente ETH, note d'état, Paymaster ERC-4337 intégré.
            </div>
          </div>
          <div className="rounded-xl p-[2.5vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.15em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>05 · Architecture</div>
            <div className="text-[1.5vw] font-serif font-light mb-[1.5vh]" style={{ color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>Technique</div>
            <div className="text-[1.3vw] font-light flex-1" style={{ color: "var(--aeon-muted)" }}>
              3 diagrammes UML interactifs : système, séquence, smart contracts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
