import { NextResponse } from 'next/server'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydM8ve_ptmrv_91ATeCk8VwAYd_wEXrptiLUmY-BgXzCyfhKTNikh4QVYteaG-aAeTmg/exec'

export async function POST(req) {
  try {
    const { firstName, lastName, email, interest } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Step 1: POST to Apps Script — do NOT follow redirects automatically
    const initial = await fetch(APPS_SCRIPT_URL, {
      method:   'POST',
      redirect: 'manual',
      headers:  { 'Content-Type': 'text/plain' },
      body:     JSON.stringify({ firstName, lastName, email, interest }),
    })

    // Step 2: Follow the first redirect (googleusercontent.com) which has the real response
    const redirectUrl = initial.headers.get('location')
    if (!redirectUrl) throw new Error('No redirect from Apps Script')

    const result = await fetch(redirectUrl)
    const text   = await result.text()
    console.log('Apps Script result:', text)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Signup error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
