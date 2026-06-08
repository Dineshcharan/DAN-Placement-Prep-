-- Drop the gender check constraint that's causing signup failures
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_gender_check;

-- Update the handle_new_user function to use NULL instead of empty strings for optional fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, phone_number, mobile_number, profile_photo_url, gender, college_name, year_of_study)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NULLIF(NEW.raw_user_meta_data->>'first_name', ''), ''),
    COALESCE(NULLIF(NEW.raw_user_meta_data->>'last_name', ''), ''),
    NEW.phone,
    NULLIF(NEW.raw_user_meta_data->>'phone_number', ''),
    NULLIF(NEW.raw_user_meta_data->>'profile_photo_url', ''),
    NULLIF(NEW.raw_user_meta_data->>'gender', ''),
    NULLIF(NEW.raw_user_meta_data->>'college_name', ''),
    NULLIF(NEW.raw_user_meta_data->>'year_of_study', '')
  );
  RETURN NEW;
END;
$function$;