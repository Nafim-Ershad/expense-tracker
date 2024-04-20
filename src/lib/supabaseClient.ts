import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://iullkpxtgrlibnzdvxnm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bGxrcHh0Z3JsaWJuemR2eG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MTQ1NDgsImV4cCI6MjAyOTE5MDU0OH0.UYB4lFgSFJ1ynUGR3YyRKzING1DI-Dp0UhvzQLgJfU0'
)
