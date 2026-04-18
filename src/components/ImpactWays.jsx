const WAYS = [
  {
    number: '01',
    tag: 'Founding to Give',
    title: 'Founding to Give',
    body: 'Founders of high-growth tech ventures can have a larger impact by donating a small fraction of personal earnings at company sale or IPO.',
  },
  {
    number: '02',
    tag: 'Missional Ventures',
    title: 'Missional Ventures',
    body: 'Founders in our cohort build ventures that disciple directly, products, and organisations with spiritual formation at their core.',
  },
  {
    number: '03',
    tag: 'Culture Shapers',
    title: 'Culture Shapers',
    body: 'We are also excited about supporting high-growth ventures that directly pave the way for the Gospel, shaping institutions, media, or public discourse.',
  },
]

export default function ImpactWays() {
  return (
    <section className="impact-ways" id="impact-ways">
      <div className="impact-ways-inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Our Focus</p>
          <h2 className="section-title">What do we mean<br />by impact?</h2>
          <p className="impact-ways-intro">Not every founder is called the same way. We believe entrepreneurship serves the Gospel through three distinct but complementary paths, and we encourage our founders in all three.</p>
        </div>
        <div className="impact-ways-list">
          {WAYS.map((w, i) => (
            <div key={w.number} className={`impact-way-item reveal reveal-d${i + 1}`}>
              <div className="impact-way-number">{w.number}</div>
              <div className="impact-way-content">
                <h3 className="impact-way-title">{w.title}</h3>
                <div className="impact-way-rule" />
                <p className="impact-way-body">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="impact-ways-attribution">Original framework by Fruitful Work</p>
      </div>
    </section>
  )
}
