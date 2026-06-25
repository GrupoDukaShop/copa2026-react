import { CTAButton } from './ui/CTAButton'

export default function DukaGoods() {
  return (
    <section
      id="pacote"
      className="relative py-20 md:py-28 px-5 overflow-hidden border-t-2 border-b-2 border-white/10"
      style={{ background: 'linear-gradient(150deg, #000D2E, #0A3070)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-copa-green/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-copa-gold/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 font-display text-base tracking-wide px-5 py-2.5 rounded-full mb-4">
            🛒 Escolha o seu pacote
          </span>
          <h2 className="font-display text-[clamp(2rem,6vw,3.2rem)] leading-[.95] tracking-wide text-white mt-3">
            Qual opção faz mais sentido{' '}
            <em className="not-italic text-copa-gold" style={{ WebkitTextStroke: '1px #E0C400' }}>
              pra você?
            </em>
          </h2>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* FEATURED — R$19,99 */}
          <div className="reveal relative bg-white/5 border-2 border-copa-green/60 rounded-3xl p-7 flex flex-col shadow-[0_0_60px_rgba(0,155,58,.2)]">
            {/* Recommended badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-copa-green text-white font-display text-sm tracking-wide px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                ⭐ MAIS POPULAR
              </span>
            </div>

            <div className="flex justify-center mt-4 mb-5">
              <div className="relative">
                <div className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-copa-green/20 blur-[60px]" />
                <img
                  src="capa2.png"
                  alt="Pacote Completo Copa 2026"
                  className="relative z-10 w-44 rounded-xl animate-float"
                  style={{ filter: 'drop-shadow(0 16px 40px rgba(0,0,0,.5))' }}
                />
              </div>
            </div>

            <span className="inline-block bg-copa-green/20 text-copa-green-g text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full self-center mb-3">
              Pacote Completo
            </span>
            <h3 className="font-display text-[1.5rem] text-white text-center leading-tight tracking-wide mb-2">
              Álbum Copa 2026<br/>+ 2 Bônus
            </h3>

            <ul className="flex flex-col gap-2 my-4">
              {[
                '📖 Álbum de Colorir Copa 2026',
                '🎁 Bônus 1: Atividades da Copa',
                '🎁 Bônus 2: Duka Goods',
                '⚡ Acesso imediato',
                '🖨️ PDF para imprimir à vontade',
                '🛡️ Garantia de 7 dias',
              ].map(it => (
                <li key={it} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  <span className="text-copa-green-g">✅</span> {it}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-white/10 text-center">
              <p className="text-white/35 text-sm font-semibold line-through">Separado: R$ 59,97</p>
              <p
                className="font-display text-white animate-pricepop my-1"
                style={{ fontSize: 'clamp(3rem,8vw,4rem)', lineHeight: '.9', textShadow: '0 3px 0 #007A2D' }}
              >
                <sup className="text-[38%] align-super mt-2 inline-block">R$</sup>
                19<sup className="text-[38%] align-super mt-2 inline-block">,99</sup>
              </p>
              <CTAButton
                href="https://pay.lowify.com.br/checkout?product_id=eCUU2y"
                size="md"
                className="w-full mt-3"
              >
                ⚽ QUERO O PACOTE COMPLETO
              </CTAButton>
            </div>
          </div>

          {/* BUDGET — R$9,99 */}
          <div className="reveal delay-1 bg-white/3 border border-white/15 rounded-3xl p-7 flex flex-col">

            <div className="flex justify-center mb-5">
              <div className="relative">
                <div className="absolute inset-0 m-auto w-36 h-36 rounded-full bg-copa-gold/15 blur-[50px]" />
                <img
                  src="capa31.png"
                  alt="Álbum Copa 2026 + Atividades"
                  className="relative z-10 w-40 rounded-xl animate-float2"
                  style={{ filter: 'drop-shadow(0 16px 40px rgba(0,0,0,.5))' }}
                />
              </div>
            </div>

            <span className="inline-block bg-white/10 text-white/70 text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full self-center mb-3">
              Opção Básica
            </span>
            <h3 className="font-display text-[1.5rem] text-white text-center leading-tight tracking-wide mb-2">
              Álbum Copa 2026<br/>+ Atividades da Copa
            </h3>

            <ul className="flex flex-col gap-2 my-4">
              {[
                '📖 Álbum de Colorir Copa 2026',
                '🎁 Bônus 1: Atividades da Copa',
                '⚡ Acesso imediato',
                '🖨️ PDF para imprimir à vontade',
                '🛡️ Garantia de 7 dias',
              ].map(it => (
                <li key={it} className="flex items-center gap-2 text-white/75 text-sm font-semibold">
                  <span className="text-white/50">✅</span> {it}
                </li>
              ))}
              <li className="flex items-center gap-2 text-white/30 text-sm font-semibold line-through">
                <span>❌</span> Bônus 2: Duka Goods
              </li>
            </ul>

            <div className="mt-auto pt-4 border-t border-white/10 text-center">
              <p className="text-white/35 text-sm font-semibold line-through">Separado: R$ 39,98</p>
              <p
                className="font-display text-white/80 my-1"
                style={{ fontSize: 'clamp(2.5rem,7vw,3.2rem)', lineHeight: '.9' }}
              >
                <sup className="text-[38%] align-super mt-2 inline-block">R$</sup>
                9<sup className="text-[38%] align-super mt-2 inline-block">,99</sup>
              </p>
              <CTAButton
                href="https://pay.lowify.com.br/checkout?product_id=t6NWvH"
                variant="gold"
                size="md"
                className="w-full mt-3"
              >
                🎨 SÓ O BÁSICO POR R$9,99
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Anchor nudge */}
        <p className="text-center text-white/40 text-sm font-semibold mt-8 reveal">
          💡 Por apenas <strong className="text-copa-gold">R$10 a mais</strong> você leva o Duka Goods e economiza R$39,98 no total
        </p>
      </div>
    </section>
  )
}
