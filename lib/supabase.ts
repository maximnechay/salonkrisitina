import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://euvzgieahizlzwzoeifr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dnpnaWVhaGl6bHp3em9laWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODE1NDQsImV4cCI6MjA4Mjk1NzU0NH0.bMhzZiDFu81wpkDAZxlPgB5JBUfSyxJeq3bt5dWUjmE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)