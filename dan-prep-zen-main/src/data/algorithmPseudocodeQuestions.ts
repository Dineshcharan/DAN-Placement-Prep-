// Algorithm Pseudocode questions
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
    max = findMax(arr, n-1)
    if (arr[n-1] > max)
      return arr[n-1]
    else
      return max`,
    question: "For array [3, 7, 2, 9, 4] with n=5, what is returned?",
    options: ["3", "7", "9", "4"],
    correctAnswer: 2,
    explanation: "The function finds the maximum element recursively. 9 is the largest."
  },
  {
    title: "GCD Calculation",
    pseudocode: `function gcd(int a, int b)
  if (b == 0)
    return a
  else
    return gcd(b, a % b)`,
    question: "What is gcd(48, 18)?",
    options: ["2", "6", "3", "9"],
    correctAnswer: 1,
    explanation: "Using Euclidean algorithm: gcd(48,18) → gcd(18,12) → gcd(12,6) → gcd(6,0) = 6"
  },
  {
    title: "Fibonacci Series",
    pseudocode: `function fib(int n)
  if (n <= 1)
    return n
  else
    return fib(n-1) + fib(n-2)`,
    question: "What is fib(6)?",
    options: ["5", "8", "13", "21"],
    correctAnswer: 1,
    explanation: "Fibonacci: 0,1,1,2,3,5,8. fib(6) = 8."
  },
  {
    title: "Binary Search",
    pseudocode: `function binarySearch(arr, low, high, key)
  if (high >= low)
    mid = (low + high) / 2
    if (arr[mid] == key)
      return mid
    if (arr[mid] > key)
      return binarySearch(arr, low, mid-1, key)
    return binarySearch(arr, mid+1, high, key)
  return -1`,
    question: "In sorted array [1,3,5,7,9], what index is returned for key=5?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation: "Binary search finds 5 at index 2 (0-indexed)."
  },
  {
    title: "Sum of Digits",
    pseudocode: `function sumDigits(int n)
  if (n == 0)
    return 0
  else
    return (n % 10) + sumDigits(n / 10)`,
    question: "What is sumDigits(1234)?",
    options: ["10", "4", "1", "234"],
    correctAnswer: 0,
    explanation: "Sum of digits: 1+2+3+4 = 10."
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
    options: ["false", "true", "Error", "0"],
    correctAnswer: 1,
    explanation: "RADAR is a palindrome, so the function returns true."
  },
  {
    title: "Count Occurrences",
    pseudocode: `function count(arr, n, x)
  if (n == 0)
    return 0
  if (arr[n-1] == x)
    return 1 + count(arr, n-1, x)
  else
    return count(arr, n-1, x)`,
    question: "In array [1,2,1,3,1] with x=1, what is returned?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 2,
    explanation: "The value 1 appears 3 times in the array."
  },
  {
    title: "Tower of Hanoi",
    pseudocode: `function hanoi(n, source, dest, aux)
  if (n == 1)
    print "Move disk from", source, "to", dest
    return 1
  else
    moves = hanoi(n-1, source, aux, dest)
    print "Move disk from", source, "to", dest
    moves = moves + 1 + hanoi(n-1, aux, dest, source)
    return moves`,
    question: "How many moves are needed for hanoi(3, A, C, B)?",
    options: ["3", "5", "7", "9"],
    correctAnswer: 2,
    explanation: "Tower of Hanoi for n disks requires 2^n - 1 moves. For n=3: 2³-1 = 7 moves."
  },
  {
    title: "Array Product",
    pseudocode: `function product(arr, n)
  if (n == 0)
    return 1
  else
    return arr[n-1] * product(arr, n-1)`,
    question: "For array [2, 3, 4] with n=3, what is returned?",
    options: ["9", "12", "24", "6"],
    correctAnswer: 2,
    explanation: "Product of elements: 2 × 3 × 4 = 24."
  },
  {
    title: "Linear Search",
    pseudocode: `function linearSearch(arr, n, key)
  if (n == 0)
    return -1
  if (arr[n-1] == key)
    return n-1
  return linearSearch(arr, n-1, key)`,
    question: "In array [5,3,8,2] searching for 8, what is returned?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation: "The element 8 is at index 2 (0-indexed)."
  },
  {
    title: "Power of Two",
    pseudocode: `function isPowerOfTwo(int n)
  if (n == 1)
    return true
  if (n % 2 != 0 || n == 0)
    return false
  return isPowerOfTwo(n / 2)`,
    question: "What does isPowerOfTwo(16) return?",
    options: ["false", "true", "Error", "16"],
    correctAnswer: 1,
    explanation: "16 = 2^4, so it is a power of two. Returns true."
  },
  {
    title: "String Length",
    pseudocode: `function strlen(string s, int index)
  if (s[index] == '\\0')
    return 0
  return 1 + strlen(s, index + 1)`,
    question: "What is strlen('Hello', 0)?",
    options: ["4", "5", "6", "0"],
    correctAnswer: 1,
    explanation: "The string 'Hello' has 5 characters."
  },
  {
    title: "Merge Sort Count",
    pseudocode: `function mergeCount(n)
  if (n <= 1)
    return 0
  mid = n / 2
  return mergeCount(mid) + mergeCount(n - mid) + n`,
    question: "What is mergeCount(8)?",
    options: ["16", "24", "32", "8"],
    correctAnswer: 1,
    explanation: "This counts merge operations. For n=8: 8 + 4 + 4 + 2 + 2 + 2 + 2 = 24."
  }
];

export const algorithmPseudocodeQuestions = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  ...baseQuestions[i % baseQuestions.length],
  title: `${baseQuestions[i % baseQuestions.length].title} (Problem ${i + 1})`
}));

export const getAlgorithmPseudocodeQuestion = (questionId: number) => {
  return algorithmPseudocodeQuestions.find(q => q.id === questionId) || null;
};
