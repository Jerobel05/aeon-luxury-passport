export default function Slide07AA() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 70% at 20% 80%, rgba(201,169,110,0.07) 0%, transparent 60%)"
      }} />

      <div className="relative flex flex-col h-full px-[7vw] py-[7vh]">
        <div className="mb-[4vh]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1vh]" style={{ color: "var(--aeon-gold)" }}>06 — Account Abstraction</div>
          <h2 className="font-serif leading-[1.0] font-light" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            ERC-4337 : le Web3 invisible
          </h2>
        </div>

        <div className="flex-1 flex gap-[4vw] items-center">
          <div className="flex-1 flex flex-col gap-[2.5vh]">
            <div className="rounded-xl p-[2.5vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.2)" }}>
              <div className="text-[1.4vw] font-semibold mb-[0.8vh]" style={{ color: "var(--aeon-cream)" }}>Problème classique du Web3</div>
              <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>L'utilisateur doit posséder de l'ETH pour payer les frais de transaction (gas fees). Cela freine l'adoption grand public.</div>
            </div>
            <div className="rounded-xl p-[2.5vh]" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.35)" }}>
              <div className="text-[1.4vw] font-semibold mb-[0.8vh]" style={{ color: "var(--aeon-gold)" }}>Solution ERC-4337 dans AEON</div>
              <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-cream)", opacity: 0.85 }}>Un Paymaster sponsor les transactions. L'utilisateur n'a besoin d'aucun ETH. Les opérations blockchain sont entièrement masquées.</div>
            </div>
            <div className="rounded-xl p-[2.5vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[1.4vw] font-semibold mb-[0.8vh]" style={{ color: "var(--aeon-cream)" }}>Résultat côté UX</div>
              <div className="text-[1.4vw] font-light" style={{ color: "var(--aeon-muted)" }}>Clic sur "Mettre en vente" → transaction signée → NFT transféré. Comme une app classique.</div>
            </div>
          </div>

          <div className="w-[32vw] flex flex-col gap-[2vh]">
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[0.5vh]" style={{ color: "var(--aeon-gold)" }}>Composants ERC-4337</div>
            <div className="flex flex-col gap-[1.5vh]">
              <div className="rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[1.5vw] font-medium" style={{ color: "var(--aeon-cream)" }}>Smart Account</div>
                <div className="text-[1.3vw] font-light" style={{ color: "var(--aeon-muted)" }}>Portefeuille programmable de l'utilisateur</div>
              </div>
              <div className="rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[1.5vw] font-medium" style={{ color: "var(--aeon-cream)" }}>Bundler</div>
                <div className="text-[1.3vw] font-light" style={{ color: "var(--aeon-muted)" }}>Regroupe et soumet les UserOperations</div>
              </div>
              <div className="rounded-xl p-[2vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[1.5vw] font-medium" style={{ color: "var(--aeon-cream)" }}>Paymaster</div>
                <div className="text-[1.3vw] font-light" style={{ color: "var(--aeon-muted)" }}>Sponsorise les frais de gas — zéro ETH requis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
