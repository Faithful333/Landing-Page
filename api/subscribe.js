const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, interest } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { error } = await supabase
      .from('signups')
      .insert([{ email, interest: interest || 'Email List' }]);

    if (error) {
      // Duplicate email — treat as success so we don't leak info
      if (error.code === '23505') return res.status(200).json({ success: true });
      throw error;
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
