export interface CodingProblem {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  input: string;
  output: string;
  example: {
    input: string;
    output: string;
  };
  solutions: {
    cpp: string;
    java: string;
    python: string;
  };
}

// This is the master list that syncs IDs across the application
export const codingProblemsList = [
  { id: 1, title: 'Second Maximum Element', description: 'Find the second largest element in an array', difficulty: 'Easy' as const },
  { id: 2, title: 'Valid Anagrams', description: 'Check if two strings are anagrams', difficulty: 'Easy' as const },
  { id: 3, title: 'Bubble Sort', description: 'Implement bubble sort technique', difficulty: 'Easy' as const },
  { id: 4, title: 'Linear Search', description: 'Search for an element using linear search', difficulty: 'Easy' as const },
  { id: 5, title: 'Reverse of Array', description: 'Reverse the elements of an array', difficulty: 'Easy' as const },
  { id: 6, title: 'Armstrong Number', description: 'Check if a number is an Armstrong number', difficulty: 'Easy' as const },
  { id: 7, title: 'Palindrome', description: 'Check if a string or number is a palindrome', difficulty: 'Easy' as const },
  { id: 8, title: 'Reverse of a String', description: 'Reverse the characters in a string', difficulty: 'Easy' as const },
  { id: 9, title: 'Sum of Array', description: 'Calculate the sum of all elements in an array', difficulty: 'Easy' as const },
  { id: 10, title: 'Find Maximum', description: 'Find the maximum element in an array', difficulty: 'Easy' as const },
  { id: 11, title: 'Count Vowels', description: 'Count the number of vowels in a string', difficulty: 'Easy' as const },
  { id: 12, title: 'Factorial', description: 'Calculate factorial of a number', difficulty: 'Easy' as const },
  { id: 13, title: 'Fibonacci Series', description: 'Generate Fibonacci series up to n terms', difficulty: 'Easy' as const },
  { id: 14, title: 'Prime Number', description: 'Check if a number is prime', difficulty: 'Easy' as const },
  { id: 15, title: 'Swap Two Numbers', description: 'Swap two numbers without using third variable', difficulty: 'Easy' as const },
  { id: 16, title: 'Even or Odd', description: 'Check if a number is even or odd', difficulty: 'Easy' as const },
  { id: 17, title: 'String Length', description: 'Find length of a string without using built-in functions', difficulty: 'Easy' as const },
  { id: 18, title: 'Array Rotation', description: 'Rotate an array by k positions', difficulty: 'Easy' as const },
  { id: 19, title: 'Remove Duplicates', description: 'Remove duplicate elements from an array', difficulty: 'Easy' as const },
  { id: 20, title: 'Merge Two Arrays', description: 'Merge two sorted arrays', difficulty: 'Easy' as const },
  { id: 21, title: 'Find Missing Number', description: 'Find the missing number in array from 1 to n', difficulty: 'Easy' as const },
  { id: 22, title: 'GCD of Two Numbers', description: 'Find greatest common divisor of two numbers', difficulty: 'Easy' as const },
  { id: 23, title: 'LCM of Two Numbers', description: 'Find least common multiple of two numbers', difficulty: 'Easy' as const },
  { id: 24, title: 'Power of Number', description: 'Calculate x raised to power n', difficulty: 'Easy' as const },
  { id: 25, title: 'Count Digits', description: 'Count number of digits in an integer', difficulty: 'Easy' as const },
  { id: 26, title: 'Reverse Number', description: 'Reverse the digits of a number', difficulty: 'Easy' as const },
  { id: 27, title: 'Sum of Digits', description: 'Calculate sum of digits of a number', difficulty: 'Easy' as const },
  { id: 28, title: 'Leap Year', description: 'Check if a year is a leap year', difficulty: 'Easy' as const },
  { id: 29, title: 'ASCII Value', description: 'Find ASCII value of a character', difficulty: 'Easy' as const },
  { id: 30, title: 'Character Case', description: 'Convert character to uppercase/lowercase', difficulty: 'Easy' as const },
  { id: 31, title: 'String Concatenation', description: 'Concatenate two strings without using built-in functions', difficulty: 'Easy' as const },
  { id: 32, title: 'String Comparison', description: 'Compare two strings lexicographically', difficulty: 'Easy' as const },
  { id: 33, title: 'Count Words', description: 'Count number of words in a string', difficulty: 'Easy' as const },
  { id: 34, title: 'First Non-Repeating Character', description: 'Find first non-repeating character in a string', difficulty: 'Easy' as const },
  { id: 35, title: 'Number Pattern', description: 'Print number patterns', difficulty: 'Easy' as const },
  { id: 36, title: 'Star Pattern', description: 'Print star patterns', difficulty: 'Easy' as const },
  { id: 37, title: 'Sum of N Numbers', description: 'Calculate sum of first n natural numbers', difficulty: 'Easy' as const },
  { id: 38, title: 'Product of Array', description: 'Calculate product of all elements in array', difficulty: 'Easy' as const },
  { id: 39, title: 'Binary to Decimal', description: 'Convert binary number to decimal', difficulty: 'Easy' as const },
  { id: 40, title: 'Decimal to Binary', description: 'Convert decimal number to binary', difficulty: 'Easy' as const },
  { id: 41, title: 'Binary Search', description: 'Search for an element using binary search', difficulty: 'Medium' as const },
  { id: 42, title: 'Transpose Matrix', description: 'Find the transpose of a matrix', difficulty: 'Medium' as const },
  { id: 43, title: 'Matrix Multiplication', description: 'Multiply two matrices', difficulty: 'Medium' as const },
  { id: 44, title: 'Two Sum Problem', description: 'Find two numbers that add up to a target', difficulty: 'Medium' as const },
  { id: 45, title: 'Three Sum Problem', description: 'Find three numbers that add up to zero', difficulty: 'Medium' as const },
  { id: 46, title: 'Kadane\'s Algorithm', description: 'Find maximum subarray sum', difficulty: 'Medium' as const },
  { id: 47, title: 'Stock Buy Sell', description: 'Best time to buy and sell stock', difficulty: 'Medium' as const },
  { id: 48, title: 'Merge Sort', description: 'Implement merge sort algorithm', difficulty: 'Medium' as const },
  { id: 49, title: 'Quick Sort', description: 'Implement quick sort algorithm', difficulty: 'Medium' as const },
  { id: 50, title: 'Selection Sort', description: 'Implement selection sort algorithm', difficulty: 'Medium' as const },
  { id: 51, title: 'Insertion Sort', description: 'Implement insertion sort algorithm', difficulty: 'Medium' as const },
  { id: 52, title: 'Longest Substring', description: 'Find longest substring without repeating characters', difficulty: 'Medium' as const },
  { id: 53, title: 'Valid Parentheses', description: 'Check if parentheses are balanced', difficulty: 'Medium' as const },
  { id: 54, title: 'Linked List Reversal', description: 'Reverse a linked list', difficulty: 'Medium' as const },
  { id: 55, title: 'Detect Cycle', description: 'Detect cycle in a linked list', difficulty: 'Medium' as const },
  { id: 56, title: 'Middle of Linked List', description: 'Find middle element of linked list', difficulty: 'Medium' as const },
  { id: 57, title: 'Merge Two Lists', description: 'Merge two sorted linked lists', difficulty: 'Medium' as const },
  { id: 58, title: 'Binary Tree Traversal', description: 'Implement inorder, preorder, postorder traversals', difficulty: 'Medium' as const },
  { id: 59, title: 'Level Order Traversal', description: 'Traverse binary tree level by level', difficulty: 'Medium' as const },
  { id: 60, title: 'Tree Height', description: 'Find height of a binary tree', difficulty: 'Medium' as const },
  { id: 61, title: 'Longest Common Subsequence', description: 'Find longest common subsequence of two strings', difficulty: 'Medium' as const },
  { id: 62, title: 'Knapsack Problem', description: 'Solve 0/1 knapsack problem', difficulty: 'Medium' as const },
  { id: 63, title: 'Coin Change', description: 'Find minimum coins needed for a value', difficulty: 'Medium' as const },
  { id: 64, title: 'Climbing Stairs', description: 'Count ways to reach top of stairs', difficulty: 'Medium' as const },
  { id: 65, title: 'House Robber', description: 'Maximum money that can be robbed', difficulty: 'Medium' as const },
  { id: 66, title: 'Container With Most Water', description: 'Find container that holds most water', difficulty: 'Medium' as const },
  { id: 67, title: 'Rotate Matrix', description: 'Rotate matrix by 90 degrees', difficulty: 'Medium' as const },
  { id: 68, title: 'Spiral Matrix', description: 'Print matrix in spiral order', difficulty: 'Medium' as const },
  { id: 69, title: 'Search in Rotated Array', description: 'Search in rotated sorted array', difficulty: 'Medium' as const },
  { id: 70, title: 'Find Peak Element', description: 'Find a peak element in array', difficulty: 'Medium' as const },
  { id: 71, title: 'Sort Colors', description: 'Sort array with 0s, 1s, and 2s', difficulty: 'Medium' as const },
  { id: 72, title: 'Subarray Sum Equals K', description: 'Count subarrays with sum equal to k', difficulty: 'Medium' as const },
  { id: 73, title: 'Product of Array Except Self', description: 'Product of all elements except current', difficulty: 'Medium' as const },
  { id: 74, title: 'Next Permutation', description: 'Find next lexicographic permutation', difficulty: 'Medium' as const },
  { id: 75, title: 'Longest Palindromic Substring', description: 'Find longest palindromic substring', difficulty: 'Medium' as const },
  { id: 76, title: 'Group Anagrams', description: 'Group strings that are anagrams', difficulty: 'Medium' as const },
  { id: 77, title: 'Word Break', description: 'Check if string can be segmented into words', difficulty: 'Medium' as const },
  { id: 78, title: 'Unique Paths', description: 'Count unique paths in a grid', difficulty: 'Medium' as const },
  { id: 79, title: 'Jump Game', description: 'Check if you can reach the end', difficulty: 'Medium' as const },
  { id: 80, title: 'Min Stack', description: 'Design stack with getMin operation', difficulty: 'Medium' as const },
  { id: 81, title: 'Median of Two Sorted Arrays', description: 'Find median of two sorted arrays', difficulty: 'Hard' as const },
  { id: 82, title: 'Trapping Rain Water', description: 'Calculate trapped rainwater', difficulty: 'Hard' as const },
  { id: 83, title: 'Wildcard Matching', description: 'Implement wildcard pattern matching', difficulty: 'Hard' as const },
  { id: 84, title: 'Regular Expression Matching', description: 'Implement regex matching', difficulty: 'Hard' as const },
  { id: 85, title: 'N-Queens Problem', description: 'Place N queens on N×N chessboard', difficulty: 'Hard' as const },
  { id: 86, title: 'Sudoku Solver', description: 'Solve a Sudoku puzzle', difficulty: 'Hard' as const },
  { id: 87, title: 'Word Ladder', description: 'Find shortest transformation sequence', difficulty: 'Hard' as const },
  { id: 88, title: 'Longest Valid Parentheses', description: 'Find longest valid parentheses substring', difficulty: 'Hard' as const },
  { id: 89, title: 'Edit Distance', description: 'Minimum operations to convert one string to another', difficulty: 'Hard' as const },
  { id: 90, title: 'Maximum Rectangle', description: 'Find largest rectangle in histogram', difficulty: 'Hard' as const },
  { id: 91, title: 'Sliding Window Maximum', description: 'Maximum in each sliding window', difficulty: 'Hard' as const },
  { id: 92, title: 'Serialize/Deserialize Tree', description: 'Serialize and deserialize binary tree', difficulty: 'Hard' as const },
  { id: 93, title: 'Word Search II', description: 'Find all words in a board', difficulty: 'Hard' as const },
  { id: 94, title: 'Palindrome Partitioning II', description: 'Minimum cuts for palindrome partitioning', difficulty: 'Hard' as const },
  { id: 95, title: 'Distinct Subsequences', description: 'Count distinct subsequences', difficulty: 'Hard' as const },
  { id: 96, title: 'Interleaving String', description: 'Check if string is formed by interleaving two strings', difficulty: 'Hard' as const },
  { id: 97, title: 'Scramble String', description: 'Check if string is scrambled version', difficulty: 'Hard' as const },
  { id: 98, title: 'Shortest Palindrome', description: 'Find shortest palindrome by adding characters', difficulty: 'Hard' as const },
  { id: 99, title: 'Binary Tree Maximum Path Sum', description: 'Find maximum path sum in binary tree', difficulty: 'Hard' as const },
  { id: 100, title: 'Alien Dictionary', description: 'Derive order of characters in alien language', difficulty: 'Hard' as const },
];

// Default solution template for problems without solutions
const defaultSolution = {
  cpp: `// Solution coming soon!
// Practice writing your own solution.`,
  java: `// Solution coming soon!
// Practice writing your own solution.`,
  python: `# Solution coming soon!
# Practice writing your own solution.`
};

// Full problem details with solutions (keyed by problem ID)
export const codingProblemsDetails: Record<number, CodingProblem> = {
  1: {
    id: 1,
    title: 'Second Maximum Element',
    description: 'Write a program to find the second largest element in an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Second maximum element',
    example: { input: '[5, 3, 9, 1, 7]', output: '7' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int secondMax(vector<int>& arr) {
    if (arr.size() < 2) return -1;
    int first = INT_MIN, second = INT_MIN;
    for (int num : arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }
    return second == INT_MIN ? -1 : second;
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << secondMax(arr) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int secondMax(int[] arr) {
        if (arr.length < 2) return -1;
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second == Integer.MIN_VALUE ? -1 : second;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println(secondMax(arr));
    }
}`,
      python: `def second_max(arr):
    if len(arr) < 2:
        return -1
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return -1 if second == float('-inf') else second

n = int(input())
arr = list(map(int, input().split()))
print(second_max(arr))`
    }
  },
  2: {
    id: 2,
    title: 'Valid Anagrams',
    description: 'Check if two strings are anagrams of each other.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: 'True if anagrams, False otherwise',
    example: { input: "\"listen\", \"silent\"", output: 'True' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isAnagram(string s1, string s2) {
    if (s1.length() != s2.length()) return false;
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    return s1 == s2;
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << (isAnagram(s1, s2) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        return Arrays.equals(a1, a2);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        System.out.println(isAnagram(s1, s2) ? "True" : "False");
    }
}`,
      python: `def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

s1 = input()
s2 = input()
print("True" if is_anagram(s1, s2) else "False")`
    }
  },
  3: {
    id: 3,
    title: 'Bubble Sort',
    description: 'Implement the bubble sort algorithm to sort an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Sorted array',
    example: { input: '[64, 34, 25, 12, 22]', output: '[12, 22, 25, 34, 64]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    bubbleSort(arr);
    for (int num : arr) cout << num << " ";
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        bubbleSort(arr);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

n = int(input())
arr = list(map(int, input().split()))
bubble_sort(arr)
print(" ".join(map(str, arr)))`
    }
  },
  4: {
    id: 4,
    title: 'Linear Search',
    description: 'Search for an element in an array using linear search.',
    difficulty: 'Easy',
    input: 'Array and target element',
    output: 'Index of element or -1 if not found',
    example: { input: 'arr = [10, 20, 30, 40], target = 30', output: '2' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    int n, target;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cin >> target;
    cout << linearSearch(arr, target) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int target = sc.nextInt();
        System.out.println(linearSearch(arr, target));
    }
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

n = int(input())
arr = list(map(int, input().split()))
target = int(input())
print(linear_search(arr, target))`
    }
  },
  5: {
    id: 5,
    title: 'Reverse of Array',
    description: 'Reverse the elements of an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Reversed array',
    example: { input: '[1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    reverseArray(arr);
    for (int num : arr) cout << num << " ";
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        reverseArray(arr);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def reverse_array(arr):
    return arr[::-1]

n = int(input())
arr = list(map(int, input().split()))
print(" ".join(map(str, reverse_array(arr))))`
    }
  },
  6: {
    id: 6,
    title: 'Armstrong Number',
    description: 'Check if a number is an Armstrong number (sum of cubes of digits equals the number).',
    difficulty: 'Easy',
    input: 'A positive integer',
    output: 'True if Armstrong number, False otherwise',
    example: { input: '153', output: 'True (1³ + 5³ + 3³ = 153)' },
    solutions: {
      cpp: `#include <iostream>
#include <cmath>
using namespace std;

bool isArmstrong(int n) {
    int original = n, sum = 0;
    int digits = to_string(n).length();
    while (n > 0) {
        int digit = n % 10;
        sum += pow(digit, digits);
        n /= 10;
    }
    return sum == original;
}

int main() {
    int n;
    cin >> n;
    cout << (isArmstrong(n) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static boolean isArmstrong(int n) {
        int original = n, sum = 0;
        int digits = String.valueOf(n).length();
        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);
            n /= 10;
        }
        return sum == original;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isArmstrong(n) ? "True" : "False");
    }
}`,
      python: `def is_armstrong(n):
    digits = len(str(n))
    return sum(int(d) ** digits for d in str(n)) == n

n = int(input())
print("True" if is_armstrong(n) else "False")`
    }
  },
  7: {
    id: 7,
    title: 'Palindrome',
    description: 'Check if a string or number is a palindrome.',
    difficulty: 'Easy',
    input: 'A string or number',
    output: 'True if palindrome, False otherwise',
    example: { input: '"racecar"', output: 'True' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(isPalindrome(s) ? "True" : "False");
    }
}`,
      python: `def is_palindrome(s):
    return s == s[::-1]

s = input()
print("True" if is_palindrome(s) else "False")`
    }
  },
  8: {
    id: 8,
    title: 'Reverse of a String',
    description: 'Reverse the characters in a string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Reversed string',
    example: { input: '"hello"', output: '"olleh"' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s;
    cin >> s;
    reverse(s.begin(), s.end());
    cout << s << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(new StringBuilder(s).reverse().toString());
    }
}`,
      python: `s = input()
print(s[::-1])`
    }
  },
  9: {
    id: 9,
    title: 'Sum of Array',
    description: 'Calculate the sum of all elements in an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Sum of all elements',
    example: { input: '[1, 2, 3, 4, 5]', output: '15' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, sum = 0;
    cin >> n;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        sum += x;
    }
    cout << sum << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += sc.nextInt();
        }
        System.out.println(sum);
    }
}`,
      python: `n = int(input())
arr = list(map(int, input().split()))
print(sum(arr))`
    }
  },
  10: {
    id: 10,
    title: 'Find Maximum',
    description: 'Find the maximum element in an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Maximum element',
    example: { input: '[3, 7, 2, 9, 1]', output: '9' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << *max_element(arr.begin(), arr.end()) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            max = Math.max(max, sc.nextInt());
        }
        System.out.println(max);
    }
}`,
      python: `n = int(input())
arr = list(map(int, input().split()))
print(max(arr))`
    }
  },
  41: {
    id: 41,
    title: 'Binary Search',
    description: 'Search for an element in a sorted array using binary search.',
    difficulty: 'Medium',
    input: 'Sorted array and target element',
    output: 'Index of element or -1 if not found',
    example: { input: 'arr = [10, 20, 30, 40, 50], target = 30', output: '2' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int n, target;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cin >> target;
    cout << binarySearch(arr, target) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int target = sc.nextInt();
        System.out.println(binarySearch(arr, target));
    }
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

n = int(input())
arr = list(map(int, input().split()))
target = int(input())
print(binary_search(arr, target))`
    }
  },
  11: {
    id: 11,
    title: 'Count Vowels',
    description: 'Write a program to count the number of vowels (a, e, i, o, u) in a given string. The count should include both uppercase and lowercase vowels.',
    difficulty: 'Easy',
    input: 'A string containing alphabetic characters',
    output: 'Number of vowels in the string',
    example: { input: 'Hello World', output: '3' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int countVowels(string str) {
    int count = 0;
    string vowels = "aeiouAEIOU";
    for (char c : str) {
        if (vowels.find(c) != string::npos) {
            count++;
        }
    }
    return count;
}

int main() {
    string str;
    getline(cin, str);
    cout << countVowels(str) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int countVowels(String str) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (int i = 0; i < str.length(); i++) {
            if (vowels.indexOf(str.charAt(i)) != -1) {
                count++;
            }
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(countVowels(str));
    }
}`,
      python: `def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

s = input()
print(count_vowels(s))`
    }
  },
  12: {
    id: 12,
    title: 'Factorial',
    description: 'Calculate the factorial of a given non-negative integer n. Factorial of n (n!) is the product of all positive integers less than or equal to n.',
    difficulty: 'Easy',
    input: 'A non-negative integer n',
    output: 'Factorial of n',
    example: { input: '5', output: '120' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

long long factorial(int n) {
    if (n <= 1) return 1;
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(factorial(n));
    }
}`,
      python: `def factorial(n):
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

n = int(input())
print(factorial(n))`
    }
  },
  13: {
    id: 13,
    title: 'Fibonacci Series',
    description: 'Generate the Fibonacci series up to n terms. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.',
    difficulty: 'Easy',
    input: 'Number of terms n',
    output: 'First n Fibonacci numbers',
    example: { input: '7', output: '0 1 1 2 3 5 8' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    long long a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        cout << a;
        if (i < n - 1) cout << " ";
        long long temp = a + b;
        a = b;
        b = temp;
    }
    cout << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        long a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a);
            if (i < n - 1) System.out.print(" ");
            long temp = a + b;
            a = b;
            b = temp;
        }
        System.out.println();
    }
}`,
      python: `def fibonacci(n):
    result = []
    a, b = 0, 1
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

n = int(input())
print(' '.join(map(str, fibonacci(n))))`
    }
  },
  14: {
    id: 14,
    title: 'Prime Number',
    description: 'Check if a given number is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
    difficulty: 'Easy',
    input: 'A positive integer n',
    output: 'True if prime, False otherwise',
    example: { input: '17', output: 'True' },
    solutions: {
      cpp: `#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    cout << (isPrime(n) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isPrime(n) ? "True" : "False");
    }
}`,
      python: `def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

n = int(input())
print("True" if is_prime(n) else "False")`
    }
  },
  15: {
    id: 15,
    title: 'Swap Two Numbers',
    description: 'Swap two numbers without using a third variable. Use arithmetic or bitwise operations to exchange values.',
    difficulty: 'Easy',
    input: 'Two integers a and b',
    output: 'Swapped values of a and b',
    example: { input: '5 10', output: '10 5' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    // Method 1: Arithmetic
    a = a + b;
    b = a - b;
    a = a - b;
    
    cout << a << " " << b << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        // Method 1: Arithmetic
        a = a + b;
        b = a - b;
        a = a - b;
        
        System.out.println(a + " " + b);
    }
}`,
      python: `a, b = map(int, input().split())

# Python's easy swap
a, b = b, a

print(a, b)`
    }
  },
  16: {
    id: 16,
    title: 'Even or Odd',
    description: 'Check if a given number is even or odd. An even number is divisible by 2, while an odd number leaves a remainder of 1.',
    difficulty: 'Easy',
    input: 'An integer n',
    output: 'Even or Odd',
    example: { input: '7', output: 'Odd' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    if (n % 2 == 0) {
        cout << "Even" << endl;
    } else {
        cout << "Odd" << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        if (n % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}`,
      python: `n = int(input())

if n % 2 == 0:
    print("Even")
else:
    print("Odd")`
    }
  },
  17: {
    id: 17,
    title: 'String Length',
    description: 'Find the length of a string without using built-in length functions. Iterate through the string and count characters.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Length of the string',
    example: { input: 'Hello World', output: '11' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int stringLength(const string& str) {
    int count = 0;
    for (char c : str) {
        count++;
    }
    return count;
}

int main() {
    string str;
    getline(cin, str);
    cout << stringLength(str) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int stringLength(String str) {
        int count = 0;
        for (char c : str.toCharArray()) {
            count++;
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(stringLength(str));
    }
}`,
      python: `def string_length(s):
    count = 0
    for char in s:
        count += 1
    return count

s = input()
print(string_length(s))`
    }
  },
  18: {
    id: 18,
    title: 'Array Rotation',
    description: 'Rotate an array by k positions to the left. Elements shifted out from the beginning move to the end.',
    difficulty: 'Easy',
    input: 'Array of integers and k (number of rotations)',
    output: 'Rotated array',
    example: { input: '[1, 2, 3, 4, 5], k=2', output: '[3, 4, 5, 1, 2]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void rotateLeft(vector<int>& arr, int k) {
    int n = arr.size();
    k = k % n;
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
    reverse(arr.begin(), arr.end());
}

int main() {
    int n, k;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cin >> k;
    
    rotateLeft(arr, k);
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void rotateLeft(int[] arr, int k) {
        int n = arr.length;
        k = k % n;
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
        reverse(arr, 0, n - 1);
    }
    
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int k = sc.nextInt();
        
        rotateLeft(arr, k);
        
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i]);
            if (i < n - 1) System.out.print(" ");
        }
        System.out.println();
    }
}`,
      python: `def rotate_left(arr, k):
    n = len(arr)
    k = k % n
    return arr[k:] + arr[:k]

n = int(input())
arr = list(map(int, input().split()))
k = int(input())

result = rotate_left(arr, k)
print(' '.join(map(str, result)))`
    }
  },
  19: {
    id: 19,
    title: 'Remove Duplicates',
    description: 'Remove duplicate elements from an array while maintaining the original order. Return an array with unique elements only.',
    difficulty: 'Easy',
    input: 'Array of integers with possible duplicates',
    output: 'Array with duplicates removed',
    example: { input: '[1, 2, 2, 3, 4, 4, 5]', output: '[1, 2, 3, 4, 5]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> removeDuplicates(vector<int>& arr) {
    unordered_set<int> seen;
    vector<int> result;
    for (int num : arr) {
        if (seen.find(num) == seen.end()) {
            seen.insert(num);
            result.push_back(num);
        }
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    vector<int> result = removeDuplicates(arr);
    
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) cout << " ";
    }
    cout << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static List<Integer> removeDuplicates(int[] arr) {
        Set<Integer> seen = new LinkedHashSet<>();
        for (int num : arr) {
            seen.add(num);
        }
        return new ArrayList<>(seen);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        
        List<Integer> result = removeDuplicates(arr);
        
        for (int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i));
            if (i < result.size() - 1) System.out.print(" ");
        }
        System.out.println();
    }
}`,
      python: `def remove_duplicates(arr):
    seen = set()
    result = []
    for num in arr:
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result

n = int(input())
arr = list(map(int, input().split()))

result = remove_duplicates(arr)
print(' '.join(map(str, result)))`
    }
  },
  20: {
    id: 20,
    title: 'Merge Two Arrays',
    description: 'Merge two sorted arrays into a single sorted array. Combine elements from both arrays while maintaining sorted order.',
    difficulty: 'Easy',
    input: 'Two sorted arrays',
    output: 'Single merged sorted array',
    example: { input: '[1, 3, 5] and [2, 4, 6]', output: '[1, 2, 3, 4, 5, 6]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeSorted(vector<int>& arr1, vector<int>& arr2) {
    vector<int> result;
    int i = 0, j = 0;
    
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] <= arr2[j]) {
            result.push_back(arr1[i++]);
        } else {
            result.push_back(arr2[j++]);
        }
    }
    
    while (i < arr1.size()) result.push_back(arr1[i++]);
    while (j < arr2.size()) result.push_back(arr2[j++]);
    
    return result;
}

int main() {
    int n1, n2;
    cin >> n1;
    vector<int> arr1(n1);
    for (int i = 0; i < n1; i++) cin >> arr1[i];
    
    cin >> n2;
    vector<int> arr2(n2);
    for (int i = 0; i < n2; i++) cin >> arr2[i];
    
    vector<int> result = mergeSorted(arr1, arr2);
    
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) cout << " ";
    }
    cout << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int[] mergeSorted(int[] arr1, int[] arr2) {
        int[] result = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) result[k++] = arr1[i++];
        while (j < arr2.length) result[k++] = arr2[j++];
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int[] arr1 = new int[n1];
        for (int i = 0; i < n1; i++) arr1[i] = sc.nextInt();
        
        int n2 = sc.nextInt();
        int[] arr2 = new int[n2];
        for (int i = 0; i < n2; i++) arr2[i] = sc.nextInt();
        
        int[] result = mergeSorted(arr1, arr2);
        
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) System.out.print(" ");
        }
        System.out.println();
    }
}`,
      python: `def merge_sorted(arr1, arr2):
    result = []
    i = j = 0
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

result = merge_sorted(arr1, arr2)
print(' '.join(map(str, result)))`
    }
  },
  21: {
    id: 21,
    title: 'Find Missing Number',
    description: 'Find the missing number in an array containing n distinct numbers from 1 to n+1.',
    difficulty: 'Easy',
    input: 'Array of n distinct integers from 1 to n+1 with one missing',
    output: 'The missing number',
    example: { input: '[1, 2, 4, 5, 6]', output: '3' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMissing(vector<int>& arr, int n) {
    int expectedSum = (n + 1) * (n + 2) / 2;
    int actualSum = 0;
    for (int num : arr) actualSum += num;
    return expectedSum - actualSum;
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << findMissing(arr, n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int findMissing(int[] arr) {
        int n = arr.length;
        int expectedSum = (n + 1) * (n + 2) / 2;
        int actualSum = 0;
        for (int num : arr) actualSum += num;
        return expectedSum - actualSum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println(findMissing(arr));
    }
}`,
      python: `def find_missing(arr):
    n = len(arr)
    expected_sum = (n + 1) * (n + 2) // 2
    return expected_sum - sum(arr)

n = int(input())
arr = list(map(int, input().split()))
print(find_missing(arr))`
    }
  },
  22: {
    id: 22,
    title: 'GCD of Two Numbers',
    description: 'Find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.',
    difficulty: 'Easy',
    input: 'Two positive integers',
    output: 'GCD of the two numbers',
    example: { input: '48 18', output: '6' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(gcd(a, b));
    }
}`,
      python: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

a, b = map(int, input().split())
print(gcd(a, b))`
    }
  },
  23: {
    id: 23,
    title: 'LCM of Two Numbers',
    description: 'Find the Least Common Multiple (LCM) of two numbers using GCD.',
    difficulty: 'Easy',
    input: 'Two positive integers',
    output: 'LCM of the two numbers',
    example: { input: '4 6', output: '12' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << lcm(a, b) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public static int lcm(int a, int b) {
        return (a / gcd(a, b)) * b;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(lcm(a, b));
    }
}`,
      python: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a // gcd(a, b)) * b

a, b = map(int, input().split())
print(lcm(a, b))`
    }
  },
  24: {
    id: 24,
    title: 'Power of Number',
    description: 'Calculate x raised to the power n using efficient exponentiation.',
    difficulty: 'Easy',
    input: 'Base x and exponent n',
    output: 'x^n',
    example: { input: '2 10', output: '1024' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

long long power(long long x, int n) {
    long long result = 1;
    while (n > 0) {
        if (n % 2 == 1) {
            result *= x;
        }
        x *= x;
        n /= 2;
    }
    return result;
}

int main() {
    long long x;
    int n;
    cin >> x >> n;
    cout << power(x, n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static long power(long x, int n) {
        long result = 1;
        while (n > 0) {
            if (n % 2 == 1) {
                result *= x;
            }
            x *= x;
            n /= 2;
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long x = sc.nextLong();
        int n = sc.nextInt();
        System.out.println(power(x, n));
    }
}`,
      python: `def power(x, n):
    result = 1
    while n > 0:
        if n % 2 == 1:
            result *= x
        x *= x
        n //= 2
    return result

x, n = map(int, input().split())
print(power(x, n))`
    }
  },
  25: {
    id: 25,
    title: 'Count Digits',
    description: 'Count the number of digits in an integer.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Number of digits',
    example: { input: '12345', output: '5' },
    solutions: {
      cpp: `#include <iostream>
#include <cmath>
using namespace std;

int countDigits(int n) {
    if (n == 0) return 1;
    n = abs(n);
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

int main() {
    int n;
    cin >> n;
    cout << countDigits(n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int countDigits(int n) {
        if (n == 0) return 1;
        n = Math.abs(n);
        int count = 0;
        while (n > 0) {
            count++;
            n /= 10;
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(countDigits(n));
    }
}`,
      python: `def count_digits(n):
    if n == 0:
        return 1
    n = abs(n)
    count = 0
    while n > 0:
        count += 1
        n //= 10
    return count

n = int(input())
print(count_digits(n))`
    }
  },
  26: {
    id: 26,
    title: 'Reverse Number',
    description: 'Reverse the digits of a given number.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Number with digits reversed',
    example: { input: '12345', output: '54321' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int reverseNumber(int n) {
    int reversed = 0;
    bool negative = n < 0;
    n = abs(n);
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return negative ? -reversed : reversed;
}

int main() {
    int n;
    cin >> n;
    cout << reverseNumber(n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int reverseNumber(int n) {
        int reversed = 0;
        boolean negative = n < 0;
        n = Math.abs(n);
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return negative ? -reversed : reversed;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(reverseNumber(n));
    }
}`,
      python: `def reverse_number(n):
    negative = n < 0
    n = abs(n)
    reversed_num = 0
    while n > 0:
        reversed_num = reversed_num * 10 + n % 10
        n //= 10
    return -reversed_num if negative else reversed_num

n = int(input())
print(reverse_number(n))`
    }
  },
  27: {
    id: 27,
    title: 'Sum of Digits',
    description: 'Calculate the sum of digits of a given number.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Sum of its digits',
    example: { input: '12345', output: '15' },
    solutions: {
      cpp: `#include <iostream>
#include <cmath>
using namespace std;

int sumOfDigits(int n) {
    n = abs(n);
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main() {
    int n;
    cin >> n;
    cout << sumOfDigits(n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int sumOfDigits(int n) {
        n = Math.abs(n);
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(sumOfDigits(n));
    }
}`,
      python: `def sum_of_digits(n):
    n = abs(n)
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

n = int(input())
print(sum_of_digits(n))`
    }
  },
  28: {
    id: 28,
    title: 'Leap Year',
    description: 'Check if a given year is a leap year.',
    difficulty: 'Easy',
    input: 'A year',
    output: 'True if leap year, False otherwise',
    example: { input: '2024', output: 'True' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

bool isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int main() {
    int year;
    cin >> year;
    cout << (isLeapYear(year) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        System.out.println(isLeapYear(year) ? "True" : "False");
    }
}`,
      python: `def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

year = int(input())
print("True" if is_leap_year(year) else "False")`
    }
  },
  29: {
    id: 29,
    title: 'ASCII Value',
    description: 'Find the ASCII value of a given character.',
    difficulty: 'Easy',
    input: 'A character',
    output: 'ASCII value of the character',
    example: { input: 'A', output: '65' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    cout << (int)c << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().charAt(0);
        System.out.println((int)c);
    }
}`,
      python: `c = input()[0]
print(ord(c))`
    }
  },
  30: {
    id: 30,
    title: 'Character Case',
    description: 'Convert a character to uppercase or lowercase.',
    difficulty: 'Easy',
    input: 'A character',
    output: 'Uppercase and lowercase versions',
    example: { input: 'a', output: 'A a' },
    solutions: {
      cpp: `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char c;
    cin >> c;
    cout << (char)toupper(c) << " " << (char)tolower(c) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c = sc.next().charAt(0);
        System.out.println(Character.toUpperCase(c) + " " + Character.toLowerCase(c));
    }
}`,
      python: `c = input()[0]
print(c.upper(), c.lower())`
    }
  },
  31: {
    id: 31,
    title: 'String Concatenation',
    description: 'Concatenate two strings without using built-in functions.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: 'Concatenated string',
    example: { input: 'Hello World', output: 'HelloWorld' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

string concatenate(string s1, string s2) {
    string result = "";
    for (char c : s1) result += c;
    for (char c : s2) result += c;
    return result;
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << concatenate(s1, s2) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static String concatenate(String s1, String s2) {
        StringBuilder result = new StringBuilder();
        for (char c : s1.toCharArray()) result.append(c);
        for (char c : s2.toCharArray()) result.append(c);
        return result.toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        System.out.println(concatenate(s1, s2));
    }
}`,
      python: `def concatenate(s1, s2):
    result = ""
    for c in s1:
        result += c
    for c in s2:
        result += c
    return result

s1 = input()
s2 = input()
print(concatenate(s1, s2))`
    }
  },
  32: {
    id: 32,
    title: 'String Comparison',
    description: 'Compare two strings lexicographically.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: '-1 if first < second, 0 if equal, 1 if first > second',
    example: { input: 'apple banana', output: '-1' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int compareStrings(string s1, string s2) {
    int i = 0;
    while (i < s1.length() && i < s2.length()) {
        if (s1[i] < s2[i]) return -1;
        if (s1[i] > s2[i]) return 1;
        i++;
    }
    if (s1.length() < s2.length()) return -1;
    if (s1.length() > s2.length()) return 1;
    return 0;
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << compareStrings(s1, s2) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int compareStrings(String s1, String s2) {
        int i = 0;
        while (i < s1.length() && i < s2.length()) {
            if (s1.charAt(i) < s2.charAt(i)) return -1;
            if (s1.charAt(i) > s2.charAt(i)) return 1;
            i++;
        }
        if (s1.length() < s2.length()) return -1;
        if (s1.length() > s2.length()) return 1;
        return 0;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        System.out.println(compareStrings(s1, s2));
    }
}`,
      python: `def compare_strings(s1, s2):
    i = 0
    while i < len(s1) and i < len(s2):
        if s1[i] < s2[i]:
            return -1
        if s1[i] > s2[i]:
            return 1
        i += 1
    if len(s1) < len(s2):
        return -1
    if len(s1) > len(s2):
        return 1
    return 0

s1 = input()
s2 = input()
print(compare_strings(s1, s2))`
    }
  },
  33: {
    id: 33,
    title: 'Count Words',
    description: 'Count the number of words in a given string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Number of words',
    example: { input: 'Hello World How Are You', output: '5' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int countWords(string s) {
    if (s.empty()) return 0;
    int count = 0;
    bool inWord = false;
    for (char c : s) {
        if (c == ' ') {
            inWord = false;
        } else if (!inWord) {
            inWord = true;
            count++;
        }
    }
    return count;
}

int main() {
    string s;
    getline(cin, s);
    cout << countWords(s) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int countWords(String s) {
        if (s.isEmpty()) return 0;
        int count = 0;
        boolean inWord = false;
        for (char c : s.toCharArray()) {
            if (c == ' ') {
                inWord = false;
            } else if (!inWord) {
                inWord = true;
                count++;
            }
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(countWords(s));
    }
}`,
      python: `def count_words(s):
    if not s:
        return 0
    return len(s.split())

s = input()
print(count_words(s))`
    }
  },
  34: {
    id: 34,
    title: 'First Non-Repeating Character',
    description: 'Find the first non-repeating character in a string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'First non-repeating character or -1 if none',
    example: { input: 'leetcode', output: 'l' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

char firstNonRepeating(string s) {
    unordered_map<char, int> count;
    for (char c : s) count[c]++;
    for (char c : s) {
        if (count[c] == 1) return c;
    }
    return '-';
}

int main() {
    string s;
    cin >> s;
    cout << firstNonRepeating(s) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static char firstNonRepeating(String s) {
        Map<Character, Integer> count = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        for (char c : s.toCharArray()) {
            if (count.get(c) == 1) return c;
        }
        return '-';
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(firstNonRepeating(s));
    }
}`,
      python: `def first_non_repeating(s):
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c in s:
        if count[c] == 1:
            return c
    return '-'

s = input()
print(first_non_repeating(s))`
    }
  },
  35: {
    id: 35,
    title: 'Number Pattern',
    description: 'Print a number pattern (right-angled triangle).',
    difficulty: 'Easy',
    input: 'Number of rows n',
    output: 'Number pattern',
    example: { input: '4', output: '1\\n12\\n123\\n1234' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}`,
      python: `n = int(input())
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end='')
    print()`
    }
  },
  36: {
    id: 36,
    title: 'Star Pattern',
    description: 'Print a star pattern (right-angled triangle).',
    difficulty: 'Easy',
    input: 'Number of rows n',
    output: 'Star pattern',
    example: { input: '4', output: '*\\n**\\n***\\n****' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
      python: `n = int(input())
for i in range(1, n + 1):
    print('*' * i)`
    }
  },
  37: {
    id: 37,
    title: 'Sum of N Numbers',
    description: 'Calculate the sum of first n natural numbers.',
    difficulty: 'Easy',
    input: 'A positive integer n',
    output: 'Sum of 1 to n',
    example: { input: '10', output: '55' },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n * (n + 1) / 2 << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(n * (n + 1) / 2);
    }
}`,
      python: `n = int(input())
print(n * (n + 1) // 2)`
    }
  },
  38: {
    id: 38,
    title: 'Product of Array',
    description: 'Calculate the product of all elements in an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Product of all elements',
    example: { input: '[1, 2, 3, 4, 5]', output: '120' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long product = 1;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        product *= x;
    }
    cout << product << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long product = 1;
        for (int i = 0; i < n; i++) {
            product *= sc.nextInt();
        }
        System.out.println(product);
    }
}`,
      python: `n = int(input())
arr = list(map(int, input().split()))
result = 1
for num in arr:
    result *= num
print(result)`
    }
  },
  39: {
    id: 39,
    title: 'Binary to Decimal',
    description: 'Convert a binary number to its decimal equivalent.',
    difficulty: 'Easy',
    input: 'Binary number as string',
    output: 'Decimal equivalent',
    example: { input: '1010', output: '10' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int binaryToDecimal(string binary) {
    int decimal = 0;
    int base = 1;
    for (int i = binary.length() - 1; i >= 0; i--) {
        if (binary[i] == '1') decimal += base;
        base *= 2;
    }
    return decimal;
}

int main() {
    string binary;
    cin >> binary;
    cout << binaryToDecimal(binary) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int binaryToDecimal(String binary) {
        int decimal = 0;
        int base = 1;
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary.charAt(i) == '1') decimal += base;
            base *= 2;
        }
        return decimal;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String binary = sc.next();
        System.out.println(binaryToDecimal(binary));
    }
}`,
      python: `def binary_to_decimal(binary):
    decimal = 0
    base = 1
    for i in range(len(binary) - 1, -1, -1):
        if binary[i] == '1':
            decimal += base
        base *= 2
    return decimal

binary = input()
print(binary_to_decimal(binary))`
    }
  },
  40: {
    id: 40,
    title: 'Decimal to Binary',
    description: 'Convert a decimal number to its binary equivalent.',
    difficulty: 'Easy',
    input: 'Decimal number',
    output: 'Binary equivalent',
    example: { input: '10', output: '1010' },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string decimalToBinary(int n) {
    if (n == 0) return "0";
    string binary = "";
    while (n > 0) {
        binary += (n % 2 == 0 ? '0' : '1');
        n /= 2;
    }
    reverse(binary.begin(), binary.end());
    return binary;
}

int main() {
    int n;
    cin >> n;
    cout << decimalToBinary(n) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static String decimalToBinary(int n) {
        if (n == 0) return "0";
        StringBuilder binary = new StringBuilder();
        while (n > 0) {
            binary.append(n % 2);
            n /= 2;
        }
        return binary.reverse().toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(decimalToBinary(n));
    }
}`,
      python: `def decimal_to_binary(n):
    if n == 0:
        return "0"
    binary = ""
    while n > 0:
        binary = str(n % 2) + binary
        n //= 2
    return binary

n = int(input())
print(decimal_to_binary(n))`
    }
  },
  42: {
    id: 42,
    title: 'Transpose Matrix',
    description: 'Find the transpose of a given matrix.',
    difficulty: 'Medium',
    input: 'A matrix',
    output: 'Transposed matrix',
    example: { input: '[[1,2,3],[4,5,6]]', output: '[[1,4],[2,5],[3,6]]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> matrix(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> matrix[i][j];
    
    // Transpose
    for (int j = 0; j < n; j++) {
        for (int i = 0; i < m; i++) {
            cout << matrix[i][j];
            if (i < m - 1) cout << " ";
        }
        cout << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] matrix = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                matrix[i][j] = sc.nextInt();
        
        // Transpose
        for (int j = 0; j < n; j++) {
            for (int i = 0; i < m; i++) {
                System.out.print(matrix[i][j]);
                if (i < m - 1) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,
      python: `m, n = map(int, input().split())
matrix = []
for _ in range(m):
    row = list(map(int, input().split()))
    matrix.append(row)

# Transpose
for j in range(n):
    row = [matrix[i][j] for i in range(m)]
    print(' '.join(map(str, row)))`
    }
  },
  43: {
    id: 43,
    title: 'Matrix Multiplication',
    description: 'Multiply two matrices if possible.',
    difficulty: 'Medium',
    input: 'Two matrices',
    output: 'Resultant matrix',
    example: { input: 'A: 2x3, B: 3x2', output: '2x2 matrix' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int m1, n1, m2, n2;
    cin >> m1 >> n1;
    vector<vector<int>> A(m1, vector<int>(n1));
    for (int i = 0; i < m1; i++)
        for (int j = 0; j < n1; j++)
            cin >> A[i][j];
    
    cin >> m2 >> n2;
    vector<vector<int>> B(m2, vector<int>(n2));
    for (int i = 0; i < m2; i++)
        for (int j = 0; j < n2; j++)
            cin >> B[i][j];
    
    if (n1 != m2) {
        cout << "Cannot multiply" << endl;
        return 0;
    }
    
    vector<vector<int>> C(m1, vector<int>(n2, 0));
    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++) {
            for (int k = 0; k < n1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++) {
            cout << C[i][j];
            if (j < n2 - 1) cout << " ";
        }
        cout << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m1 = sc.nextInt(), n1 = sc.nextInt();
        int[][] A = new int[m1][n1];
        for (int i = 0; i < m1; i++)
            for (int j = 0; j < n1; j++)
                A[i][j] = sc.nextInt();
        
        int m2 = sc.nextInt(), n2 = sc.nextInt();
        int[][] B = new int[m2][n2];
        for (int i = 0; i < m2; i++)
            for (int j = 0; j < n2; j++)
                B[i][j] = sc.nextInt();
        
        if (n1 != m2) {
            System.out.println("Cannot multiply");
            return;
        }
        
        int[][] C = new int[m1][n2];
        for (int i = 0; i < m1; i++) {
            for (int j = 0; j < n2; j++) {
                for (int k = 0; k < n1; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        
        for (int i = 0; i < m1; i++) {
            for (int j = 0; j < n2; j++) {
                System.out.print(C[i][j]);
                if (j < n2 - 1) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,
      python: `m1, n1 = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(m1)]

m2, n2 = map(int, input().split())
B = [list(map(int, input().split())) for _ in range(m2)]

if n1 != m2:
    print("Cannot multiply")
else:
    C = [[0] * n2 for _ in range(m1)]
    for i in range(m1):
        for j in range(n2):
            for k in range(n1):
                C[i][j] += A[i][k] * B[k][j]
    
    for row in C:
        print(' '.join(map(str, row)))`
    }
  },
  44: {
    id: 44,
    title: 'Two Sum Problem',
    description: 'Find two numbers in an array that add up to a target sum.',
    difficulty: 'Medium',
    input: 'Array and target sum',
    output: 'Indices of the two numbers',
    example: { input: '[2,7,11,15], target=9', output: '[0,1]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};
}

int main() {
    int n, target;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cin >> target;
    
    vector<int> result = twoSum(nums, target);
    cout << result[0] << " " << result[1] << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int target = sc.nextInt();
        
        int[] result = twoSum(nums, target);
        System.out.println(result[0] + " " + result[1]);
    }
}`,
      python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

n = int(input())
nums = list(map(int, input().split()))
target = int(input())

result = two_sum(nums, target)
print(result[0], result[1])`
    }
  },
  45: {
    id: 45,
    title: 'Three Sum Problem',
    description: 'Find all unique triplets that sum to zero.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'All unique triplets summing to zero',
    example: { input: '[-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    sort(nums.begin(), nums.end());
    
    for (int i = 0; i < nums.size(); i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++; right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    
    auto result = threeSum(nums);
    for (auto& triplet : result) {
        cout << triplet[0] << " " << triplet[1] << " " << triplet[2] << endl;
    }
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++; right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        
        for (List<Integer> triplet : threeSum(nums)) {
            System.out.println(triplet.get(0) + " " + triplet.get(1) + " " + triplet.get(2));
        }
    }
}`,
      python: `def three_sum(nums):
    result = []
    nums.sort()
    
    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]:
                    left += 1
                while left < right and nums[right] == nums[right-1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result

n = int(input())
nums = list(map(int, input().split()))

for triplet in three_sum(nums):
    print(' '.join(map(str, triplet)))`
    }
  },
  46: {
    id: 46,
    title: "Kadane's Algorithm",
    description: 'Find the maximum contiguous subarray sum.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Maximum subarray sum',
    example: { input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = INT_MIN;
    int currentSum = 0;
    for (int num : nums) {
        currentSum = max(num, currentSum + num);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maxSubArray(nums) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;
        for (int num : nums) {
            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(maxSubArray(nums));
    }
}`,
      python: `def max_sub_array(nums):
    max_sum = float('-inf')
    current_sum = 0
    for num in nums:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

n = int(input())
nums = list(map(int, input().split()))
print(max_sub_array(nums))`
    }
  },
  47: {
    id: 47,
    title: 'Stock Buy Sell',
    description: 'Find the maximum profit from buying and selling a stock once.',
    difficulty: 'Medium',
    input: 'Array of stock prices',
    output: 'Maximum profit',
    example: { input: '[7,1,5,3,6,4]', output: '5' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

int main() {
    int n;
    cin >> n;
    vector<int> prices(n);
    for (int i = 0; i < n; i++) cin >> prices[i];
    cout << maxProfit(prices) << endl;
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] prices = new int[n];
        for (int i = 0; i < n; i++) prices[i] = sc.nextInt();
        System.out.println(maxProfit(prices));
    }
}`,
      python: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit

n = int(input())
prices = list(map(int, input().split()))
print(max_profit(prices))`
    }
  },
  48: {
    id: 48,
    title: 'Merge Sort',
    description: 'Implement merge sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: { input: '[38,27,43,3,9,82,10]', output: '[3,9,10,27,38,43,82]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    
    int i = 0, j = 0, k = l;
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) arr[k++] = left[i++];
        else arr[k++] = right[j++];
    }
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    mergeSort(arr, 0, n - 1);
    for (int num : arr) cout << num << " ";
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void merge(int[] arr, int l, int m, int r) {
        int[] left = Arrays.copyOfRange(arr, l, m + 1);
        int[] right = Arrays.copyOfRange(arr, m + 1, r + 1);
        
        int i = 0, j = 0, k = l;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) arr[k++] = left[i++];
            else arr[k++] = right[j++];
        }
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
    
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        mergeSort(arr, 0, n - 1);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

n = int(input())
arr = list(map(int, input().split()))
print(' '.join(map(str, merge_sort(arr))))`
    }
  },
  49: {
    id: 49,
    title: 'Quick Sort',
    description: 'Implement quick sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: { input: '[10,7,8,9,1,5]', output: '[1,5,7,8,9,10]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    quickSort(arr, 0, n - 1);
    for (int num : arr) cout << num << " ";
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        quickSort(arr, 0, n - 1);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]
    
    return quick_sort(left) + [pivot] + quick_sort(right)

n = int(input())
arr = list(map(int, input().split()))
print(' '.join(map(str, quick_sort(arr))))`
    }
  },
  50: {
    id: 50,
    title: 'Selection Sort',
    description: 'Implement selection sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: { input: '[64,25,12,22,11]', output: '[11,12,22,25,64]' },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr[i], arr[minIdx]);
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    selectionSort(arr);
    for (int num : arr) cout << num << " ";
    return 0;
}`,
      java: `import java.util.*;
public class Solution {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        selectionSort(arr);
        for (int num : arr) System.out.print(num + " ");
    }
}`,
      python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

n = int(input())
arr = list(map(int, input().split()))
print(' '.join(map(str, selection_sort(arr))))`
    }
  },
  51: { 
    id: 51, 
    title: 'Insertion Sort', 
    description: 'Implement insertion sort algorithm.', 
    difficulty: 'Medium' as const, 
    input: 'Array of integers', 
    output: 'Sorted array', 
    example: { input: '[12,11,13,5,6]', output: '[5,6,11,12,13]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    insertionSort(arr);
    for (int x : arr) cout << x << " ";
    return 0;
}`,
      java: `import java.util.*;

public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        insertionSort(arr);
        for (int x : arr) System.out.print(x + " ");
    }
}`,
      python: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

n = int(input())
arr = list(map(int, input().split()))
print(' '.join(map(str, insertion_sort(arr))))`
    } 
  },
  52: { 
    id: 52, 
    title: 'Longest Substring Without Repeating Characters', 
    description: 'Find the length of the longest substring without repeating characters.', 
    difficulty: 'Medium' as const, 
    input: 'String', 
    output: 'Length of longest substring', 
    example: { input: 'abcabcbb', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> chars;
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.size(); right++) {
        while (chars.count(s[right])) {
            chars.erase(s[left]);
            left++;
        }
        chars.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << lengthOfLongestSubstring(s) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> chars = new HashSet<>();
        int left = 0, maxLen = 0;
        
        for (int right = 0; right < s.length(); right++) {
            while (chars.contains(s.charAt(right))) {
                chars.remove(s.charAt(left));
                left++;
            }
            chars.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(lengthOfLongestSubstring(s));
    }
}`,
      python: `def length_of_longest_substring(s):
    chars = set()
    left = max_len = 0
    
    for right, char in enumerate(s):
        while char in chars:
            chars.remove(s[left])
            left += 1
        chars.add(char)
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
print(length_of_longest_substring(s))`
    } 
  },
  53: { 
    id: 53, 
    title: 'Valid Parentheses', 
    description: 'Check if the input string has valid parentheses.', 
    difficulty: 'Medium' as const, 
    input: 'String with parentheses', 
    output: 'True if valid, False otherwise', 
    example: { input: '()[]{}', output: 'True' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return st.empty();
}

int main() {
    string s;
    cin >> s;
    cout << (isValid(s) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') ||
                    (c == ']' && top != '[') ||
                    (c == '}' && top != '{')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(isValid(s) ? "True" : "False");
    }
}`,
      python: `def is_valid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack.pop() != mapping[char]:
                return False
    return len(stack) == 0

s = input()
print("True" if is_valid(s) else "False")`
    } 
  },
  54: { 
    id: 54, 
    title: 'Reverse Linked List', 
    description: 'Reverse a singly linked list.', 
    difficulty: 'Medium' as const, 
    input: 'Linked list', 
    output: 'Reversed linked list', 
    example: { input: '1->2->3->4->5', output: '5->4->3->2->1' }, 
    solutions: { 
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr != nullptr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

int main() {
    // Create list: 1->2->3->4->5
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    ListNode* reversed = reverseList(head);
    
    while (reversed) {
        cout << reversed->val;
        if (reversed->next) cout << "->";
        reversed = reversed->next;
    }
    return 0;
}`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
    
    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        
        ListNode reversed = reverseList(head);
        
        while (reversed != null) {
            System.out.print(reversed.val);
            if (reversed.next != null) System.out.print("->");
            reversed = reversed.next;
        }
    }
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    curr = head
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev

# Create list: 1->2->3->4->5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
reversed_head = reverse_list(head)

result = []
while reversed_head:
    result.append(str(reversed_head.val))
    reversed_head = reversed_head.next
print("->".join(result))`
    } 
  },
  55: { 
    id: 55, 
    title: 'Detect Cycle in Linked List', 
    description: 'Detect if a linked list has a cycle using Floyd\'s algorithm.', 
    difficulty: 'Medium' as const, 
    input: 'Linked list', 
    output: 'True if cycle exists, False otherwise', 
    example: { input: 'List with cycle', output: 'True' }, 
    solutions: { 
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode* head) {
    if (!head || !head->next) return false;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = head->next; // Create cycle
    
    cout << (hasCycle(head) ? "True" : "False") << endl;
    return 0;
}`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}

public class DetectCycle {
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
    
    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = head.next; // Create cycle
        
        System.out.println(hasCycle(head) ? "True" : "False");
    }
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Create list with cycle
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = head.next  # Create cycle

print("True" if has_cycle(head) else "False")`
    } 
  },
  56: { 
    id: 56, 
    title: 'Middle of Linked List', 
    description: 'Find the middle node of a linked list.', 
    difficulty: 'Medium' as const, 
    input: 'Linked list', 
    output: 'Middle node value', 
    example: { input: '1->2->3->4->5', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* middleNode(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    cout << middleNode(head)->val << endl;
    return 0;
}`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class MiddleOfList {
    public static ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        
        System.out.println(middleNode(head).val);
    }
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print(middle_node(head).val)`
    } 
  },
  57: { 
    id: 57, 
    title: 'Merge Two Sorted Lists', 
    description: 'Merge two sorted linked lists into one sorted list.', 
    difficulty: 'Medium' as const, 
    input: 'Two sorted linked lists', 
    output: 'Merged sorted list', 
    example: { input: '1->2->4, 1->3->4', output: '1->1->2->3->4->4' }, 
    solutions: { 
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(2);
    l1->next->next = new ListNode(4);
    
    ListNode* l2 = new ListNode(1);
    l2->next = new ListNode(3);
    l2->next->next = new ListNode(4);
    
    ListNode* merged = mergeTwoLists(l1, l2);
    while (merged) {
        cout << merged->val;
        if (merged->next) cout << "->";
        merged = merged->next;
    }
    return 0;
}`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class MergeTwoLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
    
    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);
        
        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);
        
        ListNode merged = mergeTwoLists(l1, l2);
        while (merged != null) {
            System.out.print(merged.val);
            if (merged.next != null) System.out.print("->");
            merged = merged.next;
        }
    }
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next

l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))
merged = merge_two_lists(l1, l2)

result = []
while merged:
    result.append(str(merged.val))
    merged = merged.next
print("->".join(result))`
    } 
  },
  58: { 
    id: 58, 
    title: 'Binary Tree Traversals', 
    description: 'Implement inorder, preorder, and postorder traversals.', 
    difficulty: 'Medium' as const, 
    input: 'Binary tree', 
    output: 'Traversal order', 
    example: { input: '[1,2,3]', output: 'Inorder: 2 1 3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    inorder(root->left, result);
    result.push_back(root->val);
    inorder(root->right, result);
}

void preorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    result.push_back(root->val);
    preorder(root->left, result);
    preorder(root->right, result);
}

void postorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    postorder(root->left, result);
    postorder(root->right, result);
    result.push_back(root->val);
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    
    vector<int> in, pre, post;
    inorder(root, in);
    preorder(root, pre);
    postorder(root, post);
    
    cout << "Inorder: ";
    for (int v : in) cout << v << " ";
    cout << "\\nPreorder: ";
    for (int v : pre) cout << v << " ";
    cout << "\\nPostorder: ";
    for (int v : post) cout << v << " ";
    return 0;
}`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class BinaryTreeTraversal {
    public static void inorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        inorder(root.left, result);
        result.add(root.val);
        inorder(root.right, result);
    }
    
    public static void preorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        result.add(root.val);
        preorder(root.left, result);
        preorder(root.right, result);
    }
    
    public static void postorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        postorder(root.left, result);
        postorder(root.right, result);
        result.add(root.val);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        
        List<Integer> in = new ArrayList<>(), pre = new ArrayList<>(), post = new ArrayList<>();
        inorder(root, in);
        preorder(root, pre);
        postorder(root, post);
        
        System.out.println("Inorder: " + in);
        System.out.println("Preorder: " + pre);
        System.out.println("Postorder: " + post);
    }
}`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []

def preorder(root):
    return [root.val] + preorder(root.left) + preorder(root.right) if root else []

def postorder(root):
    return postorder(root.left) + postorder(root.right) + [root.val] if root else []

root = TreeNode(1, TreeNode(2), TreeNode(3))
print("Inorder:", inorder(root))
print("Preorder:", preorder(root))
print("Postorder:", postorder(root))`
    } 
  },
  59: { 
    id: 59, 
    title: 'Level Order Traversal', 
    description: 'Traverse binary tree level by level using BFS.', 
    difficulty: 'Medium' as const, 
    input: 'Binary tree', 
    output: 'Level order traversal', 
    example: { input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);
    
    auto result = levelOrder(root);
    for (auto& level : result) {
        cout << "[";
        for (int i = 0; i < level.size(); i++) {
            cout << level[i];
            if (i < level.size() - 1) cout << ",";
        }
        cout << "] ";
    }
    return 0;
}`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class LevelOrderTraversal {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        System.out.println(levelOrder(root));
    }
}`,
      python: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(level_order(root))`
    } 
  },
  60: { 
    id: 60, 
    title: 'Height of Binary Tree', 
    description: 'Find the maximum depth of a binary tree.', 
    difficulty: 'Medium' as const, 
    input: 'Binary tree', 
    output: 'Height', 
    example: { input: '[3,9,20,null,null,15,7]', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);
    
    cout << maxDepth(root) << endl;
    return 0;
}`,
      java: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class TreeHeight {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        System.out.println(maxDepth(root));
    }
}`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(max_depth(root))`
    } 
  },
  61: { 
    id: 61, 
    title: 'Longest Common Subsequence', 
    description: 'Find the length of the longest common subsequence of two strings.', 
    difficulty: 'Medium' as const, 
    input: 'Two strings', 
    output: 'Length of LCS', 
    example: { input: 'abcde, ace', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int longestCommonSubsequence(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << longestCommonSubsequence(s1, s2) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class LCS {
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next(), s2 = sc.next();
        System.out.println(longestCommonSubsequence(s1, s2));
    }
}`,
      python: `def longest_common_subsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

s1, s2 = input().split()
print(longest_common_subsequence(s1, s2))`
    } 
  },
  62: { 
    id: 62, 
    title: '0/1 Knapsack Problem', 
    description: 'Solve the 0/1 knapsack problem using dynamic programming.', 
    difficulty: 'Medium' as const, 
    input: 'Weights, values, capacity', 
    output: 'Maximum value', 
    example: { input: 'W=[1,2,3], V=[6,10,12], C=5', output: '22' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int knapsack(vector<int>& weights, vector<int>& values, int capacity) {
    int n = weights.size();
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

int main() {
    vector<int> weights = {1, 2, 3};
    vector<int> values = {6, 10, 12};
    int capacity = 5;
    cout << knapsack(weights, values, capacity) << endl;
    return 0;
}`,
      java: `public class Knapsack {
    public static int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][capacity];
    }
    
    public static void main(String[] args) {
        int[] weights = {1, 2, 3};
        int[] values = {6, 10, 12};
        int capacity = 5;
        System.out.println(knapsack(weights, values, capacity));
    }
}`,
      python: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]

weights = [1, 2, 3]
values = [6, 10, 12]
capacity = 5
print(knapsack(weights, values, capacity))`
    } 
  },
  63: { 
    id: 63, 
    title: 'Coin Change', 
    description: 'Find the minimum number of coins needed to make up the amount.', 
    difficulty: 'Medium' as const, 
    input: 'Coins array, target amount', 
    output: 'Minimum coins needed', 
    example: { input: 'coins=[1,2,5], amount=11', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    vector<int> coins = {1, 2, 5};
    int amount = 11;
    cout << coinChange(coins, amount) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        int amount = 11;
        System.out.println(coinChange(coins, amount));
    }
}`,
      python: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

coins = [1, 2, 5]
amount = 11
print(coin_change(coins, amount))`
    } 
  },
  64: { 
    id: 64, 
    title: 'Climbing Stairs', 
    description: 'Count distinct ways to climb n stairs (1 or 2 steps at a time).', 
    difficulty: 'Medium' as const, 
    input: 'Number of stairs n', 
    output: 'Number of ways', 
    example: { input: 'n=5', output: '8' }, 
    solutions: { 
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int n;
    cin >> n;
    cout << climbStairs(n) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class ClimbingStairs {
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        int a = 1, b = 2;
        for (int i = 3; i <= n; i++) {
            int c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(climbStairs(n));
    }
}`,
      python: `def climb_stairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

n = int(input())
print(climb_stairs(n))`
    } 
  },
  65: { 
    id: 65, 
    title: 'House Robber', 
    description: 'Find maximum money without robbing adjacent houses.', 
    difficulty: 'Medium' as const, 
    input: 'Array of house values', 
    output: 'Maximum money', 
    example: { input: '[2,7,9,3,1]', output: '12' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int rob(vector<int>& nums) {
    if (nums.empty()) return 0;
    if (nums.size() == 1) return nums[0];
    
    int prev2 = 0, prev1 = 0;
    for (int num : nums) {
        int curr = max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

int main() {
    vector<int> nums = {2, 7, 9, 3, 1};
    cout << rob(nums) << endl;
    return 0;
}`,
      java: `public class HouseRobber {
    public static int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev2 = 0, prev1 = 0;
        for (int num : nums) {
            int curr = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 7, 9, 3, 1};
        System.out.println(rob(nums));
    }
}`,
      python: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    prev2, prev1 = 0, 0
    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = curr
    return prev1

nums = [2, 7, 9, 3, 1]
print(rob(nums))`
    } 
  },
  66: { 
    id: 66, 
    title: 'Container With Most Water', 
    description: 'Find two lines that form a container with the most water.', 
    difficulty: 'Medium' as const, 
    input: 'Array of heights', 
    output: 'Maximum area', 
    example: { input: '[1,8,6,2,5,4,8,3,7]', output: '49' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;
    
    while (left < right) {
        int h = min(height[left], height[right]);
        int width = right - left;
        maxWater = max(maxWater, h * width);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

int main() {
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    cout << maxArea(height) << endl;
    return 0;
}`,
      java: `public class ContainerWithMostWater {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxWater = 0;
        
        while (left < right) {
            int h = Math.min(height[left], height[right]);
            int width = right - left;
            maxWater = Math.max(maxWater, h * width);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
    
    public static void main(String[] args) {
        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        System.out.println(maxArea(height));
    }
}`,
      python: `def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        h = min(height[left], height[right])
        width = right - left
        max_water = max(max_water, h * width)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(max_area(height))`
    } 
  },
  67: { 
    id: 67, 
    title: 'Rotate Image', 
    description: 'Rotate a matrix 90 degrees clockwise in-place.', 
    difficulty: 'Medium' as const, 
    input: 'n x n matrix', 
    output: 'Rotated matrix', 
    example: { input: '[[1,2],[3,4]]', output: '[[3,1],[4,2]]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    // Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    rotate(matrix);
    for (auto& row : matrix) {
        for (int val : row) cout << val << " ";
        cout << endl;
    }
    return 0;
}`,
      java: `public class RotateImage {
    public static void rotate(int[][] matrix) {
        int n = matrix.length;
        // Transpose
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        // Reverse each row
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n / 2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - 1 - j];
                matrix[i][n - 1 - j] = temp;
            }
        }
    }
    
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        rotate(matrix);
        for (int[] row : matrix) {
            for (int val : row) System.out.print(val + " ");
            System.out.println();
        }
    }
}`,
      python: `def rotate(matrix):
    n = len(matrix)
    # Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for row in matrix:
        row.reverse()

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
for row in matrix:
    print(row)`
    } 
  },
  68: { 
    id: 68, 
    title: 'Spiral Matrix', 
    description: 'Return all elements of matrix in spiral order.', 
    difficulty: 'Medium' as const, 
    input: 'm x n matrix', 
    output: 'Spiral order array', 
    example: { input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> result;
    if (matrix.empty()) return result;
    
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) result.push_back(matrix[top][i]);
        top++;
        for (int i = top; i <= bottom; i++) result.push_back(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) result.push_back(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) result.push_back(matrix[i][left]);
            left++;
        }
    }
    return result;
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    auto result = spiralOrder(matrix);
    for (int val : result) cout << val << " ";
    return 0;
}`,
      java: `import java.util.*;

public class SpiralMatrix {
    public static List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix.length == 0) return result;
        
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++) result.add(matrix[top][i]);
            top++;
            for (int i = top; i <= bottom; i++) result.add(matrix[i][right]);
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) result.add(matrix[bottom][i]);
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) result.add(matrix[i][left]);
                left++;
            }
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(spiralOrder(matrix));
    }
}`,
      python: `def spiral_order(matrix):
    if not matrix:
        return []
    
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        if top <= bottom:
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    return result

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(spiral_order(matrix))`
    } 
  },
  69: { 
    id: 69, 
    title: 'Search in Rotated Sorted Array', 
    description: 'Search for a target value in a rotated sorted array.', 
    difficulty: 'Medium' as const, 
    input: 'Rotated sorted array, target', 
    output: 'Index of target or -1', 
    example: { input: '[4,5,6,7,0,1,2], target=0', output: '4' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

int main() {
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    cout << search(nums, 0) << endl;
    return 0;
}`,
      java: `public class SearchRotatedArray {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] nums = {4, 5, 6, 7, 0, 1, 2};
        System.out.println(search(nums, 0));
    }
}`,
      python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1

nums = [4, 5, 6, 7, 0, 1, 2]
print(search(nums, 0))`
    } 
  },
  70: { 
    id: 70, 
    title: 'Find Peak Element', 
    description: 'Find a peak element in an array.', 
    difficulty: 'Medium' as const, 
    input: 'Array of integers', 
    output: 'Index of peak element', 
    example: { input: '[1,2,3,1]', output: '2' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findPeakElement(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

int main() {
    vector<int> nums = {1, 2, 3, 1};
    cout << findPeakElement(nums) << endl;
    return 0;
}`,
      java: `public class FindPeakElement {
    public static int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        System.out.println(findPeakElement(nums));
    }
}`,
      python: `def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    return left

nums = [1, 2, 3, 1]
print(find_peak_element(nums))`
    } 
  },
  71: { 
    id: 71, 
    title: 'Sort Colors (Dutch National Flag)', 
    description: 'Sort an array with values 0, 1, and 2 in-place.', 
    difficulty: 'Medium' as const, 
    input: 'Array with 0s, 1s, 2s', 
    output: 'Sorted array', 
    example: { input: '[2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low], nums[mid]);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}

int main() {
    vector<int> nums = {2, 0, 2, 1, 1, 0};
    sortColors(nums);
    for (int n : nums) cout << n << " ";
    return 0;
}`,
      java: `public class SortColors {
    public static void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        
        while (mid <= high) {
            if (nums[mid] == 0) {
                int temp = nums[low];
                nums[low] = nums[mid];
                nums[mid] = temp;
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                int temp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = temp;
                high--;
            }
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 0, 2, 1, 1, 0};
        sortColors(nums);
        for (int n : nums) System.out.print(n + " ");
    }
}`,
      python: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1

nums = [2, 0, 2, 1, 1, 0]
sort_colors(nums)
print(nums)`
    } 
  },
  72: { 
    id: 72, 
    title: 'Subarray Sum Equals K', 
    description: 'Count subarrays with sum equal to k.', 
    difficulty: 'Medium' as const, 
    input: 'Array of integers, k', 
    output: 'Count of subarrays', 
    example: { input: 'nums=[1,1,1], k=2', output: '2' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixSum;
    prefixSum[0] = 1;
    int sum = 0, count = 0;
    
    for (int num : nums) {
        sum += num;
        if (prefixSum.find(sum - k) != prefixSum.end()) {
            count += prefixSum[sum - k];
        }
        prefixSum[sum]++;
    }
    return count;
}

int main() {
    vector<int> nums = {1, 1, 1};
    cout << subarraySum(nums, 2) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class SubarraySumK {
    public static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixSum = new HashMap<>();
        prefixSum.put(0, 1);
        int sum = 0, count = 0;
        
        for (int num : nums) {
            sum += num;
            if (prefixSum.containsKey(sum - k)) {
                count += prefixSum.get(sum - k);
            }
            prefixSum.put(sum, prefixSum.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 1, 1};
        System.out.println(subarraySum(nums, 2));
    }
}`,
      python: `def subarray_sum(nums, k):
    prefix_sum = {0: 1}
    total = count = 0
    
    for num in nums:
        total += num
        if total - k in prefix_sum:
            count += prefix_sum[total - k]
        prefix_sum[total] = prefix_sum.get(total, 0) + 1
    return count

nums = [1, 1, 1]
print(subarray_sum(nums, 2))`
    } 
  },
  73: { 
    id: 73, 
    title: 'Product of Array Except Self', 
    description: 'Return array where each element is product of all others.', 
    difficulty: 'Medium' as const, 
    input: 'Array of integers', 
    output: 'Product array', 
    example: { input: '[1,2,3,4]', output: '[24,12,8,6]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    
    int left = 1;
    for (int i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    
    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3, 4};
    auto result = productExceptSelf(nums);
    for (int n : result) cout << n << " ";
    return 0;
}`,
      java: `public class ProductExceptSelf {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        
        int left = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }
        
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4};
        int[] result = productExceptSelf(nums);
        for (int n : result) System.out.print(n + " ");
    }
}`,
      python: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    
    right = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    return result

nums = [1, 2, 3, 4]
print(product_except_self(nums))`
    } 
  },
  74: { 
    id: 74, 
    title: 'Next Permutation', 
    description: 'Find the next lexicographically greater permutation.', 
    difficulty: 'Medium' as const, 
    input: 'Array of integers', 
    output: 'Next permutation', 
    example: { input: '[1,2,3]', output: '[1,3,2]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void nextPermutation(vector<int>& nums) {
    int n = nums.size(), i = n - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    
    if (i >= 0) {
        int j = n - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
    }
    reverse(nums.begin() + i + 1, nums.end());
}

int main() {
    vector<int> nums = {1, 2, 3};
    nextPermutation(nums);
    for (int n : nums) cout << n << " ";
    return 0;
}`,
      java: `public class NextPermutation {
    public static void nextPermutation(int[] nums) {
        int n = nums.length, i = n - 2;
        
        while (i >= 0 && nums[i] >= nums[i + 1]) i--;
        
        if (i >= 0) {
            int j = n - 1;
            while (nums[j] <= nums[i]) j--;
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        
        // Reverse from i+1 to end
        int left = i + 1, right = n - 1;
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        nextPermutation(nums);
        for (int n : nums) System.out.print(n + " ");
    }
}`,
      python: `def next_permutation(nums):
    n = len(nums)
    i = n - 2
    
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    
    if i >= 0:
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    
    nums[i + 1:] = reversed(nums[i + 1:])

nums = [1, 2, 3]
next_permutation(nums)
print(nums)`
    } 
  },
  75: { 
    id: 75, 
    title: 'Longest Palindromic Substring', 
    description: 'Find the longest palindromic substring.', 
    difficulty: 'Medium' as const, 
    input: 'String', 
    output: 'Longest palindrome', 
    example: { input: 'babad', output: 'bab' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
using namespace std;

string longestPalindrome(string s) {
    if (s.empty()) return "";
    int start = 0, maxLen = 1;
    
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    };
    
    for (int i = 0; i < s.size(); i++) {
        expand(i, i);      // Odd length
        expand(i, i + 1);  // Even length
    }
    return s.substr(start, maxLen);
}

int main() {
    cout << longestPalindrome("babad") << endl;
    return 0;
}`,
      java: `public class LongestPalindrome {
    static int start = 0, maxLen = 1;
    
    public static String longestPalindrome(String s) {
        if (s.length() < 2) return s;
        
        for (int i = 0; i < s.length(); i++) {
            expand(s, i, i);      // Odd length
            expand(s, i, i + 1);  // Even length
        }
        return s.substring(start, start + maxLen);
    }
    
    static void expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
    }
}`,
      python: `def longest_palindrome(s):
    if len(s) < 2:
        return s
    
    start, max_len = 0, 1
    
    def expand(left, right):
        nonlocal start, max_len
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if right - left + 1 > max_len:
                start = left
                max_len = right - left + 1
            left -= 1
            right += 1
    
    for i in range(len(s)):
        expand(i, i)      # Odd length
        expand(i, i + 1)  # Even length
    
    return s[start:start + max_len]

print(longest_palindrome("babad"))`
    } 
  },
  76: { 
    id: 76, 
    title: 'Group Anagrams', 
    description: 'Group strings that are anagrams of each other.', 
    difficulty: 'Medium' as const, 
    input: 'Array of strings', 
    output: 'Grouped anagrams', 
    example: { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    
    for (string& s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        groups[key].push_back(s);
    }
    
    vector<vector<string>> result;
    for (auto& [key, group] : groups) {
        result.push_back(group);
    }
    return result;
}

int main() {
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    auto result = groupAnagrams(strs);
    for (auto& group : result) {
        cout << "[";
        for (auto& s : group) cout << s << ",";
        cout << "] ";
    }
    return 0;
}`,
      java: `import java.util.*;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(groups.values());
    }
    
    public static void main(String[] args) {
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println(groupAnagrams(strs));
    }
}`,
      python: `from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = tuple(sorted(s))
        groups[key].append(s)
    return list(groups.values())

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(strs))`
    } 
  },
  77: { 
    id: 77, 
    title: 'Word Break', 
    description: 'Check if string can be segmented into dictionary words.', 
    difficulty: 'Medium' as const, 
    input: 'String and dictionary', 
    output: 'True/False', 
    example: { input: 's="leetcode", wordDict=["leet","code"]', output: 'True' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> words(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true;
    
    for (int i = 1; i <= s.size(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && words.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.size()];
}

int main() {
    vector<string> dict = {"leet", "code"};
    cout << (wordBreak("leetcode", dict) ? "True" : "False") << endl;
    return 0;
}`,
      java: `import java.util.*;

public class WordBreak {
    public static boolean wordBreak(String s, List<String> wordDict) {
        Set<String> words = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && words.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
    
    public static void main(String[] args) {
        List<String> dict = Arrays.asList("leet", "code");
        System.out.println(wordBreak("leetcode", dict) ? "True" : "False");
    }
}`,
      python: `def word_break(s, word_dict):
    words = set(word_dict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[len(s)]

print("True" if word_break("leetcode", ["leet", "code"]) else "False")`
    } 
  },
  78: { 
    id: 78, 
    title: 'Unique Paths', 
    description: 'Count unique paths from top-left to bottom-right in a grid.', 
    difficulty: 'Medium' as const, 
    input: 'm x n grid dimensions', 
    output: 'Number of unique paths', 
    example: { input: 'm=3, n=7', output: '28' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}

int main() {
    cout << uniquePaths(3, 7) << endl;
    return 0;
}`,
      java: `public class UniquePaths {
    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
    
    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7));
    }
}`,
      python: `def unique_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    return dp[m - 1][n - 1]

print(unique_paths(3, 7))`
    } 
  },
  79: { 
    id: 79, 
    title: 'Jump Game', 
    description: 'Determine if you can reach the last index.', 
    difficulty: 'Medium' as const, 
    input: 'Array of jump lengths', 
    output: 'True/False', 
    example: { input: '[2,3,1,1,4]', output: 'True' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canJump(vector<int>& nums) {
    int maxReach = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (i > maxReach) return false;
        maxReach = max(maxReach, i + nums[i]);
    }
    return true;
}

int main() {
    vector<int> nums = {2, 3, 1, 1, 4};
    cout << (canJump(nums) ? "True" : "False") << endl;
    return 0;
}`,
      java: `public class JumpGame {
    public static boolean canJump(int[] nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 3, 1, 1, 4};
        System.out.println(canJump(nums) ? "True" : "False");
    }
}`,
      python: `def can_jump(nums):
    max_reach = 0
    for i, jump in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + jump)
    return True

nums = [2, 3, 1, 1, 4]
print("True" if can_jump(nums) else "False")`
    } 
  },
  80: { 
    id: 80, 
    title: 'Min Stack', 
    description: 'Design a stack that supports push, pop, top, and getMin in O(1).', 
    difficulty: 'Medium' as const, 
    input: 'Stack operations', 
    output: 'Results of operations', 
    example: { input: 'push(-2), push(0), push(-3), getMin()', output: '-3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <stack>
using namespace std;

class MinStack {
    stack<int> mainStack;
    stack<int> minStack;
    
public:
    void push(int val) {
        mainStack.push(val);
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        }
    }
    
    void pop() {
        if (mainStack.top() == minStack.top()) {
            minStack.pop();
        }
        mainStack.pop();
    }
    
    int top() {
        return mainStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};

int main() {
    MinStack ms;
    ms.push(-2);
    ms.push(0);
    ms.push(-3);
    cout << "Min: " << ms.getMin() << endl;  // -3
    ms.pop();
    cout << "Top: " << ms.top() << endl;     // 0
    cout << "Min: " << ms.getMin() << endl;  // -2
    return 0;
}`,
      java: `import java.util.*;

class MinStack {
    private Stack<Integer> stack = new Stack<>();
    private Stack<Integer> minStack = new Stack<>();
    
    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if (stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }
        stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
    
    public static void main(String[] args) {
        MinStack ms = new MinStack();
        ms.push(-2);
        ms.push(0);
        ms.push(-3);
        System.out.println("Min: " + ms.getMin());  // -3
        ms.pop();
        System.out.println("Top: " + ms.top());     // 0
        System.out.println("Min: " + ms.getMin());  // -2
    }
}`,
      python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self):
        if self.stack[-1] == self.min_stack[-1]:
            self.min_stack.pop()
        self.stack.pop()
    
    def top(self):
        return self.stack[-1]
    
    def get_min(self):
        return self.min_stack[-1]

ms = MinStack()
ms.push(-2)
ms.push(0)
ms.push(-3)
print("Min:", ms.get_min())  # -3
ms.pop()
print("Top:", ms.top())      # 0
print("Min:", ms.get_min())  # -2`
    } 
  },

  // ==================== HARD PROBLEMS (81-100) ====================
  
  81: { 
    id: 81, 
    title: 'Median of Two Sorted Arrays', 
    description: 'Find the median of two sorted arrays in O(log(m+n)) time.', 
    difficulty: 'Hard' as const, 
    input: 'Two sorted arrays', 
    output: 'Median value', 
    example: { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size(), n = nums2.size();
        int left = 0, right = m;
        
        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? INT_MAX : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? INT_MAX : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
                } else {
                    return max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                right = partitionX - 1;
            } else {
                left = partitionX + 1;
            }
        }
        return 0.0;
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {1, 3};
    vector<int> nums2 = {2};
    cout << "Median: " << sol.findMedianSortedArrays(nums1, nums2) << endl;
    return 0;
}`, 
      java: `import java.util.*;

public class MedianOfTwoSortedArrays {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length, n = nums2.length;
        int left = 0, right = m;
        
        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                right = partitionX - 1;
            } else {
                left = partitionX + 1;
            }
        }
        return 0.0;
    }
    
    public static void main(String[] args) {
        MedianOfTwoSortedArrays sol = new MedianOfTwoSortedArrays();
        int[] nums1 = {1, 3};
        int[] nums2 = {2};
        System.out.println("Median: " + sol.findMedianSortedArrays(nums1, nums2));
    }
}`, 
      python: `from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Ensure nums1 is the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        m, n = len(nums1), len(nums2)
        left, right = 0, m
        
        while left <= right:
            partition_x = (left + right) // 2
            partition_y = (m + n + 1) // 2 - partition_x
            
            max_left_x = float('-inf') if partition_x == 0 else nums1[partition_x - 1]
            min_right_x = float('inf') if partition_x == m else nums1[partition_x]
            
            max_left_y = float('-inf') if partition_y == 0 else nums2[partition_y - 1]
            min_right_y = float('inf') if partition_y == n else nums2[partition_y]
            
            if max_left_x <= min_right_y and max_left_y <= min_right_x:
                if (m + n) % 2 == 0:
                    return (max(max_left_x, max_left_y) + min(min_right_x, min_right_y)) / 2
                else:
                    return max(max_left_x, max_left_y)
            elif max_left_x > min_right_y:
                right = partition_x - 1
            else:
                left = partition_x + 1
        
        return 0.0

# Test
sol = Solution()
print(sol.findMedianSortedArrays([1, 3], [2]))  # Output: 2.0
print(sol.findMedianSortedArrays([1, 2], [3, 4]))  # Output: 2.5` 
    } 
  },

  82: { 
    id: 82, 
    title: 'Trapping Rain Water', 
    description: 'Calculate how much rainwater can be trapped between bars.', 
    difficulty: 'Hard' as const, 
    input: 'Array of heights', 
    output: 'Units of water', 
    example: { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    // Two pointer approach - O(n) time, O(1) space
    int trap(vector<int>& height) {
        int n = height.size();
        if (n == 0) return 0;
        
        int left = 0, right = n - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        return water;
    }
};

int main() {
    Solution sol;
    vector<int> height = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << "Water trapped: " << sol.trap(height) << endl;
    return 0;
}`, 
      java: `public class TrappingRainWater {
    // Two pointer approach - O(n) time, O(1) space
    public int trap(int[] height) {
        int n = height.length;
        if (n == 0) return 0;
        
        int left = 0, right = n - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        return water;
    }
    
    public static void main(String[] args) {
        TrappingRainWater sol = new TrappingRainWater();
        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println("Water trapped: " + sol.trap(height));
    }
}`, 
      python: `from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        """Two pointer approach - O(n) time, O(1) space"""
        if not height:
            return 0
        
        left, right = 0, len(height) - 1
        left_max, right_max = 0, 0
        water = 0
        
        while left < right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    water += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    water += right_max - height[right]
                right -= 1
        
        return water

# Test
sol = Solution()
print(sol.trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Output: 6
print(sol.trap([4,2,0,3,2,5]))  # Output: 9` 
    } 
  },

  83: { 
    id: 83, 
    title: 'Wildcard Matching', 
    description: 'Implement wildcard pattern matching with ? and *.', 
    difficulty: 'Hard' as const, 
    input: 'String and pattern', 
    output: 'True/False', 
    example: { input: 's = "aa", p = "*"', output: 'true' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        
        dp[0][0] = true;
        
        // Handle patterns starting with *
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == '*') {
                dp[0][j] = dp[0][j-1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j-1] == '*') {
                    // * matches empty or one/more characters
                    dp[i][j] = dp[i][j-1] || dp[i-1][j];
                } else if (p[j-1] == '?' || s[i-1] == p[j-1]) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
        
        return dp[m][n];
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isMatch("aa", "*") << endl;      // true
    cout << sol.isMatch("cb", "?a") << endl;     // false
    cout << sol.isMatch("adceb", "*a*b") << endl; // true
    return 0;
}`, 
      java: `public class WildcardMatching {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Handle patterns starting with *
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j-1) == '*') {
                dp[0][j] = dp[0][j-1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == '*') {
                    // * matches empty or one/more characters
                    dp[i][j] = dp[i][j-1] || dp[i-1][j];
                } else if (p.charAt(j-1) == '?' || s.charAt(i-1) == p.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        WildcardMatching sol = new WildcardMatching();
        System.out.println(sol.isMatch("aa", "*"));      // true
        System.out.println(sol.isMatch("cb", "?a"));     // false
        System.out.println(sol.isMatch("adceb", "*a*b")); // true
    }
}`, 
      python: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        
        dp[0][0] = True
        
        # Handle patterns starting with *
        for j in range(1, n + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-1]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if p[j-1] == '*':
                    # * matches empty or one/more characters
                    dp[i][j] = dp[i][j-1] or dp[i-1][j]
                elif p[j-1] == '?' or s[i-1] == p[j-1]:
                    dp[i][j] = dp[i-1][j-1]
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.isMatch("aa", "*"))       # True
print(sol.isMatch("cb", "?a"))      # False
print(sol.isMatch("adceb", "*a*b")) # True` 
    } 
  },

  84: { 
    id: 84, 
    title: 'Regular Expression Matching', 
    description: 'Implement regex matching with . and *.', 
    difficulty: 'Hard' as const, 
    input: 'String and pattern', 
    output: 'True/False', 
    example: { input: 's = "aa", p = "a*"', output: 'true' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        
        dp[0][0] = true;
        
        // Handle patterns like a*, a*b*, a*b*c*
        for (int j = 2; j <= n; j++) {
            if (p[j-1] == '*') {
                dp[0][j] = dp[0][j-2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j-1] == '*') {
                    // * can match zero occurrences
                    dp[i][j] = dp[i][j-2];
                    // * matches one or more if previous char matches
                    if (p[j-2] == '.' || p[j-2] == s[i-1]) {
                        dp[i][j] = dp[i][j] || dp[i-1][j];
                    }
                } else if (p[j-1] == '.' || p[j-1] == s[i-1]) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
        
        return dp[m][n];
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isMatch("aa", "a") << endl;    // false
    cout << sol.isMatch("aa", "a*") << endl;   // true
    cout << sol.isMatch("ab", ".*") << endl;   // true
    return 0;
}`, 
      java: `public class RegexMatching {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Handle patterns like a*, a*b*, a*b*c*
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j-1) == '*') {
                dp[0][j] = dp[0][j-2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == '*') {
                    // * can match zero occurrences
                    dp[i][j] = dp[i][j-2];
                    // * matches one or more if previous char matches
                    if (p.charAt(j-2) == '.' || p.charAt(j-2) == s.charAt(i-1)) {
                        dp[i][j] = dp[i][j] || dp[i-1][j];
                    }
                } else if (p.charAt(j-1) == '.' || p.charAt(j-1) == s.charAt(i-1)) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        RegexMatching sol = new RegexMatching();
        System.out.println(sol.isMatch("aa", "a"));    // false
        System.out.println(sol.isMatch("aa", "a*"));   // true
        System.out.println(sol.isMatch("ab", ".*"));   // true
    }
}`, 
      python: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        
        dp[0][0] = True
        
        # Handle patterns like a*, a*b*, a*b*c*
        for j in range(2, n + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-2]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if p[j-1] == '*':
                    # * can match zero occurrences
                    dp[i][j] = dp[i][j-2]
                    # * matches one or more if previous char matches
                    if p[j-2] == '.' or p[j-2] == s[i-1]:
                        dp[i][j] = dp[i][j] or dp[i-1][j]
                elif p[j-1] == '.' or p[j-1] == s[i-1]:
                    dp[i][j] = dp[i-1][j-1]
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.isMatch("aa", "a"))    # False
print(sol.isMatch("aa", "a*"))   # True
print(sol.isMatch("ab", ".*"))   # True` 
    } 
  },

  85: { 
    id: 85, 
    title: 'N-Queens Problem', 
    description: 'Place N queens on N×N chessboard so no two attack each other.', 
    difficulty: 'Hard' as const, 
    input: 'Integer n', 
    output: 'All valid configurations', 
    example: { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        vector<bool> cols(n, false);
        vector<bool> diag1(2 * n - 1, false);  // row - col + n - 1
        vector<bool> diag2(2 * n - 1, false);  // row + col
        
        backtrack(result, board, 0, n, cols, diag1, diag2);
        return result;
    }
    
private:
    void backtrack(vector<vector<string>>& result, vector<string>& board, 
                   int row, int n, vector<bool>& cols, 
                   vector<bool>& diag1, vector<bool>& diag2) {
        if (row == n) {
            result.push_back(board);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            int d1 = row - col + n - 1;
            int d2 = row + col;
            
            if (!cols[col] && !diag1[d1] && !diag2[d2]) {
                board[row][col] = 'Q';
                cols[col] = diag1[d1] = diag2[d2] = true;
                
                backtrack(result, board, row + 1, n, cols, diag1, diag2);
                
                board[row][col] = '.';
                cols[col] = diag1[d1] = diag2[d2] = false;
            }
        }
    }
};

int main() {
    Solution sol;
    auto result = sol.solveNQueens(4);
    cout << "Number of solutions for 4-Queens: " << result.size() << endl;
    for (auto& board : result) {
        for (auto& row : board) cout << row << endl;
        cout << "---" << endl;
    }
    return 0;
}`, 
      java: `import java.util.*;

public class NQueens {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        
        boolean[] cols = new boolean[n];
        boolean[] diag1 = new boolean[2 * n - 1];  // row - col + n - 1
        boolean[] diag2 = new boolean[2 * n - 1];  // row + col
        
        backtrack(result, board, 0, n, cols, diag1, diag2);
        return result;
    }
    
    private void backtrack(List<List<String>> result, char[][] board, 
                          int row, int n, boolean[] cols, 
                          boolean[] diag1, boolean[] diag2) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (char[] r : board) solution.add(new String(r));
            result.add(solution);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            int d1 = row - col + n - 1;
            int d2 = row + col;
            
            if (!cols[col] && !diag1[d1] && !diag2[d2]) {
                board[row][col] = 'Q';
                cols[col] = diag1[d1] = diag2[d2] = true;
                
                backtrack(result, board, row + 1, n, cols, diag1, diag2);
                
                board[row][col] = '.';
                cols[col] = diag1[d1] = diag2[d2] = false;
            }
        }
    }
    
    public static void main(String[] args) {
        NQueens sol = new NQueens();
        List<List<String>> result = sol.solveNQueens(4);
        System.out.println("Number of solutions: " + result.size());
        for (List<String> board : result) {
            for (String row : board) System.out.println(row);
            System.out.println("---");
        }
    }
}`, 
      python: `from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        result = []
        board = [['.'] * n for _ in range(n)]
        cols = set()
        diag1 = set()  # row - col
        diag2 = set()  # row + col
        
        def backtrack(row):
            if row == n:
                result.append([''.join(r) for r in board])
                return
            
            for col in range(n):
                if col in cols or (row - col) in diag1 or (row + col) in diag2:
                    continue
                
                board[row][col] = 'Q'
                cols.add(col)
                diag1.add(row - col)
                diag2.add(row + col)
                
                backtrack(row + 1)
                
                board[row][col] = '.'
                cols.remove(col)
                diag1.remove(row - col)
                diag2.remove(row + col)
        
        backtrack(0)
        return result

# Test
sol = Solution()
result = sol.solveNQueens(4)
print(f"Number of solutions for 4-Queens: {len(result)}")
for board in result:
    for row in board:
        print(row)
    print("---")` 
    } 
  },

  86: { 
    id: 86, 
    title: 'Sudoku Solver', 
    description: 'Solve a 9x9 Sudoku puzzle using backtracking.', 
    difficulty: 'Hard' as const, 
    input: '9x9 board with empty cells', 
    output: 'Solved board', 
    example: { input: 'Partially filled 9x9 grid', output: 'Complete valid Sudoku' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, row, col, c)) {
                            board[row][col] = c;
                            
                            if (solve(board)) return true;
                            
                            board[row][col] = '.';
                        }
                    }
                    return false;  // No valid number found
                }
            }
        }
        return true;  // All cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == c) return false;
        }
        return true;
    }
};

int main() {
    Solution sol;
    vector<vector<char>> board = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    
    sol.solveSudoku(board);
    
    for (auto& row : board) {
        for (char c : row) cout << c << " ";
        cout << endl;
    }
    return 0;
}`, 
      java: `public class SudokuSolver {
    public void solveSudoku(char[][] board) {
        solve(board);
    }
    
    private boolean solve(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, row, col, c)) {
                            board[row][col] = c;
                            
                            if (solve(board)) return true;
                            
                            board[row][col] = '.';
                        }
                    }
                    return false;  // No valid number found
                }
            }
        }
        return true;  // All cells filled
    }
    
    private boolean isValid(char[][] board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == c) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        SudokuSolver sol = new SudokuSolver();
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        
        sol.solveSudoku(board);
        
        for (char[] row : board) {
            for (char c : row) System.out.print(c + " ");
            System.out.println();
        }
    }
}`, 
      python: `from typing import List

class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """Solve Sudoku puzzle in-place"""
        self.solve(board)
    
    def solve(self, board: List[List[str]]) -> bool:
        for row in range(9):
            for col in range(9):
                if board[row][col] == '.':
                    for c in '123456789':
                        if self.is_valid(board, row, col, c):
                            board[row][col] = c
                            
                            if self.solve(board):
                                return True
                            
                            board[row][col] = '.'
                    return False  # No valid number found
        return True  # All cells filled
    
    def is_valid(self, board: List[List[str]], row: int, col: int, c: str) -> bool:
        for i in range(9):
            # Check row
            if board[row][i] == c:
                return False
            # Check column
            if board[i][col] == c:
                return False
            # Check 3x3 box
            box_row = 3 * (row // 3) + i // 3
            box_col = 3 * (col // 3) + i % 3
            if board[box_row][box_col] == c:
                return False
        return True

# Test
sol = Solution()
board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]
sol.solveSudoku(board)
for row in board:
    print(' '.join(row))` 
    } 
  },

  87: { 
    id: 87, 
    title: 'Word Ladder', 
    description: 'Find shortest transformation sequence from begin to end word.', 
    difficulty: 'Hard' as const, 
    input: 'beginWord, endWord, wordList', 
    output: 'Length of shortest transformation', 
    example: { input: 'hit, cog, [hot,dot,dog,lot,log,cog]', output: '5' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        
        if (wordSet.find(endWord) == wordSet.end()) return 0;
        
        queue<pair<string, int>> q;
        q.push({beginWord, 1});
        
        while (!q.empty()) {
            auto [word, level] = q.front();
            q.pop();
            
            if (word == endWord) return level;
            
            for (int i = 0; i < word.size(); i++) {
                string temp = word;
                for (char c = 'a'; c <= 'z'; c++) {
                    temp[i] = c;
                    if (wordSet.find(temp) != wordSet.end()) {
                        q.push({temp, level + 1});
                        wordSet.erase(temp);  // Mark as visited
                    }
                }
            }
        }
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<string> wordList = {"hot","dot","dog","lot","log","cog"};
    cout << sol.ladderLength("hit", "cog", wordList) << endl;  // 5
    return 0;
}`, 
      java: `import java.util.*;

public class WordLadder {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        
        if (!wordSet.contains(endWord)) return 0;
        
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                
                if (word.equals(endWord)) return level;
                
                char[] chars = word.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        chars[j] = c;
                        String newWord = new String(chars);
                        if (wordSet.contains(newWord)) {
                            queue.offer(newWord);
                            wordSet.remove(newWord);  // Mark as visited
                        }
                    }
                    chars[j] = original;
                }
            }
            level++;
        }
        
        return 0;
    }
    
    public static void main(String[] args) {
        WordLadder sol = new WordLadder();
        List<String> wordList = Arrays.asList("hot","dot","dog","lot","log","cog");
        System.out.println(sol.ladderLength("hit", "cog", wordList));  // 5
    }
}`, 
      python: `from typing import List
from collections import deque

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        word_set = set(wordList)
        
        if endWord not in word_set:
            return 0
        
        queue = deque([(beginWord, 1)])
        
        while queue:
            word, level = queue.popleft()
            
            if word == endWord:
                return level
            
            for i in range(len(word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = word[:i] + c + word[i+1:]
                    if new_word in word_set:
                        queue.append((new_word, level + 1))
                        word_set.remove(new_word)  # Mark as visited
        
        return 0

# Test
sol = Solution()
print(sol.ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))  # 5` 
    } 
  },

  88: { 
    id: 88, 
    title: 'Longest Valid Parentheses', 
    description: 'Find length of longest valid parentheses substring.', 
    difficulty: 'Hard' as const, 
    input: 'String of parentheses', 
    output: 'Length', 
    example: { input: ')()())', output: '4' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <stack>
#include <algorithm>
using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
        stack<int> stk;
        stk.push(-1);  // Base for calculation
        int maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                stk.push(i);
            } else {
                stk.pop();
                if (stk.empty()) {
                    stk.push(i);  // New base
                } else {
                    maxLen = max(maxLen, i - stk.top());
                }
            }
        }
        
        return maxLen;
    }
    
    // Alternative: DP approach
    int longestValidParenthesesDP(string s) {
        int n = s.length();
        vector<int> dp(n, 0);
        int maxLen = 0;
        
        for (int i = 1; i < n; i++) {
            if (s[i] == ')') {
                if (s[i-1] == '(') {
                    dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
                } else if (i - dp[i-1] > 0 && s[i - dp[i-1] - 1] == '(') {
                    dp[i] = dp[i-1] + 2 + (i - dp[i-1] >= 2 ? dp[i - dp[i-1] - 2] : 0);
                }
                maxLen = max(maxLen, dp[i]);
            }
        }
        
        return maxLen;
    }
};

int main() {
    Solution sol;
    cout << sol.longestValidParentheses("(()") << endl;    // 2
    cout << sol.longestValidParentheses(")()())") << endl; // 4
    return 0;
}`, 
      java: `import java.util.*;

public class LongestValidParentheses {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);  // Base for calculation
        int maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    stack.push(i);  // New base
                } else {
                    maxLen = Math.max(maxLen, i - stack.peek());
                }
            }
        }
        
        return maxLen;
    }
    
    // Alternative: DP approach
    public int longestValidParenthesesDP(String s) {
        int n = s.length();
        int[] dp = new int[n];
        int maxLen = 0;
        
        for (int i = 1; i < n; i++) {
            if (s.charAt(i) == ')') {
                if (s.charAt(i-1) == '(') {
                    dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
                } else if (i - dp[i-1] > 0 && s.charAt(i - dp[i-1] - 1) == '(') {
                    dp[i] = dp[i-1] + 2 + (i - dp[i-1] >= 2 ? dp[i - dp[i-1] - 2] : 0);
                }
                maxLen = Math.max(maxLen, dp[i]);
            }
        }
        
        return maxLen;
    }
    
    public static void main(String[] args) {
        LongestValidParentheses sol = new LongestValidParentheses();
        System.out.println(sol.longestValidParentheses("(()"));    // 2
        System.out.println(sol.longestValidParentheses(")()())")); // 4
    }
}`, 
      python: `class Solution:
    def longestValidParentheses(self, s: str) -> int:
        """Stack approach"""
        stack = [-1]  # Base for calculation
        max_len = 0
        
        for i, char in enumerate(s):
            if char == '(':
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)  # New base
                else:
                    max_len = max(max_len, i - stack[-1])
        
        return max_len
    
    def longestValidParenthesesDP(self, s: str) -> int:
        """DP approach"""
        n = len(s)
        if n == 0:
            return 0
        
        dp = [0] * n
        max_len = 0
        
        for i in range(1, n):
            if s[i] == ')':
                if s[i-1] == '(':
                    dp[i] = (dp[i-2] if i >= 2 else 0) + 2
                elif i - dp[i-1] > 0 and s[i - dp[i-1] - 1] == '(':
                    dp[i] = dp[i-1] + 2 + (dp[i - dp[i-1] - 2] if i - dp[i-1] >= 2 else 0)
                max_len = max(max_len, dp[i])
        
        return max_len

# Test
sol = Solution()
print(sol.longestValidParentheses("(()"))     # 2
print(sol.longestValidParentheses(")()())"))  # 4` 
    } 
  },

  89: { 
    id: 89, 
    title: 'Edit Distance', 
    description: 'Minimum operations to convert one string to another (Levenshtein distance).', 
    difficulty: 'Hard' as const, 
    input: 'Two strings', 
    output: 'Minimum operations', 
    example: { input: 'horse, ros', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minDistance(string word1, string word2) {
        int m = word1.length(), n = word2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Base cases: transforming empty string
        for (int i = 0; i <= m; i++) dp[i][0] = i;  // Delete all
        for (int j = 0; j <= n; j++) dp[0][j] = j;  // Insert all
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1[i-1] == word2[j-1]) {
                    dp[i][j] = dp[i-1][j-1];  // No operation needed
                } else {
                    dp[i][j] = 1 + min({
                        dp[i-1][j],    // Delete
                        dp[i][j-1],    // Insert
                        dp[i-1][j-1]   // Replace
                    });
                }
            }
        }
        
        return dp[m][n];
    }
};

int main() {
    Solution sol;
    cout << sol.minDistance("horse", "ros") << endl;      // 3
    cout << sol.minDistance("intention", "execution") << endl; // 5
    return 0;
}`, 
      java: `public class EditDistance {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Base cases: transforming empty string
        for (int i = 0; i <= m; i++) dp[i][0] = i;  // Delete all
        for (int j = 0; j <= n; j++) dp[0][j] = j;  // Insert all
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];  // No operation needed
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i-1][j-1],  // Replace
                        Math.min(dp[i-1][j], dp[i][j-1])  // Delete, Insert
                    );
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        EditDistance sol = new EditDistance();
        System.out.println(sol.minDistance("horse", "ros"));      // 3
        System.out.println(sol.minDistance("intention", "execution")); // 5
    }
}`, 
      python: `class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Base cases: transforming empty string
        for i in range(m + 1):
            dp[i][0] = i  # Delete all
        for j in range(n + 1):
            dp[0][j] = j  # Insert all
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i-1] == word2[j-1]:
                    dp[i][j] = dp[i-1][j-1]  # No operation needed
                else:
                    dp[i][j] = 1 + min(
                        dp[i-1][j],    # Delete
                        dp[i][j-1],    # Insert
                        dp[i-1][j-1]   # Replace
                    )
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.minDistance("horse", "ros"))       # 3
print(sol.minDistance("intention", "execution"))  # 5` 
    } 
  },

  90: { 
    id: 90, 
    title: 'Largest Rectangle in Histogram', 
    description: 'Find largest rectangle area in histogram.', 
    difficulty: 'Hard' as const, 
    input: 'Array of heights', 
    output: 'Maximum area', 
    example: { input: '[2,1,5,6,2,3]', output: '10' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> stk;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            
            while (!stk.empty() && heights[stk.top()] > h) {
                int height = heights[stk.top()];
                stk.pop();
                int width = stk.empty() ? i : i - stk.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            stk.push(i);
        }
        
        return maxArea;
    }
};

int main() {
    Solution sol;
    vector<int> heights = {2,1,5,6,2,3};
    cout << "Largest Rectangle Area: " << sol.largestRectangleArea(heights) << endl;
    return 0;
}`, 
      java: `import java.util.*;

public class LargestRectangleHistogram {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            
            while (!stack.isEmpty() && heights[stack.peek()] > h) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        LargestRectangleHistogram sol = new LargestRectangleHistogram();
        int[] heights = {2,1,5,6,2,3};
        System.out.println("Largest Rectangle Area: " + sol.largestRectangleArea(heights));
    }
}`, 
      python: `from typing import List

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        max_area = 0
        n = len(heights)
        
        for i in range(n + 1):
            h = 0 if i == n else heights[i]
            
            while stack and heights[stack[-1]] > h:
                height = heights[stack.pop()]
                width = i if not stack else i - stack[-1] - 1
                max_area = max(max_area, height * width)
            
            stack.append(i)
        
        return max_area

# Test
sol = Solution()
print(sol.largestRectangleArea([2,1,5,6,2,3]))  # 10` 
    } 
  },

  91: { 
    id: 91, 
    title: 'Sliding Window Maximum', 
    description: 'Find maximum in each sliding window of size k.', 
    difficulty: 'Hard' as const, 
    input: 'Array and window size k', 
    output: 'Array of maximums', 
    example: { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;
        deque<int> dq;  // Store indices, front has max
        
        for (int i = 0; i < nums.size(); i++) {
            // Remove indices outside current window
            while (!dq.empty() && dq.front() < i - k + 1) {
                dq.pop_front();
            }
            
            // Remove smaller elements (they'll never be max)
            while (!dq.empty() && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            
            dq.push_back(i);
            
            // Add to result when window is complete
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1,3,-1,-3,5,3,6,7};
    vector<int> result = sol.maxSlidingWindow(nums, 3);
    for (int x : result) cout << x << " ";  // 3 3 5 5 6 7
    cout << endl;
    return 0;
}`, 
      java: `import java.util.*;

public class SlidingWindowMaximum {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();  // Store indices
        
        for (int i = 0; i < n; i++) {
            // Remove indices outside current window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            // Remove smaller elements (they'll never be max)
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            // Add to result when window is complete
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        SlidingWindowMaximum sol = new SlidingWindowMaximum();
        int[] nums = {1,3,-1,-3,5,3,6,7};
        int[] result = sol.maxSlidingWindow(nums, 3);
        for (int x : result) System.out.print(x + " ");  // 3 3 5 5 6 7
    }
}`, 
      python: `from typing import List
from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        dq = deque()  # Store indices, front has max
        
        for i, num in enumerate(nums):
            # Remove indices outside current window
            while dq and dq[0] < i - k + 1:
                dq.popleft()
            
            # Remove smaller elements (they'll never be max)
            while dq and nums[dq[-1]] < num:
                dq.pop()
            
            dq.append(i)
            
            # Add to result when window is complete
            if i >= k - 1:
                result.append(nums[dq[0]])
        
        return result

# Test
sol = Solution()
print(sol.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # [3,3,5,5,6,7]` 
    } 
  },

  92: { 
    id: 92, 
    title: 'Serialize and Deserialize Binary Tree', 
    description: 'Design algorithm to serialize and deserialize a binary tree.', 
    difficulty: 'Hard' as const, 
    input: 'Binary tree', 
    output: 'String representation and back', 
    example: { input: '[1,2,3,null,null,4,5]', output: '[1,2,3,null,null,4,5]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <sstream>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
    // Encodes a tree to a single string (preorder)
    string serialize(TreeNode* root) {
        if (!root) return "null";
        return to_string(root->val) + "," + 
               serialize(root->left) + "," + 
               serialize(root->right);
    }

    // Decodes your encoded data to tree
    TreeNode* deserialize(string data) {
        queue<string> nodes;
        stringstream ss(data);
        string token;
        while (getline(ss, token, ',')) {
            nodes.push(token);
        }
        return buildTree(nodes);
    }
    
private:
    TreeNode* buildTree(queue<string>& nodes) {
        string val = nodes.front();
        nodes.pop();
        
        if (val == "null") return nullptr;
        
        TreeNode* node = new TreeNode(stoi(val));
        node->left = buildTree(nodes);
        node->right = buildTree(nodes);
        return node;
    }
};

int main() {
    Codec codec;
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    
    string serialized = codec.serialize(root);
    cout << "Serialized: " << serialized << endl;
    
    TreeNode* deserialized = codec.deserialize(serialized);
    cout << "Deserialized root: " << deserialized->val << endl;
    return 0;
}`, 
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class Codec {
    // Encodes a tree to a single string (preorder)
    public String serialize(TreeNode root) {
        if (root == null) return "null";
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }

    // Decodes your encoded data to tree
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return buildTree(nodes);
    }
    
    private TreeNode buildTree(Queue<String> nodes) {
        String val = nodes.poll();
        
        if (val.equals("null")) return null;
        
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = buildTree(nodes);
        node.right = buildTree(nodes);
        return node;
    }
    
    public static void main(String[] args) {
        Codec codec = new Codec();
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        String serialized = codec.serialize(root);
        System.out.println("Serialized: " + serialized);
        
        TreeNode deserialized = codec.deserialize(serialized);
        System.out.println("Deserialized root: " + deserialized.val);
    }
}`, 
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string (preorder)"""
        if not root:
            return "null"
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree"""
        nodes = iter(data.split(","))
        
        def build_tree():
            val = next(nodes)
            if val == "null":
                return None
            node = TreeNode(int(val))
            node.left = build_tree()
            node.right = build_tree()
            return node
        
        return build_tree()

# Test
codec = Codec()
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.right.left = TreeNode(4)
root.right.right = TreeNode(5)

serialized = codec.serialize(root)
print(f"Serialized: {serialized}")

deserialized = codec.deserialize(serialized)
print(f"Deserialized root: {deserialized.val}")` 
    } 
  },

  93: { 
    id: 93, 
    title: 'Word Search II', 
    description: 'Find all words from dictionary that exist in the board.', 
    difficulty: 'Hard' as const, 
    input: 'Board and list of words', 
    output: 'Words found in board', 
    example: { input: 'board, words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class TrieNode {
public:
    TrieNode* children[26] = {nullptr};
    string word = "";
};

class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        TrieNode* root = buildTrie(words);
        unordered_set<string> result;
        
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dfs(board, i, j, root, result);
            }
        }
        
        return vector<string>(result.begin(), result.end());
    }
    
private:
    TrieNode* buildTrie(vector<string>& words) {
        TrieNode* root = new TrieNode();
        for (string& word : words) {
            TrieNode* node = root;
            for (char c : word) {
                int idx = c - 'a';
                if (!node->children[idx]) {
                    node->children[idx] = new TrieNode();
                }
                node = node->children[idx];
            }
            node->word = word;
        }
        return root;
    }
    
    void dfs(vector<vector<char>>& board, int i, int j, 
             TrieNode* node, unordered_set<string>& result) {
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return;
        
        char c = board[i][j];
        if (c == '#' || !node->children[c - 'a']) return;
        
        node = node->children[c - 'a'];
        if (!node->word.empty()) {
            result.insert(node->word);
        }
        
        board[i][j] = '#';  // Mark visited
        
        dfs(board, i + 1, j, node, result);
        dfs(board, i - 1, j, node, result);
        dfs(board, i, j + 1, node, result);
        dfs(board, i, j - 1, node, result);
        
        board[i][j] = c;  // Restore
    }
};

int main() {
    Solution sol;
    vector<vector<char>> board = {
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'}
    };
    vector<string> words = {"oath","pea","eat","rain"};
    
    vector<string> result = sol.findWords(board, words);
    for (string& word : result) cout << word << " ";
    cout << endl;
    return 0;
}`, 
      java: `import java.util.*;

class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String word = null;
}

public class WordSearchII {
    public List<String> findWords(char[][] board, String[] words) {
        TrieNode root = buildTrie(words);
        Set<String> result = new HashSet<>();
        
        int m = board.length, n = board[0].length;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dfs(board, i, j, root, result);
            }
        }
        
        return new ArrayList<>(result);
    }
    
    private TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (node.children[idx] == null) {
                    node.children[idx] = new TrieNode();
                }
                node = node.children[idx];
            }
            node.word = word;
        }
        return root;
    }
    
    private void dfs(char[][] board, int i, int j, 
                    TrieNode node, Set<String> result) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        
        char c = board[i][j];
        if (c == '#' || node.children[c - 'a'] == null) return;
        
        node = node.children[c - 'a'];
        if (node.word != null) {
            result.add(node.word);
        }
        
        board[i][j] = '#';  // Mark visited
        
        dfs(board, i + 1, j, node, result);
        dfs(board, i - 1, j, node, result);
        dfs(board, i, j + 1, node, result);
        dfs(board, i, j - 1, node, result);
        
        board[i][j] = c;  // Restore
    }
    
    public static void main(String[] args) {
        WordSearchII sol = new WordSearchII();
        char[][] board = {
            {'o','a','a','n'},
            {'e','t','a','e'},
            {'i','h','k','r'},
            {'i','f','l','v'}
        };
        String[] words = {"oath","pea","eat","rain"};
        
        System.out.println(sol.findWords(board, words));
    }
}`, 
      python: `from typing import List

class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # Build Trie
        root = TrieNode()
        for word in words:
            node = root
            for c in word:
                if c not in node.children:
                    node.children[c] = TrieNode()
                node = node.children[c]
            node.word = word
        
        result = set()
        m, n = len(board), len(board[0])
        
        def dfs(i, j, node):
            if i < 0 or i >= m or j < 0 or j >= n:
                return
            
            c = board[i][j]
            if c == '#' or c not in node.children:
                return
            
            node = node.children[c]
            if node.word:
                result.add(node.word)
            
            board[i][j] = '#'  # Mark visited
            
            dfs(i + 1, j, node)
            dfs(i - 1, j, node)
            dfs(i, j + 1, node)
            dfs(i, j - 1, node)
            
            board[i][j] = c  # Restore
        
        for i in range(m):
            for j in range(n):
                dfs(i, j, root)
        
        return list(result)

# Test
sol = Solution()
board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]
print(sol.findWords(board, words))  # ['oath', 'eat']` 
    } 
  },

  94: { 
    id: 94, 
    title: 'Palindrome Partitioning II', 
    description: 'Minimum cuts needed to partition string into palindromes.', 
    difficulty: 'Hard' as const, 
    input: 'String', 
    output: 'Minimum cuts', 
    example: { input: 'aab', output: '1' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int minCut(string s) {
        int n = s.length();
        vector<vector<bool>> isPalin(n, vector<bool>(n, false));
        vector<int> dp(n, 0);
        
        // Build palindrome lookup table
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[i] == s[j] && (j - i <= 2 || isPalin[i+1][j-1])) {
                    isPalin[i][j] = true;
                }
            }
        }
        
        // dp[i] = min cuts for s[0..i]
        for (int i = 0; i < n; i++) {
            if (isPalin[0][i]) {
                dp[i] = 0;  // Whole substring is palindrome
            } else {
                dp[i] = i;  // Max cuts (each char is a palindrome)
                for (int j = 1; j <= i; j++) {
                    if (isPalin[j][i]) {
                        dp[i] = min(dp[i], dp[j-1] + 1);
                    }
                }
            }
        }
        
        return dp[n-1];
    }
};

int main() {
    Solution sol;
    cout << sol.minCut("aab") << endl;    // 1
    cout << sol.minCut("a") << endl;      // 0
    cout << sol.minCut("ab") << endl;     // 1
    return 0;
}`, 
      java: `public class PalindromePartitioningII {
    public int minCut(String s) {
        int n = s.length();
        boolean[][] isPalin = new boolean[n][n];
        int[] dp = new int[n];
        
        // Build palindrome lookup table
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 2 || isPalin[i+1][j-1])) {
                    isPalin[i][j] = true;
                }
            }
        }
        
        // dp[i] = min cuts for s[0..i]
        for (int i = 0; i < n; i++) {
            if (isPalin[0][i]) {
                dp[i] = 0;  // Whole substring is palindrome
            } else {
                dp[i] = i;  // Max cuts
                for (int j = 1; j <= i; j++) {
                    if (isPalin[j][i]) {
                        dp[i] = Math.min(dp[i], dp[j-1] + 1);
                    }
                }
            }
        }
        
        return dp[n-1];
    }
    
    public static void main(String[] args) {
        PalindromePartitioningII sol = new PalindromePartitioningII();
        System.out.println(sol.minCut("aab"));  // 1
        System.out.println(sol.minCut("a"));    // 0
    }
}`, 
      python: `class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        is_palin = [[False] * n for _ in range(n)]
        
        # Build palindrome lookup table
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                if s[i] == s[j] and (j - i <= 2 or is_palin[i+1][j-1]):
                    is_palin[i][j] = True
        
        # dp[i] = min cuts for s[0..i]
        dp = [0] * n
        
        for i in range(n):
            if is_palin[0][i]:
                dp[i] = 0  # Whole substring is palindrome
            else:
                dp[i] = i  # Max cuts
                for j in range(1, i + 1):
                    if is_palin[j][i]:
                        dp[i] = min(dp[i], dp[j-1] + 1)
        
        return dp[n-1]

# Test
sol = Solution()
print(sol.minCut("aab"))  # 1
print(sol.minCut("a"))    # 0` 
    } 
  },

  95: { 
    id: 95, 
    title: 'Distinct Subsequences', 
    description: 'Count distinct subsequences of s which equals t.', 
    difficulty: 'Hard' as const, 
    input: 'Two strings s and t', 
    output: 'Number of distinct subsequences', 
    example: { input: 's = "rabbbit", t = "rabbit"', output: '3' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int numDistinct(string s, string t) {
        int m = s.length(), n = t.length();
        // Use unsigned long long to avoid overflow
        vector<vector<unsigned long long>> dp(m + 1, vector<unsigned long long>(n + 1, 0));
        
        // Empty t can be formed from any prefix of s in one way
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Don't use s[i-1]
                dp[i][j] = dp[i-1][j];
                
                // If match, also count using s[i-1]
                if (s[i-1] == t[j-1]) {
                    dp[i][j] += dp[i-1][j-1];
                }
            }
        }
        
        return dp[m][n];
    }
};

int main() {
    Solution sol;
    cout << sol.numDistinct("rabbbit", "rabbit") << endl;  // 3
    cout << sol.numDistinct("babgbag", "bag") << endl;     // 5
    return 0;
}`, 
      java: `public class DistinctSubsequences {
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        long[][] dp = new long[m + 1][n + 1];
        
        // Empty t can be formed from any prefix of s in one way
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Don't use s[i-1]
                dp[i][j] = dp[i-1][j];
                
                // If match, also count using s[i-1]
                if (s.charAt(i-1) == t.charAt(j-1)) {
                    dp[i][j] += dp[i-1][j-1];
                }
            }
        }
        
        return (int) dp[m][n];
    }
    
    public static void main(String[] args) {
        DistinctSubsequences sol = new DistinctSubsequences();
        System.out.println(sol.numDistinct("rabbbit", "rabbit"));  // 3
        System.out.println(sol.numDistinct("babgbag", "bag"));     // 5
    }
}`, 
      python: `class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Empty t can be formed from any prefix of s in one way
        for i in range(m + 1):
            dp[i][0] = 1
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # Don't use s[i-1]
                dp[i][j] = dp[i-1][j]
                
                # If match, also count using s[i-1]
                if s[i-1] == t[j-1]:
                    dp[i][j] += dp[i-1][j-1]
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.numDistinct("rabbbit", "rabbit"))  # 3
print(sol.numDistinct("babgbag", "bag"))     # 5` 
    } 
  },

  96: { 
    id: 96, 
    title: 'Interleaving String', 
    description: 'Check if s3 is formed by interleaving s1 and s2.', 
    difficulty: 'Hard' as const, 
    input: 'Three strings s1, s2, s3', 
    output: 'True/False', 
    example: { input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"', output: 'true' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        int m = s1.length(), n = s2.length();
        if (m + n != s3.length()) return false;
        
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        
        dp[0][0] = true;
        
        // First column: using only s1
        for (int i = 1; i <= m; i++) {
            dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1];
        }
        
        // First row: using only s2
        for (int j = 1; j <= n; j++) {
            dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1];
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Use char from s1 or s2
                dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) ||
                           (dp[i][j-1] && s2[j-1] == s3[i+j-1]);
            }
        }
        
        return dp[m][n];
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isInterleave("aabcc", "dbbca", "aadbbcbcac") << endl;  // true
    cout << sol.isInterleave("aabcc", "dbbca", "aadbbbaccc") << endl;  // false
    return 0;
}`, 
      java: `public class InterleavingString {
    public boolean isInterleave(String s1, String s2, String s3) {
        int m = s1.length(), n = s2.length();
        if (m + n != s3.length()) return false;
        
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // First column: using only s1
        for (int i = 1; i <= m; i++) {
            dp[i][0] = dp[i-1][0] && s1.charAt(i-1) == s3.charAt(i-1);
        }
        
        // First row: using only s2
        for (int j = 1; j <= n; j++) {
            dp[0][j] = dp[0][j-1] && s2.charAt(j-1) == s3.charAt(j-1);
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Use char from s1 or s2
                dp[i][j] = (dp[i-1][j] && s1.charAt(i-1) == s3.charAt(i+j-1)) ||
                           (dp[i][j-1] && s2.charAt(j-1) == s3.charAt(i+j-1));
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        InterleavingString sol = new InterleavingString();
        System.out.println(sol.isInterleave("aabcc", "dbbca", "aadbbcbcac"));  // true
        System.out.println(sol.isInterleave("aabcc", "dbbca", "aadbbbaccc"));  // false
    }
}`, 
      python: `class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n = len(s1), len(s2)
        if m + n != len(s3):
            return False
        
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        
        dp[0][0] = True
        
        # First column: using only s1
        for i in range(1, m + 1):
            dp[i][0] = dp[i-1][0] and s1[i-1] == s3[i-1]
        
        # First row: using only s2
        for j in range(1, n + 1):
            dp[0][j] = dp[0][j-1] and s2[j-1] == s3[j-1]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # Use char from s1 or s2
                dp[i][j] = ((dp[i-1][j] and s1[i-1] == s3[i+j-1]) or
                           (dp[i][j-1] and s2[j-1] == s3[i+j-1]))
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.isInterleave("aabcc", "dbbca", "aadbbcbcac"))  # True
print(sol.isInterleave("aabcc", "dbbca", "aadbbbaccc"))  # False` 
    } 
  },

  97: { 
    id: 97, 
    title: 'Scramble String', 
    description: 'Check if s2 is a scrambled version of s1.', 
    difficulty: 'Hard' as const, 
    input: 'Two strings', 
    output: 'True/False', 
    example: { input: 's1 = "great", s2 = "rgeat"', output: 'true' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
    unordered_map<string, bool> memo;
    
public:
    bool isScramble(string s1, string s2) {
        if (s1.length() != s2.length()) return false;
        if (s1 == s2) return true;
        
        string key = s1 + "_" + s2;
        if (memo.find(key) != memo.end()) return memo[key];
        
        int n = s1.length();
        string sorted1 = s1, sorted2 = s2;
        sort(sorted1.begin(), sorted1.end());
        sort(sorted2.begin(), sorted2.end());
        if (sorted1 != sorted2) {
            memo[key] = false;
            return false;
        }
        
        for (int i = 1; i < n; i++) {
            // No swap: s1[0..i-1] matches s2[0..i-1]
            if (isScramble(s1.substr(0, i), s2.substr(0, i)) &&
                isScramble(s1.substr(i), s2.substr(i))) {
                memo[key] = true;
                return true;
            }
            
            // With swap: s1[0..i-1] matches s2[n-i..n-1]
            if (isScramble(s1.substr(0, i), s2.substr(n - i)) &&
                isScramble(s1.substr(i), s2.substr(0, n - i))) {
                memo[key] = true;
                return true;
            }
        }
        
        memo[key] = false;
        return false;
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isScramble("great", "rgeat") << endl;  // true
    cout << sol.isScramble("abcde", "caebd") << endl;  // false
    return 0;
}`, 
      java: `import java.util.*;

public class ScrambleString {
    private Map<String, Boolean> memo = new HashMap<>();
    
    public boolean isScramble(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        if (s1.equals(s2)) return true;
        
        String key = s1 + "_" + s2;
        if (memo.containsKey(key)) return memo.get(key);
        
        int n = s1.length();
        char[] arr1 = s1.toCharArray(), arr2 = s2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        if (!Arrays.equals(arr1, arr2)) {
            memo.put(key, false);
            return false;
        }
        
        for (int i = 1; i < n; i++) {
            // No swap
            if (isScramble(s1.substring(0, i), s2.substring(0, i)) &&
                isScramble(s1.substring(i), s2.substring(i))) {
                memo.put(key, true);
                return true;
            }
            
            // With swap
            if (isScramble(s1.substring(0, i), s2.substring(n - i)) &&
                isScramble(s1.substring(i), s2.substring(0, n - i))) {
                memo.put(key, true);
                return true;
            }
        }
        
        memo.put(key, false);
        return false;
    }
    
    public static void main(String[] args) {
        ScrambleString sol = new ScrambleString();
        System.out.println(sol.isScramble("great", "rgeat"));  // true
        System.out.println(sol.isScramble("abcde", "caebd"));  // false
    }
}`, 
      python: `from functools import lru_cache

class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        @lru_cache(maxsize=None)
        def solve(s1: str, s2: str) -> bool:
            if len(s1) != len(s2):
                return False
            if s1 == s2:
                return True
            if sorted(s1) != sorted(s2):
                return False
            
            n = len(s1)
            for i in range(1, n):
                # No swap: s1[:i] matches s2[:i]
                if solve(s1[:i], s2[:i]) and solve(s1[i:], s2[i:]):
                    return True
                
                # With swap: s1[:i] matches s2[n-i:]
                if solve(s1[:i], s2[n-i:]) and solve(s1[i:], s2[:n-i]):
                    return True
            
            return False
        
        return solve(s1, s2)

# Test
sol = Solution()
print(sol.isScramble("great", "rgeat"))  # True
print(sol.isScramble("abcde", "caebd"))  # False` 
    } 
  },

  98: { 
    id: 98, 
    title: 'Shortest Palindrome', 
    description: 'Find shortest palindrome by adding characters in front.', 
    difficulty: 'Hard' as const, 
    input: 'String', 
    output: 'Shortest palindrome', 
    example: { input: 'aacecaaa', output: 'aaacecaaa' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    string shortestPalindrome(string s) {
        int n = s.length();
        if (n == 0) return s;
        
        // Reverse the string
        string rev = s;
        reverse(rev.begin(), rev.end());
        
        // Use KMP to find longest prefix of s that matches suffix of rev
        string combined = s + "#" + rev;
        vector<int> lps = computeLPS(combined);
        
        // Length of longest palindromic prefix
        int longestPalinPrefix = lps.back();
        
        // Add the remaining suffix of rev to front
        return rev.substr(0, n - longestPalinPrefix) + s;
    }
    
private:
    vector<int> computeLPS(string& s) {
        int n = s.length();
        vector<int> lps(n, 0);
        int len = 0;
        
        for (int i = 1; i < n; ) {
            if (s[i] == s[len]) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
        
        return lps;
    }
};

int main() {
    Solution sol;
    cout << sol.shortestPalindrome("aacecaaa") << endl;  // aaacecaaa
    cout << sol.shortestPalindrome("abcd") << endl;       // dcbabcd
    return 0;
}`, 
      java: `public class ShortestPalindrome {
    public String shortestPalindrome(String s) {
        int n = s.length();
        if (n == 0) return s;
        
        // Reverse the string
        String rev = new StringBuilder(s).reverse().toString();
        
        // Use KMP to find longest prefix of s that matches suffix of rev
        String combined = s + "#" + rev;
        int[] lps = computeLPS(combined);
        
        // Length of longest palindromic prefix
        int longestPalinPrefix = lps[lps.length - 1];
        
        // Add the remaining suffix of rev to front
        return rev.substring(0, n - longestPalinPrefix) + s;
    }
    
    private int[] computeLPS(String s) {
        int n = s.length();
        int[] lps = new int[n];
        int len = 0;
        
        for (int i = 1; i < n; ) {
            if (s.charAt(i) == s.charAt(len)) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
        
        return lps;
    }
    
    public static void main(String[] args) {
        ShortestPalindrome sol = new ShortestPalindrome();
        System.out.println(sol.shortestPalindrome("aacecaaa"));  // aaacecaaa
        System.out.println(sol.shortestPalindrome("abcd"));       // dcbabcd
    }
}`, 
      python: `class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if not s:
            return s
        
        # Reverse the string
        rev = s[::-1]
        
        # Use KMP to find longest prefix of s that matches suffix of rev
        combined = s + "#" + rev
        lps = self.compute_lps(combined)
        
        # Length of longest palindromic prefix
        longest_palin_prefix = lps[-1]
        
        # Add the remaining suffix of rev to front
        return rev[:len(s) - longest_palin_prefix] + s
    
    def compute_lps(self, s: str) -> list:
        n = len(s)
        lps = [0] * n
        length = 0
        i = 1
        
        while i < n:
            if s[i] == s[length]:
                length += 1
                lps[i] = length
                i += 1
            elif length > 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
        
        return lps

# Test
sol = Solution()
print(sol.shortestPalindrome("aacecaaa"))  # aaacecaaa
print(sol.shortestPalindrome("abcd"))       # dcbabcd` 
    } 
  },

  99: { 
    id: 99, 
    title: 'Binary Tree Maximum Path Sum', 
    description: 'Find maximum path sum in binary tree (path can start and end at any node).', 
    difficulty: 'Hard' as const, 
    input: 'Binary tree', 
    output: 'Maximum path sum', 
    example: { input: '[-10,9,20,null,null,15,7]', output: '42' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
    int maxSum;
    
public:
    int maxPathSum(TreeNode* root) {
        maxSum = INT_MIN;
        maxGain(root);
        return maxSum;
    }
    
private:
    int maxGain(TreeNode* node) {
        if (!node) return 0;
        
        // Get max gain from left and right (ignore negative paths)
        int leftGain = max(0, maxGain(node->left));
        int rightGain = max(0, maxGain(node->right));
        
        // Path through current node as highest point
        int pathSum = node->val + leftGain + rightGain;
        maxSum = max(maxSum, pathSum);
        
        // Return max gain if continuing through this node
        return node->val + max(leftGain, rightGain);
    }
};

int main() {
    Solution sol;
    
    TreeNode* root = new TreeNode(-10);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);
    
    cout << "Maximum Path Sum: " << sol.maxPathSum(root) << endl;  // 42
    return 0;
}`, 
      java: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class BinaryTreeMaxPathSum {
    private int maxSum;
    
    public int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        maxGain(root);
        return maxSum;
    }
    
    private int maxGain(TreeNode node) {
        if (node == null) return 0;
        
        // Get max gain from left and right (ignore negative paths)
        int leftGain = Math.max(0, maxGain(node.left));
        int rightGain = Math.max(0, maxGain(node.right));
        
        // Path through current node as highest point
        int pathSum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, pathSum);
        
        // Return max gain if continuing through this node
        return node.val + Math.max(leftGain, rightGain);
    }
    
    public static void main(String[] args) {
        BinaryTreeMaxPathSum sol = new BinaryTreeMaxPathSum();
        
        TreeNode root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        System.out.println("Maximum Path Sum: " + sol.maxPathSum(root));  // 42
    }
}`, 
      python: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.max_sum = float('-inf')
        
        def max_gain(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            
            # Get max gain from left and right (ignore negative paths)
            left_gain = max(0, max_gain(node.left))
            right_gain = max(0, max_gain(node.right))
            
            # Path through current node as highest point
            path_sum = node.val + left_gain + right_gain
            self.max_sum = max(self.max_sum, path_sum)
            
            # Return max gain if continuing through this node
            return node.val + max(left_gain, right_gain)
        
        max_gain(root)
        return self.max_sum

# Test
sol = Solution()
root = TreeNode(-10)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

print(f"Maximum Path Sum: {sol.maxPathSum(root)}")  # 42` 
    } 
  },

  100: { 
    id: 100, 
    title: 'Alien Dictionary', 
    description: 'Given sorted words from alien language, derive character order using topological sort.', 
    difficulty: 'Hard' as const, 
    input: 'List of sorted words', 
    output: 'Character order string', 
    example: { input: '["wrt","wrf","er","ett","rftt"]', output: '"wertf"' }, 
    solutions: { 
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

class Solution {
public:
    string alienOrder(vector<string>& words) {
        unordered_map<char, unordered_set<char>> graph;
        unordered_map<char, int> inDegree;
        
        // Initialize all characters
        for (string& word : words) {
            for (char c : word) {
                if (inDegree.find(c) == inDegree.end()) {
                    inDegree[c] = 0;
                }
            }
        }
        
        // Build graph from adjacent words
        for (int i = 0; i < words.size() - 1; i++) {
            string& w1 = words[i];
            string& w2 = words[i + 1];
            
            // Check for invalid case: ["abc", "ab"]
            if (w1.length() > w2.length() && w1.substr(0, w2.length()) == w2) {
                return "";
            }
            
            // Find first different character
            for (int j = 0; j < min(w1.length(), w2.length()); j++) {
                if (w1[j] != w2[j]) {
                    if (graph[w1[j]].find(w2[j]) == graph[w1[j]].end()) {
                        graph[w1[j]].insert(w2[j]);
                        inDegree[w2[j]]++;
                    }
                    break;
                }
            }
        }
        
        // Topological sort using BFS (Kahn's algorithm)
        queue<char> q;
        for (auto& [c, degree] : inDegree) {
            if (degree == 0) q.push(c);
        }
        
        string result;
        while (!q.empty()) {
            char c = q.front();
            q.pop();
            result += c;
            
            for (char next : graph[c]) {
                if (--inDegree[next] == 0) {
                    q.push(next);
                }
            }
        }
        
        // Check if all characters are included (no cycle)
        return result.length() == inDegree.size() ? result : "";
    }
};

int main() {
    Solution sol;
    vector<string> words = {"wrt","wrf","er","ett","rftt"};
    cout << "Alien Order: " << sol.alienOrder(words) << endl;  // wertf
    return 0;
}`, 
      java: `import java.util.*;

public class AlienDictionary {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> inDegree = new HashMap<>();
        
        // Initialize all characters
        for (String word : words) {
            for (char c : word.toCharArray()) {
                inDegree.putIfAbsent(c, 0);
            }
        }
        
        // Build graph from adjacent words
        for (int i = 0; i < words.length - 1; i++) {
            String w1 = words[i], w2 = words[i + 1];
            
            // Check for invalid case: ["abc", "ab"]
            if (w1.length() > w2.length() && w1.startsWith(w2)) {
                return "";
            }
            
            // Find first different character
            for (int j = 0; j < Math.min(w1.length(), w2.length()); j++) {
                if (w1.charAt(j) != w2.charAt(j)) {
                    graph.putIfAbsent(w1.charAt(j), new HashSet<>());
                    if (!graph.get(w1.charAt(j)).contains(w2.charAt(j))) {
                        graph.get(w1.charAt(j)).add(w2.charAt(j));
                        inDegree.put(w2.charAt(j), inDegree.get(w2.charAt(j)) + 1);
                    }
                    break;
                }
            }
        }
        
        // Topological sort using BFS (Kahn's algorithm)
        Queue<Character> queue = new LinkedList<>();
        for (char c : inDegree.keySet()) {
            if (inDegree.get(c) == 0) queue.offer(c);
        }
        
        StringBuilder result = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            result.append(c);
            
            if (graph.containsKey(c)) {
                for (char next : graph.get(c)) {
                    inDegree.put(next, inDegree.get(next) - 1);
                    if (inDegree.get(next) == 0) {
                        queue.offer(next);
                    }
                }
            }
        }
        
        // Check if all characters are included (no cycle)
        return result.length() == inDegree.size() ? result.toString() : "";
    }
    
    public static void main(String[] args) {
        AlienDictionary sol = new AlienDictionary();
        String[] words = {"wrt","wrf","er","ett","rftt"};
        System.out.println("Alien Order: " + sol.alienOrder(words));  // wertf
    }
}`, 
      python: `from typing import List
from collections import defaultdict, deque

class Solution:
    def alienOrder(self, words: List[str]) -> str:
        # Build graph
        graph = defaultdict(set)
        in_degree = {c: 0 for word in words for c in word}
        
        # Build edges from adjacent words
        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i + 1]
            
            # Check for invalid case: ["abc", "ab"]
            if len(w1) > len(w2) and w1.startswith(w2):
                return ""
            
            # Find first different character
            for j in range(min(len(w1), len(w2))):
                if w1[j] != w2[j]:
                    if w2[j] not in graph[w1[j]]:
                        graph[w1[j]].add(w2[j])
                        in_degree[w2[j]] += 1
                    break
        
        # Topological sort using BFS (Kahn's algorithm)
        queue = deque([c for c in in_degree if in_degree[c] == 0])
        result = []
        
        while queue:
            c = queue.popleft()
            result.append(c)
            
            for next_char in graph[c]:
                in_degree[next_char] -= 1
                if in_degree[next_char] == 0:
                    queue.append(next_char)
        
        # Check if all characters are included (no cycle)
        return ''.join(result) if len(result) == len(in_degree) else ""

# Test
sol = Solution()
print(sol.alienOrder(["wrt","wrf","er","ett","rftt"]))  # wertf` 
    } 
  }
};

// Function to get problem details by ID, with fallback for missing solutions
export function getProblemById(id: number): CodingProblem | null {
  // First check if we have full details
  if (codingProblemsDetails[id]) {
    return codingProblemsDetails[id];
  }
  
  // Otherwise, create from the list with default solutions
  const listItem = codingProblemsList.find(p => p.id === id);
  if (!listItem) return null;
  
  return {
    id: listItem.id,
    title: listItem.title,
    description: listItem.description,
    difficulty: listItem.difficulty,
    input: 'Input as specified',
    output: 'Expected output',
    example: { input: 'Sample input', output: 'Sample output' },
    solutions: defaultSolution
  };
}
