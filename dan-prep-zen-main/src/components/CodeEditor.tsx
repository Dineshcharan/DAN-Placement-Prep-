import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import CodeEditorWithLines, { OutputDisplay } from './CodeEditorWithLines';

interface TestCase {
  input: string;
  expectedOutput: string;
}

type ProgrammingLanguage = 'c' | 'cpp' | 'java' | 'python';

interface CodeEditorProps {
  questionId: string;
  title: string;
  description: string;
  sampleInput: string;
  sampleOutput: string;
  testCases: TestCase[];
  questionType: 'sql' | 'coding';
  onSubmit: (passedCount: number, totalCount: number) => void;
  disabled?: boolean;
}

const languageOptions: { value: ProgrammingLanguage; label: string; placeholder: string }[] = [
  { 
    value: 'c', 
    label: 'C', 
    placeholder: `#include <stdio.h>

int main() {
    // Your code here
    return 0;
}` 
  },
  { 
    value: 'cpp', 
    label: 'C++', 
    placeholder: `#include <iostream>
using namespace std;

int main() {
    // Your code here
    return 0;
}` 
  },
  { 
    value: 'java', 
    label: 'Java', 
    placeholder: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Your code here
    }
}` 
  },
  { 
    value: 'python', 
    label: 'Python', 
    placeholder: `# Your code here
# Read input using input()
# Print output using print()` 
  },
];

export default function CodeEditor({
  questionId,
  title,
  description,
  sampleInput,
  sampleOutput,
  testCases,
  questionType,
  onSubmit,
  disabled = false
}: CodeEditorProps) {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>('python');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; index: number }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const currentPlaceholder = questionType === 'sql' 
    ? 'SELECT * FROM ...' 
    : languageOptions.find(l => l.value === selectedLanguage)?.placeholder || '';

  const handleRun = async () => {
    if (!code.trim()) {
      toast.error('Please write some code first');
      return;
    }

    setIsRunning(true);
    setOutput('');
    setIsError(false);

    try {
      const { data, error } = await supabase.functions.invoke('execute-code', {
        body: {
          code,
          language: questionType === 'sql' ? 'sql' : selectedLanguage,
          sampleInput,
          testCases: []
        }
      });

      if (error) throw error;

      if (data.error) {
        setOutput(data.error);
        setIsError(true);
      } else {
        setOutput(data.output || 'No output');
        setIsError(false);
      }
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Error running code. Please try again.');
      setIsError(true);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (!code.trim()) {
      toast.error('Please write some code first');
      return;
    }

    if (submitted) {
      toast.info('Already submitted this question');
      return;
    }

    setIsSubmitting(true);
    setOutput('');
    setIsError(false);

    try {
      const { data, error } = await supabase.functions.invoke('execute-code', {
        body: {
          code,
          language: questionType === 'sql' ? 'sql' : selectedLanguage,
          testCases
        }
      });

      if (error) throw error;

      if (data.error) {
        setOutput(data.error);
        setIsError(true);
        setTestResults([]);
      } else {
        const results = data.results?.map((r: { passed: boolean }, i: number) => ({
          passed: r.passed,
          index: i
        })) || [];
        
        setTestResults(results);
        setSubmitted(true);
        
        const passedCount = data.passedCount || 0;
        const totalCount = data.totalCount || testCases.length;
        
        setOutput(`Test Results: ${passedCount}/${totalCount} passed`);
        setIsError(false);
        onSubmit(passedCount, totalCount);
        
        if (passedCount === totalCount) {
          toast.success('All test cases passed!');
        } else {
          toast.info(`${passedCount}/${totalCount} test cases passed`);
        }
      }
    } catch (error) {
      console.error('Error submitting code:', error);
      setOutput('Error running tests. Please try again.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLanguageChange = (value: ProgrammingLanguage) => {
    setSelectedLanguage(value);
    // Clear code when changing language if it's still placeholder or empty
    if (!code.trim() || languageOptions.some(l => code === l.placeholder)) {
      setCode('');
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="whitespace-pre-wrap text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Sample I/O */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">Sample Input</p>
              <pre className="text-sm font-mono whitespace-pre-wrap">{sampleInput}</pre>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">Sample Output</p>
              <pre className="text-sm font-mono whitespace-pre-wrap">{sampleOutput}</pre>
            </div>
          </div>

          {/* Language Selection (only for coding questions) */}
          {questionType === 'coding' && (
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Language:</label>
              <Select
                value={selectedLanguage}
                onValueChange={handleLanguageChange}
                disabled={disabled || submitted}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languageOptions.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Code Editor with Line Numbers */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Your Code ({questionType === 'sql' ? 'SQL' : languageOptions.find(l => l.value === selectedLanguage)?.label})
            </label>
            <CodeEditorWithLines
              value={code}
              onChange={setCode}
              placeholder={currentPlaceholder}
              disabled={disabled || submitted}
              minHeight="200px"
            />
          </div>

          {/* Output Display */}
          <OutputDisplay 
            output={output} 
            isError={isError} 
            isRunning={isRunning || isSubmitting} 
          />

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium">Hidden Test Cases:</span>
              {testResults.map((result, idx) => (
                <Badge
                  key={idx}
                  variant={result.passed ? 'default' : 'destructive'}
                  className="flex items-center gap-1"
                >
                  {result.passed ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  Test {idx + 1}
                </Badge>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleRun}
              disabled={isRunning || isSubmitting || disabled || submitted}
              className="flex-1"
            >
              {isRunning ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              Compile & Run
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isRunning || isSubmitting || disabled || submitted}
              className="flex-1 bg-gradient-to-r from-primary to-primary/80"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {submitted ? 'Submitted' : 'Submit Code'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
