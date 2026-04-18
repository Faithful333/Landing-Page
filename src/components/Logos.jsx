const LOGOS = [
  { src: '/apple.png',     name: 'Apple'     },
  { src: '/google.png',    name: 'Google'    },
  { src: '/meta.png',      name: 'Meta'      },
  { src: '/microsoft.png', name: 'Microsoft' },
  { src: '/oracle.png',    name: 'Oracle'    },
  { src: '/sequoia.png',   name: 'Sequoia'   },
  { src: '/tesla.png',     name: 'Tesla'     },
]

const TRACK = [...LOGOS, ...LOGOS]

export default function Logos() {
  return (
    <section className="logos">
      <div className="logos-heading-block reveal">
        <h2 className="logos-heading">Mentors who&apos;ve built,<br />raised, and exited.</h2>
        <p className="logos-body">Our mentor network includes founders who have raised institutional capital, scaled to multi-market operations, and navigated successful exits — alongside senior leaders from world-class organisations. Every mentor brings direct, hard-won experience to your venture.</p>
      </div>
      <p className="logos-label">We are backed by executives at:</p>
      <div className="logos-viewport">
        <div className="logos-track">
          {TRACK.map((logo, i) => (
            <div key={i} className="logo-slot">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
