import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, LogOut, ChevronLeft, ChevronRight, CheckCircle, XCircle, Code2 } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const pseudocodeQuestions = Array.from({ length: 100 }, (_, i) => {
  const baseQuestions = [
    {
      title: "Recursive Multiplication",
      pseudocode: `function(input a, input b)
  If (a < b)
    return function(b, a)
  elseif (b != 0)
    return (a + function(a, b - 1))
  else
    return 0`,
      question: "What will be the output of the following pseudocode for input a = 5 & b = 3?",
      options: ["8", "15", "0", "5"],
      correctAnswer: 1,
      explanation: "The function recursively adds 'a' to itself 'b' times, effectively computing a × b. For a=5, b=3: 5+5+5 = 15."
    },
    {
      title: "Character Print",
      pseudocode: `initialize char c
set c = 'a'
print "%d", c`,
      question: "What will be the output of the following pseudocode?",
      options: ["a", "97", "Error", "0"],
      correctAnswer: 1,
      explanation: "The format specifier %d prints the ASCII value of character 'a', which is 97."
    },
    {
      title: "Array Sum",
      pseudocode: `function sum(array arr, int n)
  if (n <= 0)
    return 0
  else
    return arr[n-1] + sum(arr, n-1)`,
      question: "For array [1, 2, 3, 4] with n=4, what is the output?",
      options: ["4", "10", "24", "Error"],
      correctAnswer: 1,
      explanation: "The function recursively sums all elements: 4+3+2+1 = 10."
    },
    {
      title: "Loop Counter",
      pseudocode: `int count = 0
for (i = 1; i <= 5; i++)
  for (j = 1; j <= i; j++)
    count = count + 1
print count`,
      question: "What will be the value of count?",
      options: ["5", "15", "25", "10"],
      correctAnswer: 1,
      explanation: "Inner loop runs 1+2+3+4+5 = 15 times total. Count increments each iteration."
    },
    {
      title: "String Reversal",
      pseudocode: `function reverse(string s)
  if (length(s) == 0)
    return ""
  else
    return reverse(substring(s, 1)) + s[0]`,
      question: "What does this function do for input 'ABC'?",
      options: ["Returns 'ABC'", "Returns 'CBA'", "Returns 'BCA'", "Error"],
      correctAnswer: 1,
      explanation: "The function recursively reverses the string by moving the first character to the end."
    },
    {
      title: "Factorial Calculation",
      pseudocode: `function factorial(int n)
  if (n == 0)
    return 1
  else
    return n * factorial(n - 1)`,
      question: "What is the output for factorial(5)?",
      options: ["25", "120", "60", "15"],
      correctAnswer: 1,
      explanation: "Factorial of 5 is 5 × 4 × 3 × 2 × 1 = 120."
    },
    {
      title: "Power Function",
      pseudocode: `function power(int base, int exp)
  if (exp == 0)
    return 1
  else
    return base * power(base, exp - 1)`,
      question: "What is power(2, 4)?",
      options: ["8", "16", "6", "32"],
      correctAnswer: 1,
      explanation: "2^4 = 2 × 2 × 2 × 2 = 16."
    },
    {
      title: "Array Maximum",
      pseudocode: `function findMax(array arr, int n)
  if (n == 1)
    return arr[0]
  else
    return max(arr[n-1], findMax(arr, n-1))`,
      question: "For array [3, 7, 2, 9, 1] with n=5, what is returned?",
      options: ["3", "9", "7", "1"],
      correctAnswer: 1,
      explanation: "The function finds the maximum element in the array, which is 9."
    },
    {
      title: "Fibonacci Number",
      pseudocode: `function fib(int n)
  if (n <= 1)
    return n
  else
    return fib(n-1) + fib(n-2)`,
      question: "What is fib(6)?",
      options: ["5", "8", "13", "21"],
      correctAnswer: 1,
      explanation: "Fibonacci sequence: 0,1,1,2,3,5,8. The 6th number (0-indexed) is 8."
    },
    {
      title: "GCD Calculation",
      pseudocode: `function gcd(int a, int b)
  if (b == 0)
    return a
  else
    return gcd(b, a % b)`,
      question: "What is gcd(48, 18)?",
      options: ["2", "6", "12", "18"],
      correctAnswer: 1,
      explanation: "Using Euclidean algorithm: gcd(48,18) = gcd(18,12) = gcd(12,6) = gcd(6,0) = 6."
    },
    {
      title: "Binary Search",
      pseudocode: `function binarySearch(array arr, int target, int low, int high)
  if (low > high)
    return -1
  mid = (low + high) / 2
  if (arr[mid] == target)
    return mid
  else if (arr[mid] > target)
    return binarySearch(arr, target, low, mid-1)
  else
    return binarySearch(arr, target, mid+1, high)`,
      question: "For sorted array [1,3,5,7,9] searching for 7, what index is returned?",
      options: ["2", "3", "4", "-1"],
      correctAnswer: 1,
      explanation: "Binary search finds 7 at index 3 in the array."
    },
    {
      title: "Palindrome Check",
      pseudocode: `function isPalindrome(string s, int start, int end)
  if (start >= end)
    return true
  if (s[start] != s[end])
    return false
  return isPalindrome(s, start+1, end-1)`,
      question: "What does isPalindrome('RADAR', 0, 4) return?",
      options: ["false", "true", "Error", "null"],
      correctAnswer: 1,
      explanation: "'RADAR' reads the same forwards and backwards, so it returns true."
    },
    {
      title: "Tower of Hanoi",
      pseudocode: `function hanoi(int n, char from, char to, char aux)
  if (n == 1)
    print "Move disk 1 from " + from + " to " + to
    return
  hanoi(n-1, from, aux, to)
  print "Move disk " + n + " from " + from + " to " + to
  hanoi(n-1, aux, to, from)`,
      question: "How many moves are needed for hanoi(3, 'A', 'C', 'B')?",
      options: ["3", "7", "15", "31"],
      correctAnswer: 1,
      explanation: "Tower of Hanoi with n disks requires 2^n - 1 moves. For n=3: 2^3 - 1 = 7 moves."
    },
    {
      title: "Count Digits",
      pseudocode: `function countDigits(int n)
  if (n == 0)
    return 0
  return 1 + countDigits(n / 10)`,
      question: "What is countDigits(12345)?",
      options: ["4", "5", "6", "0"],
      correctAnswer: 1,
      explanation: "The function counts the number of digits. 12345 has 5 digits."
    },
    {
      title: "Sum of Digits",
      pseudocode: `function sumDigits(int n)
  if (n == 0)
    return 0
  return (n % 10) + sumDigits(n / 10)`,
      question: "What is sumDigits(123)?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "Sum of digits: 1 + 2 + 3 = 6."
    },
    {
      title: "Binary Conversion",
      pseudocode: `function toBinary(int n)
  if (n == 0)
    return ""
  return toBinary(n / 2) + (n % 2)`,
      question: "What does toBinary(5) return?",
      options: ["100", "101", "110", "111"],
      correctAnswer: 1,
      explanation: "5 in binary is 101 (4 + 0 + 1)."
    },
    {
      title: "Array Reverse",
      pseudocode: `function reverse(array arr, int start, int end)
  if (start >= end)
    return
  swap(arr[start], arr[end])
  reverse(arr, start+1, end-1)`,
      question: "For array [1,2,3,4,5], what is the result after reverse(arr, 0, 4)?",
      options: ["[1,2,3,4,5]", "[5,4,3,2,1]", "[2,3,4,5,1]", "[5,1,2,3,4]"],
      correctAnswer: 1,
      explanation: "The function reverses the array in place: [5,4,3,2,1]."
    },
    {
      title: "Prime Check",
      pseudocode: `function isPrime(int n, int divisor)
  if (divisor == 1)
    return true
  if (n % divisor == 0)
    return false
  return isPrime(n, divisor - 1)`,
      question: "What does isPrime(7, 6) return?",
      options: ["false", "true", "Error", "null"],
      correctAnswer: 1,
      explanation: "7 is not divisible by any number from 2 to 6, so it returns true (7 is prime)."
    },
    {
      title: "LCM Calculation",
      pseudocode: `function lcm(int a, int b)
  return (a * b) / gcd(a, b)`,
      question: "If gcd(12, 18) = 6, what is lcm(12, 18)?",
      options: ["30", "36", "48", "72"],
      correctAnswer: 1,
      explanation: "LCM = (12 × 18) / 6 = 216 / 6 = 36."
    },
    {
      title: "Print Pattern",
      pseudocode: `function printPattern(int n)
  if (n == 0)
    return
  printPattern(n - 1)
  for i = 1 to n
    print "*"
  print newline`,
      question: "How many stars are printed for printPattern(4)?",
      options: ["4", "10", "16", "6"],
      correctAnswer: 1,
      explanation: "Prints 1+2+3+4 = 10 stars across all lines."
    },
  ];
  
  return {
    ...baseQuestions[i % baseQuestions.length],
    id: i + 1
  };
});

export default function PseudocodeTopic() {
  const { pseudocodeId } = useParams();
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const questionIndex = parseInt(pseudocodeId || '1') - 1;
  const question = pseudocodeQuestions[questionIndex];

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [questionIndex]);

  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from('user_progress')
        .select('question_id, is_correct')
        .eq('user_id', user.id)
        .eq('category', 'pseudocodes')
        .eq('topic', 'algorithm');
      
      if (data) {
        const answered = new Set(data.map(p => parseInt(p.question_id) - 1));
        setAnsweredQuestions(answered);
        const correctCount = data.filter(p => p.is_correct).length;
        setScore(correctCount);
      }
    };
    
    loadProgress();
  }, [user]);

  if (!question || questionIndex < 0 || questionIndex >= pseudocodeQuestions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pseudocode not found</h2>
          <Button onClick={() => navigate('/pseudocodes')}>Back to Pseudocodes</Button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleCheckAnswer = async () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "Choose one of the options before checking.",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === question.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: "Well done!",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Review the explanation below.",
        variant: "destructive",
      });
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(questionIndex));
    setShowExplanation(true);

    // Save progress to database
    if (user) {
      await supabase.from('user_progress').upsert({
        user_id: user.id,
        category: 'pseudocodes',
        topic: 'algorithm',
        question_id: String(questionIndex + 1),
        is_correct: isCorrect,
      }, {
        onConflict: 'user_id,category,topic,question_id'
      });
    }
  };

  const handleNext = () => {
    if (questionIndex < pseudocodeQuestions.length - 1) {
      navigate(`/pseudocodes/${questionIndex + 2}`);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      navigate(`/pseudocodes/${questionIndex}`);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const progress = (answeredQuestions.size / pseudocodeQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/pseudocodes')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium">
              Score: {score}
            </div>
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pseudocode {questionIndex + 1} of {pseudocodeQuestions.length}</span>
              <span>{answeredQuestions.size} Answered ({Math.round(progress)}%)</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <div className="mb-4">
                <CardTitle className="text-2xl mb-2">{question.title}</CardTitle>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Pseudocode</h3>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {question.pseudocode}
                </pre>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">{question.question}</h3>
                <div className="space-y-3">
                  {question.options.map((option: string, index: number) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showResult = showExplanation;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          isSelected
                            ? showResult
                              ? isCorrect
                                ? 'border-green-500 bg-green-500/10'
                                : 'border-red-500 bg-red-500/10'
                              : 'border-primary bg-primary/10'
                            : showResult && isCorrect
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-border hover:border-primary/50'
                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showResult && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!showExplanation ? (
                <Button onClick={handleCheckAnswer} className="w-full" size="lg">
                  Check Answer
                </Button>
              ) : (
                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Explanation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={questionIndex === 0}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={questionIndex === pseudocodeQuestions.length - 1}
                  className="flex-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
