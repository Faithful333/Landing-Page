import Nav    from '@/components/Nav'
import Footer  from '@/components/Footer'

export const metadata = {
  title: 'Basis of Faith — Faithful Ventures',
  description: 'Faithful Ventures operates under the Evangelical Alliance Statement of Faith, ensuring our message stays Christ-centred.',
}

const BELIEFS = [
  'The one true God who lives eternally in three persons — the Father, the Son and the Holy Spirit.',
  'The love, grace and sovereignty of God in creating, sustaining, ruling, redeeming and judging the world.',
  'The divine inspiration and supreme authority of the Old and New Testament Scriptures, which are the written Word of God — fully trustworthy for faith and conduct.',
  'The dignity of all people, made male and female in God\'s image to love, be holy and care for creation, yet corrupted by sin, which incurs divine wrath and judgement.',
  'The incarnation of God\'s eternal Son, the Lord Jesus Christ — born of the virgin Mary; truly divine and truly human, yet without sin.',
  'The atoning sacrifice of Christ on the cross: dying in our place, paying the price of sin and defeating evil, so reconciling us with God.',
  'The bodily resurrection of Christ, the first fruits of our resurrection; his ascension to the Father, and his reign and mediation as the only Saviour of the world.',
  'The justification of sinners solely by the grace of God through faith in Christ.',
  'The ministry of God the Holy Spirit, who leads us to repentance, unites us with Christ through new birth, empowers our discipleship and enables our witness.',
  'The Church, the body of Christ both local and universal, the priesthood of all believers — given life by the Spirit and endowed with the Spirit\'s gifts to worship God and proclaim the gospel, promoting justice and love.',
  'The personal and visible return of Jesus Christ to fulfil the purposes of God, who will raise all people to judgement, bring eternal life to the redeemed and eternal condemnation to the lost, and establish a new heaven and new earth.',
]

export default function BasisOfFaithPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className="bof-hero">
        <p className="bof-eyebrow">About Us</p>
        <h1 className="bof-title">Basis of Faith</h1>
        <p className="bof-meta">
          We welcome everyone to our events, regardless of their denomination or theological beliefs.
          However, committee members and speakers are required to subscribe to the Evangelical Alliance
          Statement of Faith to ensure our message stays Christ-centred.
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div className="bof-content">
        <div className="bof-rule" />

        <div className="bof-section">
          <h2 className="bof-section-title">
            <span className="bof-section-eyebrow">Statement of Faith</span>
            Evangelical Alliance — We Believe In&hellip;
          </h2>

          <ol className="bof-belief-list">
            {BELIEFS.map((text, i) => (
              <li key={i} className="bof-belief-item">
                <span className="bof-belief-number">{i + 1}</span>
                <p className="bof-belief-text">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Footer />
    </>
  )
}
