import { useState, useEffect } from 'react'
import { CTAButton } from './ui/CTAButton'

function ViewersBadge() {
  const [count, setCount] = useState(38)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(v => Math.max(18, Math.min(72, v + (Math.random() > 0.5 ? 1 : -1))))
    }, 4500)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="inline-flex items-center gap-2 bg-copa-pink/10 border border-copa-pink/30 text-copa-pink text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
      <span className="w-2 h-2 rounded-full bg-copa-pink animate-blink" />
      <span>{count} pessoas vendo agora</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-[linear-gradient(140deg,#000D2E_0%,#001E5A_50%,#0A3070_100%)] overflow-hidden py-16 md:py-24 px-5">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-copa-green/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-copa-gold/8 blur-[120px]" />
        {/* Hex grid */}
        <div
          className="absolute inset-0 opacity-100"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-copa-gold/10 border border-copa-gold/35 text-copa-gold text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-5">
            ⚽ Pacote Completo · Álbum + 2 Bônus Exclusivos
          </div>

          <ViewersBadge />

          {/* Heading */}
          <h1 className="font-display leading-[.9] tracking-wide mb-4">
            <span className="text-[clamp(3.4rem,8.5vw,6rem)] text-white block">Minha</span>
            <span
              className="text-[clamp(3.6rem,9vw,6.4rem)] text-copa-gold block"
              style={{ WebkitTextStroke: '1px #E0C400', textShadow: '0 0 40px rgba(254,223,0,.3)' }}
            >
              Copa
            </span>
            <span
              className="text-[clamp(3.4rem,8.5vw,6rem)] text-copa-green-g block"
              style={{ WebkitTextStroke: '1px #007A2D' }}
            >
              2026
            </span>
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[460px] mb-5 mx-auto md:mx-0 font-medium">
            O pacote completo com os <strong className="text-white">26 craques da Seleção Brasileira</strong> + 2 bônus exclusivos.
            Imprima em casa, pinte do seu jeito e entre no clima da Copa!
          </p>

          {/* What's included */}
          <div className="flex flex-col gap-1.5 mb-6 max-w-[400px] mx-auto md:mx-0">
            {['📖 Álbum de Colorir Copa 2026', '🎁 Bônus 1: Atividades da Copa', '🎁 Bônus 2: Duka Goods'].map(item => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                <span className="text-copa-green-g">✅</span> {item}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mb-7">
            <p className="text-white/40 text-[15px] font-semibold line-through mb-1">Separado custaria R$ 59,97 — hoje por apenas</p>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <span
                className="font-display text-white animate-pricepop"
                style={{
                  fontSize: 'clamp(4.4rem,13vw,6.8rem)',
                  lineHeight: '.88',
                  textShadow: '0 4px 0 #007A2D, 0 8px 24px rgba(0,155,58,.5)',
                }}
              >
                <sup className="text-[38%] align-super mt-3 inline-block">R$</sup>
                19
                <sup className="text-[38%] align-super mt-3 inline-block">,99</sup>
              </span>
              <span className="bg-copa-green text-white font-display text-xl w-16 h-16 rounded-full flex items-center justify-center -rotate-12 shadow-[0_4px_16px_rgba(0,155,58,.5)] border-2 border-white/20 flex-shrink-0">
                -67%
              </span>
            </div>
            <p className="text-white/40 text-xs font-semibold mt-2 tracking-wide">
              3 produtos · acesso imediato · PDF para imprimir à vontade
            </p>
          </div>

          {/* CTA */}
          <CTAButton href="https://pay.lowify.com.br/checkout?product_id=eCUU2y" size="lg" className="mx-auto md:mx-0">
            ⚽ QUERO O PACOTE COMPLETO
          </CTAButton>

          {/* Guarantee strip */}
          <p className="text-white/50 text-xs font-semibold mt-3 flex items-center gap-1.5 justify-center md:justify-start">
            🛡️ Garantia de 7 dias · dinheiro de volta sem perguntas
          </p>

          {/* Payment badges */}
          <div className="flex items-center gap-2 flex-wrap mt-3 justify-center md:justify-start">
            {['⚡ Pix', '💳 Cartão', '🔒 100% seguro', '📩 Acesso imediato'].map(label => (
              <span
                key={label}
                className="text-[11px] font-bold text-white/80 px-3 py-1 rounded-lg border border-white/15 bg-white/8 backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Book */}
        <div className="flex items-center justify-center order-first md:order-last">
          <div className="relative">
            {/* Glow behind book */}
            <div className="absolute inset-0 m-auto w-[340px] h-[340px] rounded-full bg-copa-green/20 blur-[80px]" />

            <img
              src="capa2.png"
              alt="Álbum de Colorir Copa 2026"
              className="relative z-10 w-[400px] max-w-[85vw] rounded-2xl animate-float"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.6))' }}
            />

            {/* Floating chips */}
            <div className="absolute -top-3 -right-4 z-20 bg-copa-gold text-navy-800 font-display text-base px-4 py-2 rounded-xl shadow-lg animate-wobble">
              🎨 +30 Desenhos!
            </div>
            <div className="absolute bottom-5 -left-6 z-20 bg-copa-green text-white font-display text-base px-4 py-2 rounded-xl shadow-lg animate-wobble2">
              ✅ PDF Imprimível
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
