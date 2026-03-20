export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,169,110,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 10% 90%, rgba(201,169,110,0.06) 0%, transparent 55%)"
      }} />
      <div className="absolute top-0 left-0 w-[1px] h-full" style={{ background: "linear-gradient(to bottom, transparent, var(--aeon-gold), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--aeon-gold), transparent)" }} />

      <div className="relative flex h-full flex-col justify-between px-[8vw] py-[7vh]">
        <div className="flex items-center gap-[2vw]">
          <span className="font-serif text-[3.5vw] tracking-[0.35em]" style={{ color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>
            AEON
          </span>
          <div className="h-[1px] w-[6vw]" style={{ background: "var(--aeon-gold)", opacity: 0.4 }} />
          <span className="text-[1.3vw] tracking-[0.25em] uppercase" style={{ color: "var(--aeon-muted)" }}>
            Projet Académique · Web3
          </span>
        </div>

        <div className="max-w-[70vw]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>
            Soutenance Orale
          </div>
          <h1 className="font-serif leading-[0.9] font-light" style={{ fontSize: "8vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Passeport
          </h1>
          <h1 className="font-serif leading-[0.9] font-light" style={{ fontSize: "8vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Numérique
          </h1>
          <h1 className="font-serif leading-[0.9] italic" style={{ fontSize: "8vw", color: "var(--aeon-gold)", fontFamily: "'Cormorant Garamond', serif" }}>
            de Luxe.
          </h1>
          <p className="text-[1.8vw] font-light leading-relaxed mt-[3vh]" style={{ color: "var(--aeon-cream)", opacity: 0.7 }}>
            Authentification de montres de luxe par IA visuelle et blockchain — ERC-721 · ERC-4337 · IPFS
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[1.3vw]" style={{ color: "var(--aeon-muted)" }}>
            2024 — 2025
          </div>
          <div className="text-[1.3vw] tracking-[0.2em] uppercase" style={{ color: "var(--aeon-muted)" }}>
            Blockchain · UX Sans Friction · Web3 Invisible
          </div>
        </div>
      </div>
    </div>
  );
}
