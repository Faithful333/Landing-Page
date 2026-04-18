'use client'

import { useState, useEffect, useRef } from 'react'
import { getDb } from '@/lib/supabase'

const REASONS = [
  'Connect with faith-driven founders and builders',
  'Access our curated ecosystem of top industry leaders',
  'Get early invites to pitch events and cohort programs',
]

export default function JoinForm() {
  const [interest, setInterest]   = useState('Email List')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [status, setStatus]       = useState('idle')
  const [errors, setErrors]       = useState({})
  const eyebrowRef                = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      setInterest(e.detail)
      if (eyebrowRef.current) {
        eyebrowRef.current.textContent = `Register Interest — ${e.detail}`
      }
    }
    window.addEventListener('set-interest', handler)
    return () => window.removeEventListener('set-interest', handler)
  }, [])

  function validate() {
    const e = {}
    if (!firstName.trim()) e.firstName = true
    if (!lastName.trim())  e.lastName  = true
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = true
    return e
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await getDb().from('signups').insert([{
        first_name: firstName.trim(),
        last_name:  lastName.trim(),
        email:      email.trim(),
        interest,
      }])
      if (res.error && res.error.code !== '23505') {
        console.error('Supabase error:', res.error)
        throw res.error
      }
      setStatus('success')
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="cta-section" id="join">
      <div className="cta-bg-text">Join</div>
      <div className="cta-container">

        {/* Left — copy */}
        <div className="cta-left reveal">
          <p className="cta-eyebrow" ref={eyebrowRef}>Join the Movement</p>
          <h2 className="cta-title">
            We exist to increase<br />everyone&apos;s <em>impact.</em>
          </h2>
          <p className="cta-body">
            If you&apos;re serious about building — but haven&apos;t found a community that takes both your faith and your ambition seriously — you&apos;re in the right place.
          </p>
          <ul className="cta-reasons">
            {REASONS.map(r => (
              <li key={r} className="cta-reason">
                <span className="cta-reason-dot" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="cta-right reveal reveal-d2">
          {status === 'success' ? (
            <div className="cta-form-card">
              <div className="form-success">
                <div className="form-success-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="form-success-title">You&apos;re in.</p>
                  <p className="form-success-body">We&apos;ll be in touch soon.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="cta-form-card">
              <p className="cta-form-heading">Get connected</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="cta-input-row">
                  <div className="cta-field">
                    <label htmlFor="fn">First name</label>
                    <input
                      id="fn"
                      type="text"
                      className={`cta-input${errors.firstName ? ' cta-input-error' : ''}`}
                      placeholder="John"
                      autoComplete="given-name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="cta-field">
                    <label htmlFor="ln">Last name</label>
                    <input
                      id="ln"
                      type="text"
                      className={`cta-input${errors.lastName ? ' cta-input-error' : ''}`}
                      placeholder="Smith"
                      autoComplete="family-name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="cta-field">
                  <label htmlFor="em">Email address</label>
                  <input
                    id="em"
                    type="email"
                    className={`cta-input${errors.email ? ' cta-input-error' : ''}`}
                    placeholder="john@example.com"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  className="cta-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Join the Ecosystem →'}
                </button>
                <p className="cta-note">No spam, ever. Unsubscribe any time.</p>
              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
