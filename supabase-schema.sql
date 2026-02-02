-- Supabase PostgreSQL Schema Migration
-- This file contains all required tables and RLS policies for the Inventia application
-- Run this SQL in your Supabase project's SQL Editor

-- ============================================
-- 1. STATUS CHECKS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.status_checks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
DROP INDEX IF EXISTS idx_status_checks_user_id;
DROP INDEX IF EXISTS idx_status_checks_created_at;
CREATE INDEX idx_status_checks_user_id ON public.status_checks(user_id);
CREATE INDEX idx_status_checks_created_at ON public.status_checks(created_at DESC);

-- RLS Policy for status_checks: Users can only see their own records
ALTER TABLE public.status_checks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own status checks" ON public.status_checks;
DROP POLICY IF EXISTS "Users can insert their own status checks" ON public.status_checks;
DROP POLICY IF EXISTS "Users can update their own status checks" ON public.status_checks;
DROP POLICY IF EXISTS "Users can delete their own status checks" ON public.status_checks;

CREATE POLICY "Users can view their own status checks"
  ON public.status_checks
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own status checks"
  ON public.status_checks
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own status checks"
  ON public.status_checks
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own status checks"
  ON public.status_checks
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 2. CONTACT SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
DROP INDEX IF EXISTS idx_contact_submissions_email;
DROP INDEX IF EXISTS idx_contact_submissions_status;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- RLS Policy for contact_submissions: Authenticated users can see all (for admin), but insert works for public
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable public contact form submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Users can view their own contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can view all contact submissions" ON public.contact_submissions;

-- Allow public insertion (unauthenticated users can submit forms)
CREATE POLICY "Enable public contact form submissions"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (TRUE);

-- Allow users to view their own submissions
CREATE POLICY "Users can view their own contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Allow admin role to view/update all submissions (requires admin role setup)
CREATE POLICY "Admins can view all contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (auth.jwt() ->> 'role' = 'admin');

-- ============================================
-- 3. PROFILES TABLE (Optional: for user data)
-- ============================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  company VARCHAR(255),
  phone VARCHAR(20),
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Trigger to auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 4. STORAGE SETUP (for file uploads)
-- ============================================
-- Create storage buckets via Supabase Dashboard or API:
-- - Bucket name: "avatars" (public)
-- - Bucket name: "documents" (private)

-- RLS Policy for avatars bucket (public read, authenticated users can upload their own)
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', false)
ON CONFLICT DO NOTHING;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;

-- Avatars bucket policies
CREATE POLICY "Avatar images are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- ============================================
-- NOTES FOR ADMIN SETUP
-- ============================================
/*
1. Enable Email/Password authentication in Supabase Auth settings
2. Create an admin role (optional, for future admin panel):
   - Define a custom claim in JWT token
   - Use in RLS policies for admin access

3. Environment variables needed in frontend .env.local:
   REACT_APP_SUPABASE_URL=https://your-project.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key

4. To enable public signup, in Supabase Dashboard:
   - Go to Authentication > Policies
   - Enable Email signup in Auth Providers

5. For file storage, create buckets:
   - avatars: public=true
   - documents: public=false
*/
