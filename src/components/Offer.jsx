import { CTAButton } from './ui/CTAButton'
import { SectionHeader } from './ui/SectionHeader'

const itemsFull = [
  { ck: '📖', text: 'Álbum de Colorir Copa 2026 (+30 desenhos)' },
  { ck: '🎁', text: 'Bônus 1: Atividades da Copa' },
  { ck: '🎁', text: 'Bônus 2: Duka Goods' },
  { ck: '⚡', text: 'Acesso imediato após a compra' },
  { ck: '🖨️', text: 'PDF — imprima quantas vezes quiser' },
  { ck: '🛡️', text: 'Garantia de 7 dias ou seu dinheiro de volta' },
]

export default function Offer() {
  return (
    <section
      id="oferta"
      className="relative py-20 md:py-28 px-5 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #001035, #0A3070)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-copa-green/10 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-copa-gold/8 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal">
          <SectionHeader
            label="Promoção de lançamento"
            title="Garanta agora antes que volte ao preço normal"
            labelColor="gold"
            titleColor="gold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* FEATURED R$19,99 */}
          <div className="reveal relative bg-white/5 backdrop-blur-sm border-2 border-copa-green/50 rounded-3xl p-8 text-center shadow-[0_0_80px_rgba(0,155,58,.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-copa-green text-white font-display text-sm tracking-wide px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                ⭐ MAIS POPULAR
              </span>
            </div>
            <span className="inline-block bg-copa-green text-white text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mt-2 mb-4">
              🎉 Pacote Completo
            </span>
            <ul className="text-left mb-5 divide-y divide-white/10">
              {itemsFull.map(item => (
                <li key={item.text} className="flex items-start gap-3 py-2.5 text-[13px] font-semibold text-white/90">
                  <span className="flex-shrink-0 mt-px">{item.ck}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="text-white/35 text-sm font-semibold line-through">Separado: R$ 59,97</p>
            <div className="flex items-center justify-center gap-3 my-1">
              <span
                className="font-display text-white animate-pricepop"
                style={{ fontSize: 'clamp(4rem,11vw,6rem)', lineHeight: '.88', textShadow: '0 4px 0 #007A2D' }}
              >
                <sup className="text-[36%] align-super mt-3 inline-block">R$</sup>
                19<sup className="text-[36%] align-super mt-3 inline-block">,99</sup>
              </span>
              <span className="bg-copa-green text-white font-display text-lg w-14 h-14 rounded-full flex items-center justify-center -rotate-12 border-2 border-white/20 flex-shrink-0">
                -67%
              </span>
            </div>
            <p className="text-white/35 text-xs font-semibold mb-5 tracking-wide">
              Pagamento único · para sempre seu
            </p>
            <CTAButton href="https://pay.lowify.com.br/checkout?product_id=eCUU2y" size="lg" className="w-full">
              ⚽ QUERO O PACOTE COMPLETO
            </CTAButton>
            <div className="inline-flex items-center gap-2 bg-copa-green/15 border border-copa-green/35 rounded-xl px-3 py-2.5 mt-4 text-[12px] font-semibold text-white/75">
              <span>🛡️</span>
              <span><strong>Garantia de 7 dias.</strong> Dinheiro de volta sem perguntas.</span>
            </div>
          </div>

          {/* BUDGET R$9,99 */}
          <div className="reveal delay-1 bg-white/3 border border-white/15 rounded-3xl p-8 text-center flex flex-col">
            <span className="inline-block bg-white/10 text-white/60 text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">
              Opção Básica
            </span>
            <ul className="text-left mb-5 divide-y divide-white/10 flex-1">
              {[
                { ck: '📖', text: 'Álbum de Colorir Copa 2026' },
                { ck: '🎁', text: 'Bônus 1: Atividades da Copa' },
                { ck: '⚡', text: 'Acesso imediato' },
                { ck: '🖨️', text: 'PDF para imprimir à vontade' },
                { ck: '🛡️', text: 'Garantia de 7 dias' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 py-2.5 text-[13px] font-semibold text-white/65">
                  <span className="flex-shrink-0 mt-px">{item.ck}</span>
                  {item.text}
                </li>
              ))}
              <li className="flex items-start gap-3 py-2.5 text-[13px] font-semibold text-white/25 line-through">
                <span>❌</span> Bônus 2: Duka Goods
              </li>
            </ul>
            <p className="text-white/30 text-sm font-semibold line-through">Separado: R$ 39,98</p>
            <p
              className="font-display text-white/70 my-1"
              style={{ fontSize: 'clamp(3rem,9vw,4.5rem)', lineHeight: '.9' }}
            >
              <sup className="text-[38%] align-super mt-2 inline-block">R$</sup>
              9<sup className="text-[38%] align-super mt-2 inline-block">,99</sup>
            </p>
            <p className="text-white/30 text-xs font-semibold mb-5 tracking-wide">
              Pagamento único · para sempre seu
            </p>
            <CTAButton href="https://pay.lowify.com.br/checkout?product_id=t6NWvH" variant="gold" size="md" className="w-full">
              🎨 SÓ O BÁSICO POR R$9,99
            </CTAButton>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm font-semibold mt-8 reveal">
          💡 Por apenas <strong className="text-copa-gold">R$10 a mais</strong> você leva o Duka Goods e economiza R$39,98
        </p>
      </div>
    </section>
  )
}
