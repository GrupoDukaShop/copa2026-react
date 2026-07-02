import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

const WPP_URL = 'https://wa.me/5511975522552?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20livros%20de%20colorir%20da%20DukaShop'

export default function WhatsAppRedirect() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Contact')
    }
    window.location.replace(WPP_URL)
  }, [])

  return (
    <>
      <Analytics />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#25D366' }}>
        <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '1rem' }}>Abrindo WhatsApp…</p>
      </div>
    </>
  )
}
