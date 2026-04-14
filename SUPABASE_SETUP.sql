-- KROMIQ Supabase Leads Table & Security Protocol
-- Run this in your Supabase SQL Editor

-- 1. Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    inquiry TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow PUBLIC (unauthenticated) INSERT only
-- This ensures anyone can submit a form, but NO ONE can read/update/delete data
CREATE POLICY "Enable insert for anonymous users only" 
ON public.leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. Verify RLS is active
-- SELECT * FROM public.leads; -- Should return 0 rows for public users
