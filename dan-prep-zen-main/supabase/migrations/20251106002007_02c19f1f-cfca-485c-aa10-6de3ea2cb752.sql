-- Enable phone authentication by adding phone column to profiles if needed
-- Note: Supabase auth.users already has phone column, we just need to track it in profiles

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS phone_number TEXT;

-- Update the handle_new_user function to include phone and additional fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, phone_number, mobile_number, profile_photo_url, gender)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    NEW.phone,
    COALESCE(NEW.raw_user_meta_data->>'mobile_number', ''),
    COALESCE(NEW.raw_user_meta_data->>'profile_photo_url', ''),
    COALESCE(NEW.raw_user_meta_data->>'gender', '')
  );
  RETURN NEW;
END;
$function$;