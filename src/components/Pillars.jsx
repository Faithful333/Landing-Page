const PILLARS = [
  {
    number: '01',
    tag: 'Invest',
    title: 'We Invest in Young Innovators',
    body: 'We go early — before the pitch deck, before the first hire. We enter universities and peer communities to find and form the next generation of faith-driven founders, equipping them with skills, connections, and mentorship to build world-class ventures.',
    image: '/young_investors.jpg',
    imageAlt: 'Young entrepreneurs collaborating',
  },
  {
    number: '02',
    tag: 'Impact',
    title: 'We Prioritise Missional Impact',
    body: 'Business metrics are as important as missional impact — because discipling culture, reflecting the Gospel, and living radically generous lives are not afterthoughts. They are the standard we hold ourselves to. The ventures most worth building are the ones that count in eternity, not just on a balance sheet.',
    image: '/faithful.jpg',
    imageAlt: 'Faithful community gathering',
  },
  {
    number: '03',
    tag: 'Unite',
    title: 'We Connect and Strengthen the Ecosystem',
    body: "We exist to increase everyone's impact. As a connective layer, we bring early-stage faith-driven founders together with accelerators, mentors, and established institutions — so that every partnership strengthens what already exists and expands what becomes possible together.",
    image: '/mentors.jpeg',
    imageAlt: 'Mentors in discussion',
  },
]

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="section-header reveal">
        <p className="section-eyebrow">How We Work</p>
        <h2 className="section-title">Three Pillars.<br />One Mission.</h2>
      </div>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <div key={p.number} className={`pillar reveal reveal-d${i + 1}`}>
            <div className="pillar-bar" />
            <div className="pillar-image">
              <img src={p.image} alt={p.imageAlt} />
              <div className="pillar-image-overlay">
                <span className="pillar-number">{p.number}</span>
                <span className="pillar-tag">{p.tag}</span>
              </div>
            </div>
            <div className="pillar-body-wrap">
              <h3 className="pillar-title">{p.title}</h3>
              <div className="pillar-rule" />
              <p className="pillar-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
