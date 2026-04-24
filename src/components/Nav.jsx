'use client'

import { useState, useEffect, useRef } from 'react'

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
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="/" className="nav-logo">
        <div className="nav-logo-mark"><LogoMark /></div>
        Faithful Ventures
      </a>

      <div className="nav-menu-wrap" ref={menuRef}>
        <button
          className={`nav-menu-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="nav-menu-label">Menu</span>
          <span className="nav-menu-icon">
            <span /><span />
          </span>
        </button>

        <div className={`nav-dropdown${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          <a href="#join" className="nav-dropdown-item" onClick={close}>
            <span className="nav-dropdown-num">01</span>
            Join the Ecosystem
          </a>
          <a href="/about" className="nav-dropdown-item" onClick={close}>
            <span className="nav-dropdown-num">02</span>
            About Us
          </a>
          <a href="/mentors" className="nav-dropdown-item" onClick={close}>
            <span className="nav-dropdown-num">03</span>
            For Mentors
          </a>
          <a href="/basis-of-faith" className="nav-dropdown-item" onClick={close}>
            <span className="nav-dropdown-num">04</span>
            Basis of Faith
          </a>
        </div>
      </div>
    </nav>
  )
}
