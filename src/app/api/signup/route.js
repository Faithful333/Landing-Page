import { NextResponse } from 'next/server'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBGVfv78dTUVwrFTkhrknBNq3qw8AO6pCDtjra27QG-7hMltksfIx8bYa_obG2c9tUMg/exec'

export async function POST(req) {
  try {
    const { firstName, lastName, email, interest } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const res = await fetch(APPS_SCRIPT_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ firstName, lastName, email, interest }),
    })

    if (!res.ok) throw new Error(`Apps Script returned ${res.status}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Signup error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
