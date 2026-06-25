import { useState, useEffect } from 'react'
import { CTAButton } from './ui/CTAButton'

function LiveBadge() {
  const [count, setCount] = useState(38)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(v => Math.max(18, Math.min(72, v + (Math.random() > 0.5 ? 1 : -1))))
    }, 4500)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="inline-flex items-center gap-1.5 bg-copa-pink/15 border border-copa-pink/40 text-copa-pink text-xs font-bold px-3 py-1.5 rounded-full">
      <span className="w-2 h-2 rounded-full bg-copa-pink animate-blink flex-shrink-0" />
      {count} pessoas vendo agora
    </span>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #000D2E 0%, #001E5A 55%, #0A3070 100%)' }}
    >
      {/* Background hex grid */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")" }}
      />
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-copa-green/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-copa-gold/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* Social proof row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-copa-gold/15 border border-copa-gold/35 text-copa-gold text-xs font-bold px-3 py-1.5 rounded-full">
              ⭐ 4.9/5 · +1.200 famílias
            </span>
            <LiveBadge />
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[.9] tracking-wide mb-4">
            <span className="text-[clamp(2rem,6vw,3.2rem)] text-white/70 block mb-1">
              Seu filho vai
            </span>
            <span
              className="text-[clamp(3.2rem,9vw,5.6rem)] text-copa-gold block"
              style={{ WebkitTextStroke: '1px #E0C400', textShadow: '0 0 40px rgba(254,223,0,.25)' }}
            >
              ENLOUQUECER
            </span>
            <span className="text-[clamp(1.6rem,4.5vw,2.6rem)] text-white block mt-1 leading-tight">
              com esse álbum da Copa 2026!
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[480px] mb-6 mx-auto md:mx-0 font-medium">
            <strong className="text-white">26 craques da Seleção</strong> em estilo HQ para imprimir e colorir em casa.
            PDF com qualidade total — imprima quantas vezes quiser!
          </p>

          {/* What's included */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 max-w-[420px] mx-auto md:mx-0">
            <p className="text-copa-gold font-display text-sm tracking-wide mb-3">🎁 Pacote completo inclui:</p>
            <div className="flex flex-col gap-2">
              {[
                ['📖', 'Álbum de Colorir Copa 2026', '+30 desenhos dos 26 craques'],
                ['🎯', 'Bônus 1: Atividades da Copa', 'caça-palavras, labirintos e mais'],
                ['🎨', 'Bônus 2: Duka Goods', 'desenhos extras em estilo HQ'],
              ].map(([icon, name, desc]) => (
                <div key={name} className="flex items-start gap-2.5">
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <div>
                    <span className="text-white text-sm font-bold">{name}</span>
                    <span className="text-white/45 text-xs font-medium ml-1.5">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price block */}
          <div className="mb-6">
            <p className="text-white/35 text-sm font-semibold line-through mb-0.5">
              Separado custaria R$ 59,97
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
              <span
                className="font-display text-white animate-pricepop"
                style={{
                  fontSize: 'clamp(4rem,12vw,6rem)',
                  lineHeight: '.88',
                  textShadow: '0 4px 0 #007A2D, 0 8px 24px rgba(0,155,58,.45)',
                }}
              >
                <sup className="text-[36%] align-super mt-3 inline-block">R$</sup>
                19
                <sup className="text-[36%] align-super mt-3 inline-block">,99</sup>
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="bg-copa-green text-white font-display text-lg w-14 h-14 rounded-full flex items-center justify-center -rotate-12 shadow-[0_4px_16px_rgba(0,155,58,.5)] border-2 border-white/20">
                  -67%
                </span>
              </div>
            </div>
            <p className="text-white/35 text-xs font-semibold mt-1.5 tracking-wide">
              Pagamento único · acesso imediato · PDF para imprimir à vontade
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
            <CTAButton
              href="https://pay.lowify.com.br/checkout?product_id=eCUU2y"
              size="lg"
              className="w-full sm:w-auto"
            >
              ⚽ QUERO O PACOTE COMPLETO
            </CTAButton>
            <a
              href="https://pay.lowify.com.br/checkout?product_id=t6NWvH"
              onClick={() => window.fbq?.('track', 'InitiateCheckout', { value: 9.99, currency: 'BRL', num_items: 1, content_ids: ['t6NWvH'] })}
              className="text-white/55 text-sm font-semibold hover:text-white/85 underline underline-offset-2 transition-colors"
            >
              Só o básico por R$9,99 →
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-2 flex-wrap mt-5 justify-center md:justify-start">
            {['⚡ Pix', '💳 Cartão', '🔒 Seguro', '📩 Imediato', '🛡️ 7 dias'].map(label => (
              <span
                key={label}
                className="text-[11px] font-bold text-white/70 px-2.5 py-1 rounded-lg border border-white/12 bg-white/6"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Book */}
        <div className="flex items-center justify-center order-first md:order-last">
          <div className="relative">
            <div className="absolute inset-0 m-auto w-[340px] h-[340px] rounded-full bg-copa-green/20 blur-[90px]" />
            <img
              src="capa2.png"
              alt="Pacote Completo Copa 2026"
              className="relative z-10 w-[380px] max-w-[82vw] rounded-2xl animate-float"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.65))' }}
            />
            {/* Floating chips */}
            <div className="absolute -top-4 -right-2 z-20 bg-copa-gold text-navy-800 font-display text-sm px-4 py-2 rounded-xl shadow-lg animate-wobble whitespace-nowrap">
              🎨 +30 Desenhos!
            </div>
            <div className="absolute bottom-8 -left-6 z-20 bg-copa-green text-white font-display text-sm px-4 py-2 rounded-xl shadow-lg animate-wobble2 whitespace-nowrap">
              ✅ PDF Imprimível
            </div>
            <div className="absolute -bottom-2 right-2 z-20 bg-copa-pink text-white font-display text-sm px-4 py-2 rounded-xl shadow-lg animate-wobble whitespace-nowrap">
              🎁 + 2 Bônus
            </div>
          </div>
        </div>

      </div>

      {/* Bottom urgency strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/4 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 text-center">
          {[
            ['🔥', '+1.240 álbuns vendidos'],
            ['⭐', '4.9/5 avaliações'],
            ['🛡️', 'Garantia de 7 dias'],
            ['⚡', 'Acesso em minutos'],
          ].map(([icon, text]) => (
            <span key={text} className="text-white/65 text-xs font-semibold flex items-center gap-1.5">
              <span>{icon}</span> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
