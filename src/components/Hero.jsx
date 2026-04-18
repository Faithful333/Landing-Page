export default function Hero() {
  return (
    <section className="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="hero-content">
        <div className="hero-rule" />
        <p className="hero-eyebrow">Faith-Driven Innovation Ecosystem</p>
        <h1 className="hero-title">
          We <em>Go</em> Early.<br />
          We <em>Equip</em> Founders.<br />
          We <span className="gold">Multiply</span> What Exists.
        </h1>
        <p className="hero-subtitle">
          Finding the right people, the right structure, and the right moment to start is hard. We exist to remove those barriers — for founders who are serious about both their calling and their craft.
        </p>
        <div className="hero-actions">
          <a href="#join" className="btn-primary">
            Join the Ecosystem <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
