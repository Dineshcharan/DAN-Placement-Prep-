
-- Drop the unused exam_attempts table
DROP TABLE IF EXISTS public.exam_attempts;

-- Remove the foreign key and column referencing exam_results from certificates
ALTER TABLE public.certificates DROP COLUMN IF EXISTS exam_result_id;

-- Drop the unused exam_results table
DROP TABLE IF EXISTS public.exam_results;
