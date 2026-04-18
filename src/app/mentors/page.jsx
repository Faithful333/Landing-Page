import Nav    from '@/components/Nav'
import Footer  from '@/components/Footer'

export const metadata = {
  title: 'Mentor Brief — Faithful Ventures',
  description: 'Be the mentor you wish you\'d had. Join Faithful Ventures as a mentor for early-stage Christian founders.',
}

const ACTIONS = [
  {
    label: 'Visibility',
    headline: 'Amplify their presence',
    items: [
      'Share or comment on their LinkedIn post from your own profile',
      'Tag them in a relevant thread in your network',
    ],
  },
  {
    label: 'Connections',
    headline: 'Open your network',
    items: [
      'Send a warm intro email — an actual email, not just a name',
      'Invite them to a community or event you\'re already part of',
    ],
  },
  {
    label: 'Execution',
    headline: 'Cut through the fog',
    items: [
      'Review one specific thing and give a clear verdict, not just feedback',
      'Challenge an assumption: "Have you actually tested that?"',
    ],
  },
  {
    label: 'Credibility',
    headline: 'Lend your credibility',
    items: [
      'Write a mid-cohort LinkedIn skill endorsement',
      'Record a short voice note they can share with their network',
    ],
  },
]

const BENEFITS = [
  {
    title: 'Stay sharp',
    body: 'Explaining what you know forces clarity. Articulating hard-won lessons to a fresh mind surfaces things you have forgotten you know.',
  },
  {
    title: 'Stay close to early-stage energy',
    body: 'Especially useful if you advise, invest, or build. Founders in their first year see the market without filters.',
  },
  {
    title: 'Be the person you needed',
    body: 'The chance to be, for someone else, what you wish you\'d had at their age. One mentor changes the trajectory of one founder. That compounds for decades.',
  },
]

export default function MentorPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="mentor-hero">
        <div className="mentor-hero-inner">
          <p className="mentor-eyebrow">Faithful Ventures · Mentor Brief · May Cohort 2026</p>
          <h1 className="mentor-headline">Be the mentor<br />you wish you&apos;d had.</h1>
          <p className="mentor-sub">
            Faithful Ventures is a cohort for early-stage, Christian founders aged 19–30.
            As a mentor, you are the most important person in a founder&apos;s 2-month
            journey — not because you have all the answers, but because you show up
            consistently at a moment that shapes everything.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="mentor-stats-bar">
        <div className="mentor-stat">
          <span className="mentor-stat-value">2mo</span>
          <span className="mentor-stat-label">Cohort length</span>
        </div>
        <div className="mentor-stat-divider" />
        <div className="mentor-stat">
          <span className="mentor-stat-value">0.5h</span>
          <span className="mentor-stat-label">Per week, per founder</span>
        </div>
        <div className="mentor-stat-divider" />
        <div className="mentor-stat">
          <span className="mentor-stat-value">1:1</span>
          <span className="mentor-stat-label">Mentor to founder</span>
        </div>
      </div>

      {/* ── COMMITMENT ── */}
      <section className="mentor-section mentor-section--light">
        <div className="mentor-inner">
          <p className="mentor-section-eyebrow">Your Commitment</p>
          <p className="mentor-commitment-text">
            0.5h call per week with one founder for 2 months.
          </p>
        </div>
      </section>

      {/* ── SESSION BREAKDOWN ── */}
      <section className="mentor-section mentor-section--white">
        <div className="mentor-inner">
          <p className="mentor-section-eyebrow">What happens on each mentor session</p>
          <h2 className="mentor-section-title">Every session ends with one action<br />you own, and one the founder owns.</h2>
          <p className="mentor-section-sub">Depending on what your founder needs, your action might look like:</p>

          <div className="mentor-actions-grid">
            {ACTIONS.map((a, i) => (
              <div key={a.label} className={`mentor-action-card mentor-action-card--${i + 1}`}>
                <p className="mentor-action-label">{a.label}</p>
                <h3 className="mentor-action-headline">{a.headline}</h3>
                <div className="mentor-action-rule" />
                <ul className="mentor-action-list">
                  {a.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLE CLARITY ── */}
      <section className="mentor-section mentor-clarity">
        <div className="mentor-inner">
          <p className="mentor-section-eyebrow">Clarity on the role</p>
          <p className="mentor-clarity-statement">
            You are not a coach, a therapist, a judge, or an investor.
          </p>
          <p className="mentor-clarity-body">
            You are a trusted voice in a young founder&apos;s corner during one of the most
            formative seasons of their life. Your experience is exactly what they need.
          </p>
          <p className="mentor-clarity-body">
            One small action per call, consistently, is more than enough. It is the
            accumulation that changes a founder&apos;s trajectory.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="mentor-section mentor-section--white">
        <div className="mentor-inner">
          <p className="mentor-section-eyebrow">What it gives you</p>
          <div className="mentor-benefits-list">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="mentor-benefit-item">
                <div className="mentor-benefit-number">0{i + 1}</div>
                <div className="mentor-benefit-content">
                  <h3 className="mentor-benefit-title">{b.title}</h3>
                  <div className="mentor-benefit-rule" />
                  <p className="mentor-benefit-body">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mentor-cta">
        <div className="mentor-inner mentor-cta-inner">
          <h2 className="mentor-cta-title">Ready to show up<br />for the next generation?</h2>
          <p className="mentor-cta-body">Register your interest and we&apos;ll be in touch before the May cohort begins.</p>
          <a
            href="https://forms.gle/8JizVfSRvwDhG14W7"
            target="_blank"
            rel="noopener noreferrer"
            className="mentor-cta-btn"
          >
            Register Interest <span>→</span>
          </a>
          <p className="mentor-cta-note">Faithful Ventures · Mentor Brief · May Cohort 2026</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
