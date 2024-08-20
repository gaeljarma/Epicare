import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yteasuzcyusqvmxsvggt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZWFzdXpjeXVzcXZteHN2Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MjAxMzQsImV4cCI6MjAzMjQ5NjEzNH0.jWQhBPEmH3brwrnIOk0T-wBGO7JorH6A_wMVFtWLDd8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);