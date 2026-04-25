import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { firstName, lastName, email, interest } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key:  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          firstName,
          lastName,
          email,
          interest || 'Email List',
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sheets error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
