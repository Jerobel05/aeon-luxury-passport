export default function Slide03Solution() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 55%)"
      }} />
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />

      <div className="relative flex flex-col h-full px-[7vw] py-[7vh]">
        <div>
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1vh]" style={{ color: "var(--aeon-gold)" }}>02 — La Solution</div>
          <h2 className="font-serif leading-[1.0] font-light" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            AEON : le passeport numérique invisible
          </h2>
        </div>

        <div className="flex-1 flex items-center gap-[3vw] mt-[4vh]">
          <div className="flex-1 flex flex-col gap-[2.5vh]">
            <div className="flex items-start gap-[2vw]">
              <div className="w-[3vw] h-[3vw] rounded-full flex items-center justify-center flex-shrink-0 text-[1.4vw] font-semibold" style={{ background: "rgba(201,169,110,0.12)", color: "var(--aeon-gold)", border: "1px solid rgba(201,169,110,0.3)" }}>1</div>
              <div>
                <div className="text-[1.7vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>Scan IA Visuel</div>
                <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>L'utilisateur photographie sa montre. L'IA reconnaît le modèle, la référence, l'année.</div>
              </div>
            </div>
            <div className="flex items-start gap-[2vw]">
              <div className="w-[3vw] h-[3vw] rounded-full flex items-center justify-center flex-shrink-0 text-[1.4vw] font-semibold" style={{ background: "rgba(201,169,110,0.12)", color: "var(--aeon-gold)", border: "1px solid rgba(201,169,110,0.3)" }}>2</div>
              <div>
                <div className="text-[1.7vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>NFT ERC-721 Émis</div>
                <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>Un certificat d'authenticité immuable est créé sur Ethereum. Les données sont sur IPFS.</div>
              </div>
            </div>
            <div className="flex items-start gap-[2vw]">
              <div className="w-[3vw] h-[3vw] rounded-full flex items-center justify-center flex-shrink-0 text-[1.4vw] font-semibold" style={{ background: "rgba(201,169,110,0.12)", color: "var(--aeon-gold)", border: "1px solid rgba(201,169,110,0.3)" }}>3</div>
              <div>
                <div className="text-[1.7vw] font-medium mb-[0.5vh]" style={{ color: "var(--aeon-cream)" }}>UX Sans Friction</div>
                <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>Zéro crypto, zéro gas fee visible. ERC-4337 rend la blockchain totalement transparente.</div>
              </div>
            </div>
          </div>

          <div className="w-[38vw] rounded-2xl p-[4vh] text-center" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div className="font-serif text-[4vw] font-light italic mb-[2vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>
              "Le Web3<br/>que l'on ne voit pas"
            </div>
            <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.65 }}>
              L'objectif principal du projet est de masquer toute complexité blockchain à l'utilisateur final, tout en garantissant une traçabilité absolue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
