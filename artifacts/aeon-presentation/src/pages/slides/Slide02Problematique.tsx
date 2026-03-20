export default function Slide02Problematique() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)"
      }} />

      <div className="relative flex h-full">
        <div className="w-[45vw] flex flex-col justify-center px-[7vw]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>01 — Problématique</div>
          <h2 className="font-serif leading-[1.0] font-light mb-[3vh]" style={{ fontSize: "5.5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Un marché sans traçabilité
          </h2>
          <p className="text-[1.7vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.75 }}>
            Les montres de luxe sont parmi les actifs les plus contrefaits au monde. Sans preuve d'authenticité fiable, vendeurs et acheteurs sont exposés à des risques majeurs.
          </p>
        </div>

        <div className="w-[55vw] flex flex-col justify-center px-[5vw] gap-[3vh]">
          <div className="rounded-xl p-[3vh] border" style={{ background: "var(--aeon-card)", borderColor: "rgba(201,169,110,0.15)" }}>
            <div className="text-[2.8vw] font-serif font-light mb-[1vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>40 Mds $</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>Marché mondial des montres de luxe d'occasion</div>
          </div>
          <div className="rounded-xl p-[3vh] border" style={{ background: "var(--aeon-card)", borderColor: "rgba(201,169,110,0.15)" }}>
            <div className="text-[2.8vw] font-serif font-light mb-[1vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>50 %</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>Des pièces en circulation potentiellement non authentifiées</div>
          </div>
          <div className="rounded-xl p-[3vh] border" style={{ background: "var(--aeon-card)", borderColor: "rgba(201,169,110,0.15)" }}>
            <div className="text-[2.8vw] font-serif font-light mb-[1vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>Zéro</div>
            <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>Standard universel d'historique de provenance numérique</div>
          </div>
        </div>
      </div>
    </div>
  );
}
