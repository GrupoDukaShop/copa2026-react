import { useState } from 'react'
import { SectionHeader } from './ui/SectionHeader'

const albums = [
  {
    id: 'copa',
    label: '⚽ Copa 2026',
    note: '+28 páginas com os principais craques da seleção',
    pages: [
      { src: 'ney.png',            tag: 'Neymar Jr ⚡', tagColor: 'bg-copa-gold text-navy-800' },
      { src: 'pagina_endrick.png', tag: 'Endrick 👑',   tagColor: 'bg-copa-green text-white'  },
    ],
  },
  {
    id: 'atividades',
    label: '🎨 Atividades',
    note: 'Passatempos, labirintos, caça-palavras e muito mais',
    pages: [
      { src: 'at1.png', tag: null },
      { src: 'at2.png', tag: null },
    ],
  },
  {
    id: 'duka',
    label: '📚 Duka Goods',
    note: 'Conteúdo exclusivo da coleção Duka Goods',
    pages: [
      { src: 'duka1.png', tag: null },
      { src: 'duka2.png', tag: null },
    ],
  },
]

export default function Preview() {
  const [active, setActive] = useState('copa')
  const album = albums.find(a => a.id === active)

  return (
    <section className="py-20 md:py-28 px-5 bg-[#F0F4FF]">
      <div className="max-w-4xl mx-auto">
        <div className="reveal">
          <SectionHeader
            label="Veja por dentro"
            title="Algumas páginas dos álbuns"
            body="Traços grossos no estilo HQ — fácil de colorir com lápis, canetinha ou tinta."
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mt-8 mb-8 flex-wrap">
          {albums.map(a => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-150 ${
                active === a.id
                  ? 'bg-navy-800 text-white shadow-md scale-105'
                  : 'bg-white text-navy-700 border border-gray-200 hover:border-navy-700'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 max-w-[580px] mx-auto">
          {album.pages.map((p, i) => (
            <div key={i} className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-card bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <img src={p.src} alt={p.tag || ''} className="w-full h-auto block" />
              </div>
              {p.tag && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm ${p.tagColor}`}>
                  {p.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-semibold text-navy-700/60 mt-5">{album.note}</p>
        <p className="text-center text-xs font-semibold text-gray-400 mt-2">
          ⚠️ Prévia em baixa resolução — o arquivo original tem qualidade total para impressão
        </p>
      </div>
    </section>
  )
}
