export default function Slide08IPFS() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0A0805" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,169,110,0.12) 0%, transparent 55%)"
      }} />
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />

      <div className="relative flex flex-col h-full items-center justify-center px-[10vw] text-center">
        <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>07 — Stockage Décentralisé</div>
        <h2 className="font-serif leading-[1.0] font-light mb-[4vh]" style={{ fontSize: "6vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
          IPFS & Arweave
        </h2>

        <div className="flex gap-[3vw] w-full max-w-[80vw]">
          <div className="flex-1 rounded-2xl p-[3.5vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="font-serif text-[3vw] font-light mb-[1.5vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>IPFS</div>
            <div className="text-[1.5vw] font-light leading-relaxed mb-[1.5vh]" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              Stockage distribué pair-à-pair. Les métadonnées JSON du passeport sont épinglées sur un réseau décentralisé.
            </div>
            <div className="text-[1.3vw] font-mono" style={{ color: "var(--aeon-muted)" }}>
              ipfs://QmXY...abc → immuable
            </div>
          </div>
          <div className="flex-1 rounded-2xl p-[3.5vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="font-serif text-[3vw] font-light mb-[1.5vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>Arweave</div>
            <div className="text-[1.5vw] font-light leading-relaxed mb-[1.5vh]" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              Stockage permanent sur blockchain dédiée. Garantit la persistance des données sur des centaines d'années.
            </div>
            <div className="text-[1.3vw] font-mono" style={{ color: "var(--aeon-muted)" }}>
              ar://TxID… → permanent
            </div>
          </div>
          <div className="flex-1 rounded-2xl p-[3.5vh]" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.3)" }}>
            <div className="font-serif text-[3vw] font-light mb-[1.5vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>Pourquoi ?</div>
            <div className="text-[1.5vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.85 }}>
              Contrairement à un serveur centralisé, les données ne peuvent être ni supprimées ni altérées. Le certificat est inviolable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
