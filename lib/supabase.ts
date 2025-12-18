import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://svikvxtpxktknlzkbeky.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2aWt2eHRweGt0a25semtiZWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDk3MDcsImV4cCI6MjA3ODg4NTcwN30.v80M7sjfw90bBPuXH8Q-q714zOra2w0MOirbS1H5O7A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const SUPABASE_FUNCTIONS_URL = 'https://svikvxtpxktknlzkbeky.functions.supabase.co'
