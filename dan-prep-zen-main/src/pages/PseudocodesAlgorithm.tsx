import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, LogOut, FileCode } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';

const pseudocodes = [
  // Easy (40 questions)
  { id: 1, title: 'Recursive Multiplication', difficulty: 'Easy', description: 'Multiply two numbers using recursion' },
  { id: 2, title: 'Character ASCII Print', difficulty: 'Easy', description: 'Print ASCII value of character' },
  { id: 3, title: 'Array Sum', difficulty: 'Easy', description: 'Calculate sum of array elements' },
  { id: 4, title: 'Loop Counter', difficulty: 'Easy', description: 'Count iterations in nested loops' },
  { id: 5, title: 'String Length', difficulty: 'Easy', description: 'Calculate string length recursively' },
  { id: 6, title: 'Count Digits', difficulty: 'Easy', description: 'Count digits in a number' },
  { id: 7, title: 'Sum of Digits', difficulty: 'Easy', description: 'Calculate sum of digits' },
  { id: 8, title: 'Print Numbers', difficulty: 'Easy', description: 'Print numbers 1 to N' },
  { id: 9, title: 'Even or Odd', difficulty: 'Easy', description: 'Check if number is even or odd' },
  { id: 10, title: 'Absolute Value', difficulty: 'Easy', description: 'Find absolute value of number' },
  { id: 11, title: 'Swap Two Numbers', difficulty: 'Easy', description: 'Swap without temp variable' },
  { id: 12, title: 'Min of Two', difficulty: 'Easy', description: 'Find minimum of two numbers' },
  { id: 13, title: 'Max of Two', difficulty: 'Easy', description: 'Find maximum of two numbers' },
  { id: 14, title: 'Average Calculator', difficulty: 'Easy', description: 'Calculate average of numbers' },
  { id: 15, title: 'Simple Interest', difficulty: 'Easy', description: 'Calculate simple interest' },
  { id: 16, title: 'Area of Circle', difficulty: 'Easy', description: 'Calculate circle area' },
  { id: 17, title: 'Celsius to Fahrenheit', difficulty: 'Easy', description: 'Temperature conversion' },
  { id: 18, title: 'Reverse Number', difficulty: 'Easy', description: 'Reverse digits of number' },
  { id: 19, title: 'Sum of N Numbers', difficulty: 'Easy', description: 'Sum first N natural numbers' },
  { id: 20, title: 'Print Pattern Stars', difficulty: 'Easy', description: 'Print star pattern' },
  { id: 21, title: 'Check Positive', difficulty: 'Easy', description: 'Check if number is positive' },
  { id: 22, title: 'Leap Year Check', difficulty: 'Easy', description: 'Determine if year is leap year' },
  { id: 23, title: 'Vowel Check', difficulty: 'Easy', description: 'Check if character is vowel' },
  { id: 24, title: 'Grade Calculator', difficulty: 'Easy', description: 'Calculate grade from marks' },
  { id: 25, title: 'Divisibility Check', difficulty: 'Easy', description: 'Check divisibility by number' },
  { id: 26, title: 'Sum of Even Numbers', difficulty: 'Easy', description: 'Sum even numbers up to N' },
  { id: 27, title: 'Sum of Odd Numbers', difficulty: 'Easy', description: 'Sum odd numbers up to N' },
  { id: 28, title: 'Multiplication Table', difficulty: 'Easy', description: 'Print multiplication table' },
  { id: 29, title: 'Array Maximum', difficulty: 'Easy', description: 'Find max element in array' },
  { id: 30, title: 'Array Minimum', difficulty: 'Easy', description: 'Find min element in array' },
  { id: 31, title: 'Linear Search', difficulty: 'Easy', description: 'Search element in array' },
  { id: 32, title: 'Count Vowels', difficulty: 'Easy', description: 'Count vowels in string' },
  { id: 33, title: 'Count Consonants', difficulty: 'Easy', description: 'Count consonants in string' },
  { id: 34, title: 'String Copy', difficulty: 'Easy', description: 'Copy one string to another' },
  { id: 35, title: 'String Compare', difficulty: 'Easy', description: 'Compare two strings' },
  { id: 36, title: 'String Concatenate', difficulty: 'Easy', description: 'Join two strings' },
  { id: 37, title: 'Print Reverse Array', difficulty: 'Easy', description: 'Print array in reverse' },
  { id: 38, title: 'Frequency Count', difficulty: 'Easy', description: 'Count element frequency' },
  { id: 39, title: 'Check Alphabet', difficulty: 'Easy', description: 'Check if character is alphabet' },
  { id: 40, title: 'Power of Two Check', difficulty: 'Easy', description: 'Check if number is power of 2' },
  
  // Medium (40 questions)
  { id: 41, title: 'Factorial Calculation', difficulty: 'Medium', description: 'Calculate factorial recursively' },
  { id: 42, title: 'Fibonacci Number', difficulty: 'Medium', description: 'Find nth Fibonacci number' },
  { id: 43, title: 'GCD Calculation', difficulty: 'Medium', description: 'Find GCD using Euclidean algorithm' },
  { id: 44, title: 'LCM Calculation', difficulty: 'Medium', description: 'Calculate LCM of two numbers' },
  { id: 45, title: 'Prime Number Check', difficulty: 'Medium', description: 'Check if number is prime' },
  { id: 46, title: 'Prime Numbers List', difficulty: 'Medium', description: 'Print primes up to N' },
  { id: 47, title: 'Armstrong Number', difficulty: 'Medium', description: 'Check Armstrong number' },
  { id: 48, title: 'Perfect Number', difficulty: 'Medium', description: 'Check perfect number' },
  { id: 49, title: 'Strong Number', difficulty: 'Medium', description: 'Check strong number' },
  { id: 50, title: 'Palindrome Number', difficulty: 'Medium', description: 'Check number palindrome' },
  { id: 51, title: 'Palindrome String', difficulty: 'Medium', description: 'Check string palindrome' },
  { id: 52, title: 'Binary Search', difficulty: 'Medium', description: 'Search in sorted array' },
  { id: 53, title: 'Bubble Sort', difficulty: 'Medium', description: 'Sort using bubble sort' },
  { id: 54, title: 'Selection Sort', difficulty: 'Medium', description: 'Sort using selection sort' },
  { id: 55, title: 'Insertion Sort', difficulty: 'Medium', description: 'Sort using insertion sort' },
  { id: 56, title: 'Binary to Decimal', difficulty: 'Medium', description: 'Convert binary to decimal' },
  { id: 57, title: 'Decimal to Binary', difficulty: 'Medium', description: 'Convert decimal to binary' },
  { id: 58, title: 'Decimal to Octal', difficulty: 'Medium', description: 'Convert decimal to octal' },
  { id: 59, title: 'Decimal to Hexadecimal', difficulty: 'Medium', description: 'Convert decimal to hex' },
  { id: 60, title: 'Reverse String', difficulty: 'Medium', description: 'Reverse string recursively' },
  { id: 61, title: 'Matrix Addition', difficulty: 'Medium', description: 'Add two matrices' },
  { id: 62, title: 'Matrix Subtraction', difficulty: 'Medium', description: 'Subtract two matrices' },
  { id: 63, title: 'Matrix Transpose', difficulty: 'Medium', description: 'Transpose a matrix' },
  { id: 64, title: 'Reverse Array', difficulty: 'Medium', description: 'Reverse array in place' },
  { id: 65, title: 'Rotate Array', difficulty: 'Medium', description: 'Rotate array by K positions' },
  { id: 66, title: 'Remove Duplicates', difficulty: 'Medium', description: 'Remove duplicate elements' },
  { id: 67, title: 'Second Largest', difficulty: 'Medium', description: 'Find second largest element' },
  { id: 68, title: 'Anagram Check', difficulty: 'Medium', description: 'Check if strings are anagrams' },
  { id: 69, title: 'Count Words', difficulty: 'Medium', description: 'Count words in string' },
  { id: 70, title: 'Remove Whitespace', difficulty: 'Medium', description: 'Remove extra spaces' },
  { id: 71, title: 'Power Function', difficulty: 'Medium', description: 'Calculate power recursively' },
  { id: 72, title: 'Sum of Array', difficulty: 'Medium', description: 'Sum array using recursion' },
  { id: 73, title: 'Binary Addition', difficulty: 'Medium', description: 'Add two binary numbers' },
  { id: 74, title: 'Missing Number', difficulty: 'Medium', description: 'Find missing number in array' },
  { id: 75, title: 'Dutch Flag Problem', difficulty: 'Medium', description: 'Sort 0s, 1s, and 2s' },
  { id: 76, title: 'Majority Element', difficulty: 'Medium', description: 'Find majority element' },
  { id: 77, title: 'Kadane Algorithm', difficulty: 'Medium', description: 'Maximum subarray sum' },
  { id: 78, title: 'Stock Buy Sell', difficulty: 'Medium', description: 'Best time to buy/sell stock' },
  { id: 79, title: 'Leaders in Array', difficulty: 'Medium', description: 'Find all leaders in array' },
  { id: 80, title: 'Rearrange Array', difficulty: 'Medium', description: 'Rearrange positive negative' },
  
  // Hard (20 questions)
  { id: 81, title: 'Tower of Hanoi', difficulty: 'Hard', description: 'Solve Tower of Hanoi puzzle' },
  { id: 82, title: 'Merge Sort', difficulty: 'Hard', description: 'Sort using merge sort' },
  { id: 83, title: 'Quick Sort', difficulty: 'Hard', description: 'Sort using quick sort' },
  { id: 84, title: 'Heap Sort', difficulty: 'Hard', description: 'Sort using heap sort' },
  { id: 85, title: 'Matrix Multiplication', difficulty: 'Hard', description: 'Multiply two matrices' },
  { id: 86, title: 'Longest Palindrome Substring', difficulty: 'Hard', description: 'Find longest palindrome' },
  { id: 87, title: 'N-Queens Problem', difficulty: 'Hard', description: 'Place N queens on chessboard' },
  { id: 88, title: 'Sudoku Solver', difficulty: 'Hard', description: 'Solve Sudoku puzzle' },
  { id: 89, title: 'Graph DFS', difficulty: 'Hard', description: 'Depth first search traversal' },
  { id: 90, title: 'Graph BFS', difficulty: 'Hard', description: 'Breadth first search traversal' },
  { id: 91, title: 'Dijkstra Algorithm', difficulty: 'Hard', description: 'Shortest path algorithm' },
  { id: 92, title: 'Knapsack Problem', difficulty: 'Hard', description: '0/1 knapsack dynamic programming' },
  { id: 93, title: 'Longest Common Subsequence', difficulty: 'Hard', description: 'LCS using DP' },
  { id: 94, title: 'Edit Distance', difficulty: 'Hard', description: 'Minimum edit distance' },
  { id: 95, title: 'Coin Change', difficulty: 'Hard', description: 'Minimum coins for amount' },
  { id: 96, title: 'Subset Sum Problem', difficulty: 'Hard', description: 'Check if subset sums to target' },
  { id: 97, title: 'Longest Increasing Subsequence', difficulty: 'Hard', description: 'Find LIS length' },
  { id: 98, title: 'Topological Sort', difficulty: 'Hard', description: 'Topological ordering of graph' },
  { id: 99, title: 'Minimum Spanning Tree', difficulty: 'Hard', description: 'MST using Kruskal/Prim' },
  { id: 100, title: 'Trie Implementation', difficulty: 'Hard', description: 'Prefix tree operations' },
];

export default function PseudocodesAlgorithm() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const filteredProblems = selectedDifficulty === 'all' 
    ? pseudocodes 
    : pseudocodes.filter(p => p.difficulty.toLowerCase() === selectedDifficulty);

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/pseudocodes')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">100 Essential Algorithms</h2>
          <p className="text-muted-foreground">
            Master fundamental algorithms with detailed pseudocodes
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-6" onValueChange={setSelectedDifficulty}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All ({pseudocodes.length})</TabsTrigger>
            <TabsTrigger value="easy">Easy ({pseudocodes.filter(p => p.difficulty === 'Easy').length})</TabsTrigger>
            <TabsTrigger value="medium">Medium ({pseudocodes.filter(p => p.difficulty === 'Medium').length})</TabsTrigger>
            <TabsTrigger value="hard">Hard ({pseudocodes.filter(p => p.difficulty === 'Hard').length})</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredProblems.map((pseudocode, index) => (
            <Card
              key={pseudocode.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => navigate(`/pseudocodes/${pseudocode.id}`)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  <span className={`text-xs px-2 py-1 rounded ${
                    pseudocode.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                    pseudocode.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {pseudocode.difficulty}
                  </span>
                </div>
                <CardTitle className="text-lg">{pseudocode.title}</CardTitle>
                <CardDescription>{pseudocode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate(`/pseudocodes/${pseudocode.id}`)}
                >
                  View Pseudocode
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
