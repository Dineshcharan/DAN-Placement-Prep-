-- Create exam_results table to store ultimate exam attempts
CREATE TABLE public.exam_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  exam_type TEXT NOT NULL DEFAULT 'ultimate',
  total_score INTEGER NOT NULL DEFAULT 0,
  max_score INTEGER NOT NULL DEFAULT 0,
  percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
  numerical_score INTEGER DEFAULT 0,
  reasoning_score INTEGER DEFAULT 0,
  verbal_score INTEGER DEFAULT 0,
  coding_score INTEGER DEFAULT 0,
  technical_score INTEGER DEFAULT 0,
  pseudocode_score INTEGER DEFAULT 0,
  hr_score INTEGER DEFAULT 0,
  time_taken INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  is_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own exam results" 
ON public.exam_results FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exam results" 
ON public.exam_results FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own exam results" 
ON public.exam_results FOR UPDATE 
USING (auth.uid() = user_id);

-- Create certificates table
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  exam_result_id UUID REFERENCES public.exam_results(id) ON DELETE CASCADE,
  certificate_id TEXT NOT NULL UNIQUE,
  candidate_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  performance_level TEXT NOT NULL,
  skills_tested TEXT[] NOT NULL,
  issued_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_valid BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for certificates
CREATE POLICY "Users can view own certificates" 
ON public.certificates FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own certificates" 
ON public.certificates FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Public verification policy (anyone can verify by certificate_id)
CREATE POLICY "Anyone can verify certificates" 
ON public.certificates FOR SELECT 
USING (true);

-- Add readiness_score and skill_levels to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS readiness_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS skill_levels JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS total_exams_taken INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS average_accuracy DECIMAL(5,2) DEFAULT 0;