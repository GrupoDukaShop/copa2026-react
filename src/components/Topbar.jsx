import { useState, useEffect } from 'react'

const DURATION = 30 * 60 * 1000
const KEY = 'copa26_react_end'

function getEnd() {
  try {
    const saved = parseInt(localStorage.getItem(KEY))
    if (saved && saved > Date.now()) return saved
  } catch (_) {}
  const end = Date.now() + DURATION
  try { localStorage.setItem(KEY, end) } catch (_) {}
  return end
}

export default function Topbar() {
  const [time, setTime] = useState('29:59')

  useEffect(() => {
    let end = getEnd()
    const tick = () => {
      const diff = end - Date.now()
      if (diff <= 0) {
        end = Date.now() + DURATION
        try { localStorage.setItem(KEY, end) } catch (_) {}
      }
      const d = Math.max(0, end - Date.now())
      const m = Math.floor(d / 60000).toString().padStart(2, '0')
      const s = Math.floor((d % 60000) / 1000).toString().padStart(2, '0')
      setTime(`${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="sticky top-0 z-50 bg-navy-800 border-b-2 border-copa-green flex items-center justify-center gap-2 flex-wrap px-4 py-2.5 text-sm font-semibold text-white">
      <span>⏰</span>
      <span>Oferta de lançamento expira em</span>
      <span
        className="bg-copa-green text-white font-display text-xl px-4 py-0.5 rounded-full min-w-[84px] text-center tracking-widest shadow-[0_0_16px_rgba(0,200,83,.4)]"
      >
        {time}
      </span>
      <span className="text-white/60 text-xs font-medium">· depois volta para R$59,97</span>
    </div>
  )
}
