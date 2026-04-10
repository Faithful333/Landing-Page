'use client'

import { useState, useEffect } from 'react'

function LogoMark() {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36">
      <line x1="50" y1="8"  x2="50" y2="60"  stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="8"  x2="20" y2="40"  stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="8"  x2="80" y2="40"  stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="48" x2="18" y2="72"  stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="48" x2="82" y2="72"  stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="60" x2="50" y2="112" stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="85" x2="22" y2="108" stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
      <line x1="50" y1="85" x2="78" y2="108" stroke="#05a393" strokeWidth="14" strokeLinecap="round" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark"><LogoMark /></div>
          Faithful Ventures
        </a>
        <a href="#join" className="nav-cta">Join the Ecosystem</a>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-overlay${menuOpen ? ' open' : ''}`}>
        <a href="#pillars" onClick={close}>How We Work</a>
        <a href="#programs" onClick={close}>Get Involved</a>
        <a href="#join" onClick={close}>Join the Ecosystem</a>
      </div>
    </>
  )
}
