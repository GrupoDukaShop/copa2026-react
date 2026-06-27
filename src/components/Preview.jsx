import { SectionHeader } from './ui/SectionHeader'

const pages = [
  { src: 'ney.png', alt: 'Neymar Jr', tag: 'Neymar Jr ⚡', tagColor: 'bg-copa-gold text-navy-800' },
  { src: 'pagina_endrick.png', alt: 'Endrick',    tag: 'Endrick 👑',    tagColor: 'bg-copa-green text-white'   },
]

export default function Preview() {
  return (
    <section className="py-20 md:py-28 px-5 bg-[#F0F4FF]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Veja por dentro"
            title="Algumas páginas do álbum"
            body="Traços grossos no estilo HQ — fácil de colorir com lápis, canetinha ou tinta."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[820px] mx-auto mt-11">
          {pages.map((p, i) => (
            <div
              key={i}
              className={`reveal ${i === 0 ? 'delay-1' : 'delay-2'} relative`}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-card aspect-[3/4] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
              </div>
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap ${p.tagColor}`}>
                {p.tag}
              </span>
            </div>
          ))}

          {/* More pages card */}
          <div className="reveal delay-3 rounded-2xl border-2 border-dashed border-copa-green bg-copa-green/5 aspect-[3/4] flex flex-col items-center justify-center gap-2 text-center p-6">
            <span className="text-4xl">🎨</span>
            <span className="font-display text-[1.7rem] text-navy-800 leading-tight">+28 páginas<br />te esperando</span>
            <span className="text-xs font-semibold text-gray-400">craques, estádios, taças e bolas</span>
          </div>
        </div>

        <p className="text-center text-xs font-semibold text-gray-400 mt-5">
          ⚠️ Prévia em baixa resolução — o arquivo original tem qualidade total para impressão
        </p>
      </div>
    </section>
  )
}
