export default function Slide10UML() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 50% 60% at 0% 100%, rgba(201,169,110,0.07) 0%, transparent 55%)"
      }} />

      <div className="relative flex flex-col h-full px-[7vw] py-[7vh]">
        <div className="mb-[4vh]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1vh]" style={{ color: "var(--aeon-gold)" }}>09 — Diagrammes UML</div>
          <h2 className="font-serif leading-[1.0] font-light" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            3 vues de l'architecture
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-[2.5vw]">
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>1. Architecture Système</div>
            <div className="flex flex-col gap-[1.2vh] flex-1">
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Appareil Utilisateur</div>
              <div className="text-[1.3vw]" style={{ color: "var(--aeon-muted)" }}>↓</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>AEON Frontend (React)</div>
              <div className="text-[1.3vw]" style={{ color: "var(--aeon-muted)" }}>↓</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>ERC-4337 Bundler + Paymaster</div>
              <div className="text-[1.3vw]" style={{ color: "var(--aeon-muted)" }}>↓</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Smart Account</div>
              <div className="text-[1.3vw]" style={{ color: "var(--aeon-muted)" }}>↓</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Watch NFT + IPFS</div>
            </div>
          </div>
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>2. Diagramme de Séquence</div>
            <div className="flex flex-col gap-[1.2vh] flex-1">
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>User → Scanne la montre</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Frontend → Service IA</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-gold)", opacity: 0.8 }}>IA → Données retournées</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Frontend → IPFS (métadonnées)</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-gold)", opacity: 0.8 }}>IPFS → hash retourné</div>
              <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Frontend → Émettre NFT (ERC-4337)</div>
              <div className="text-[1.5vw] font-light" style={{ color: "#4ade80", opacity: 0.85 }}>Blockchain → NFT Émis ✓</div>
            </div>
          </div>
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>3. Contrats Intelligents</div>
            <div className="flex flex-col gap-[2vh] flex-1">
              <div className="rounded-lg p-[1.5vh]" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                <div className="text-[1.5vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchNFT.sol</div>
                <div className="text-[1.2vw] font-mono" style={{ color: "var(--aeon-muted)" }}>mint() · transfer() · getPassport()</div>
              </div>
              <div className="rounded-lg p-[1.5vh]" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                <div className="text-[1.5vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchPassport.sol</div>
                <div className="text-[1.2vw] font-mono" style={{ color: "var(--aeon-muted)" }}>updateCertificate() · addHistory()</div>
              </div>
              <div className="rounded-lg p-[1.5vh]" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                <div className="text-[1.5vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchMarket.sol</div>
                <div className="text-[1.2vw] font-mono" style={{ color: "var(--aeon-muted)" }}>listForSale() · buyWatch() · sponsorGas()</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
