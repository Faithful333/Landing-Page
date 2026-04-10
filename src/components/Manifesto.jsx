export default function Manifesto() {
  return (
    <div className="manifesto">
      <div className="manifesto-line top" />
      <div className="manifesto-line bottom" />
      <div className="manifesto-inner reveal">
        <p className="manifesto-label">Our Conviction</p>
        <p className="manifesto-text">
          &ldquo;Faith-driven founders building impactful ventures will be{' '}
          <strong>the most powerful force for cultural transformation</strong>
          <em style={{ color: 'var(--gold)', fontWeight: 600 }}>
            {' '}of our generation. We exist to make that inevitable.
          </em>&rdquo;
        </p>
      </div>
    </div>
  )
}
