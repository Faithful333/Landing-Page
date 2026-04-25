import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { firstName, lastName, email, interest } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const sheetId = process.env.GOOGLE_SHEET_ID

    // Log what we have (safe — no key values exposed)
    console.log('ENV check:', {
      hasKey:   !!privateKey,
      hasEmail: !!clientEmail,
      hasSheet: !!sheetId,
      keyStart: privateKey?.slice(0, 30),
    })

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key:  privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          firstName,
          lastName,
          email,
          interest || 'Supporter',
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sheets error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
