import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://zefwgxosbsuvomrzlckp.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijc1ZDNhNDU0LWE1M2YtNDk5Yi1iYTJmLTAzMTE1NjhmZGYzYiJ9.eyJwcm9qZWN0SWQiOiJ6ZWZ3Z3hvc2JzdXZvbXJ6bGNrcCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzgyMDk5ODY1LCJleHAiOjIwOTc0NTk4NjUsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.C14CZYpPmPmTZXM0DY0D17JTqCFiKhq8s5WpA0wWN1c';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };