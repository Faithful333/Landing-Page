import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Lazy singleton — only created in the browser, never during SSR
let _client = null

export function getDb() {
  if (!_client) {
    _client = createClient(SUPABASE_URL, SUPABASE_KEY)
  }
  return _client
}
