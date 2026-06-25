const isCheckout = href => typeof href === 'string' && href.includes('pay.lowify.com.br/checkout')

const getProductId = href => {
  try { return new URL(href).searchParams.get('product_id') || '' } catch { return '' }
}

const prices = { eCUU2y: 19.99, t6NWvH: 9.99 }

function trackCheckout(href) {
  if (!isCheckout(href) || typeof window === 'undefined' || !window.fbq) return
  const pid = getProductId(href)
  window.fbq('track', 'InitiateCheckout', {
    value: prices[pid] ?? 9.99,
    currency: 'BRL',
    num_items: 1,
    content_ids: [pid],
  })
}

export function CTAButton({ href, children, size = 'md', variant = 'green', className = '', onClick }) {
  const sizes = {
    sm: 'text-base px-6 py-3.5',
    md: 'text-lg px-8 py-4',
    lg: 'text-xl px-10 py-5',
  }
  const variants = {
    green: 'bg-gradient-to-br from-copa-green-g to-copa-green text-white shadow-[0_8px_24px_rgba(0,155,58,.40)] hover:shadow-[0_14px_36px_rgba(0,155,58,.55)] hover:-translate-y-1',
    gold:  'bg-gradient-to-br from-copa-gold to-copa-gold-d text-navy-800 shadow-[0_8px_24px_rgba(254,223,0,.35)] hover:shadow-[0_14px_36px_rgba(254,223,0,.5)] hover:-translate-y-1',
    pink:  'bg-gradient-to-br from-[#FF5AA8] to-copa-pink text-white shadow-[0_8px_24px_rgba(255,45,135,.4)] hover:shadow-[0_14px_36px_rgba(255,45,135,.5)] hover:-translate-y-1',
  }
  return (
    <a
      href={href}
      onClick={e => { trackCheckout(href); onClick?.(e) }}
      className={`
        btn-shine inline-flex items-center justify-center gap-2
        font-display tracking-wide rounded-2xl
        transition-all duration-150 active:translate-y-0
        ${sizes[size]} ${variants[variant]} ${className}
      `}
    >
      {children}
    </a>
  )
}
