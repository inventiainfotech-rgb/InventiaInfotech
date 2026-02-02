const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const envPath = path.join(__dirname, '..', '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('.env.local not found at', envPath);
  process.exit(1);
}
const env = fs.readFileSync(envPath, 'utf8');
const get = (k) => {
  const m = env.match(new RegExp(`${k}=([^\n\r]+)`));
  return m ? m[1].trim() : null;
};
const url = get('REACT_APP_SUPABASE_URL');
const key = get('REACT_APP_SUPABASE_ANON_KEY');
console.log('Parsed SUPABASE URL:', url);
console.log('Parsed key length:', key ? key.length : null);
console.log('Parsed key startsWith "eyJ":', key ? key.startsWith('eyJ') : null);
if (!url || !key) {
  console.error('Supabase URL or ANON key missing in .env.local');
  process.exit(1);
}

const supabase = createClient(url, key);

(async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('id', { ascending: false })
      .limit(10);
    if (error) {
      console.error('Supabase error:', error);
      process.exit(1);
    }
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
})();
