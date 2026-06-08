-- Add new columns to exam_results for new scoring structure
ALTER TABLE public.exam_results 
ADD COLUMN IF NOT EXISTS sql_score integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_attempt_at timestamp with time zone DEFAULT NULL,
ADD COLUMN IF NOT EXISTS max_possible_score integer DEFAULT 130;

-- Update certificates table to support name input
ALTER TABLE public.certificates
ADD COLUMN IF NOT EXISTS first_name text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS last_name text DEFAULT NULL;

-- Create table to track exam attempts and cooldown
CREATE TABLE IF NOT EXISTS public.exam_attempts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  exam_type text NOT NULL DEFAULT 'ultimate',
  attempted_at timestamp with time zone NOT NULL DEFAULT now(),
  passed boolean NOT NULL DEFAULT false,
  score integer NOT NULL DEFAULT 0,
  percentage numeric NOT NULL DEFAULT 0,
  can_retake_at timestamp with time zone DEFAULT NULL
);

-- Enable RLS
ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;

-- Create policies for exam_attempts
CREATE POLICY "Users can view own attempts" 
ON public.exam_attempts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own attempts" 
ON public.exam_attempts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own attempts" 
ON public.exam_attempts 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_exam_attempts_user_id ON public.exam_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_exam_attempts_exam_type ON public.exam_attempts(exam_type);