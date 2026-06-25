import { CTAButton } from './ui/CTAButton'

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 md:py-28 px-5 text-center overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #007A2D, #009B3A)' }}
    >
      {/* Stripe overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0 22px, rgba(255,255,255,.04) 22px 23px)' }}
      />

      <div className="relative z-10">
        <h2 className="font-display text-[clamp(2.2rem,7vw,4rem)] text-white mb-3 tracking-wide leading-tight">
          ⚽ Bora pro Hexa!
        </h2>
        <p className="text-white/90 text-lg font-semibold mb-8 max-w-[520px] mx-auto">
          Garanta o pacote completo com álbum + 2 bônus por apenas R$19,99.
          Acesso imediato, imprima à vontade!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <CTAButton
            href="https://pay.lowify.com.br/checkout?product_id=eCUU2y"
            variant="gold"
            size="lg"
          >
            ⚽ PACOTE COMPLETO — R$19,99
          </CTAButton>
          <CTAButton
            href="https://pay.lowify.com.br/checkout?product_id=t6NWvH"
            variant="pink"
            size="lg"
          >
            🎨 SÓ O BÁSICO — R$9,99
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
