import Nav    from '@/components/Nav'
import Footer  from '@/components/Footer'

export const metadata = {
  title: 'About — Faithful Ventures',
  description: 'Meet the mentors, founders, and team behind Faithful Ventures.',
}

const MENTORS = [
  'Jack Larkins',
  'Reuben George',
  'Sebastian Harris',
  'Leroy Hite',
  'John Ajah',
  'Hannah Barker',
  'Ian Dibb',
  'Marie-Ange Tagne',
  'Allan Ogwang',
  'Juan Acosta',
  'Luke Whiting',
  'Nick Wilger',
  'Simon Stokes',
  'Freddy Law',
]

const FOUNDERS = [
  { name: 'Antonio Vinter',      venture: 'OnStage — Service Planning for your Church',            linkedin: 'https://www.linkedin.com/in/antonio-vinter/' },
  { name: 'Oleksandr Prosianyk', venture: 'Aimaly — AI Client Acquisition Systems',                linkedin: 'https://www.linkedin.com/in/alexprosianyk/' },
  { name: 'Israel Ogbonna',      venture: 'AI Agents for residential real estate',                  linkedin: 'https://www.linkedin.com/in/israel-ogbonna-u/' },
  { name: 'Quirine Cobben',      venture: 'Prayd — a prayer app for millennials & Gen Z',           linkedin: 'https://www.linkedin.com/in/quirine-cobben-b92a82183/' },
  { name: 'Eve Carole Noumsi',   venture: 'Non-profit organization for Women Empowerment',          linkedin: 'https://www.linkedin.com/in/eve-carole-noumsi/' },
  { name: 'Cameron Lockrey',     venture: 'GigNGo',                                                 linkedin: 'https://www.linkedin.com/in/cameronlockrey/' },
  { name: 'Jeff Nelly',          venture: 'Vaultsplit',                                             linkedin: 'https://www.linkedin.com/in/jeffnelly/' },
]

const TEAM = [
  { name: 'Hannah Barker',  role: 'Strategic Advisor', linkedin: 'https://www.linkedin.com/in/hannah-barker-/' },
  { name: 'Olly Perkins',   role: 'Strategic Advisor', linkedin: 'https://www.linkedin.com/in/oliver-t-perkins/' },
  { name: 'Fernando Munoz', role: 'Co-Founder',        linkedin: 'https://www.linkedin.com/in/fernando-munoz1/' },
  { name: 'Ash Abraham',    role: 'Program Manager',   linkedin: 'https://www.linkedin.com/in/ash-abraham/' },
  { name: 'Jacob Böhm',     role: 'Co-Founder',        linkedin: 'https://www.linkedin.com/in/jacobbohm1/' },
  { name: 'Gracey Ebere',   role: 'Operations',        linkedin: 'https://www.linkedin.com/in/gracey-ebere-a81383351/' },
]

function Initials({ name }) {
  const parts = name.split(' ')
  const letters = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0]
  return <span className="au-avatar-letters">{letters.toUpperCase()}</span>
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="au-hero">
        <div className="au-hero-mesh" aria-hidden="true" />
        <div className="au-hero-glow au-glow-1" aria-hidden="true" />
        <div className="au-hero-glow au-glow-2" aria-hidden="true" />
        <div className="au-hero-inner">
          <p className="au-eyebrow">Faithful Ventures</p>
          <h1 className="au-headline">The people behind<br />the <em>mission.</em></h1>
          <p className="au-sub au-sub--quote">
            Faith and excellence are not in tension. It is the standard God calls us to — and the most powerful witness a Christian founder can have.
          </p>
          <p className="au-sub">
            Our mentors have built at the highest level. Our founders were chosen because they have what it takes to join them.
          </p>
          <div className="au-hero-stats">
            <div className="au-hero-stat">
              <span className="au-stat-num">20</span>
              <span className="au-stat-label">Mentors</span>
              <span className="au-stat-desc">world-class operators, executives, and builders</span>
            </div>
            <div className="au-stat-div" />
            <div className="au-hero-stat">
              <span className="au-stat-num">7</span>
              <span className="au-stat-label">Founders</span>
              <span className="au-stat-desc">handpicked from across Europe and the US</span>
            </div>
            <div className="au-stat-div" />
            <div className="au-hero-stat">
              <span className="au-stat-num au-stat-num--sm">Summer 2026</span>
              <span className="au-stat-label">Cohort 1</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTORS ── */}
      <section className="au-section au-section--dark">
        <div className="au-inner">
          <div className="au-section-hd au-section-hd--centered au-section-hd--light">
            <p className="au-section-eyebrow au-section-eyebrow--light">Our Faithful Mentors</p>
            <h2 className="au-section-title au-section-title--light">Mentors who&apos;ve built,<br />raised, and exited.</h2>
            <p className="au-section-sub au-section-sub--light">
              Experienced founders, investors, and operators who show up
              consistently for the next generation of faith-driven builders.
            </p>
          </div>

          <div className="au-mentors-grid">
            {MENTORS.map((name, i) => (
              <div key={name} className="au-mentor-card">
                <span className="au-mentor-idx">{String(i + 1).padStart(2, '0')}</span>
                <p className="au-mentor-name">{name}</p>
                <div className="au-mentor-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="au-section au-section--white">
        <div className="au-inner">
          <div className="au-section-hd">
            <p className="au-section-eyebrow">Summer Cohort 2026</p>
            <h2 className="au-section-title">Meet the founders.</h2>
            <p className="au-section-sub">
              Seven early-stage founders building ventures at the intersection of
              excellence and Kingdom impact.
            </p>
          </div>

          <div className="au-founders-grid">
            {FOUNDERS.map((f, i) => (
              <a key={f.name} href={f.linkedin} target="_blank" rel="noopener noreferrer" className="au-founder-card">
                <span className="au-card-num">0{i + 1}</span>
                <div className="au-founder-body">
                  <p className="au-founder-name">{f.name}</p>
                  <p className="au-founder-venture">{f.venture}</p>
                </div>
                <div className="au-card-footer">
                  <span className="au-card-link">View LinkedIn <span className="au-card-arrow">↗</span></span>
                </div>
                <div className="au-card-accent" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="au-section au-section--light">
        <div className="au-inner">
          <div className="au-section-hd">
            <p className="au-section-eyebrow">The Team</p>
            <h2 className="au-section-title">The people who<br />make it happen.</h2>
          </div>

          <div className="au-team-grid">
            {TEAM.map((t) => (
              <a key={t.name} href={t.linkedin} target="_blank" rel="noopener noreferrer" className="au-team-card">
                <div className="au-team-top">
                  <span className="au-team-role-tag">{t.role}</span>
                  <span className="au-team-arrow">↗</span>
                </div>
                <div className="au-team-avatar"><Initials name={t.name} /></div>
                <p className="au-team-name">{t.name}</p>
                <div className="au-team-rule" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
