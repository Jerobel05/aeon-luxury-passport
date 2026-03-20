export default function Slide05ScanIA() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--aeon-bg)" }}>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)"
      }} />

      <div className="relative flex h-full">
        <div className="w-[48vw] flex flex-col justify-center px-[7vw]">
          <div className="text-[1.2vw] tracking-[0.3em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>04 — Scan IA</div>
          <h2 className="font-serif leading-[1.0] font-light mb-[3vh]" style={{ fontSize: "5vw", color: "var(--aeon-cream)", fontFamily: "'Cormorant Garamond', serif" }}>
            Reconnaissance<br/>visuelle par IA
          </h2>
          <div className="flex flex-col gap-[2vh]">
            <p className="text-[1.6vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              L'utilisateur pointe son appareil sur la montre. Aucun QR code n'est requis.
            </p>
            <p className="text-[1.6vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              L'IA identifie le modèle, la référence, la maison horlogère et l'année de fabrication à partir de l'image capturée.
            </p>
            <p className="text-[1.6vw] font-light leading-relaxed" style={{ color: "var(--aeon-cream)", opacity: 0.8 }}>
              Le résultat déclenche automatiquement l'affichage du passeport numérique associé.
            </p>
          </div>
        </div>

        <div className="w-[52vw] flex flex-col justify-center px-[5vw] gap-[2vh]">
          <div className="rounded-xl p-[3vh]" style={{ background: "var(--aeon-card)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <div className="text-[1.1vw] tracking-[0.2em] uppercase mb-[1.5vh]" style={{ color: "var(--aeon-gold)" }}>Flux de reconnaissance</div>
            <div className="flex flex-col gap-[1.5vh]">
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "var(--aeon-gold)" }} />
                <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Capture photo via mobile / webcam</div>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "var(--aeon-gold)" }} />
                <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Envoi au service IA (analyse du cadran)</div>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "var(--aeon-gold)" }} />
                <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Retour : modèle, référence, marque identifiés</div>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "var(--aeon-gold)" }} />
                <div className="text-[1.5vw] font-light" style={{ color: "var(--aeon-cream)" }}>Requête blockchain → passeport NFT affiché</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-[2.5vh] text-center" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.3)" }}>
            <div className="text-[1.4vw] font-light italic" style={{ color: "var(--aeon-gold)" }}>
              Démo simulée : animation de scan avec barres de progression, résultats d'analyse et transition vers le passeport
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
