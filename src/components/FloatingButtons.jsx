export default function FloatingButtons() {
  const fbTrack = (name, params) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', name, params)
    }
  }

  return (
    <>
      {/* WhatsApp */}
      <a
        href="/wpp"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-[160px] sm:bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,.25)] hover:scale-110 transition-transform"
      >
        <img
          src="wpp.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="font-size:28px;line-height:56px;text-align:center">💬</span>' }}
        />
      </a>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">

        {/* Urgency strip */}
        <div className="bg-copa-gold text-navy-950 text-[10px] font-bold text-center py-1.5 px-4 tracking-widest uppercase">
          🔥 Oferta de lançamento · -67% · Apenas hoje
        </div>

        {/* Buttons row */}
        <div className="flex shadow-[0_-6px_30px_rgba(0,0,0,.45)]">

          {/* Básico — secondary */}
          <a
            href="/ir?p=basico"
            className="w-[33%] flex flex-col items-center justify-center py-3.5 px-2 gap-0.5 bg-[#00277A] border-r-2 border-white/10"
          >
            <span className="font-body text-white/45 text-[8px] font-bold tracking-wide uppercase">Básico</span>
            <span className="font-display text-white text-xl leading-none">R$9,99</span>
            <span className="font-body text-white/35 text-[8px] font-semibold leading-tight text-center">álbum + atividades</span>
          </a>

          {/* Completo — hero */}
          <a
            href="/ir?p=completo"
            className="flex-1 flex flex-col items-center justify-center py-2.5 px-3 gap-0.5 bg-copa-green"
            style={{ boxShadow: '0 -4px 28px rgba(0,155,58,.55), inset 0 1px 0 rgba(255,255,255,.18)' }}
          >
            <span className="bg-copa-gold text-navy-950 text-[9px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-md">
              ⭐ MAIS POPULAR
            </span>
            <span className="font-display text-white text-base tracking-wide leading-none">
              ⚽ PACOTE COMPLETO
            </span>
            <div className="flex items-center gap-2">
              <span className="font-display text-white text-2xl leading-none animate-pricepop">R$14,99</span>
              <span className="font-body text-copa-gold text-[10px] font-bold bg-black/20 px-1.5 py-0.5 rounded-full">-67%</span>
            </div>
            <span className="font-body text-white/75 text-[9px] font-semibold">Álbum + 2 bônus · acesso imediato</span>
          </a>

        </div>
      </div>
    </>
  )
}
