export default function Slide04Stack() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)"
      }} />

      <div className="relative flex flex-col h-full px-[7vw] py-[7vh]">
        <div className="mb-[4vh]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1vh]" style={{ color: "var(--aeon-gold)" }}>03 — Stack Technologique</div>
          <h2 className="font-serif leading-[1.0] font-light" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Architecture technique complète
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-[2.5vw]">
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>Frontend</div>
            <div className="flex flex-col gap-[1.2vh] flex-1">
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>React + Vite</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>TypeScript</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Tailwind CSS</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Framer Motion</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Wouter (routing)</div>
            </div>
          </div>
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>Web3 / Blockchain</div>
            <div className="flex flex-col gap-[1.2vh] flex-1">
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>wagmi v2</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>viem v2</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Ethereum Mainnet</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>ERC-721 (NFT)</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>ERC-4337 (AA)</div>
            </div>
          </div>
          <div className="rounded-xl p-[3vh] flex flex-col" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[2vh]" style={{ color: "var(--aeon-gold)" }}>Stockage & IA</div>
            <div className="flex flex-col gap-[1.2vh] flex-1">
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>IPFS</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Arweave</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>Vision IA (simulée)</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>@tanstack/query</div>
              <div className="text-[1.6vw] font-light" style={{ color: "var(--aeon-cream)" }}>pnpm monorepo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
