import { CTAButton } from './ui/CTAButton'

const bundle = [
  {
    tag: '📖 Produto Principal',
    tagColor: 'bg-copa-green',
    title: 'Álbum de Colorir Copa 2026',
    desc: '+30 desenhos dos 26 craques da Seleção Brasileira em estilo HQ. PDF pronto para imprimir à vontade.',
    items: ['+30 desenhos dos jogadores', '26 convocados da Seleção', 'Estádios e taças da Copa', 'PDF imprimível à vontade'],
    value: 'R$ 29,99',
  },
  {
    tag: '🎁 Bônus 1',
    tagColor: 'bg-copa-gold text-navy-800',
    title: 'Atividades da Copa',
    desc: 'Passatempos, caça-palavras, labirintos e muito mais — tudo no tema Copa 2026 para a criançada se divertir!',
    items: ['Caça-palavras', 'Labirintos', 'Passatempos temáticos', 'Diversão garantida'],
    value: 'R$ 9,99',
  },
  {
    tag: '🎁 Bônus 2',
    tagColor: 'bg-copa-pink',
    title: 'Duka Goods',
    desc: 'Um pacote com vários produtos extras — mais desenhos, mais diversão para a criançada pintar à vontade!',
    items: ['Vários produtos inclusos', 'Desenhos extras HQ', 'Estilo cartoon', 'PDF para imprimir'],
    value: 'R$ 19,99',
  },
]

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
          <span className="inline-flex items-center gap-2 bg-copa-gold/15 border border-copa-gold/40 text-copa-gold font-display text-base tracking-wide px-5 py-2.5 rounded-full mb-4">
            🎉 Tudo que você leva por R$9,99
          </span>
          <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-[.95] tracking-wide text-white mt-3">
            O pacote completo da{' '}
            <em className="not-italic text-copa-gold" style={{ WebkitTextStroke: '1px #E0C400' }}>
              Copa 2026
            </em>
          </h2>
          <p className="text-white/65 text-base font-medium mt-3 max-w-lg mx-auto">
            Compre uma vez e leve tudo — álbum principal + 2 bônus exclusivos
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bundle.map((item, i) => (
            <div
              key={i}
              className={`reveal bg-white/5 border rounded-2xl p-6 flex flex-col gap-4 ${i === 0 ? 'border-copa-green/50 shadow-[0_0_40px_rgba(0,155,58,.15)]' : 'border-white/15'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={`${item.tagColor} text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full self-start`}>
                {item.tag}
              </span>
              <div>
                <h3 className="font-display text-[1.3rem] text-white leading-tight tracking-wide mb-1.5">
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <ul className="flex flex-col gap-1.5 mt-auto">
                {item.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-white/85 text-sm font-semibold">
                    <span className="text-copa-green-g">✅</span> {it}
                  </li>
                ))}
              </ul>
              <p className="text-white/35 text-xs font-bold tracking-wide line-through mt-1">
                Valor separado: {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Total + CTA */}
        <div className="reveal text-center bg-white/5 border border-copa-gold/30 rounded-3xl p-8 md:p-12 max-w-xl mx-auto">
          <p className="text-white/50 text-sm font-semibold line-through mb-1">Valor total: R$ 59,97</p>
          <p className="text-copa-gold font-display text-lg tracking-wide mb-1">Hoje você leva tudo por</p>
          <p
            className="font-display text-white animate-pricepop"
            style={{
              fontSize: 'clamp(4rem,12vw,6rem)',
              lineHeight: '.9',
              textShadow: '0 4px 0 #007A2D, 0 8px 24px rgba(0,155,58,.4)',
            }}
          >
            <sup className="text-[36%] align-super mt-3 inline-block">R$</sup>
            9<sup className="text-[36%] align-super mt-3 inline-block">,99</sup>
          </p>
          <p className="text-white/40 text-xs font-semibold mt-2 mb-7 tracking-wide">
            Pagamento único · acesso imediato · PDF para imprimir à vontade
          </p>
          <CTAButton
            href="https://pay.lowify.com.br/checkout?product_id=eCUU2y"
            size="lg"
            className="w-full sm:w-auto"
          >
            ⚽ QUERO O PACOTE COMPLETO
          </CTAButton>
          <p className="text-white/40 text-xs font-bold tracking-wide mt-4">
            🛡️ Garantia de 7 dias · dinheiro de volta sem perguntas
          </p>
        </div>
      </div>
    </section>
  )
}
