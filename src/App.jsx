import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'

import Topbar         from './components/Topbar'
import Hero           from './components/Hero'
import StatsBar       from './components/StatsBar'
import Preview        from './components/Preview'
import DukaGoods      from './components/DukaGoods'
import HowItWorks     from './components/HowItWorks'
import Features       from './components/Features'
import Testimonials   from './components/Testimonials'
import Guarantee      from './components/Guarantee'
import Offer          from './components/Offer'
import FAQ            from './components/FAQ'
import FinalCTA       from './components/FinalCTA'
import Footer         from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  useReveal()

  // Meta Pixel ViewContent
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Álbum de Colorir Copa 2026',
        content_category: 'Livro Digital',
        value: 9.99,
        currency: 'BRL',
      })
    }
  }, [])

  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <StatsBar />
        <DukaGoods />
        <Preview />
        <HowItWorks />
        <Testimonials />
        <Features />
        <Guarantee />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
