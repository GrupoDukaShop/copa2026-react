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
        href="https://wa.me/5511975522552?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20livros%20de%20colorir%20da%20DukaShop"
        onClick={() => fbTrack('Contact')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-[88px] sm:bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,.25)] hover:scale-110 transition-transform"
      >
        <img
          src="wpp.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span style="font-size:28px;line-height:56px;text-align:center">💬</span>' }}
        />
      </a>

      {/* Sticky mobile CTA — dois botões */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden flex border-t-2 border-black/20 shadow-[0_-4px_24px_rgba(0,0,0,.35)]">
        {/* Básico */}
        <a
          href="/ir?p=basico"
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 gap-0.5 bg-[#1a1a2e] text-white font-display text-base tracking-wide border-r border-white/10"
        >
          R$9,99
          <span className="font-body text-[9px] font-semibold opacity-60 tracking-wide normal-case">
            Só o básico
          </span>
        </a>

        {/* Completo — destaque */}
        <a
          href="/ir?p=completo"
          className="flex-[2] flex flex-col items-center justify-center py-3 px-2 gap-0.5 bg-copa-green text-white font-display text-lg tracking-wide"
        >
          ⚽ R$14,99
          <span className="font-body text-[9px] font-semibold opacity-85 tracking-wide normal-case">
            Pacote completo + 2 bônus
          </span>
        </a>
      </div>
    </>
  )
}
