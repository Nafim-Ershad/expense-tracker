import { createClient } from '@supabase/supabase-js'
// import * as dotenv from 'dotenv'
// dotenv.config()

// export const supabase = createClient(
//   'https://iullkpxtgrlibnzdvxnm.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bGxrcHh0Z3JsaWJuemR2eG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MTQ1NDgsImV4cCI6MjAyOTE5MDU0OH0.UYB4lFgSFJ1ynUGR3YyRKzING1DI-Dp0UhvzQLgJfU0'
// )

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)
