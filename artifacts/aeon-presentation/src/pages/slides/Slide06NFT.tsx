export default function Slide06NFT() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute right-0 top-0 bottom-0 w-[40vw]" style={{
        background: "radial-gradient(ellipse 80% 100% at 100% 50%, rgba(201,169,110,0.09) 0%, transparent 70%)"
      }} />

      <div className="relative flex h-full">
        <div className="w-[45vw] flex flex-col justify-center px-[7vw]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>05 — NFT ERC-721</div>
          <h2 className="font-serif leading-[1.0] font-light mb-[3vh]" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Le certificat<br/>blockchain
          </h2>
          <p className="text-[1.6vw] font-light leading-relaxed mb-[3vh]" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
            Chaque montre authentifiée reçoit un NFT ERC-721 unique sur la blockchain Ethereum. Ce jeton est le passeport numérique officiel de la pièce.
          </p>
          <div className="text-[1.5vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.65 }}>
            Non-fungible = non copiable, non duplicable. La propriété est vérifiable publiquement sans tiers de confiance.
          </div>
        </div>

        <div className="w-[55vw] flex flex-col justify-center px-[4vw] gap-[2vh]">
          <div className="rounded-2xl p-[3vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.25)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>Contenu du passeport NFT</div>
            <div className="grid grid-cols-2 gap-[2vw]">
              <div>
                <div className="text-[1.3vw] font-light mb-[0.5vh]" style={{ color: "var(--aeon-muted)" }}>Référence</div>
                <div className="text-[1.6vw] font-medium" style={{ color: "var(--aeon-cream)" }}>Nautilus 5711/1A-010</div>
              </div>
              <div>
                <div className="text-[1.3vw] font-light mb-[0.5vh]" style={{ color: "var(--aeon-muted)" }}>N° de série</div>
                <div className="text-[1.6vw] font-medium font-mono" style={{ color: "var(--aeon-cream)" }}>4•893•XXX</div>
              </div>
              <div>
                <div className="text-[1.3vw] font-light mb-[0.5vh]" style={{ color: "var(--aeon-muted)" }}>Propriétaire NFT</div>
                <div className="text-[1.6vw] font-medium font-mono" style={{ color: "var(--aeon-cream)" }}>0x9f...2a1b</div>
              </div>
              <div>
                <div className="text-[1.3vw] font-light mb-[0.5vh]" style={{ color: "var(--aeon-muted)" }}>Stockage</div>
                <div className="text-[1.6vw] font-medium font-mono" style={{ color: "var(--aeon-cream)" }}>ipfs://Qm…xyz</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[1.5vw]">
            <div className="rounded-xl p-[2vh] text-center" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[1.4vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchNFT.sol</div>
              <div className="text-[1.2vw] font-light" style={{ color: "var(--aeon-muted)" }}>ERC-721 Core</div>
            </div>
            <div className="rounded-xl p-[2vh] text-center" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[1.4vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchPassport.sol</div>
              <div className="text-[1.2vw] font-light" style={{ color: "var(--aeon-muted)" }}>Métadonnées</div>
            </div>
            <div className="rounded-xl p-[2vh] text-center" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[1.4vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>WatchMarket.sol</div>
              <div className="text-[1.2vw] font-light" style={{ color: "var(--aeon-muted)" }}>Marché ERC-4337</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
