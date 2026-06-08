export const generalPseudocodeQuestions = [
  {
    id: 1,
    title: "Function Output Trace",
    pseudocode: `function(input a, input b)
  If (a < b)
    return function(b, a)
  elseif (b != 0)
    return (a * function(a, b - 1))
  else
    return 0`,
    question: "What will be the output for input a = 5 & b = 5?",
    options: ["0", "25", "20", "Error"],
    correctAnswer: 1,
    explanation: "The function multiplies a by b recursively. For a=5, b=5: 5 * function(5,4) = ... = 5*5 = 25."
  },
  {
    id: 2,
    title: "Loop Output Analysis",
    pseudocode: `int x = 0, y = 0
for (i = 0; i < 5; i++)
  x = x + i
  y = y + x
print y`,
    question: "What will be the value of y?",
    options: ["10", "20", "15", "35"],
    correctAnswer: 1,
    explanation: "x accumulates 0+1+2+3+4=10. y accumulates 0+1+3+6+10=20."
  },
  {
    id: 3,
    title: "Conditional Expression",
    pseudocode: `int a = 10, b = 20, c = 30
if ((a > b) OR (b < c))
  print a + b
else
  print b + c`,
    question: "What will be printed?",
    options: ["30", "50", "60", "Nothing"],
    correctAnswer: 0,
    explanation: "Since (10 > 20) is false but (20 < 30) is true, the OR condition is true, so a+b = 30 is printed."
  },
  {
    id: 4,
    title: "String Manipulation",
    pseudocode: `string s = "HELLO"
int n = length(s)
for (i = n-1; i >= 0; i--)
  print s[i]`,
    question: "What will be the output?",
    options: ["HELLO", "OLLEH", "HLELO", "Error"],
    correctAnswer: 1,
    explanation: "The loop prints the string in reverse order: OLLEH."
  },
  {
    id: 5,
    title: "Nested Loop Pattern",
    pseudocode: `int sum = 0
for (i = 1; i <= 3; i++)
  for (j = 1; j <= 2; j++)
    sum = sum + (i * j)
print sum`,
    question: "What is the value of sum?",
    options: ["12", "18", "24", "6"],
    correctAnswer: 1,
    explanation: "Iterations: (1×1)+(1×2)+(2×1)+(2×2)+(3×1)+(3×2) = 1+2+2+4+3+6 = 18."
  },
  {
    id: 6,
    title: "Array Modification",
    pseudocode: `int arr[5] = {1, 2, 3, 4, 5}
for (i = 0; i < 5; i++)
  arr[i] = arr[i] * 2
print arr[2]`,
    question: "What will be printed?",
    options: ["3", "6", "4", "8"],
    correctAnswer: 1,
    explanation: "Each element is doubled. arr[2] was 3, becomes 3×2 = 6."
  },
  {
    id: 7,
    title: "Recursive Sum",
    pseudocode: `function sum(int n)
  if (n == 0)
    return 0
  return n + sum(n - 1)`,
    question: "What is sum(4)?",
    options: ["4", "10", "6", "8"],
    correctAnswer: 1,
    explanation: "4 + sum(3) = 4 + 3 + sum(2) = 4 + 3 + 2 + sum(1) = 4+3+2+1+0 = 10."
  },
  {
    id: 8,
    title: "Boolean Logic",
    pseudocode: `bool a = true, b = false
bool result = (a AND b) OR (NOT b)
print result`,
    question: "What is the value of result?",
    options: ["true", "false", "Error", "null"],
    correctAnswer: 0,
    explanation: "(true AND false) OR (NOT false) = false OR true = true."
  },
  {
    id: 9,
    title: "Variable Swap",
    pseudocode: `int x = 5, y = 10
x = x + y
y = x - y
x = x - y
print x, y`,
    question: "What will be printed?",
    options: ["5, 10", "10, 5", "15, 5", "15, 10"],
    correctAnswer: 1,
    explanation: "Classic swap without temp: x becomes 10, y becomes 5. Prints 10, 5."
  },
  {
    id: 10,
    title: "Modulo Operation",
    pseudocode: `int result = 0
for (i = 1; i <= 10; i++)
  if (i % 3 == 0)
    result = result + i
print result`,
    question: "What is the value of result?",
    options: ["9", "18", "15", "12"],
    correctAnswer: 1,
    explanation: "Multiples of 3 from 1 to 10: 3+6+9 = 18."
  },
  {
    id: 11,
    title: "String Comparison",
    pseudocode: `string s1 = "ABC"
string s2 = "ABC"
if (s1 == s2)
  print "Equal"
else
  print "Not Equal"`,
    question: "What will be printed?",
    options: ["Equal", "Not Equal", "Error", "Nothing"],
    correctAnswer: 0,
    explanation: "Both strings are identical, so 'Equal' is printed."
  },
  {
    id: 12,
    title: "Increment Operators",
    pseudocode: `int a = 5
int b = ++a
int c = a++
print a, b, c`,
    question: "What will be printed?",
    options: ["7, 6, 6", "6, 6, 5", "6, 5, 6", "7, 6, 5"],
    correctAnswer: 0,
    explanation: "++a increments to 6, b=6. a++ returns 6 to c, then a becomes 7. Prints 7, 6, 6."
  },
  {
    id: 13,
    title: "Division and Type",
    pseudocode: `int a = 10
int b = 3
float result = a / b
print result`,
    question: "What will be the output (integer division)?",
    options: ["3", "3.33", "3.0", "Error"],
    correctAnswer: 0,
    explanation: "Integer division 10/3 = 3 (not 3.33)."
  },
  {
    id: 14,
    title: "Break Statement",
    pseudocode: `int sum = 0
for (i = 1; i <= 10; i++)
  sum = sum + i
  if (i == 5)
    break
print sum`,
    question: "What is the value of sum?",
    options: ["15", "55", "10", "5"],
    correctAnswer: 0,
    explanation: "Loop runs for i=1,2,3,4,5 and breaks. sum = 1+2+3+4+5 = 15."
  },
  {
    id: 15,
    title: "Continue Statement",
    pseudocode: `int sum = 0
for (i = 1; i <= 5; i++)
  if (i == 3)
    continue
  sum = sum + i
print sum`,
    question: "What is the value of sum?",
    options: ["12", "15", "10", "13"],
    correctAnswer: 0,
    explanation: "Skips i=3, sums 1+2+4+5 = 12."
  },
  {
    id: 16,
    title: "While Loop",
    pseudocode: `int x = 0, count = 0
while (x < 10)
  x = x + 2
  count = count + 1
print count`,
    question: "What will be printed?",
    options: ["5", "6", "4", "10"],
    correctAnswer: 0,
    explanation: "x takes values 0,2,4,6,8. Loop runs 5 times."
  },
  {
    id: 17,
    title: "Do-While Loop",
    pseudocode: `int x = 10
do
  x = x - 1
while (x > 10)
print x`,
    question: "What is the value of x?",
    options: ["9", "10", "11", "8"],
    correctAnswer: 0,
    explanation: "Do-while executes once before checking condition. x becomes 9, then exits."
  },
  {
    id: 18,
    title: "Array Sum",
    pseudocode: `int arr[4] = {10, 20, 30, 40}
int sum = 0
for (i = 0; i < 4; i++)
  sum = sum + arr[i]
print sum`,
    question: "What will be printed?",
    options: ["100", "80", "60", "90"],
    correctAnswer: 0,
    explanation: "10+20+30+40 = 100."
  },
  {
    id: 19,
    title: "Bitwise AND",
    pseudocode: `int a = 12, b = 10
int result = a & b
print result`,
    question: "What will be printed?",
    options: ["8", "10", "12", "2"],
    correctAnswer: 0,
    explanation: "12 (1100) & 10 (1010) = 8 (1000) in binary."
  },
  {
    id: 20,
    title: "Bitwise OR",
    pseudocode: `int a = 12, b = 10
int result = a | b
print result`,
    question: "What will be printed?",
    options: ["14", "12", "10", "22"],
    correctAnswer: 0,
    explanation: "12 (1100) | 10 (1010) = 14 (1110) in binary."
  },
  // Continue with 80 more unique questions
  {
    id: 21,
    title: "Nested Conditional",
    pseudocode: `int x = 15
if (x > 10)
  if (x > 20)
    print "A"
  else
    print "B"
else
  print "C"`,
    question: "What will be printed?",
    options: ["A", "B", "C", "Nothing"],
    correctAnswer: 1,
    explanation: "x=15 is > 10 but not > 20, so 'B' is printed."
  },
  {
    id: 22,
    title: "Array Search",
    pseudocode: `int arr[5] = {2, 4, 6, 8, 10}
int found = -1
for (i = 0; i < 5; i++)
  if (arr[i] == 6)
    found = i
print found`,
    question: "What is the value of found?",
    options: ["2", "3", "-1", "6"],
    correctAnswer: 0,
    explanation: "Element 6 is at index 2 in the array."
  },
  {
    id: 23,
    title: "Power Calculation",
    pseudocode: `int base = 2, exp = 3, result = 1
for (i = 0; i < exp; i++)
  result = result * base
print result`,
    question: "What will be printed?",
    options: ["6", "8", "9", "5"],
    correctAnswer: 1,
    explanation: "2^3 = 2 × 2 × 2 = 8."
  },
  {
    id: 24,
    title: "Character ASCII",
    pseudocode: `char c = 'A'
int val = c + 1
print val`,
    question: "What will be printed?",
    options: ["66", "65", "B", "Error"],
    correctAnswer: 0,
    explanation: "ASCII of 'A' is 65, so 65 + 1 = 66."
  },
  {
    id: 25,
    title: "Factorial Loop",
    pseudocode: `int n = 5, fact = 1
for (i = 1; i <= n; i++)
  fact = fact * i
print fact`,
    question: "What is the value of fact?",
    options: ["24", "120", "60", "100"],
    correctAnswer: 1,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    id: 26,
    title: "String Length Count",
    pseudocode: `string s = "CODE"
int count = 0
for (i = 0; s[i] != '\\0'; i++)
  count++
print count`,
    question: "What will be printed?",
    options: ["3", "4", "5", "0"],
    correctAnswer: 1,
    explanation: "String 'CODE' has 4 characters."
  },
  {
    id: 27,
    title: "Min of Three",
    pseudocode: `int a = 10, b = 5, c = 8
int min = a
if (b < min) min = b
if (c < min) min = c
print min`,
    question: "What will be printed?",
    options: ["10", "5", "8", "0"],
    correctAnswer: 1,
    explanation: "5 is the smallest among 10, 5, and 8."
  },
  {
    id: 28,
    title: "Even Count",
    pseudocode: `int count = 0
for (i = 1; i <= 10; i++)
  if (i % 2 == 0)
    count++
print count`,
    question: "What is the value of count?",
    options: ["4", "5", "6", "10"],
    correctAnswer: 1,
    explanation: "Even numbers from 1 to 10 are: 2, 4, 6, 8, 10 = 5 numbers."
  },
  {
    id: 29,
    title: "Ternary Operator",
    pseudocode: `int a = 10, b = 20
int max = (a > b) ? a : b
print max`,
    question: "What will be printed?",
    options: ["10", "20", "true", "false"],
    correctAnswer: 1,
    explanation: "Since a < b, the ternary returns b which is 20."
  },
  {
    id: 30,
    title: "XOR Operation",
    pseudocode: `int a = 5, b = 3
int result = a ^ b
print result`,
    question: "What will be printed?",
    options: ["6", "7", "2", "8"],
    correctAnswer: 0,
    explanation: "5 (101) XOR 3 (011) = 6 (110) in binary."
  },
  {
    id: 31,
    title: "Array Reverse Print",
    pseudocode: `int arr[4] = {1, 2, 3, 4}
for (i = 3; i >= 0; i--)
  print arr[i]`,
    question: "What is the output sequence?",
    options: ["4, 3, 2, 1", "1, 2, 3, 4", "3, 2, 1, 0", "Error"],
    correctAnswer: 0,
    explanation: "Loop prints array in reverse: 4, 3, 2, 1."
  },
  {
    id: 32,
    title: "Digit Sum",
    pseudocode: `int n = 123, sum = 0
while (n > 0)
  sum = sum + (n % 10)
  n = n / 10
print sum`,
    question: "What is the value of sum?",
    options: ["5", "6", "7", "123"],
    correctAnswer: 1,
    explanation: "Sum of digits: 1 + 2 + 3 = 6."
  },
  {
    id: 33,
    title: "Logical NOT",
    pseudocode: `bool flag = false
if (!flag)
  print "YES"
else
  print "NO"`,
    question: "What will be printed?",
    options: ["YES", "NO", "true", "false"],
    correctAnswer: 0,
    explanation: "!false is true, so 'YES' is printed."
  },
  {
    id: 34,
    title: "Square Pattern",
    pseudocode: `int n = 3, count = 0
for (i = 0; i < n; i++)
  for (j = 0; j < n; j++)
    count++
print count`,
    question: "What will be printed?",
    options: ["6", "9", "3", "12"],
    correctAnswer: 1,
    explanation: "3×3 grid has 9 cells, count increments 9 times."
  },
  {
    id: 35,
    title: "Prefix Sum",
    pseudocode: `int arr[4] = {1, 2, 3, 4}
for (i = 1; i < 4; i++)
  arr[i] = arr[i] + arr[i-1]
print arr[3]`,
    question: "What will be printed?",
    options: ["4", "10", "7", "6"],
    correctAnswer: 1,
    explanation: "arr becomes {1, 3, 6, 10}, so arr[3] = 10."
  },
  {
    id: 36,
    title: "Left Shift",
    pseudocode: `int n = 5
int result = n << 1
print result`,
    question: "What will be printed?",
    options: ["5", "10", "2", "15"],
    correctAnswer: 1,
    explanation: "Left shift by 1 is equivalent to multiplying by 2: 5 << 1 = 10."
  },
  {
    id: 37,
    title: "Right Shift",
    pseudocode: `int n = 8
int result = n >> 1
print result`,
    question: "What will be printed?",
    options: ["4", "8", "16", "2"],
    correctAnswer: 0,
    explanation: "Right shift by 1 is equivalent to dividing by 2: 8 >> 1 = 4."
  },
  {
    id: 38,
    title: "Two Pointer Sum",
    pseudocode: `int arr[5] = {1, 2, 3, 4, 5}
int sum = arr[0] + arr[4]
print sum`,
    question: "What will be printed?",
    options: ["5", "6", "7", "3"],
    correctAnswer: 1,
    explanation: "arr[0] + arr[4] = 1 + 5 = 6."
  },
  {
    id: 39,
    title: "Prime Check Simple",
    pseudocode: `int n = 7, isPrime = 1
for (i = 2; i < n; i++)
  if (n % i == 0)
    isPrime = 0
print isPrime`,
    question: "What will be printed?",
    options: ["0", "1", "7", "2"],
    correctAnswer: 1,
    explanation: "7 is not divisible by 2-6, so isPrime remains 1 (true)."
  },
  {
    id: 40,
    title: "Max Element Index",
    pseudocode: `int arr[4] = {5, 9, 3, 7}
int maxIdx = 0
for (i = 1; i < 4; i++)
  if (arr[i] > arr[maxIdx])
    maxIdx = i
print maxIdx`,
    question: "What will be printed?",
    options: ["0", "1", "9", "3"],
    correctAnswer: 1,
    explanation: "Maximum element 9 is at index 1."
  },
  {
    id: 41,
    title: "Countdown Loop",
    pseudocode: `int count = 0
for (i = 10; i > 0; i--)
  count++
print count`,
    question: "What will be printed?",
    options: ["9", "10", "11", "0"],
    correctAnswer: 1,
    explanation: "Loop runs from 10 down to 1, total 10 iterations."
  },
  {
    id: 42,
    title: "Alternating Sum",
    pseudocode: `int sum = 0
for (i = 1; i <= 5; i++)
  if (i % 2 == 1)
    sum = sum + i
  else
    sum = sum - i
print sum`,
    question: "What is the value of sum?",
    options: ["3", "5", "1", "-5"],
    correctAnswer: 0,
    explanation: "1 - 2 + 3 - 4 + 5 = 3."
  },
  {
    id: 43,
    title: "Absolute Difference",
    pseudocode: `int a = 10, b = 25
int diff = (a > b) ? (a - b) : (b - a)
print diff`,
    question: "What will be printed?",
    options: ["15", "-15", "35", "10"],
    correctAnswer: 0,
    explanation: "Since b > a, diff = b - a = 25 - 10 = 15."
  },
  {
    id: 44,
    title: "Multiply by Shift",
    pseudocode: `int n = 3
int result = n << 2
print result`,
    question: "What will be printed?",
    options: ["6", "12", "9", "5"],
    correctAnswer: 1,
    explanation: "Left shift by 2 multiplies by 4: 3 × 4 = 12."
  },
  {
    id: 45,
    title: "Array Element Swap",
    pseudocode: `int arr[3] = {1, 2, 3}
int temp = arr[0]
arr[0] = arr[2]
arr[2] = temp
print arr[0], arr[2]`,
    question: "What will be printed?",
    options: ["1, 3", "3, 1", "2, 2", "1, 1"],
    correctAnswer: 1,
    explanation: "Swaps first and last elements: arr becomes {3, 2, 1}."
  },
  {
    id: 46,
    title: "GCD by Subtraction",
    pseudocode: `int a = 12, b = 8
while (a != b)
  if (a > b)
    a = a - b
  else
    b = b - a
print a`,
    question: "What will be printed?",
    options: ["4", "2", "8", "12"],
    correctAnswer: 0,
    explanation: "GCD of 12 and 8 is 4 using subtraction method."
  },
  {
    id: 47,
    title: "Toggle Bit",
    pseudocode: `int n = 5
int result = n ^ 1
print result`,
    question: "What will be printed?",
    options: ["4", "5", "6", "1"],
    correctAnswer: 0,
    explanation: "5 (101) XOR 1 (001) = 4 (100), toggles last bit."
  },
  {
    id: 48,
    title: "Array Product",
    pseudocode: `int arr[3] = {2, 3, 4}
int product = 1
for (i = 0; i < 3; i++)
  product = product * arr[i]
print product`,
    question: "What will be printed?",
    options: ["9", "24", "12", "6"],
    correctAnswer: 1,
    explanation: "2 × 3 × 4 = 24."
  },
  {
    id: 49,
    title: "Nested Break",
    pseudocode: `int count = 0
for (i = 0; i < 3; i++)
  for (j = 0; j < 3; j++)
    count++
    if (j == 1) break
print count`,
    question: "What will be printed?",
    options: ["3", "6", "9", "2"],
    correctAnswer: 1,
    explanation: "Inner loop breaks at j=1, runs 2 times per outer loop: 2×3 = 6."
  },
  {
    id: 50,
    title: "Character Case",
    pseudocode: `char c = 'a'
c = c - 32
print c`,
    question: "What will be printed?",
    options: ["A", "a", "97", "65"],
    correctAnswer: 0,
    explanation: "Subtracting 32 from lowercase converts to uppercase."
  },
  {
    id: 51,
    title: "Sum Until Zero",
    pseudocode: `int n = 5, sum = 0
while (n > 0)
  sum += n
  n--
print sum`,
    question: "What will be printed?",
    options: ["10", "15", "5", "20"],
    correctAnswer: 1,
    explanation: "5 + 4 + 3 + 2 + 1 = 15."
  },
  {
    id: 52,
    title: "Matrix Element",
    pseudocode: `int mat[2][2] = {{1, 2}, {3, 4}}
print mat[1][0]`,
    question: "What will be printed?",
    options: ["1", "3", "2", "4"],
    correctAnswer: 1,
    explanation: "mat[1][0] is row 1, column 0 = 3."
  },
  {
    id: 53,
    title: "Remainder Check",
    pseudocode: `int n = 17
if (n % 5 == 2)
  print "YES"
else
  print "NO"`,
    question: "What will be printed?",
    options: ["YES", "NO", "2", "17"],
    correctAnswer: 0,
    explanation: "17 % 5 = 2, so condition is true, prints 'YES'."
  },
  {
    id: 54,
    title: "Double Loop Count",
    pseudocode: `int count = 0
for (i = 1; i <= 2; i++)
  for (j = 1; j <= 3; j++)
    count++
print count`,
    question: "What will be printed?",
    options: ["5", "6", "2", "3"],
    correctAnswer: 1,
    explanation: "2 × 3 = 6 iterations total."
  },
  {
    id: 55,
    title: "Power of Two",
    pseudocode: `int n = 16
int count = 0
while (n > 1)
  n = n / 2
  count++
print count`,
    question: "What will be printed?",
    options: ["3", "4", "5", "16"],
    correctAnswer: 1,
    explanation: "16→8→4→2→1, divided 4 times."
  },
  {
    id: 56,
    title: "Boolean AND",
    pseudocode: `bool a = true, b = true
bool c = false
bool result = a AND b AND c
print result`,
    question: "What will be printed?",
    options: ["true", "false", "1", "0"],
    correctAnswer: 1,
    explanation: "true AND true AND false = false."
  },
  {
    id: 57,
    title: "Skip Even",
    pseudocode: `int sum = 0
for (i = 1; i <= 6; i++)
  if (i % 2 == 0)
    continue
  sum += i
print sum`,
    question: "What will be printed?",
    options: ["9", "12", "6", "15"],
    correctAnswer: 0,
    explanation: "Sums odd numbers: 1 + 3 + 5 = 9."
  },
  {
    id: 58,
    title: "String Index",
    pseudocode: `string s = "WORLD"
print s[1]`,
    question: "What will be printed?",
    options: ["W", "O", "R", "L"],
    correctAnswer: 1,
    explanation: "Index 1 is the second character: 'O'."
  },
  {
    id: 59,
    title: "Cumulative Product",
    pseudocode: `int product = 1
for (i = 1; i <= 4; i++)
  product *= i
print product`,
    question: "What will be printed?",
    options: ["10", "24", "4", "12"],
    correctAnswer: 1,
    explanation: "1 × 2 × 3 × 4 = 24."
  },
  {
    id: 60,
    title: "Array First Last",
    pseudocode: `int arr[5] = {10, 20, 30, 40, 50}
int sum = arr[0] + arr[4]
print sum`,
    question: "What will be printed?",
    options: ["30", "60", "70", "90"],
    correctAnswer: 1,
    explanation: "First + Last = 10 + 50 = 60."
  },
  {
    id: 61,
    title: "Decrement in Loop",
    pseudocode: `int sum = 0
for (i = 5; i >= 1; i--)
  sum += i
print sum`,
    question: "What will be printed?",
    options: ["10", "15", "5", "20"],
    correctAnswer: 1,
    explanation: "5 + 4 + 3 + 2 + 1 = 15."
  },
  {
    id: 62,
    title: "Check Divisibility",
    pseudocode: `int n = 15
if (n % 3 == 0 AND n % 5 == 0)
  print "BOTH"
else
  print "ONE"`,
    question: "What will be printed?",
    options: ["BOTH", "ONE", "15", "Error"],
    correctAnswer: 0,
    explanation: "15 is divisible by both 3 and 5."
  },
  {
    id: 63,
    title: "Bitwise NOT",
    pseudocode: `int n = 0
int result = ~n
print result`,
    question: "What will be printed (assuming 32-bit)?",
    options: ["-1", "0", "1", "255"],
    correctAnswer: 0,
    explanation: "Bitwise NOT of 0 is -1 in two's complement."
  },
  {
    id: 64,
    title: "Array Middle Element",
    pseudocode: `int arr[5] = {2, 4, 6, 8, 10}
int mid = 5 / 2
print arr[mid]`,
    question: "What will be printed?",
    options: ["4", "6", "8", "2"],
    correctAnswer: 1,
    explanation: "mid = 5/2 = 2 (integer division), arr[2] = 6."
  },
  {
    id: 65,
    title: "Triple Nested Sum",
    pseudocode: `int sum = 0
for (i = 1; i <= 2; i++)
  sum += i
print sum`,
    question: "What will be printed?",
    options: ["2", "3", "1", "6"],
    correctAnswer: 1,
    explanation: "1 + 2 = 3."
  },
  {
    id: 66,
    title: "Reverse Digits",
    pseudocode: `int n = 123, rev = 0
while (n > 0)
  rev = rev * 10 + (n % 10)
  n = n / 10
print rev`,
    question: "What will be printed?",
    options: ["123", "321", "231", "132"],
    correctAnswer: 1,
    explanation: "Reverses digits: 123 becomes 321."
  },
  {
    id: 67,
    title: "Conditional Assignment",
    pseudocode: `int a = 10, b = 5
int result = (a > b) ? (a + b) : (a - b)
print result`,
    question: "What will be printed?",
    options: ["5", "15", "10", "50"],
    correctAnswer: 1,
    explanation: "Since a > b is true, result = a + b = 15."
  },
  {
    id: 68,
    title: "Loop Step 2",
    pseudocode: `int count = 0
for (i = 0; i < 10; i += 2)
  count++
print count`,
    question: "What will be printed?",
    options: ["4", "5", "10", "2"],
    correctAnswer: 1,
    explanation: "i = 0, 2, 4, 6, 8. Five iterations."
  },
  {
    id: 69,
    title: "Char to Int",
    pseudocode: `char c = '5'
int n = c - '0'
print n`,
    question: "What will be printed?",
    options: ["5", "0", "53", "48"],
    correctAnswer: 0,
    explanation: "Converting char digit to int: '5' - '0' = 5."
  },
  {
    id: 70,
    title: "Multiple Assignment",
    pseudocode: `int a, b, c
a = b = c = 10
print a + b + c`,
    question: "What will be printed?",
    options: ["10", "30", "20", "0"],
    correctAnswer: 1,
    explanation: "All three variables = 10, sum = 30."
  },
  {
    id: 71,
    title: "Array Min Value",
    pseudocode: `int arr[4] = {8, 3, 9, 1}
int min = arr[0]
for (i = 1; i < 4; i++)
  if (arr[i] < min)
    min = arr[i]
print min`,
    question: "What will be printed?",
    options: ["1", "3", "8", "9"],
    correctAnswer: 0,
    explanation: "Minimum element in array is 1."
  },
  {
    id: 72,
    title: "Nested Condition",
    pseudocode: `int x = 8
if (x > 5)
  if (x < 10)
    print "RANGE"
print "END"`,
    question: "What will be printed?",
    options: ["RANGE", "END", "RANGE END", "Nothing"],
    correctAnswer: 2,
    explanation: "Prints 'RANGE' then 'END' on separate lines."
  },
  {
    id: 73,
    title: "Sum Squares",
    pseudocode: `int sum = 0
for (i = 1; i <= 3; i++)
  sum += i * i
print sum`,
    question: "What will be printed?",
    options: ["6", "14", "9", "12"],
    correctAnswer: 1,
    explanation: "1² + 2² + 3² = 1 + 4 + 9 = 14."
  },
  {
    id: 74,
    title: "Zero Array Check",
    pseudocode: `int arr[3] = {0, 0, 0}
int sum = 0
for (i = 0; i < 3; i++)
  sum += arr[i]
print sum`,
    question: "What will be printed?",
    options: ["0", "3", "1", "-1"],
    correctAnswer: 0,
    explanation: "Sum of all zeros is 0."
  },
  {
    id: 75,
    title: "Boolean XOR",
    pseudocode: `bool a = true, b = false
bool result = a XOR b
print result`,
    question: "What will be printed?",
    options: ["true", "false", "1", "0"],
    correctAnswer: 0,
    explanation: "true XOR false = true."
  },
  {
    id: 76,
    title: "Count Down",
    pseudocode: `int n = 3, count = 0
while (n >= 0)
  count++
  n--
print count`,
    question: "What will be printed?",
    options: ["3", "4", "2", "5"],
    correctAnswer: 1,
    explanation: "Loop runs for n = 3, 2, 1, 0. Four times."
  },
  {
    id: 77,
    title: "Max of Array",
    pseudocode: `int arr[3] = {7, 3, 9}
int max = 0
for (i = 0; i < 3; i++)
  if (arr[i] > max)
    max = arr[i]
print max`,
    question: "What will be printed?",
    options: ["7", "9", "3", "0"],
    correctAnswer: 1,
    explanation: "Maximum element is 9."
  },
  {
    id: 78,
    title: "Nested Product",
    pseudocode: `int result = 1
for (i = 1; i <= 2; i++)
  for (j = 1; j <= 2; j++)
    result *= i
print result`,
    question: "What will be printed?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "i=1: 1×1=1, i=2: 1×2×2=4."
  },
  {
    id: 79,
    title: "Skip Multiple",
    pseudocode: `int count = 0
for (i = 1; i <= 12; i++)
  if (i % 3 == 0)
    count++
print count`,
    question: "What will be printed?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Multiples of 3: 3, 6, 9, 12 = 4 numbers."
  },
  {
    id: 80,
    title: "String First Char",
    pseudocode: `string s = "TEST"
print s[0]`,
    question: "What will be printed?",
    options: ["T", "E", "S", "TEST"],
    correctAnswer: 0,
    explanation: "First character (index 0) is 'T'."
  },
  {
    id: 81,
    title: "Digit Count",
    pseudocode: `int n = 4567, count = 0
while (n > 0)
  count++
  n = n / 10
print count`,
    question: "What will be printed?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 1,
    explanation: "4567 has 4 digits."
  },
  {
    id: 82,
    title: "Array Sum Odd Index",
    pseudocode: `int arr[5] = {1, 2, 3, 4, 5}
int sum = 0
for (i = 1; i < 5; i += 2)
  sum += arr[i]
print sum`,
    question: "What will be printed?",
    options: ["4", "6", "9", "15"],
    correctAnswer: 1,
    explanation: "Odd indices: arr[1] + arr[3] = 2 + 4 = 6."
  },
  {
    id: 83,
    title: "Compound Condition",
    pseudocode: `int x = 5, y = 10
if (x < y AND y > 8)
  print "TRUE"
else
  print "FALSE"`,
    question: "What will be printed?",
    options: ["TRUE", "FALSE", "5", "10"],
    correctAnswer: 0,
    explanation: "Both conditions are true: 5 < 10 AND 10 > 8."
  },
  {
    id: 84,
    title: "Initialize Array Sum",
    pseudocode: `int arr[3] = {5, 10, 15}
int total = arr[0] + arr[1] + arr[2]
print total`,
    question: "What will be printed?",
    options: ["20", "30", "15", "25"],
    correctAnswer: 1,
    explanation: "5 + 10 + 15 = 30."
  },
  {
    id: 85,
    title: "Parity Check",
    pseudocode: `int n = 7
if (n & 1)
  print "ODD"
else
  print "EVEN"`,
    question: "What will be printed?",
    options: ["ODD", "EVEN", "1", "7"],
    correctAnswer: 0,
    explanation: "n & 1 checks last bit. 7 & 1 = 1 (odd)."
  },
  {
    id: 86,
    title: "Loop With Break Early",
    pseudocode: `int sum = 0
for (i = 1; i <= 20; i++)
  sum += i
  if (sum > 10)
    break
print sum`,
    question: "What will be printed?",
    options: ["10", "15", "6", "21"],
    correctAnswer: 1,
    explanation: "1+2+3+4+5 = 15, breaks when sum > 10."
  },
  {
    id: 87,
    title: "Character Range",
    pseudocode: `char c = 'M'
if (c >= 'A' AND c <= 'Z')
  print "UPPER"
else
  print "LOWER"`,
    question: "What will be printed?",
    options: ["UPPER", "LOWER", "M", "Error"],
    correctAnswer: 0,
    explanation: "'M' is between 'A' and 'Z', so it's uppercase."
  },
  {
    id: 88,
    title: "Array Double",
    pseudocode: `int arr[3] = {2, 4, 6}
for (i = 0; i < 3; i++)
  arr[i] *= 2
print arr[1]`,
    question: "What will be printed?",
    options: ["4", "8", "2", "6"],
    correctAnswer: 1,
    explanation: "arr[1] was 4, doubled to 8."
  },
  {
    id: 89,
    title: "Short Circuit OR",
    pseudocode: `int a = 10
if (a > 5 OR a < 0)
  print "YES"
else
  print "NO"`,
    question: "What will be printed?",
    options: ["YES", "NO", "10", "Error"],
    correctAnswer: 0,
    explanation: "First condition (a > 5) is true, so OR returns true."
  },
  {
    id: 90,
    title: "Multiply Accumulator",
    pseudocode: `int prod = 2
for (i = 1; i <= 3; i++)
  prod *= i
print prod`,
    question: "What will be printed?",
    options: ["6", "12", "24", "8"],
    correctAnswer: 1,
    explanation: "2 × 1 × 2 × 3 = 12."
  },
  {
    id: 91,
    title: "Find Position",
    pseudocode: `int arr[5] = {10, 20, 30, 40, 50}
int pos = -1
for (i = 0; i < 5; i++)
  if (arr[i] == 30)
    pos = i
print pos`,
    question: "What will be printed?",
    options: ["1", "2", "3", "-1"],
    correctAnswer: 1,
    explanation: "Element 30 is at index 2."
  },
  {
    id: 92,
    title: "Negative Check",
    pseudocode: `int n = -5
if (n < 0)
  n = -n
print n`,
    question: "What will be printed?",
    options: ["5", "-5", "0", "Error"],
    correctAnswer: 0,
    explanation: "Converts negative to positive: -(-5) = 5."
  },
  {
    id: 93,
    title: "Sum First N",
    pseudocode: `int n = 6, sum = 0
for (i = 1; i <= n; i++)
  sum += i
print sum`,
    question: "What will be printed?",
    options: ["15", "21", "6", "36"],
    correctAnswer: 1,
    explanation: "1+2+3+4+5+6 = 21."
  },
  {
    id: 94,
    title: "Matrix Diagonal",
    pseudocode: `int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}}
int sum = mat[0][0] + mat[1][1] + mat[2][2]
print sum`,
    question: "What will be printed?",
    options: ["12", "15", "18", "9"],
    correctAnswer: 1,
    explanation: "Main diagonal: 1 + 5 + 9 = 15."
  },
  {
    id: 95,
    title: "Powers of 2 Sum",
    pseudocode: `int sum = 0
for (i = 0; i < 4; i++)
  sum += (1 << i)
print sum`,
    question: "What will be printed?",
    options: ["7", "15", "8", "10"],
    correctAnswer: 1,
    explanation: "1 + 2 + 4 + 8 = 15."
  },
  {
    id: 96,
    title: "Character Increment",
    pseudocode: `char c = 'X'
c = c + 2
print c`,
    question: "What will be printed?",
    options: ["X", "Z", "Y", "90"],
    correctAnswer: 1,
    explanation: "'X' + 2 = 'Z' in ASCII."
  },
  {
    id: 97,
    title: "Boolean Implication",
    pseudocode: `bool p = false, q = true
bool result = (!p OR q)
print result`,
    question: "What will be printed?",
    options: ["true", "false", "1", "0"],
    correctAnswer: 0,
    explanation: "(!false OR true) = (true OR true) = true."
  },
  {
    id: 98,
    title: "Nested Sum Different",
    pseudocode: `int sum = 0
for (i = 1; i <= 2; i++)
  for (j = 1; j <= 3; j++)
    sum += j
print sum`,
    question: "What will be printed?",
    options: ["6", "12", "9", "18"],
    correctAnswer: 1,
    explanation: "Inner loop sums 1+2+3=6, runs twice: 6+6=12."
  },
  {
    id: 99,
    title: "Check Power of 2",
    pseudocode: `int n = 8
if ((n & (n - 1)) == 0)
  print "YES"
else
  print "NO"`,
    question: "What will be printed?",
    options: ["YES", "NO", "8", "0"],
    correctAnswer: 0,
    explanation: "8 & 7 = 0, confirms 8 is a power of 2."
  },
  {
    id: 100,
    title: "Final Challenge",
    pseudocode: `int a = 2, b = 3, c = 4
int result = a * b + c * c - a
print result`,
    question: "What will be printed?",
    options: ["18", "20", "22", "16"],
    correctAnswer: 1,
    explanation: "2*3 + 4*4 - 2 = 6 + 16 - 2 = 20."
  },
];
