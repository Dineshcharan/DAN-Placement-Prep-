import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Loader2, Code, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import CodeEditorWithLines, { OutputDisplay } from './CodeEditorWithLines';

type ProgrammingLanguage = 'c' | 'cpp' | 'java' | 'python';

interface PracticeCodeEditorProps {
  sampleInput?: string;
  defaultLanguage?: ProgrammingLanguage;
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

export default function PracticeCodeEditor({ 
  sampleInput = '', 
  defaultLanguage = 'python' 
}: PracticeCodeEditorProps) {
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(defaultLanguage);
  const [customInput, setCustomInput] = useState(sampleInput);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentPlaceholder = languageOptions.find(l => l.value === selectedLanguage)?.placeholder || '';

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
          language: selectedLanguage,
          sampleInput: customInput,
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

  const handleLanguageChange = (value: ProgrammingLanguage) => {
    setSelectedLanguage(value);
    // Clear code when changing language if it's still placeholder or empty
    if (!code.trim() || languageOptions.some(l => code === l.placeholder)) {
      setCode('');
    }
  };

  const handleClear = () => {
    setCode('');
    setOutput('');
    setIsError(false);
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Code Playground
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Language Selection */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Language:</label>
            <Select
              value={selectedLanguage}
              onValueChange={handleLanguageChange}
            >
              <SelectTrigger className="w-32">
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
          <Button variant="ghost" size="sm" onClick={handleClear}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </div>

        {/* Code Editor with Line Numbers */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Your Code ({languageOptions.find(l => l.value === selectedLanguage)?.label})
          </label>
          <CodeEditorWithLines
            value={code}
            onChange={setCode}
            placeholder={currentPlaceholder}
            minHeight="250px"
          />
        </div>

        {/* Custom Input */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Custom Input (optional)
          </label>
          <Textarea
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Enter your test input here..."
            className="font-mono text-sm min-h-[80px] bg-muted/30"
          />
        </div>

        {/* Run Button */}
        <Button
          onClick={handleRun}
          disabled={isRunning}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
        >
          {isRunning ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          {isRunning ? 'Compiling & Running...' : 'Compile & Run'}
        </Button>

        {/* Output Display */}
        <OutputDisplay 
          output={output} 
          isError={isError} 
          isRunning={isRunning} 
        />
      </CardContent>
    </Card>
  );
}
