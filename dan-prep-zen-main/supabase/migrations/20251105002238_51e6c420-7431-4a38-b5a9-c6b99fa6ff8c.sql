-- Add new columns to profiles table for enhanced profile management
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS mobile_number text,
ADD COLUMN IF NOT EXISTS profile_photo_url text,
ADD COLUMN IF NOT EXISTS gender text CHECK (gender IN ('male', 'female', 'other'));

-- Create storage bucket for profile photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-photos', 'profile-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for profile photo uploads
CREATE POLICY "Users can view all profile photos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'profile-photos');

CREATE POLICY "Users can upload their own profile photo"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'profile-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own profile photo"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'profile-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own profile photo"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'profile-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);