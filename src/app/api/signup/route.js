import { NextResponse } from 'next/server'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz--L1a7f-8m1jucIiZQ0mr1jgvbTWMQpOGf_L0wVIJrz2yTVehdNwhj8yDGtCed-Dt/exec'

export async function POST(req) {
  try {
    const { firstName, lastName, email, interest } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const res = await fetch(APPS_SCRIPT_URL, {
      method:   'POST',
      redirect: 'follow',
      headers:  { 'Content-Type': 'text/plain' },
      body:     JSON.stringify({ firstName, lastName, email, interest }),
    })

    const text = await res.text()
    console.log('Apps Script response:', res.status, text)

    if (!res.ok) throw new Error(`Apps Script returned ${res.status}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Signup error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
