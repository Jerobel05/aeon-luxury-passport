export default function Slide12Cloture() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,169,110,0.11) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 40% 30% at 50% 55%, rgba(201,169,110,0.07) 0%, transparent 50%)"
      }} />
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />
      <div className="absolute top-0 left-0 w-[1px] h-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.4), transparent)" }} />
      <div className="absolute top-0 right-0 w-[1px] h-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.4), transparent)" }} />

      <div className="relative flex flex-col h-full items-center justify-center text-center px-[12vw]">
        <div className="text-[1.2vw] tracking-[0.4em] uppercase mb-[3vh]" style={{ color: "var(--aeon-muted)" }}>
          Merci de votre attention
        </div>

        <div className="font-serif leading-[0.85] font-light mb-[4vh]" style={{ fontSize: "10vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
          AEON
        </div>

        <div className="h-[1px] w-[20vw] mb-[4vh]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />

        <p className="text-[2vw] font-serif font-light italic mb-[5vh]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>
          "Votre montre. Numériquement vivante."
        </p>

        <div className="flex items-center gap-[4vw] text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>
          <div>ERC-721 · NFT</div>
          <div style={{ color: "rgba(201,169,110,0.4)" }}>·</div>
          <div>ERC-4337 · Account Abstraction</div>
          <div style={{ color: "rgba(201,169,110,0.4)" }}>·</div>
          <div>IPFS · Décentralisé</div>
        </div>

        <div className="mt-[5vh] text-[1.5vw] tracking-[0.3em] uppercase" style={{ color: "var(--aeon-gold)", opacity: 0.7 }}>
          Questions ?
        </div>
      </div>
    </div>
  );
}
