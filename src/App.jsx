import { useState, useEffect, useRef } from 'react'

/* ═══════════════════════════════════════════════════════════════
   ATRIA EDIFICIOS — Landing de Captación de Leads
   Inversión en edificios completos en Madrid
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll reveal hook ────────────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = ref.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

// ── SVG Icons ─────────────────────────────────────────────────
const Icons = {
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22V18h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  ),
  reform: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V8l7-5 7 5v12" />
      <path d="M10 20v-6h4v6" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
}

// ── TopBar ─────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="topbar" id="topbar">
      <div className="topbar__inner">
        <span className="topbar__item">Renta · Revalorización</span>
        <span className="topbar__item">Acceso privado · Inversiones cualificadas</span>
      </div>
    </div>
  )
}

// ── Navigation ────────────────────────────────────────────────
function Navigation({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          Atria <span>Edificios</span>
        </a>
        <button className="nav__cta" onClick={onCtaClick} id="nav-cta">
          <span className="nav__cta-text">Solicitar acceso</span>
        </button>
      </div>
    </nav>
  )
}

// ── Hero Section ──────────────────────────────────────────────
function HeroSection({ onCtaClick }) {
  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow">Operaciones exclusivas · Madrid</div>
          <h1 className="hero__title">
            Operaciones inmobiliarias con <em>rentabilidad real.</em>
          </h1>
          <p className="hero__subtitle">
            Seleccionamos operaciones de obra y llave en mano con rentabilidades reales documentadas,
            referentes con plusvalías por encima del 16% y activos terminados con flujo de caja desde el primer mes.
          </p>
          <div className="hero__cta">
            <button className="btn btn--primary btn--large" onClick={onCtaClick} id="hero-cta">
              Solicitar acceso al portfolio
            </button>
          </div>
          <div className="stats-strip">
            <div className="stats-strip__item">
              <div className="stats-strip__value">+16%</div>
              <div className="stats-strip__label">Plusvalía última<br />operación de oficinas</div>
            </div>
            <div className="stats-strip__item">
              <div className="stats-strip__value">Madrid</div>
              <div className="stats-strip__label">Mercado premium, activos<br />seleccionados</div>
            </div>
            <div className="stats-strip__item">
              <div className="stats-strip__value">Privado</div>
              <div className="stats-strip__label">Portfolio exclusivo bajo<br />criterios</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Descubra</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

// ── Why Section ───────────────────────────────────────────────
function WhySection() {
  const sectionRef = useReveal()

  return (
    <section className="why section" id="por-que" ref={sectionRef}>
      <div className="container">
        <div className="why__header">
          <div className="section-label reveal">¿Por qué invertir con nosotros?</div>
          <div className="divider reveal reveal-delay-1" />
          <p className="why__intro reveal reveal-delay-2">
            Cada activo pasa por un análisis de viabilidad sujeto a ratios de eficiencia del portfolio.
            No apostamos nada que no invertiríamos nosotros mismos.
          </p>
        </div>
        <div className="why__grid reveal reveal-delay-3">
          <div className="why__card" id="card-reformar">
            <div className="why__card-icon">{Icons.reform}</div>
            <h3 className="why__card-title">Edificios para reformar</h3>
            <p className="why__card-desc">
              Activos con potencial de transformación en zonas consolidadas.
              Plusvalía neta superior al 16%, con reforma y venta o reposicionamiento.
            </p>
          </div>
          <div className="why__card" id="card-rentabilidad">
            <div className="why__card-icon">{Icons.building}</div>
            <h3 className="why__card-title">Edificios en rentabilidad</h3>
            <p className="why__card-desc">
              Activos ya operativos con contratos de alquiler vigentes.
              Rentabilidad estable y flujo de caja predecible desde el momento de la adquisición.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Process Section ───────────────────────────────────────────
function ProcessSection() {
  const sectionRef = useReveal()

  const steps = [
    'Compartirás tu información con tu perfil inversor, volumen estimado, tipo de operación y horizonte temporal.',
    'Revisamos tu candidatura: matcheamos con el tipo de operación más adecuada y te damos acceso al dossier restringido.',
    'Activo potencial con métricas financieras, estado de activo, proyección de rentabilidad y condiciones de entrada.',
  ]

  return (
    <section className="process section" id="proceso" ref={sectionRef}>
      <div className="container">
        <div className="process__header">
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>
            Cómo trabajamos
          </div>
          <div className="divider divider--center reveal reveal-delay-1" />
          <p className="process__intro reveal reveal-delay-2">
            Trabajamos con un número limitado de inversores para proteger la confidencialidad
            de las operaciones y la agilidad en la toma de decisiones.
          </p>
        </div>
        <div className="process__steps">
          {steps.map((text, i) => (
            <div className="process__step reveal reveal-delay-2" key={i} id={`step-${i + 1}`}>
              <div className="process__step-number">{i + 1}</div>
              <p className="process__step-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonial Section ───────────────────────────────────────
function TestimonialSection() {
  const sectionRef = useReveal()

  return (
    <section className="testimonial" id="testimonial" ref={sectionRef}>
      <div className="container">
        <div className="testimonial__inner">
          <p className="testimonial__quote reveal">
            Llevábamos tiempo buscando operaciones en Madrid no ordinarias, ocultas, reales. Aquí encontramos
            los activos que encajaban exactamente con nuestro perfil. El proceso fue muy ágil.
          </p>
          <div className="testimonial__author reveal reveal-delay-1">
            — Inversor privado, family office, Madrid
          </div>
        </div>
      </div>
    </section>
  )
}

// ── CTA Section ───────────────────────────────────────────────
function CtaSection({ onCtaClick }) {
  const sectionRef = useReveal()

  return (
    <section className="cta-section section" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-section__inner">
          <h2 className="cta-section__title reveal">Solicita acceso al portfolio</h2>
          <p className="cta-section__subtitle reveal reveal-delay-1">
            Sin compromiso. Revisamos tu perfil y te contactamos en menos de 48 horas.
          </p>
          <div className="reveal reveal-delay-2">
            <button className="btn btn--primary btn--large" onClick={onCtaClick} id="cta-btn">
              Quiero ver las operaciones
            </button>
          </div>
          <div className="cta-section__trust reveal reveal-delay-3">
            <div className="cta-section__trust-item">
              <span className="cta-section__trust-icon">{Icons.shield}</span>
              <span className="cta-section__trust-text">
                Información confidencial. Acceso restringido a inversores cualificados.
              </span>
            </div>
            <div className="cta-section__trust-item">
              <span className="cta-section__trust-icon">{Icons.lock}</span>
              <span className="cta-section__trust-text">
                Sin compromiso ni obligación comercial. Acceso exclusivo al catálogo bajo criterios.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── WIZARD FORM (fields one by one with progress bar) ─────────
const WIZARD_STEPS = [
  {
    key: 'name',
    label: 'Nombre completo',
    type: 'text',
    placeholder: 'Tu nombre y apellidos',
    required: true,
  },
  {
    key: 'email',
    label: 'Email profesional',
    type: 'email',
    placeholder: 'nombre@empresa.com',
    required: true,
  },
  {
    key: 'phone',
    label: 'Teléfono',
    type: 'tel',
    placeholder: '+34 600 000 000',
    hint: '⚠️ Verificaremos este número de teléfono antes de darte acceso.',
    required: false,
  },
  {
    key: 'profile',
    label: 'Perfil inversor',
    type: 'select',
    options: [
      { value: '', label: 'Selecciona tu perfil' },
      { value: 'Particular', label: 'Inversor particular' },
      { value: 'Family Office', label: 'Family office' },
      { value: 'Fondo', label: 'Fondo de inversión' },
      { value: 'Socimi/REIT', label: 'Socimi / REIT' },
      { value: 'Promotor', label: 'Promotor inmobiliario' },
      { value: 'Otro', label: 'Otro' },
    ],
    required: true,
  },
  {
    key: 'operationType',
    label: 'Tipo de operación que buscas',
    type: 'select',
    options: [
      { value: '', label: 'Selecciona tipo de operación' },
      { value: 'Reforma + Venta', label: 'Edificio para reformar y vender' },
      { value: 'Reforma + Alquiler', label: 'Edificio para reformar y alquilar' },
      { value: 'Rentabilidad', label: 'Edificio en rentabilidad (ya alquilado)' },
      { value: 'Uso propio', label: 'Uso propio / sede corporativa' },
      { value: 'Cualquiera', label: 'Abierto a cualquier operación' },
    ],
    required: true,
  },
  {
    key: 'volume',
    label: 'Volumen orientativo (€)',
    type: 'select',
    options: [
      { value: '', label: 'Selecciona rango de inversión' },
      { value: '500k-1M', label: '500.000€ — 1M€' },
      { value: '1M-3M', label: '1M€ — 3M€' },
      { value: '3M-5M', label: '3M€ — 5M€' },
      { value: '5M-10M', label: '5M€ — 10M€' },
      { value: '10M+', label: '+10M€' },
    ],
    required: true,
  },
]

function WizardForm() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', profile: '', operationType: '', volume: ''
  })

  const totalSteps = WIZARD_STEPS.length
  const currentConfig = WIZARD_STEPS[step]
  const progress = ((step + 1) / totalSteps) * 100

  const isCurrentValid = () => {
    const val = formData[currentConfig.key]
    if (!currentConfig.required) return true
    if (!val || val.trim() === '') return false
    // Email must contain @
    if (currentConfig.key === 'email' && !val.includes('@')) return false
    return true
  }

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [currentConfig.key]: e.target.value })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isCurrentValid()) {
      e.preventDefault()
      if (step < totalSteps - 1) {
        handleNext()
      }
    }
  }

  const handleSubmit = async () => {
    if (!isCurrentValid()) return
    setStatus('submitting')

    // GTM dataLayer event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_form_submit',
        formType: 'edificios_access_request',
        investorProfile: formData.profile,
        operationType: formData.operationType,
      })
    }

    try {
      const resp = await fetch('/api/kommo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (resp.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="wizard">
        <div className="wizard__success">
          <div className="wizard__success-icon">✦</div>
          <h3 className="wizard__success-title">Solicitud recibida</h3>
          <p className="wizard__success-text">
            Gracias por tu interés. Revisaremos tu perfil y te contactaremos en menos de 48 horas
            con las operaciones más adecuadas para ti.
          </p>
        </div>
      </div>
    )
  }

  const isLast = step === totalSteps - 1

  return (
    <>
      {/* Progress Bar */}
      <div className="wizard-progress">
        <div className="wizard-progress__bar-bg">
          <div
            className="wizard-progress__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="wizard-progress__label">
          Paso {step + 1} de {totalSteps}
        </div>
      </div>

      {/* Wizard Card */}
      <div className="wizard">
        <div className="wizard__step" key={step}>
          <label className="wizard__label">{currentConfig.label}</label>

          {currentConfig.type === 'select' ? (
            <select
              className="wizard__select"
              value={formData[currentConfig.key]}
              onChange={handleChange}
              autoFocus
            >
              {currentConfig.options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="wizard__input"
              type={currentConfig.type}
              placeholder={currentConfig.placeholder}
              value={formData[currentConfig.key]}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required={currentConfig.required}
              autoFocus
            />
          )}

          {currentConfig.hint && (
            <span className="wizard__hint">{currentConfig.hint}</span>
          )}

          {status === 'error' && isLast && (
            <p className="wizard__error">Error al enviar. Por favor, inténtalo de nuevo.</p>
          )}

          <div className="wizard__nav">
            {step > 0 && (
              <button
                type="button"
                className="wizard__btn wizard__btn--back"
                onClick={handleBack}
              >
                Atrás
              </button>
            )}
            {!isLast ? (
              <button
                type="button"
                className="wizard__btn wizard__btn--next"
                onClick={handleNext}
                disabled={!isCurrentValid()}
              >
                Continuar
              </button>
            ) : (
              <button
                type="button"
                className="wizard__btn wizard__btn--submit"
                onClick={handleSubmit}
                disabled={!isCurrentValid() || status === 'submitting'}
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar solicitud de acceso'}
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="wizard__privacy">
        Al enviar esta solicitud, aceptas la política de privacidad de Atria Edificios.
      </p>
    </>
  )
}

// ── Form Section ──────────────────────────────────────────────
function FormSection() {
  const sectionRef = useReveal()

  return (
    <section className="form-section" id="solicitud" ref={sectionRef}>
      <div className="container">
        <div className="form-section__inner">
          <div className="form-section__header reveal">
            <h2 className="form-section__title">Solicitud de acceso</h2>
            <p className="form-section__subtitle">
              Cuéntanos brevemente tu perfil. Con esta información podemos evaluar qué operaciones
              del portfolio son más adecuadas para ti.
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <WizardForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            Atria <span>Edificios</span>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">Privacidad</a>
            <a href="#" className="footer__link">Legal</a>
          </div>
          <div className="footer__legal">
            © {new Date().getFullYear()} Atria Edificios. Todos los derechos reservados.
          </div>
          <div className="footer__disclaimer">
            Este acceso está destinado exclusivamente a inversores o compradores con capacidad para analizar y asumir
            los riesgos asociados a la inversión inmobiliaria. La información contenida en el portfolio es de uso
            privado y su divulgación es confidencial, y no constituye un asesoramiento u oferta de inversión.
            Las rentabilidades pasadas no garantizan resultados futuros.
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── WhatsApp Button ───────────────────────────────────────────
function WhatsAppButton() {
  const phoneNumber = '34919934639'
  const message = 'Hola, me interesa conocer las operaciones de edificios disponibles en Madrid.'

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      id="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      {Icons.whatsapp}
      <span className="whatsapp-btn__tooltip">¿Hablamos?</span>
    </a>
  )
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const scrollToForm = () => {
    const form = document.getElementById('solicitud')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <TopBar />
      <Navigation onCtaClick={scrollToForm} />
      <main>
        <HeroSection onCtaClick={scrollToForm} />
        <WhySection />
        <ProcessSection />
        <TestimonialSection />
        <CtaSection onCtaClick={scrollToForm} />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
