import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://wwnfpnuefistuxfblbmz.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3bmZwbnVlZmlzdHV4ZmJsYm16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NzI2MzIsImV4cCI6MjA5MDA0ODYzMn0.TiTN7BP6CtimLaSse_d7guAd2sJbZkAbV79Ymdj443M'

// Lazy singleton — only created in the browser, never during SSR
let _client = null

export function getDb() {
  if (!_client) {
    _client = createClient(SUPABASE_URL, SUPABASE_KEY)
  }
  return _client
}
