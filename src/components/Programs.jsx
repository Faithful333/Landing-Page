'use client'

const PROGRAMS = [
  {
    type: 'featured',
    subtitle: 'Pitch Event',
    title: 'Apply to Our Next Pitch Event',
    body: 'A small number of faith-driven early-stage founders pitch to our network — getting feedback from experienced founders, sharpening their story, finding co-founders, and gaining visibility.',
    benefits: [
      'Pitch to a curated network of mentors',
      'Receive direct, honest feedback on your venture',
      'Find aligned co-founders and talent to join',
      'Gain visibility across the faith-driven ecosystem',
    ],
    interest: 'Pitch Event',
  },
  {
    type: 'secondary',
    subtitle: 'Venture Builder Cohort',
    title: '8-Week Venture Builder Cohort',
    body: 'An intensive, cohort-based program designed to turn your vision into execution. We provide mentorship from a world-class network of successful founders and industry leaders, and help you find customers.',
    benefits: [
      'Mentorship from experienced faith-driven entrepreneurs',
      'Connections with aligned talent and partners',
      'Reduce early-stage execution risk with proven frameworks',
      'Gain visibility across our global ecosystem',
    ],
    interest: 'Venture Builder Cohort',
  },
]

function handleInterest(interest) {
  window.dispatchEvent(new CustomEvent('set-interest', { detail: interest }))
  const joinSection = document.getElementById('join')
  if (joinSection) joinSection.scrollIntoView({ behavior: 'smooth' })
}

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programs-inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Get Involved</p>
          <h2 className="section-title">Two Ways to<br />Build With Us.</h2>
        </div>
        <div className="programs-grid">
          {PROGRAMS.map((p, i) => (
            <div key={p.type} className={`program-card ${p.type} reveal reveal-d${i + 1}`}>
              <div className="card-bar" />
              {p.type === 'featured' && <span className="card-featured-badge">Featured</span>}
              <p className="program-subtitle">{p.subtitle}</p>
              <h3 className="program-title">{p.title}</h3>
              <div className="program-rule" />
              <p className="program-body">{p.body}</p>
              <ul className="program-benefits">
                {p.benefits.map(b => <li key={b}>{b}</li>)}
              </ul>
              <button
                className="program-cta"
                onClick={() => handleInterest(p.interest)}
              >
                Register Interest <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
