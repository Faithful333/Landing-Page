const WAYS = [
  {
    number: '01',
    tag: 'Gospel Patronage',
    title: 'Gospel Patronage',
    body: 'Founders of high-growth tech ventures could donate a portion of personal earnings at company sale or IPO — 5% of earnings under $1M and 50% of earnings over $1M. We do not recommend donations from company profits or revenue.',
  },
  {
    number: '02',
    tag: 'Missional Ventures',
    title: 'Missional Ventures',
    body: 'Build ventures that disciple directly — products, platforms, and organisations with spiritual formation at their core.',
  },
  {
    number: '03',
    tag: 'Culture Shapers',
    title: 'Culture Shapers',
    body: 'We are excited about supporting high-growth tech companies that directly pave the way for the Gospel — shaping institutions, media, or public discourse so that Christian witness finds more receptive ground.',
  },
]

export default function ImpactWays() {
  return (
    <section className="impact-ways" id="impact-ways">
      <div className="impact-ways-inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Framework</p>
          <h2 className="section-title">Three ways entrepreneurs<br />have an impact</h2>
          <p className="impact-ways-attribution">Adapted from Fruitful Work&apos;s Career Choice model</p>
          <p className="impact-ways-intro">Not every founder is called the same way. We believe entrepreneurship serves the Gospel through three distinct but complementary paths, and we encourage our founders in all three.</p>
        </div>
        <div className="pillars-grid">
          {WAYS.map((w, i) => (
            <div key={w.number} className={`pillar reveal reveal-d${i + 1}`}>
              <div className="pillar-bar" />
              <span className="pillar-number">{w.number}</span>
              <span className="pillar-tag">{w.tag}</span>
              <h3 className="pillar-title">{w.title}</h3>
              <div className="pillar-rule" />
              <p className="pillar-body">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
