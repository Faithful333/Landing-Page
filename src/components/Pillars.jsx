const PILLARS = [
  {
    number: '01',
    tag: 'Invest',
    title: 'We Invest in Young Innovators',
    body: 'We go early — before the pitch deck, before the first hire, often before the idea is fully formed. We enter universities and peer communities to find founders who have the conviction but not yet the clarity, and we give them both: the skills, the people, and the structure to start building something real.',
    image: '/young_investors.jpg',
    imageAlt: 'Young entrepreneurs collaborating',
  },
  {
    number: '02',
    tag: 'Impact',
    title: 'Cultural Transformation',
    body: "We don't separate business excellence from shaping culture — we expect both. The founders we equip are building ventures that win commercially and bear fruit spiritually. Excellence isn't optional; it means building the best version of what God called you to create.",
    image: '/faithful.jpg',
    imageAlt: 'Faithful community gathering',
  },
  {
    number: '03',
    tag: 'Unite',
    title: 'We Connect and Strengthen the Ecosystem',
    body: "Most faith-driven founders are building alone — great idea, strong faith, no one around them who gets it. We change that. As a connective layer, we bring early-stage founders together with aligned co-founders, top mentors, and established institutions — so that no one who is serious about building has to start from scratch.",
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
