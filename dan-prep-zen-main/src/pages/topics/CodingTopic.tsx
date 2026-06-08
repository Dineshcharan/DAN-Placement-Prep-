import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, LogOut, Code2, ExternalLink, Copy, Check } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { getProblemById } from '@/data/codingProblems';
import { toast } from 'sonner';

const defaultCompilerLinks = {
  cpp: 'https://www.programiz.com/cpp-programming/online-compiler/',
  java: 'https://www.programiz.com/java-programming/online-compiler/',
  python: 'https://www.programiz.com/python-programming/online-compiler/'
};

const codingProblems = {
  1: {
    id: 1,
    title: 'Second Maximum Element',
    description: 'Write a program to find the second largest element in an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Second maximum element',
    example: {
      input: '[5, 3, 9, 1, 7]',
      output: '7'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
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
    cout << "Enter number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int result = secondMax(arr);
    cout << "Second Maximum: " << result << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class SecondMax {
    public static int secondMax(int[] arr) {
        if (arr.length < 2) return -1;
        
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        
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
        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int result = secondMax(arr);
        System.out.println("Second Maximum: " + result);
        
        sc.close();
    }
}`,
      python: `def second_max(arr):
    if len(arr) < 2:
        return -1
    
    first = float('-inf')
    second = float('-inf')
    
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    
    return -1 if second == float('-inf') else second

# Input
n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter elements: ").split()))

result = second_max(arr)
print(f"Second Maximum: {result}")`
    }
  },
  2: {
    id: 2,
    title: 'Valid Anagrams',
    description: 'Check if two strings are anagrams of each other.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: 'True if anagrams, False otherwise',
    example: {
      input: '"listen", "silent"',
      output: 'True'
    },
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
    
    cout << "Enter first string: ";
    cin >> s1;
    cout << "Enter second string: ";
    cin >> s2;
    
    if (isAnagram(s1, s2)) {
        cout << "The strings are anagrams" << endl;
    } else {
        cout << "The strings are not anagrams" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class ValidAnagram {
    public static boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        
        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();
        
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        return Arrays.equals(arr1, arr2);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String s1 = sc.next();
        System.out.print("Enter second string: ");
        String s2 = sc.next();
        
        if (isAnagram(s1, s2)) {
            System.out.println("The strings are anagrams");
        } else {
            System.out.println("The strings are not anagrams");
        }
        
        sc.close();
    }
}`,
      python: `def is_anagram(s1, s2):
    if len(s1) != len(s2):
        return False
    
    return sorted(s1) == sorted(s2)

# Input
s1 = input("Enter first string: ")
s2 = input("Enter second string: ")

if is_anagram(s1, s2):
    print("The strings are anagrams")
else:
    print("The strings are not anagrams")`
    }
  },
  3: {
    id: 3,
    title: 'Bubble Sort',
    description: 'Implement the bubble sort algorithm to sort an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Sorted array',
    example: {
      input: '[64, 34, 25, 12, 22]',
      output: '[12, 22, 25, 34, 64]'
    },
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
    cout << "Enter number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    bubbleSort(arr);
    
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class BubbleSort {
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
        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        bubbleSort(arr);
        
        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Input
n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter elements: ").split()))

bubble_sort(arr)

print("Sorted array:", " ".join(map(str, arr)))`
    }
  },
  4: {
    id: 4,
    title: 'Linear Search',
    description: 'Search for an element in an array using linear search.',
    difficulty: 'Easy',
    input: 'Array and target element',
    output: 'Index of element or -1 if not found',
    example: {
      input: 'arr = [10, 20, 30, 40], target = 30',
      output: '2'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    int n, target;
    cout << "Enter number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter target element: ";
    cin >> target;
    
    int index = linearSearch(arr, target);
    
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter target element: ");
        int target = sc.nextInt();
        
        int index = linearSearch(arr, target);
        
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
        
        sc.close();
    }
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Input
n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter elements: ").split()))
target = int(input("Enter target element: "))

index = linear_search(arr, target)

if index != -1:
    print(f"Element found at index: {index}")
else:
    print("Element not found")`
    }
  },
  5: {
    id: 5,
    title: 'Binary Search',
    description: 'Search for an element in a sorted array using binary search.',
    difficulty: 'Medium',
    input: 'Sorted array and target element',
    output: 'Index of element or -1 if not found',
    example: {
      input: 'arr = [10, 20, 30, 40, 50], target = 30',
      output: '2'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int n, target;
    cout << "Enter number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter sorted elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter target element: ";
    cin >> target;
    
    int index = binarySearch(arr, target);
    
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter sorted elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter target element: ");
        int target = sc.nextInt();
        
        int index = binarySearch(arr, target);
        
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
        
        sc.close();
    }
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Input
n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter sorted elements: ").split()))
target = int(input("Enter target element: "))

index = binary_search(arr, target)

if index != -1:
    print(f"Element found at index: {index}")
else:
    print("Element not found")`
    }
  },
  6: {
    id: 6,
    title: 'Reverse of Array',
    description: 'Reverse the elements of an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Reversed array',
    example: {
      input: '[1, 2, 3, 4, 5]',
      output: '[5, 4, 3, 2, 1]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
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
    cout << "Enter number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    reverseArray(arr);
    
    cout << "Reversed array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ReverseArray {
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
        
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        reverseArray(arr);
        
        System.out.print("Reversed array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def reverse_array(arr):
    left, right = 0, len(arr) - 1
    
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# Input
n = int(input("Enter number of elements: "))
arr = list(map(int, input("Enter elements: ").split()))

reverse_array(arr)

print("Reversed array:", " ".join(map(str, arr)))`
    }
  },
  7: {
    id: 7,
    title: 'Armstrong Number',
    description: 'Check if a number is an Armstrong number (sum of cubes of digits equals the number).',
    difficulty: 'Easy',
    input: 'Integer number',
    output: 'True if Armstrong, False otherwise',
    example: {
      input: '153',
      output: 'True (1³ + 5³ + 3³ = 153)'
    },
    solutions: {
      cpp: `#include <iostream>
#include <cmath>
using namespace std;

bool isArmstrong(int num) {
    int original = num;
    int sum = 0;
    int digits = to_string(num).length();
    
    while (num > 0) {
        int digit = num % 10;
        sum += pow(digit, digits);
        num /= 10;
    }
    
    return sum == original;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    if (isArmstrong(num)) {
        cout << num << " is an Armstrong number" << endl;
    } else {
        cout << num << " is not an Armstrong number" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class ArmstrongNumber {
    public static boolean isArmstrong(int num) {
        int original = num;
        int sum = 0;
        int digits = String.valueOf(num).length();
        
        while (num > 0) {
            int digit = num % 10;
            sum += Math.pow(digit, digits);
            num /= 10;
        }
        
        return sum == original;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        if (isArmstrong(num)) {
            System.out.println(num + " is an Armstrong number");
        } else {
            System.out.println(num + " is not an Armstrong number");
        }
        
        sc.close();
    }
}`,
      python: `def is_armstrong(num):
    original = num
    digits = len(str(num))
    sum_val = 0
    
    while num > 0:
        digit = num % 10
        sum_val += digit ** digits
        num //= 10
    
    return sum_val == original

# Input
num = int(input("Enter a number: "))

if is_armstrong(num):
    print(f"{num} is an Armstrong number")
else:
    print(f"{num} is not an Armstrong number")`
    }
  },
  8: {
    id: 8,
    title: 'Palindrome',
    description: 'Check if a string or number is a palindrome.',
    difficulty: 'Easy',
    input: 'String or number',
    output: 'True if palindrome, False otherwise',
    example: {
      input: 'racecar',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(string str) {
    string reversed = str;
    reverse(reversed.begin(), reversed.end());
    return str == reversed;
}

int main() {
    string str;
    cout << "Enter a string: ";
    cin >> str;
    
    if (isPalindrome(str)) {
        cout << str << " is a palindrome" << endl;
    } else {
        cout << str << " is not a palindrome" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class Palindrome {
    public static boolean isPalindrome(String str) {
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String str = sc.next();
        
        if (isPalindrome(str)) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }
        
        sc.close();
    }
}`,
      python: `def is_palindrome(s):
    return s == s[::-1]

# Input
s = input("Enter a string: ")

if is_palindrome(s):
    print(f"{s} is a palindrome")
else:
    print(f"{s} is not a palindrome")`
    }
  },
  9: {
    id: 9,
    title: 'Reverse of a String',
    description: 'Reverse the characters in a string.',
    difficulty: 'Easy',
    input: 'String',
    output: 'Reversed string',
    example: {
      input: 'hello',
      output: 'olleh'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseString(string str) {
    reverse(str.begin(), str.end());
    return str;
}

int main() {
    string str;
    cout << "Enter a string: ";
    cin >> str;
    
    string reversed = reverseString(str);
    cout << "Reversed string: " << reversed << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ReverseString {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String str = sc.next();
        
        String reversed = reverseString(str);
        System.out.println("Reversed string: " + reversed);
        
        sc.close();
    }
}`,
      python: `def reverse_string(s):
    return s[::-1]

# Input
s = input("Enter a string: ")
reversed_s = reverse_string(s)
print(f"Reversed string: {reversed_s}")`
    }
  },
  10: {
    id: 10,
    title: 'Transpose Matrix',
    description: 'Find the transpose of a matrix (swap rows and columns).',
    difficulty: 'Medium',
    input: 'Matrix (2D array)',
    output: 'Transposed matrix',
    example: {
      input: '[[1,2,3], [4,5,6]]',
      output: '[[1,4], [2,5], [3,6]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> transpose(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    
    vector<vector<int>> result(cols, vector<int>(rows));
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
}

int main() {
    int rows, cols;
    cout << "Enter number of rows: ";
    cin >> rows;
    cout << "Enter number of columns: ";
    cin >> cols;
    
    vector<vector<int>> matrix(rows, vector<int>(cols));
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    
    vector<vector<int>> result = transpose(matrix);
    
    cout << "Transposed matrix:" << endl;
    for (auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class TransposeMatrix {
    public static int[][] transpose(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        int[][] result = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of rows: ");
        int rows = sc.nextInt();
        System.out.print("Enter number of columns: ");
        int cols = sc.nextInt();
        
        int[][] matrix = new int[rows][cols];
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        
        int[][] result = transpose(matrix);
        
        System.out.println("Transposed matrix:");
        for (int[] row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
        
        sc.close();
    }
}`,
      python: `def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    result = [[0] * rows for _ in range(cols)]
    
    for i in range(rows):
        for j in range(cols):
            result[j][i] = matrix[i][j]
    
    return result

# Input
rows = int(input("Enter number of rows: "))
cols = int(input("Enter number of columns: "))

matrix = []
print("Enter matrix elements:")
for i in range(rows):
    row = list(map(int, input().split()))
    matrix.append(row)

result = transpose(matrix)

print("Transposed matrix:")
for row in result:
    print(" ".join(map(str, row)))`
    }
  },
  11: {
    id: 11,
    title: 'Count Vowels',
    description: 'Write a program to count the number of vowels in a string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Number of vowels',
    example: {
      input: '"Hello World"',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int countVowels(string str) {
    int count = 0;
    for (char c : str) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    return count;
}

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    
    cout << "Number of vowels: " << countVowels(str) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class CountVowels {
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();
        
        for (char c : str.toCharArray()) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        
        System.out.println("Number of vowels: " + countVowels(str));
        sc.close();
    }
}`,
      python: `def count_vowels(s):
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)

# Input
s = input("Enter a string: ")
print(f"Number of vowels: {count_vowels(s)}")`
    }
  },
  12: {
    id: 12,
    title: 'Factorial',
    description: 'Write a program to calculate the factorial of a number.',
    difficulty: 'Easy',
    input: 'A positive integer n',
    output: 'Factorial of n',
    example: {
      input: '5',
      output: '120'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    cout << "Factorial: " << factorial(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class Factorial {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println("Factorial: " + factorial(n));
        sc.close();
    }
}`,
      python: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Input
n = int(input("Enter a number: "))
print(f"Factorial: {factorial(n)}")`
    }
  },
  13: {
    id: 13,
    title: 'Fibonacci Series',
    description: 'Generate Fibonacci series up to n terms.',
    difficulty: 'Easy',
    input: 'Number of terms n',
    output: 'Fibonacci series',
    example: {
      input: '7',
      output: '0 1 1 2 3 5 8'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

void fibonacci(int n) {
    int a = 0, b = 1, next;
    
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
}

int main() {
    int n;
    cout << "Enter number of terms: ";
    cin >> n;
    
    fibonacci(n);
    return 0;
}`,
      java: `import java.util.Scanner;

public class Fibonacci {
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();
        
        fibonacci(n);
        sc.close();
    }
}`,
      python: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print()

# Input
n = int(input("Enter number of terms: "))
fibonacci(n)`
    }
  },
  14: {
    id: 14,
    title: 'Prime Number',
    description: 'Check if a number is prime.',
    difficulty: 'Easy',
    input: 'A positive integer',
    output: 'True if prime, False otherwise',
    example: {
      input: '17',
      output: 'True'
    },
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
    cout << "Enter a number: ";
    cin >> n;
    
    cout << (isPrime(n) ? "Prime" : "Not Prime") << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class PrimeNumber {
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
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println(isPrime(n) ? "Prime" : "Not Prime");
        sc.close();
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

# Input
n = int(input("Enter a number: "))
print("Prime" if is_prime(n) else "Not Prime")`
    }
  },
  15: {
    id: 15,
    title: 'Swap Two Numbers',
    description: 'Swap two numbers without using a third variable.',
    difficulty: 'Easy',
    input: 'Two numbers a and b',
    output: 'Swapped values',
    example: {
      input: 'a=5, b=10',
      output: 'a=10, b=5'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << "Before swap: a = " << a << ", b = " << b << endl;
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    cout << "After swap: a = " << a << ", b = " << b << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class SwapNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        System.out.println("Before swap: a = " + a + ", b = " + b);
        
        a = a + b;
        b = a - b;
        a = a - b;
        
        System.out.println("After swap: a = " + a + ", b = " + b);
        sc.close();
    }
}`,
      python: `# Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(f"Before swap: a = {a}, b = {b}")

a, b = b, a

print(f"After swap: a = {a}, b = {b}")`
    }
  },
  16: {
    id: 16,
    title: 'Even or Odd',
    description: 'Check if a number is even or odd.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Even or Odd',
    example: {
      input: '7',
      output: 'Odd'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    if (n % 2 == 0)
        cout << "Even" << endl;
    else
        cout << "Odd" << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println(n % 2 == 0 ? "Even" : "Odd");
        sc.close();
    }
}`,
      python: `n = int(input("Enter a number: "))
print("Even" if n % 2 == 0 else "Odd")`
    }
  },
  17: {
    id: 17,
    title: 'String Length',
    description: 'Find length of a string without using built-in functions.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Length of string',
    example: {
      input: '"Hello"',
      output: '5'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int stringLength(string str) {
    int length = 0;
    for (char c : str) {
        length++;
    }
    return length;
}

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    
    cout << "Length: " << stringLength(str) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class StringLength {
    public static int stringLength(String str) {
        int length = 0;
        for (char c : str.toCharArray()) {
            length++;
        }
        return length;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        
        System.out.println("Length: " + stringLength(str));
        sc.close();
    }
}`,
      python: `def string_length(s):
    count = 0
    for char in s:
        count += 1
    return count

# Input
s = input("Enter a string: ")
print(f"Length: {string_length(s)}")`
    }
  },
  18: {
    id: 18,
    title: 'Array Rotation',
    description: 'Rotate an array by k positions to the right.',
    difficulty: 'Easy',
    input: 'Array and rotation count k',
    output: 'Rotated array',
    example: {
      input: '[1,2,3,4,5], k=2',
      output: '[4,5,1,2,3]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void rotate(vector<int>& arr, int k) {
    int n = arr.size();
    k = k % n;
    
    reverse(arr.begin(), arr.end());
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
}

int main() {
    int n, k;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter rotation count: ";
    cin >> k;
    
    rotate(arr, k);
    
    cout << "Rotated array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ArrayRotation {
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    public static void rotate(int[] arr, int k) {
        int n = arr.length;
        k = k % n;
        
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter rotation count: ");
        int k = sc.nextInt();
        
        rotate(arr, k);
        
        System.out.print("Rotated array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def rotate(arr, k):
    n = len(arr)
    k = k % n
    return arr[-k:] + arr[:-k]

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))
k = int(input("Enter rotation count: "))

result = rotate(arr, k)
print("Rotated array:", " ".join(map(str, result)))`
    }
  },
  19: {
    id: 19,
    title: 'Remove Duplicates',
    description: 'Remove duplicate elements from an array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Array without duplicates',
    example: {
      input: '[1,2,2,3,4,4,5]',
      output: '[1,2,3,4,5]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <set>
using namespace std;

vector<int> removeDuplicates(vector<int>& arr) {
    set<int> unique(arr.begin(), arr.end());
    return vector<int>(unique.begin(), unique.end());
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    vector<int> result = removeDuplicates(arr);
    
    cout << "Array without duplicates: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class RemoveDuplicates {
    public static List<Integer> removeDuplicates(int[] arr) {
        Set<Integer> unique = new LinkedHashSet<>();
        for (int num : arr) {
            unique.add(num);
        }
        return new ArrayList<>(unique);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        List<Integer> result = removeDuplicates(arr);
        
        System.out.print("Array without duplicates: ");
        for (int num : result) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def remove_duplicates(arr):
    return list(dict.fromkeys(arr))

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

result = remove_duplicates(arr)
print("Array without duplicates:", " ".join(map(str, result)))`
    }
  },
  20: {
    id: 20,
    title: 'Merge Two Arrays',
    description: 'Merge two sorted arrays into one sorted array.',
    difficulty: 'Easy',
    input: 'Two sorted arrays',
    output: 'Merged sorted array',
    example: {
      input: '[1,3,5], [2,4,6]',
      output: '[1,2,3,4,5,6]'
    },
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
    
    while (i < arr1.size()) {
        result.push_back(arr1[i++]);
    }
    
    while (j < arr2.size()) {
        result.push_back(arr2[j++]);
    }
    
    return result;
}

int main() {
    int n1, n2;
    cout << "Enter size of first array: ";
    cin >> n1;
    
    vector<int> arr1(n1);
    cout << "Enter elements: ";
    for (int i = 0; i < n1; i++) {
        cin >> arr1[i];
    }
    
    cout << "Enter size of second array: ";
    cin >> n2;
    
    vector<int> arr2(n2);
    cout << "Enter elements: ";
    for (int i = 0; i < n2; i++) {
        cin >> arr2[i];
    }
    
    vector<int> result = mergeSorted(arr1, arr2);
    
    cout << "Merged array: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class MergeArrays {
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
        
        while (i < arr1.length) {
            result[k++] = arr1[i++];
        }
        
        while (j < arr2.length) {
            result[k++] = arr2[j++];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter size of first array: ");
        int n1 = sc.nextInt();
        
        int[] arr1 = new int[n1];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n1; i++) {
            arr1[i] = sc.nextInt();
        }
        
        System.out.print("Enter size of second array: ");
        int n2 = sc.nextInt();
        
        int[] arr2 = new int[n2];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n2; i++) {
            arr2[i] = sc.nextInt();
        }
        
        int[] result = mergeSorted(arr1, arr2);
        
        System.out.print("Merged array: ");
        for (int num : result) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def merge_sorted(arr1, arr2):
    result = []
    i, j = 0, 0
    
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

# Input
n1 = int(input("Enter size of first array: "))
arr1 = list(map(int, input("Enter elements: ").split()))

n2 = int(input("Enter size of second array: "))
arr2 = list(map(int, input("Enter elements: ").split()))

result = merge_sorted(arr1, arr2)
print("Merged array:", " ".join(map(str, result)))`
    }
  },
  21: {
    id: 21,
    title: 'Find Missing Number',
    description: 'Find the missing number in array from 1 to n.',
    difficulty: 'Easy',
    input: 'Array of n-1 integers from 1 to n',
    output: 'Missing number',
    example: {
      input: '[1,2,4,5,6]',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMissing(vector<int>& arr, int n) {
    int total = n * (n + 1) / 2;
    int sum = 0;
    
    for (int num : arr) {
        sum += num;
    }
    
    return total - sum;
}

int main() {
    int n;
    cout << "Enter n: ";
    cin >> n;
    
    vector<int> arr(n - 1);
    cout << "Enter " << n - 1 << " elements: ";
    for (int i = 0; i < n - 1; i++) {
        cin >> arr[i];
    }
    
    cout << "Missing number: " << findMissing(arr, n) << endl;
    return 0;
}`,
      java: `import java.util.*;

public class MissingNumber {
    public static int findMissing(int[] arr, int n) {
        int total = n * (n + 1) / 2;
        int sum = 0;
        
        for (int num : arr) {
            sum += num;
        }
        
        return total - sum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter n: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n - 1];
        System.out.print("Enter " + (n - 1) + " elements: ");
        for (int i = 0; i < n - 1; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println("Missing number: " + findMissing(arr, n));
        sc.close();
    }
}`,
      python: `def find_missing(arr, n):
    total = n * (n + 1) // 2
    return total - sum(arr)

# Input
n = int(input("Enter n: "))
arr = list(map(int, input(f"Enter {n-1} elements: ").split()))

print(f"Missing number: {find_missing(arr, n)}")`
    }
  },
  22: {
    id: 22,
    title: 'GCD of Two Numbers',
    description: 'Find greatest common divisor of two numbers.',
    difficulty: 'Easy',
    input: 'Two positive integers',
    output: 'GCD of the numbers',
    example: {
      input: '12, 18',
      output: '6'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << "GCD: " << gcd(a, b) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class GCD {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        System.out.println("GCD: " + gcd(a, b));
        sc.close();
    }
}`,
      python: `def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

# Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(f"GCD: {gcd(a, b)}")`
    }
  },
  23: {
    id: 23,
    title: 'LCM of Two Numbers',
    description: 'Find least common multiple of two numbers.',
    difficulty: 'Easy',
    input: 'Two positive integers',
    output: 'LCM of the numbers',
    example: {
      input: '12, 18',
      output: '36'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << "LCM: " << lcm(a, b) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class LCM {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        System.out.println("LCM: " + lcm(a, b));
        sc.close();
    }
}`,
      python: `def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

def lcm(a, b):
    return (a * b) // gcd(a, b)

# Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(f"LCM: {lcm(a, b)}")`
    }
  },
  24: {
    id: 24,
    title: 'Power of Number',
    description: 'Calculate x raised to power n.',
    difficulty: 'Easy',
    input: 'Base x and exponent n',
    output: 'x^n',
    example: {
      input: 'x=2, n=5',
      output: '32'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

long long power(int x, int n) {
    if (n == 0) return 1;
    
    long long half = power(x, n / 2);
    
    if (n % 2 == 0) {
        return half * half;
    } else {
        return x * half * half;
    }
}

int main() {
    int x, n;
    cout << "Enter base: ";
    cin >> x;
    cout << "Enter exponent: ";
    cin >> n;
    
    cout << "Result: " << power(x, n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class Power {
    public static long power(int x, int n) {
        if (n == 0) return 1;
        
        long half = power(x, n / 2);
        
        if (n % 2 == 0) {
            return half * half;
        } else {
            return x * half * half;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter base: ");
        int x = sc.nextInt();
        System.out.print("Enter exponent: ");
        int n = sc.nextInt();
        
        System.out.println("Result: " + power(x, n));
        sc.close();
    }
}`,
      python: `def power(x, n):
    if n == 0:
        return 1
    
    half = power(x, n // 2)
    
    if n % 2 == 0:
        return half * half
    else:
        return x * half * half

# Input
x = int(input("Enter base: "))
n = int(input("Enter exponent: "))

print(f"Result: {power(x, n)}")`
    }
  },
  25: {
    id: 25,
    title: 'Count Digits',
    description: 'Count number of digits in an integer.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Number of digits',
    example: {
      input: '12345',
      output: '5'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int countDigits(int n) {
    if (n == 0) return 1;
    
    int count = 0;
    n = abs(n);
    
    while (n > 0) {
        count++;
        n /= 10;
    }
    
    return count;
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    cout << "Number of digits: " << countDigits(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class CountDigits {
    public static int countDigits(int n) {
        if (n == 0) return 1;
        
        int count = 0;
        n = Math.abs(n);
        
        while (n > 0) {
            count++;
            n /= 10;
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println("Number of digits: " + countDigits(n));
        sc.close();
    }
}`,
      python: `def count_digits(n):
    if n == 0:
        return 1
    
    return len(str(abs(n)))

# Input
n = int(input("Enter a number: "))
print(f"Number of digits: {count_digits(n)}")`
    }
  },
  26: {
    id: 26,
    title: 'Reverse Number',
    description: 'Reverse the digits of a number.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Reversed number',
    example: {
      input: '12345',
      output: '54321'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int reverseNumber(int n) {
    int reversed = 0;
    bool isNegative = n < 0;
    n = abs(n);
    
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    
    return isNegative ? -reversed : reversed;
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    cout << "Reversed: " << reverseNumber(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class ReverseNumber {
    public static int reverseNumber(int n) {
        int reversed = 0;
        boolean isNegative = n < 0;
        n = Math.abs(n);
        
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        
        return isNegative ? -reversed : reversed;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println("Reversed: " + reverseNumber(n));
        sc.close();
    }
}`,
      python: `def reverse_number(n):
    is_negative = n < 0
    n = abs(n)
    
    reversed_num = int(str(n)[::-1])
    
    return -reversed_num if is_negative else reversed_num

# Input
n = int(input("Enter a number: "))
print(f"Reversed: {reverse_number(n)}")`
    }
  },
  27: {
    id: 27,
    title: 'Sum of Digits',
    description: 'Calculate sum of digits of a number.',
    difficulty: 'Easy',
    input: 'An integer',
    output: 'Sum of its digits',
    example: {
      input: '12345',
      output: '15'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int sumOfDigits(int n) {
    int sum = 0;
    n = abs(n);
    
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    
    return sum;
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    cout << "Sum of digits: " << sumOfDigits(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class SumOfDigits {
    public static int sumOfDigits(int n) {
        int sum = 0;
        n = Math.abs(n);
        
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        
        return sum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        System.out.println("Sum of digits: " + sumOfDigits(n));
        sc.close();
    }
}`,
      python: `def sum_of_digits(n):
    return sum(int(digit) for digit in str(abs(n)))

# Input
n = int(input("Enter a number: "))
print(f"Sum of digits: {sum_of_digits(n)}")`
    }
  },
  28: {
    id: 28,
    title: 'Leap Year',
    description: 'Check if a year is a leap year.',
    difficulty: 'Easy',
    input: 'Year',
    output: 'True if leap year, False otherwise',
    example: {
      input: '2024',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

bool isLeapYear(int year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}

int main() {
    int year;
    cout << "Enter year: ";
    cin >> year;
    
    cout << (isLeapYear(year) ? "Leap Year" : "Not a Leap Year") << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class LeapYear {
    public static boolean isLeapYear(int year) {
        if (year % 400 == 0) return true;
        if (year % 100 == 0) return false;
        if (year % 4 == 0) return true;
        return false;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter year: ");
        int year = sc.nextInt();
        
        System.out.println(isLeapYear(year) ? "Leap Year" : "Not a Leap Year");
        sc.close();
    }
}`,
      python: `def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

# Input
year = int(input("Enter year: "))
print("Leap Year" if is_leap_year(year) else "Not a Leap Year")`
    }
  },
  29: {
    id: 29,
    title: 'ASCII Value',
    description: 'Find ASCII value of a character.',
    difficulty: 'Easy',
    input: 'A character',
    output: 'ASCII value',
    example: {
      input: "'A'",
      output: '65'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    
    cout << "ASCII value of " << ch << " is " << (int)ch << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class ASCIIValue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a character: ");
        char ch = sc.next().charAt(0);
        
        System.out.println("ASCII value of " + ch + " is " + (int)ch);
        sc.close();
    }
}`,
      python: `# Input
ch = input("Enter a character: ")[0]

print(f"ASCII value of {ch} is {ord(ch)}")`
    }
  },
  30: {
    id: 30,
    title: 'Character Case',
    description: 'Convert character to uppercase/lowercase.',
    difficulty: 'Easy',
    input: 'A character',
    output: 'Converted character',
    example: {
      input: "'a'",
      output: "'A'"
    },
    solutions: {
      cpp: `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    
    if (islower(ch)) {
        cout << "Uppercase: " << (char)toupper(ch) << endl;
    } else if (isupper(ch)) {
        cout << "Lowercase: " << (char)tolower(ch) << endl;
    } else {
        cout << "Not a letter" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class CharacterCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a character: ");
        char ch = sc.next().charAt(0);
        
        if (Character.isLowerCase(ch)) {
            System.out.println("Uppercase: " + Character.toUpperCase(ch));
        } else if (Character.isUpperCase(ch)) {
            System.out.println("Lowercase: " + Character.toLowerCase(ch));
        } else {
            System.out.println("Not a letter");
        }
        
        sc.close();
    }
}`,
      python: `# Input
ch = input("Enter a character: ")[0]

if ch.islower():
    print(f"Uppercase: {ch.upper()}")
elif ch.isupper():
    print(f"Lowercase: {ch.lower()}")
else:
    print("Not a letter")`
    }
  },
  31: {
    id: 31,
    title: 'String Concatenation',
    description: 'Concatenate two strings without using built-in functions.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: 'Concatenated string',
    example: {
      input: '"Hello", " World"',
      output: '"Hello World"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

string concatenate(string s1, string s2) {
    string result = "";
    
    for (char c : s1) {
        result += c;
    }
    
    for (char c : s2) {
        result += c;
    }
    
    return result;
}

int main() {
    string s1, s2;
    cout << "Enter first string: ";
    getline(cin, s1);
    cout << "Enter second string: ";
    getline(cin, s2);
    
    cout << "Concatenated: " << concatenate(s1, s2) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class StringConcatenation {
    public static String concatenate(String s1, String s2) {
        StringBuilder result = new StringBuilder();
        
        for (char c : s1.toCharArray()) {
            result.append(c);
        }
        
        for (char c : s2.toCharArray()) {
            result.append(c);
        }
        
        return result.toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String s1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String s2 = sc.nextLine();
        
        System.out.println("Concatenated: " + concatenate(s1, s2));
        sc.close();
    }
}`,
      python: `def concatenate(s1, s2):
    result = ""
    for char in s1:
        result += char
    for char in s2:
        result += char
    return result

# Input
s1 = input("Enter first string: ")
s2 = input("Enter second string: ")

print(f"Concatenated: {concatenate(s1, s2)}")`
    }
  },
  32: {
    id: 32,
    title: 'String Comparison',
    description: 'Compare two strings lexicographically.',
    difficulty: 'Easy',
    input: 'Two strings',
    output: 'Comparison result',
    example: {
      input: '"apple", "banana"',
      output: '-1'
    },
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
    cout << "Enter first string: ";
    cin >> s1;
    cout << "Enter second string: ";
    cin >> s2;
    
    int result = compareStrings(s1, s2);
    
    if (result < 0) {
        cout << s1 << " is less than " << s2 << endl;
    } else if (result > 0) {
        cout << s1 << " is greater than " << s2 << endl;
    } else {
        cout << s1 << " is equal to " << s2 << endl;
    }
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class StringComparison {
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
        
        System.out.print("Enter first string: ");
        String s1 = sc.next();
        System.out.print("Enter second string: ");
        String s2 = sc.next();
        
        int result = compareStrings(s1, s2);
        
        if (result < 0) {
            System.out.println(s1 + " is less than " + s2);
        } else if (result > 0) {
            System.out.println(s1 + " is greater than " + s2);
        } else {
            System.out.println(s1 + " is equal to " + s2);
        }
        
        sc.close();
    }
}`,
      python: `def compare_strings(s1, s2):
    if s1 < s2:
        return -1
    elif s1 > s2:
        return 1
    else:
        return 0

# Input
s1 = input("Enter first string: ")
s2 = input("Enter second string: ")

result = compare_strings(s1, s2)

if result < 0:
    print(f"{s1} is less than {s2}")
elif result > 0:
    print(f"{s1} is greater than {s2}")
else:
    print(f"{s1} is equal to {s2}")`
    }
  },
  33: {
    id: 33,
    title: 'Count Words',
    description: 'Count number of words in a string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'Number of words',
    example: {
      input: '"Hello World Programming"',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int countWords(string s) {
    int count = 0;
    bool inWord = false;
    
    for (char c : s) {
        if (c == ' ' || c == '\t' || c == '\n') {
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
    cout << "Enter a string: ";
    getline(cin, s);
    
    cout << "Number of words: " << countWords(s) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class CountWords {
    public static int countWords(String s) {
        int count = 0;
        boolean inWord = false;
        
        for (char c : s.toCharArray()) {
            if (c == ' ' || c == '\t' || c == '\n') {
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
        
        System.out.print("Enter a string: ");
        String s = sc.nextLine();
        
        System.out.println("Number of words: " + countWords(s));
        sc.close();
    }
}`,
      python: `def count_words(s):
    return len(s.split())

# Input
s = input("Enter a string: ")
print(f"Number of words: {count_words(s)}")`
    }
  },
  34: {
    id: 34,
    title: 'First Non-Repeating Character',
    description: 'Find first non-repeating character in a string.',
    difficulty: 'Easy',
    input: 'A string',
    output: 'First non-repeating character',
    example: {
      input: '"programming"',
      output: "'p'"
    },
    solutions: {
      cpp: `#include <iostream>
#include <unordered_map>
using namespace std;

char firstNonRepeating(string s) {
    unordered_map<char, int> freq;
    
    for (char c : s) {
        freq[c]++;
    }
    
    for (char c : s) {
        if (freq[c] == 1) {
            return c;
        }
    }
    
    return '\0';
}

int main() {
    string s;
    cout << "Enter a string: ";
    cin >> s;
    
    char result = firstNonRepeating(s);
    
    if (result != '\0') {
        cout << "First non-repeating character: " << result << endl;
    } else {
        cout << "No non-repeating character found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class FirstNonRepeating {
    public static char firstNonRepeating(String s) {
        Map<Character, Integer> freq = new LinkedHashMap<>();
        
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (char c : s.toCharArray()) {
            if (freq.get(c) == 1) {
                return c;
            }
        }
        
        return '\0';
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String s = sc.next();
        
        char result = firstNonRepeating(s);
        
        if (result != '\0') {
            System.out.println("First non-repeating character: " + result);
        } else {
            System.out.println("No non-repeating character found");
        }
        
        sc.close();
    }
}`,
      python: `def first_non_repeating(s):
    freq = {}
    
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    
    for char in s:
        if freq[char] == 1:
            return char
    
    return None

# Input
s = input("Enter a string: ")

result = first_non_repeating(s)

if result:
    print(f"First non-repeating character: {result}")
else:
    print("No non-repeating character found")`
    }
  },
  35: {
    id: 35,
    title: 'Number Pattern',
    description: 'Print number patterns.',
    difficulty: 'Easy',
    input: 'Number of rows',
    output: 'Number pattern',
    example: {
      input: '4',
      output: '1\\n12\\n123\\n1234'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

void printPattern(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        cout << endl;
    }
}

int main() {
    int n;
    cout << "Enter number of rows: ";
    cin >> n;
    
    printPattern(n);
    return 0;
}`,
      java: `import java.util.Scanner;

public class NumberPattern {
    public static void printPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        
        printPattern(n);
        sc.close();
    }
}`,
      python: `def print_pattern(n):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(j, end="")
        print()

# Input
n = int(input("Enter number of rows: "))
print_pattern(n)`
    }
  },
  36: {
    id: 36,
    title: 'Star Pattern',
    description: 'Print star patterns.',
    difficulty: 'Easy',
    input: 'Number of rows',
    output: 'Star pattern',
    example: {
      input: '4',
      output: '*\\n**\\n***\\n****'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

void printPattern(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

int main() {
    int n;
    cout << "Enter number of rows: ";
    cin >> n;
    
    printPattern(n);
    return 0;
}`,
      java: `import java.util.Scanner;

public class StarPattern {
    public static void printPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        
        printPattern(n);
        sc.close();
    }
}`,
      python: `def print_pattern(n):
    for i in range(1, n + 1):
        print("*" * i)

# Input
n = int(input("Enter number of rows: "))
print_pattern(n)`
    }
  },
  37: {
    id: 37,
    title: 'Sum of N Numbers',
    description: 'Calculate sum of first n natural numbers.',
    difficulty: 'Easy',
    input: 'A positive integer n',
    output: 'Sum of 1 to n',
    example: {
      input: '10',
      output: '55'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int sumOfN(int n) {
    return n * (n + 1) / 2;
}

int main() {
    int n;
    cout << "Enter n: ";
    cin >> n;
    
    cout << "Sum: " << sumOfN(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class SumOfN {
    public static int sumOfN(int n) {
        return n * (n + 1) / 2;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter n: ");
        int n = sc.nextInt();
        
        System.out.println("Sum: " + sumOfN(n));
        sc.close();
    }
}`,
      python: `def sum_of_n(n):
    return n * (n + 1) // 2

# Input
n = int(input("Enter n: "))
print(f"Sum: {sum_of_n(n)}")`
    }
  },
  38: {
    id: 38,
    title: 'Product of Array',
    description: 'Calculate product of all elements in array.',
    difficulty: 'Easy',
    input: 'Array of integers',
    output: 'Product of all elements',
    example: {
      input: '[2, 3, 4]',
      output: '24'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

long long product(vector<int>& arr) {
    long long prod = 1;
    
    for (int num : arr) {
        prod *= num;
    }
    
    return prod;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Product: " << product(arr) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class ProductOfArray {
    public static long product(int[] arr) {
        long prod = 1;
        
        for (int num : arr) {
            prod *= num;
        }
        
        return prod;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println("Product: " + product(arr));
        sc.close();
    }
}`,
      python: `def product(arr):
    prod = 1
    for num in arr:
        prod *= num
    return prod

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

print(f"Product: {product(arr)}")`
    }
  },
  39: {
    id: 39,
    title: 'Binary to Decimal',
    description: 'Convert binary number to decimal.',
    difficulty: 'Easy',
    input: 'Binary number as string',
    output: 'Decimal equivalent',
    example: {
      input: '"1010"',
      output: '10'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int binaryToDecimal(string binary) {
    int decimal = 0;
    int n = binary.length();
    
    for (int i = 0; i < n; i++) {
        if (binary[n - 1 - i] == '1') {
            decimal += pow(2, i);
        }
    }
    
    return decimal;
}

int main() {
    string binary;
    cout << "Enter binary number: ";
    cin >> binary;
    
    cout << "Decimal: " << binaryToDecimal(binary) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class BinaryToDecimal {
    public static int binaryToDecimal(String binary) {
        int decimal = 0;
        int n = binary.length();
        
        for (int i = 0; i < n; i++) {
            if (binary.charAt(n - 1 - i) == '1') {
                decimal += Math.pow(2, i);
            }
        }
        
        return decimal;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter binary number: ");
        String binary = sc.next();
        
        System.out.println("Decimal: " + binaryToDecimal(binary));
        sc.close();
    }
}`,
      python: `def binary_to_decimal(binary):
    return int(binary, 2)

# Input
binary = input("Enter binary number: ")
print(f"Decimal: {binary_to_decimal(binary)}")`
    }
  },
  40: {
    id: 40,
    title: 'Decimal to Binary',
    description: 'Convert decimal number to binary.',
    difficulty: 'Easy',
    input: 'Decimal number',
    output: 'Binary equivalent',
    example: {
      input: '10',
      output: '"1010"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string decimalToBinary(int n) {
    if (n == 0) return "0";
    
    string binary = "";
    
    while (n > 0) {
        binary += (n % 2) ? '1' : '0';
        n /= 2;
    }
    
    reverse(binary.begin(), binary.end());
    return binary;
}

int main() {
    int n;
    cout << "Enter decimal number: ";
    cin >> n;
    
    cout << "Binary: " << decimalToBinary(n) << endl;
    return 0;
}`,
      java: `import java.util.Scanner;

public class DecimalToBinary {
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
        
        System.out.print("Enter decimal number: ");
        int n = sc.nextInt();
        
        System.out.println("Binary: " + decimalToBinary(n));
        sc.close();
    }
}`,
      python: `def decimal_to_binary(n):
    return bin(n)[2:]

# Input
n = int(input("Enter decimal number: "))
print(f"Binary: {decimal_to_binary(n)}")`
    }
  },
  41: {
    id: 41,
    title: 'Binary Search',
    description: 'Search for an element using binary search algorithm.',
    difficulty: 'Medium',
    input: 'Sorted array and target element',
    output: 'Index of element or -1',
    example: {
      input: '[1,3,5,7,9], target=7',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    int n, target;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter sorted elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter target: ";
    cin >> target;
    
    int result = binarySearch(arr, target);
    
    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter sorted elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter target: ");
        int target = sc.nextInt();
        
        int result = binarySearch(arr, target);
        
        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
        
        sc.close();
    }
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter sorted elements: ").split()))
target = int(input("Enter target: "))

result = binary_search(arr, target)

if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found")`
    }
  },
  42: {
    id: 42,
    title: 'Transpose Matrix',
    description: 'Find the transpose of a matrix.',
    difficulty: 'Medium',
    input: 'Matrix dimensions and elements',
    output: 'Transposed matrix',
    example: {
      input: '[[1,2,3],[4,5,6]]',
      output: '[[1,4],[2,5],[3,6]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> transpose(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    
    vector<vector<int>> result(cols, vector<int>(rows));
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
}

int main() {
    int rows, cols;
    cout << "Enter rows and columns: ";
    cin >> rows >> cols;
    
    vector<vector<int>> matrix(rows, vector<int>(cols));
    
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
    
    vector<vector<int>> result = transpose(matrix);
    
    cout << "Transposed matrix:" << endl;
    for (auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class TransposeMatrix {
    public static int[][] transpose(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        int[][] result = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter rows and columns: ");
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        
        int[][] matrix = new int[rows][cols];
        
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        
        int[][] result = transpose(matrix);
        
        System.out.println("Transposed matrix:");
        for (int[] row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
        
        sc.close();
    }
}`,
      python: `def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    result = [[0] * rows for _ in range(cols)]
    
    for i in range(rows):
        for j in range(cols):
            result[j][i] = matrix[i][j]
    
    return result

# Input
rows = int(input("Enter rows: "))
cols = int(input("Enter columns: "))

matrix = []
print("Enter matrix elements:")
for i in range(rows):
    row = list(map(int, input().split()))
    matrix.append(row)

result = transpose(matrix)

print("Transposed matrix:")
for row in result:
    print(" ".join(map(str, row)))`
    }
  },
  43: {
    id: 43,
    title: 'Matrix Multiplication',
    description: 'Multiply two matrices.',
    difficulty: 'Medium',
    input: 'Two matrices',
    output: 'Product matrix',
    example: {
      input: '[[1,2],[3,4]], [[5,6],[7,8]]',
      output: '[[19,22],[43,50]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> multiply(vector<vector<int>>& A, vector<vector<int>>& B) {
    int m = A.size();
    int n = A[0].size();
    int p = B[0].size();
    
    vector<vector<int>> C(m, vector<int>(p, 0));
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < p; j++) {
            for (int k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return C;
}

int main() {
    int m, n, p;
    cout << "Enter dimensions (m n p): ";
    cin >> m >> n >> p;
    
    vector<vector<int>> A(m, vector<int>(n));
    vector<vector<int>> B(n, vector<int>(p));
    
    cout << "Enter first matrix:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> A[i][j];
        }
    }
    
    cout << "Enter second matrix:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p; j++) {
            cin >> B[i][j];
        }
    }
    
    vector<vector<int>> C = multiply(A, B);
    
    cout << "Product matrix:" << endl;
    for (auto& row : C) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class MatrixMultiplication {
    public static int[][] multiply(int[][] A, int[][] B) {
        int m = A.length;
        int n = A[0].length;
        int p = B[0].length;
        
        int[][] C = new int[m][p];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < p; j++) {
                for (int k = 0; k < n; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        
        return C;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter dimensions (m n p): ");
        int m = sc.nextInt();
        int n = sc.nextInt();
        int p = sc.nextInt();
        
        int[][] A = new int[m][n];
        int[][] B = new int[n][p];
        
        System.out.println("Enter first matrix:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                A[i][j] = sc.nextInt();
            }
        }
        
        System.out.println("Enter second matrix:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < p; j++) {
                B[i][j] = sc.nextInt();
            }
        }
        
        int[][] C = multiply(A, B);
        
        System.out.println("Product matrix:");
        for (int[] row : C) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
        
        sc.close();
    }
}`,
      python: `def multiply(A, B):
    m = len(A)
    n = len(A[0])
    p = len(B[0])
    
    C = [[0] * p for _ in range(m)]
    
    for i in range(m):
        for j in range(p):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]
    
    return C

# Input
m, n, p = map(int, input("Enter dimensions (m n p): ").split())

A = []
print("Enter first matrix:")
for i in range(m):
    row = list(map(int, input().split()))
    A.append(row)

B = []
print("Enter second matrix:")
for i in range(n):
    row = list(map(int, input().split()))
    B.append(row)

C = multiply(A, B)

print("Product matrix:")
for row in C:
    print(" ".join(map(str, row)))`
    }
  },
  44: {
    id: 44,
    title: 'Two Sum Problem',
    description: 'Find two numbers that add up to a target.',
    difficulty: 'Medium',
    input: 'Array and target sum',
    output: 'Indices of two numbers',
    example: {
      input: '[2,7,11,15], target=9',
      output: '[0,1]'
    },
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
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Enter target: ";
    cin >> target;
    
    vector<int> result = twoSum(nums, target);
    
    if (!result.empty()) {
        cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    } else {
        cout << "No solution found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            
            map.put(nums[i], i);
        }
        
        return new int[] {};
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.print("Enter target: ");
        int target = sc.nextInt();
        
        int[] result = twoSum(nums, target);
        
        if (result.length > 0) {
            System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
        } else {
            System.out.println("No solution found");
        }
        
        sc.close();
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

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))
target = int(input("Enter target: "))

result = two_sum(nums, target)

if result:
    print(f"Indices: {result}")
else:
    print("No solution found")`
    }
  },
  45: {
    id: 45,
    title: 'Three Sum Problem',
    description: 'Find three numbers that add up to zero.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'List of triplets that sum to zero',
    example: {
      input: '[-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]'
    },
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
                
                left++;
                right--;
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
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    vector<vector<int>> result = threeSum(nums);
    
    cout << "Triplets that sum to zero:" << endl;
    for (auto& triplet : result) {
        cout << "[" << triplet[0] << ", " << triplet[1] << ", " << triplet[2] << "]" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class ThreeSum {
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
                    
                    left++;
                    right--;
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
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        List<List<Integer>> result = threeSum(nums);
        
        System.out.println("Triplets that sum to zero:");
        for (List<Integer> triplet : result) {
            System.out.println(triplet);
        }
        
        sc.close();
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

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))

result = three_sum(nums)

print("Triplets that sum to zero:")
for triplet in result:
    print(triplet)`
    }
  },
  46: {
    id: 46,
    title: "Kadane's Algorithm",
    description: 'Find maximum subarray sum using Kadane\'s algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Maximum subarray sum',
    example: {
      input: '[-2,1,-3,4,-1,2,1,-5,4]',
      output: '6'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Maximum subarray sum: " << maxSubArray(nums) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class KadaneAlgorithm {
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.println("Maximum subarray sum: " + maxSubArray(nums));
        
        sc.close();
    }
}`,
      python: `def max_subarray(nums):
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))

print(f"Maximum subarray sum: {max_subarray(nums)}")`
    }
  },
  47: {
    id: 47,
    title: 'Stock Buy Sell',
    description: 'Best time to buy and sell stock for maximum profit.',
    difficulty: 'Medium',
    input: 'Array of stock prices',
    output: 'Maximum profit',
    example: {
      input: '[7,1,5,3,6,4]',
      output: '5'
    },
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
    cout << "Enter number of days: ";
    cin >> n;
    
    vector<int> prices(n);
    cout << "Enter prices: ";
    for (int i = 0; i < n; i++) {
        cin >> prices[i];
    }
    
    cout << "Maximum profit: " << maxProfit(prices) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class StockBuySell {
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
        
        System.out.print("Enter number of days: ");
        int n = sc.nextInt();
        
        int[] prices = new int[n];
        System.out.print("Enter prices: ");
        for (int i = 0; i < n; i++) {
            prices[i] = sc.nextInt();
        }
        
        System.out.println("Maximum profit: " + maxProfit(prices));
        
        sc.close();
    }
}`,
      python: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit

# Input
n = int(input("Enter number of days: "))
prices = list(map(int, input("Enter prices: ").split()))

print(f"Maximum profit: {max_profit(prices)}")`
    }
  },
  48: {
    id: 48,
    title: 'Merge Sort',
    description: 'Implement merge sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: {
      input: '[5,2,8,1,9]',
      output: '[1,2,5,8,9]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp(right - left + 1);
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    
    for (int i = 0; i < temp.size(); i++) {
        arr[left + i] = temp[i];
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    mergeSort(arr, 0, n - 1);
    
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class MergeSort {
    public static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        
        while (i <= mid) {
            temp[k++] = arr[i++];
        }
        
        while (j <= right) {
            temp[k++] = arr[j++];
        }
        
        for (int p = 0; p < temp.length; p++) {
            arr[left + p] = temp[p];
        }
    }
    
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        mergeSort(arr, 0, n - 1);
        
        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
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

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

sorted_arr = merge_sort(arr)

print("Sorted array:", " ".join(map(str, sorted_arr)))`
    }
  },
  49: {
    id: 49,
    title: 'Quick Sort',
    description: 'Implement quick sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: {
      input: '[5,2,8,1,9]',
      output: '[1,2,5,8,9]'
    },
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
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    quickSort(arr, 0, n - 1);
    
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class QuickSort {
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
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        quickSort(arr, 0, n - 1);
        
        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

sorted_arr = quick_sort(arr)

print("Sorted array:", " ".join(map(str, sorted_arr)))`
    }
  },
  50: {
    id: 50,
    title: 'Selection Sort',
    description: 'Implement selection sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: {
      input: '[5,2,8,1,9]',
      output: '[1,2,5,8,9]'
    },
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
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    selectionSort(arr);
    
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class SelectionSort {
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
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        selectionSort(arr);
        
        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
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

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

selection_sort(arr)

print("Sorted array:", " ".join(map(str, arr)))`
    }
  },
  51: {
    id: 51,
    title: 'Insertion Sort',
    description: 'Implement insertion sort algorithm.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Sorted array',
    example: {
      input: '[5,2,8,1,9]',
      output: '[1,2,5,8,9]'
    },
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
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    insertionSort(arr);
    
    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
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
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        insertionSort(arr);
        
        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
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

# Input
n = int(input("Enter array size: "))
arr = list(map(int, input("Enter elements: ").split()))

insertion_sort(arr)

print("Sorted array:", " ".join(map(str, arr)))`
    }
  },
  52: {
    id: 52,
    title: 'Longest Substring',
    description: 'Find longest substring without repeating characters.',
    difficulty: 'Medium',
    input: 'A string',
    output: 'Length of longest substring',
    example: {
      input: '"abcabcbb"',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> chars;
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        while (chars.find(s[right]) != chars.end()) {
            chars.erase(s[left]);
            left++;
        }
        
        chars.insert(s[right]);
        maxLength = max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

int main() {
    string s;
    cout << "Enter a string: ";
    cin >> s;
    
    cout << "Length of longest substring: " << lengthOfLongestSubstring(s) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> chars = new HashSet<>();
        int maxLength = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            while (chars.contains(s.charAt(right))) {
                chars.remove(s.charAt(left));
                left++;
            }
            
            chars.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String s = sc.next();
        
        System.out.println("Length of longest substring: " + lengthOfLongestSubstring(s));
        
        sc.close();
    }
}`,
      python: `def length_of_longest_substring(s):
    chars = set()
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        while s[right] in chars:
            chars.remove(s[left])
            left += 1
        
        chars.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Input
s = input("Enter a string: ")

print(f"Length of longest substring: {length_of_longest_substring(s)}")`
    }
  },
  53: {
    id: 53,
    title: 'Valid Parentheses',
    description: 'Check if parentheses are balanced.',
    difficulty: 'Medium',
    input: 'String with brackets',
    output: 'True if balanced, False otherwise',
    example: {
      input: '"({[]})"',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <stack>
#include <unordered_map>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> pairs = {
        {')', '('},
        {']', '['},
        {'}', '{'}
    };
    
    for (char c : s) {
        if (pairs.find(c) != pairs.end()) {
            if (st.empty() || st.top() != pairs[c]) {
                return false;
            }
            st.pop();
        } else {
            st.push(c);
        }
    }
    
    return st.empty();
}

int main() {
    string s;
    cout << "Enter string with brackets: ";
    cin >> s;
    
    cout << (isValid(s) ? "Valid" : "Invalid") << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put(')', '(');
        pairs.put(']', '[');
        pairs.put('}', '{');
        
        for (char c : s.toCharArray()) {
            if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter string with brackets: ");
        String s = sc.next();
        
        System.out.println(isValid(s) ? "Valid" : "Invalid");
        
        sc.close();
    }
}`,
      python: `def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False
        else:
            stack.append(char)
    
    return len(stack) == 0

# Input
s = input("Enter string with brackets: ")

print("Valid" if is_valid(s) else "Invalid")`
    }
  },
  54: {
    id: 54,
    title: 'Linked List Reversal',
    description: 'Reverse a singly linked list.',
    difficulty: 'Medium',
    input: 'Linked list',
    output: 'Reversed linked list',
    example: {
      input: '1->2->3->4->5',
      output: '5->4->3->2->1'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    Node* next = nullptr;
    
    while (curr != nullptr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

void printList(Node* head) {
    while (head != nullptr) {
        cout << head->data;
        if (head->next != nullptr) cout << "->";
        head = head->next;
    }
    cout << endl;
}

int main() {
    int n;
    cout << "Enter number of nodes: ";
    cin >> n;
    
    if (n == 0) return 0;
    
    cout << "Enter values: ";
    int val;
    cin >> val;
    Node* head = new Node(val);
    Node* curr = head;
    
    for (int i = 1; i < n; i++) {
        cin >> val;
        curr->next = new Node(val);
        curr = curr->next;
    }
    
    cout << "Original list: ";
    printList(head);
    
    head = reverseList(head);
    
    cout << "Reversed list: ";
    printList(head);
    
    return 0;
}`,
      java: `import java.util.*;

class Node {
    int data;
    Node next;
    
    Node(int val) {
        data = val;
        next = null;
    }
}

public class ReverseLinkedList {
    public static Node reverseList(Node head) {
        Node prev = null;
        Node curr = head;
        Node next = null;
        
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data);
            if (head.next != null) System.out.print("->");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of nodes: ");
        int n = sc.nextInt();
        
        if (n == 0) return;
        
        System.out.print("Enter values: ");
        Node head = new Node(sc.nextInt());
        Node curr = head;
        
        for (int i = 1; i < n; i++) {
            curr.next = new Node(sc.nextInt());
            curr = curr.next;
        }
        
        System.out.print("Original list: ");
        printList(head);
        
        head = reverseList(head);
        
        System.out.print("Reversed list: ");
        printList(head);
        
        sc.close();
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_list(head):
    prev = None
    curr = head
    
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    
    return prev

def print_list(head):
    result = []
    while head:
        result.append(str(head.data))
        head = head.next
    print("->".join(result))

# Input
n = int(input("Enter number of nodes: "))

if n > 0:
    values = list(map(int, input("Enter values: ").split()))
    
    head = Node(values[0])
    curr = head
    
    for val in values[1:]:
        curr.next = Node(val)
        curr = curr.next
    
    print("Original list: ", end="")
    print_list(head)
    
    head = reverse_list(head)
    
    print("Reversed list: ", end="")
    print_list(head)`
    }
  },
  55: {
    id: 55,
    title: 'Detect Cycle',
    description: 'Detect cycle in a linked list using Floyd\'s algorithm.',
    difficulty: 'Medium',
    input: 'Linked list',
    output: 'True if cycle exists',
    example: {
      input: '1->2->3->4->2 (cycle)',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

bool hasCycle(Node* head) {
    if (head == nullptr) return false;
    
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

int main() {
    // Creating a sample list with cycle: 1->2->3->4->2
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = head->next; // Creates cycle
    
    cout << (hasCycle(head) ? "Cycle detected" : "No cycle") << endl;
    
    return 0;
}`,
      java: `class Node {
    int data;
    Node next;
    
    Node(int val) {
        data = val;
        next = null;
    }
}

public class DetectCycle {
    public static boolean hasCycle(Node head) {
        if (head == null) return false;
        
        Node slow = head;
        Node fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
    
    public static void main(String[] args) {
        // Creating a sample list with cycle: 1->2->3->4->2
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = head.next; // Creates cycle
        
        System.out.println(hasCycle(head) ? "Cycle detected" : "No cycle");
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def has_cycle(head):
    if not head:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False

# Creating a sample list with cycle: 1->2->3->4->2
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = head.next  # Creates cycle

print("Cycle detected" if has_cycle(head) else "No cycle")`
    }
  },
  56: {
    id: 56,
    title: 'Middle of Linked List',
    description: 'Find middle element of a linked list.',
    difficulty: 'Medium',
    input: 'Linked list',
    output: 'Middle node value',
    example: {
      input: '1->2->3->4->5',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* findMiddle(Node* head) {
    if (head == nullptr) return nullptr;
    
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}

int main() {
    int n;
    cout << "Enter number of nodes: ";
    cin >> n;
    
    if (n == 0) return 0;
    
    cout << "Enter values: ";
    int val;
    cin >> val;
    Node* head = new Node(val);
    Node* curr = head;
    
    for (int i = 1; i < n; i++) {
        cin >> val;
        curr->next = new Node(val);
        curr = curr->next;
    }
    
    Node* middle = findMiddle(head);
    
    if (middle != nullptr) {
        cout << "Middle element: " << middle->data << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

class Node {
    int data;
    Node next;
    
    Node(int val) {
        data = val;
        next = null;
    }
}

public class MiddleOfLinkedList {
    public static Node findMiddle(Node head) {
        if (head == null) return null;
        
        Node slow = head;
        Node fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of nodes: ");
        int n = sc.nextInt();
        
        if (n == 0) return;
        
        System.out.print("Enter values: ");
        Node head = new Node(sc.nextInt());
        Node curr = head;
        
        for (int i = 1; i < n; i++) {
            curr.next = new Node(sc.nextInt());
            curr = curr.next;
        }
        
        Node middle = findMiddle(head);
        
        if (middle != null) {
            System.out.println("Middle element: " + middle.data);
        }
        
        sc.close();
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_middle(head):
    if not head:
        return None
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

# Input
n = int(input("Enter number of nodes: "))

if n > 0:
    values = list(map(int, input("Enter values: ").split()))
    
    head = Node(values[0])
    curr = head
    
    for val in values[1:]:
        curr.next = Node(val)
        curr = curr.next
    
    middle = find_middle(head)
    
    if middle:
        print(f"Middle element: {middle.data}")`
    }
  },
  57: {
    id: 57,
    title: 'Merge Two Lists',
    description: 'Merge two sorted linked lists.',
    difficulty: 'Medium',
    input: 'Two sorted linked lists',
    output: 'Merged sorted list',
    example: {
      input: '1->3->5, 2->4->6',
      output: '1->2->3->4->5->6'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* mergeLists(Node* l1, Node* l2) {
    if (l1 == nullptr) return l2;
    if (l2 == nullptr) return l1;
    
    Node* dummy = new Node(0);
    Node* curr = dummy;
    
    while (l1 != nullptr && l2 != nullptr) {
        if (l1->data <= l2->data) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    
    curr->next = (l1 != nullptr) ? l1 : l2;
    
    return dummy->next;
}

void printList(Node* head) {
    while (head != nullptr) {
        cout << head->data;
        if (head->next != nullptr) cout << "->";
        head = head->next;
    }
    cout << endl;
}

int main() {
    // Sample lists: 1->3->5 and 2->4->6
    Node* l1 = new Node(1);
    l1->next = new Node(3);
    l1->next->next = new Node(5);
    
    Node* l2 = new Node(2);
    l2->next = new Node(4);
    l2->next->next = new Node(6);
    
    cout << "List 1: ";
    printList(l1);
    
    cout << "List 2: ";
    printList(l2);
    
    Node* merged = mergeLists(l1, l2);
    
    cout << "Merged list: ";
    printList(merged);
    
    return 0;
}`,
      java: `class Node {
    int data;
    Node next;
    
    Node(int val) {
        data = val;
        next = null;
    }
}

public class MergeTwoLists {
    public static Node mergeLists(Node l1, Node l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        
        Node dummy = new Node(0);
        Node curr = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.data <= l2.data) {
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
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data);
            if (head.next != null) System.out.print("->");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        // Sample lists: 1->3->5 and 2->4->6
        Node l1 = new Node(1);
        l1.next = new Node(3);
        l1.next.next = new Node(5);
        
        Node l2 = new Node(2);
        l2.next = new Node(4);
        l2.next.next = new Node(6);
        
        System.out.print("List 1: ");
        printList(l1);
        
        System.out.print("List 2: ");
        printList(l2);
        
        Node merged = mergeLists(l1, l2);
        
        System.out.print("Merged list: ");
        printList(merged);
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def merge_lists(l1, l2):
    if not l1:
        return l2
    if not l2:
        return l1
    
    dummy = Node(0)
    curr = dummy
    
    while l1 and l2:
        if l1.data <= l2.data:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    
    curr.next = l1 if l1 else l2
    
    return dummy.next

def print_list(head):
    result = []
    while head:
        result.append(str(head.data))
        head = head.next
    print("->".join(result))

# Sample lists: 1->3->5 and 2->4->6
l1 = Node(1)
l1.next = Node(3)
l1.next.next = Node(5)

l2 = Node(2)
l2.next = Node(4)
l2.next.next = Node(6)

print("List 1: ", end="")
print_list(l1)

print("List 2: ", end="")
print_list(l2)

merged = merge_lists(l1, l2)

print("Merged list: ", end="")
print_list(merged)`
    }
  },
  58: {
    id: 58,
    title: 'Binary Tree Traversal',
    description: 'Implement inorder, preorder, and postorder traversals.',
    difficulty: 'Medium',
    input: 'Binary tree',
    output: 'Traversal sequences',
    example: {
      input: 'Tree: 1,2,3,4,5',
      output: 'Inorder: 4,2,5,1,3'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

void inorder(Node* root) {
    if (root == nullptr) return;
    
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

void preorder(Node* root) {
    if (root == nullptr) return;
    
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

void postorder(Node* root) {
    if (root == nullptr) return;
    
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

int main() {
    // Sample tree:     1
    //                /   \\
    //               2     3
    //              / \\
    //             4   5
    
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    
    cout << "Inorder: ";
    inorder(root);
    cout << endl;
    
    cout << "Preorder: ";
    preorder(root);
    cout << endl;
    
    cout << "Postorder: ";
    postorder(root);
    cout << endl;
    
    return 0;
}`,
      java: `class Node {
    int data;
    Node left, right;
    
    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class TreeTraversal {
    public static void inorder(Node root) {
        if (root == null) return;
        
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }
    
    public static void preorder(Node root) {
        if (root == null) return;
        
        System.out.print(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }
    
    public static void postorder(Node root) {
        if (root == null) return;
        
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data + " ");
    }
    
    public static void main(String[] args) {
        // Sample tree:     1
        //                /   \\
        //               2     3
        //              / \\
        //             4   5
        
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        System.out.print("Inorder: ");
        inorder(root);
        System.out.println();
        
        System.out.print("Preorder: ");
        preorder(root);
        System.out.println();
        
        System.out.print("Postorder: ");
        postorder(root);
        System.out.println();
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder(root):
    if not root:
        return
    
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

def preorder(root):
    if not root:
        return
    
    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)

def postorder(root):
    if not root:
        return
    
    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")

# Sample tree:     1
#                /   \\
#               2     3
#              / \\
#             4   5

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Inorder: ", end="")
inorder(root)
print()

print("Preorder: ", end="")
preorder(root)
print()

print("Postorder: ", end="")
postorder(root)
print()`
    }
  },
  59: {
    id: 59,
    title: 'Level Order Traversal',
    description: 'Traverse binary tree level by level.',
    difficulty: 'Medium',
    input: 'Binary tree',
    output: 'Level-wise nodes',
    example: {
      input: 'Tree: 1,2,3,4,5',
      output: '[[1],[2,3],[4,5]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

vector<vector<int>> levelOrder(Node* root) {
    vector<vector<int>> result;
    
    if (root == nullptr) return result;
    
    queue<Node*> q;
    q.push(root);
    
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        
        for (int i = 0; i < size; i++) {
            Node* node = q.front();
            q.pop();
            
            level.push_back(node->data);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        
        result.push_back(level);
    }
    
    return result;
}

int main() {
    // Sample tree:     1
    //                /   \\
    //               2     3
    //              / \\
    //             4   5
    
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    
    vector<vector<int>> result = levelOrder(root);
    
    cout << "Level Order:" << endl;
    for (auto& level : result) {
        cout << "[";
        for (int i = 0; i < level.size(); i++) {
            cout << level[i];
            if (i < level.size() - 1) cout << ",";
        }
        cout << "]" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

class Node {
    int data;
    Node left, right;
    
    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class LevelOrderTraversal {
    public static List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> result = new ArrayList<>();
        
        if (root == null) return result;
        
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            
            for (int i = 0; i < size; i++) {
                Node node = queue.poll();
                level.add(node.data);
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            
            result.add(level);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        // Sample tree:     1
        //                /   \\
        //               2     3
        //              / \\
        //             4   5
        
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        List<List<Integer>> result = levelOrder(root);
        
        System.out.println("Level Order:");
        for (List<Integer> level : result) {
            System.out.println(level);
        }
    }
}`,
      python: `from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.data)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Sample tree:     1
#                /   \\
#               2     3
#              / \\
#             4   5

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

result = level_order(root)

print("Level Order:")
for level in result:
    print(level)`
    }
  },
  60: {
    id: 60,
    title: 'Tree Height',
    description: 'Find height of a binary tree.',
    difficulty: 'Medium',
    input: 'Binary tree',
    output: 'Height of tree',
    example: {
      input: 'Tree: 1,2,3,4,5',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <algorithm>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

int height(Node* root) {
    if (root == nullptr) {
        return 0;
    }
    
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    
    return max(leftHeight, rightHeight) + 1;
}

int main() {
    // Sample tree:     1
    //                /   \\
    //               2     3
    //              / \\
    //             4   5
    
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    
    cout << "Height of tree: " << height(root) << endl;
    
    return 0;
}`,
      java: `class Node {
    int data;
    Node left, right;
    
    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class TreeHeight {
    public static int height(Node root) {
        if (root == null) {
            return 0;
        }
        
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    public static void main(String[] args) {
        // Sample tree:     1
        //                /   \\
        //               2     3
        //              / \\
        //             4   5
        
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        
        System.out.println("Height of tree: " + height(root));
    }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def height(root):
    if not root:
        return 0
    
    left_height = height(root.left)
    right_height = height(root.right)
    
    return max(left_height, right_height) + 1

# Sample tree:     1
#                /   \\
#               2     3
#              / \\
#             4   5

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(f"Height of tree: {height(root)}")`
    }
  },
  61: {
    id: 61,
    title: 'Longest Common Subsequence',
    description: 'Find longest common subsequence of two strings using DP.',
    difficulty: 'Medium',
    input: 'Two strings',
    output: 'Length of LCS',
    example: {
      input: '"abcde", "ace"',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lcs(string s1, string s2) {
    int m = s1.length();
    int n = s2.length();
    
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    string s1, s2;
    cout << "Enter first string: ";
    cin >> s1;
    cout << "Enter second string: ";
    cin >> s2;
    
    cout << "Length of LCS: " << lcs(s1, s2) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class LCS {
    public static int lcs(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String s1 = sc.next();
        System.out.print("Enter second string: ");
        String s2 = sc.next();
        
        System.out.println("Length of LCS: " + lcs(s1, s2));
        
        sc.close();
    }
}`,
      python: `def lcs(s1, s2):
    m, n = len(s1), len(s2)
    
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# Input
s1 = input("Enter first string: ")
s2 = input("Enter second string: ")

print(f"Length of LCS: {lcs(s1, s2)}")`
    }
  },
  62: {
    id: 62,
    title: 'Knapsack Problem',
    description: 'Solve 0/1 knapsack problem using dynamic programming.',
    difficulty: 'Medium',
    input: 'Weights, values, and capacity',
    output: 'Maximum value',
    example: {
      input: 'weights=[1,2,3], values=[10,15,40], capacity=6',
      output: '65'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapsack(vector<int>& weights, vector<int>& values, int capacity) {
    int n = weights.size();
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

int main() {
    int n, capacity;
    cout << "Enter number of items: ";
    cin >> n;
    
    vector<int> weights(n), values(n);
    
    cout << "Enter weights: ";
    for (int i = 0; i < n; i++) {
        cin >> weights[i];
    }
    
    cout << "Enter values: ";
    for (int i = 0; i < n; i++) {
        cin >> values[i];
    }
    
    cout << "Enter capacity: ";
    cin >> capacity;
    
    cout << "Maximum value: " << knapsack(weights, values, capacity) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class Knapsack {
    public static int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i-1] <= w) {
                    dp[i][w] = Math.max(
                        values[i-1] + dp[i-1][w - weights[i-1]],
                        dp[i-1][w]
                    );
                } else {
                    dp[i][w] = dp[i-1][w];
                }
            }
        }
        
        return dp[n][capacity];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of items: ");
        int n = sc.nextInt();
        
        int[] weights = new int[n];
        int[] values = new int[n];
        
        System.out.print("Enter weights: ");
        for (int i = 0; i < n; i++) {
            weights[i] = sc.nextInt();
        }
        
        System.out.print("Enter values: ");
        for (int i = 0; i < n; i++) {
            values[i] = sc.nextInt();
        }
        
        System.out.print("Enter capacity: ");
        int capacity = sc.nextInt();
        
        System.out.println("Maximum value: " + knapsack(weights, values, capacity));
        
        sc.close();
    }
}`,
      python: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

# Input
n = int(input("Enter number of items: "))
weights = list(map(int, input("Enter weights: ").split()))
values = list(map(int, input("Enter values: ").split()))
capacity = int(input("Enter capacity: "))

print(f"Maximum value: {knapsack(weights, values, capacity)}")`
    }
  },
  63: {
    id: 63,
    title: 'Coin Change',
    description: 'Find minimum coins needed for a value using DP.',
    difficulty: 'Medium',
    input: 'Coin denominations and amount',
    output: 'Minimum number of coins',
    example: {
      input: 'coins=[1,2,5], amount=11',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    int n, amount;
    cout << "Enter number of coin types: ";
    cin >> n;
    
    vector<int> coins(n);
    cout << "Enter coin denominations: ";
    for (int i = 0; i < n; i++) {
        cin >> coins[i];
    }
    
    cout << "Enter amount: ";
    cin >> amount;
    
    int result = coinChange(coins, amount);
    
    if (result != -1) {
        cout << "Minimum coins needed: " << result << endl;
    } else {
        cout << "Not possible" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i >= coin && dp[i - coin] != Integer.MAX_VALUE) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of coin types: ");
        int n = sc.nextInt();
        
        int[] coins = new int[n];
        System.out.print("Enter coin denominations: ");
        for (int i = 0; i < n; i++) {
            coins[i] = sc.nextInt();
        }
        
        System.out.print("Enter amount: ");
        int amount = sc.nextInt();
        
        int result = coinChange(coins, amount);
        
        if (result != -1) {
            System.out.println("Minimum coins needed: " + result);
        } else {
            System.out.println("Not possible");
        }
        
        sc.close();
    }
}`,
      python: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin and dp[i - coin] != float('inf'):
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return -1 if dp[amount] == float('inf') else dp[amount]

# Input
n = int(input("Enter number of coin types: "))
coins = list(map(int, input("Enter coin denominations: ").split()))
amount = int(input("Enter amount: "))

result = coin_change(coins, amount)

if result != -1:
    print(f"Minimum coins needed: {result}")
else:
    print("Not possible")`
    }
  },
  64: {
    id: 64,
    title: 'Climbing Stairs',
    description: 'Count ways to reach top of stairs (1 or 2 steps at a time).',
    difficulty: 'Medium',
    input: 'Number of stairs n',
    output: 'Number of ways',
    example: {
      input: '5',
      output: '8'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    
    vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

int main() {
    int n;
    cout << "Enter number of stairs: ";
    cin >> n;
    
    cout << "Number of ways: " << climbStairs(n) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class ClimbingStairs {
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of stairs: ");
        int n = sc.nextInt();
        
        System.out.println("Number of ways: " + climbStairs(n));
        
        sc.close();
    }
}`,
      python: `def climb_stairs(n):
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# Input
n = int(input("Enter number of stairs: "))

print(f"Number of ways: {climb_stairs(n)}")`
    }
  },
  65: {
    id: 65,
    title: 'House Robber',
    description: 'Maximum money that can be robbed without adjacent houses.',
    difficulty: 'Medium',
    input: 'Array of house values',
    output: 'Maximum money',
    example: {
      input: '[2,7,9,3,1]',
      output: '12'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];
    
    vector<int> dp(n);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    
    for (int i = 2; i < n; i++) {
        dp[i] = max(dp[i-1], nums[i] + dp[i-2]);
    }
    
    return dp[n-1];
}

int main() {
    int n;
    cout << "Enter number of houses: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter house values: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Maximum money: " << rob(nums) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class HouseRobber {
    public static int rob(int[] nums) {
        int n = nums.length;
        if (n == 0) return 0;
        if (n == 1) return nums[0];
        
        int[] dp = new int[n];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        
        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
        }
        
        return dp[n-1];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of houses: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter house values: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.println("Maximum money: " + rob(nums));
        
        sc.close();
    }
}`,
      python: `def rob(nums):
    n = len(nums)
    if n == 0:
        return 0
    if n == 1:
        return nums[0]
    
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, n):
        dp[i] = max(dp[i-1], nums[i] + dp[i-2])
    
    return dp[n-1]

# Input
n = int(input("Enter number of houses: "))
nums = list(map(int, input("Enter house values: ").split()))

print(f"Maximum money: {rob(nums)}")`
    }
  },
  66: {
    id: 66,
    title: 'Container With Most Water',
    description: 'Find container that holds most water using two pointers.',
    difficulty: 'Medium',
    input: 'Array of heights',
    output: 'Maximum water area',
    example: {
      input: '[1,8,6,2,5,4,8,3,7]',
      output: '49'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;
    
    while (left < right) {
        int width = right - left;
        int h = min(height[left], height[right]);
        maxWater = max(maxWater, width * h);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

int main() {
    int n;
    cout << "Enter number of lines: ";
    cin >> n;
    
    vector<int> height(n);
    cout << "Enter heights: ";
    for (int i = 0; i < n; i++) {
        cin >> height[i];
    }
    
    cout << "Maximum water: " << maxArea(height) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ContainerWithMostWater {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxWater = 0;
        
        while (left < right) {
            int width = right - left;
            int h = Math.min(height[left], height[right]);
            maxWater = Math.max(maxWater, width * h);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxWater;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of lines: ");
        int n = sc.nextInt();
        
        int[] height = new int[n];
        System.out.print("Enter heights: ");
        for (int i = 0; i < n; i++) {
            height[i] = sc.nextInt();
        }
        
        System.out.println("Maximum water: " + maxArea(height));
        
        sc.close();
    }
}`,
      python: `def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Input
n = int(input("Enter number of lines: "))
height = list(map(int, input("Enter heights: ").split()))

print(f"Maximum water: {max_area(height)}")`
    }
  },
  67: {
    id: 67,
    title: 'Rotate Matrix',
    description: 'Rotate matrix by 90 degrees clockwise.',
    difficulty: 'Medium',
    input: 'Square matrix',
    output: 'Rotated matrix',
    example: {
      input: '[[1,2,3],[4,5,6],[7,8,9]]',
      output: '[[7,4,1],[8,5,2],[9,6,3]]'
    },
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
    int n;
    cout << "Enter matrix size: ";
    cin >> n;
    
    vector<vector<int>> matrix(n, vector<int>(n));
    
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    rotate(matrix);
    
    cout << "Rotated matrix:" << endl;
    for (auto& row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class RotateMatrix {
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
            int left = 0, right = n - 1;
            while (left < right) {
                int temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;
                left++;
                right--;
            }
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter matrix size: ");
        int n = sc.nextInt();
        
        int[][] matrix = new int[n][n];
        
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        
        rotate(matrix);
        
        System.out.println("Rotated matrix:");
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
        
        sc.close();
    }
}`,
      python: `def rotate(matrix):
    n = len(matrix)
    
    # Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()

# Input
n = int(input("Enter matrix size: "))

matrix = []
print("Enter matrix elements:")
for i in range(n):
    row = list(map(int, input().split()))
    matrix.append(row)

rotate(matrix)

print("Rotated matrix:")
for row in matrix:
    print(" ".join(map(str, row)))`
    }
  },
  68: {
    id: 68,
    title: 'Spiral Matrix',
    description: 'Print matrix elements in spiral order.',
    difficulty: 'Medium',
    input: 'Matrix',
    output: 'Spiral order elements',
    example: {
      input: '[[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,2,3,6,9,8,7,4,5]'
    },
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
        // Right
        for (int i = left; i <= right; i++) {
            result.push_back(matrix[top][i]);
        }
        top++;
        
        // Down
        for (int i = top; i <= bottom; i++) {
            result.push_back(matrix[i][right]);
        }
        right--;
        
        // Left
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                result.push_back(matrix[bottom][i]);
            }
            bottom--;
        }
        
        // Up
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result.push_back(matrix[i][left]);
            }
            left++;
        }
    }
    
    return result;
}

int main() {
    int m, n;
    cout << "Enter rows and columns: ";
    cin >> m >> n;
    
    vector<vector<int>> matrix(m, vector<int>(n));
    
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    vector<int> result = spiralOrder(matrix);
    
    cout << "Spiral order: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
    
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
            // Right
            for (int i = left; i <= right; i++) {
                result.add(matrix[top][i]);
            }
            top++;
            
            // Down
            for (int i = top; i <= bottom; i++) {
                result.add(matrix[i][right]);
            }
            right--;
            
            // Left
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    result.add(matrix[bottom][i]);
                }
                bottom--;
            }
            
            // Up
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    result.add(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter rows and columns: ");
        int m = sc.nextInt();
        int n = sc.nextInt();
        
        int[][] matrix = new int[m][n];
        
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        
        List<Integer> result = spiralOrder(matrix);
        
        System.out.print("Spiral order: ");
        for (int num : result) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def spiral_order(matrix):
    if not matrix:
        return []
    
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Right
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1
        
        # Down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        # Left
        if top <= bottom:
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
        
        # Up
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result

# Input
m, n = map(int, input("Enter rows and columns: ").split())

matrix = []
print("Enter matrix elements:")
for i in range(m):
    row = list(map(int, input().split()))
    matrix.append(row)

result = spiral_order(matrix)

print("Spiral order:", " ".join(map(str, result)))`
    }
  },
  69: {
    id: 69,
    title: 'Search in Rotated Array',
    description: 'Search in rotated sorted array.',
    difficulty: 'Medium',
    input: 'Rotated sorted array and target',
    output: 'Index of target',
    example: {
      input: '[4,5,6,7,0,1,2], target=0',
      output: '4'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        }
        
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
    int n, target;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter rotated sorted array: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Enter target: ";
    cin >> target;
    
    int result = search(nums, target);
    
    if (result != -1) {
        cout << "Index: " << result << endl;
    } else {
        cout << "Not found" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class SearchRotatedArray {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
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
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter rotated sorted array: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.print("Enter target: ");
        int target = sc.nextInt();
        
        int result = search(nums, target);
        
        if (result != -1) {
            System.out.println("Index: " + result);
        } else {
            System.out.println("Not found");
        }
        
        sc.close();
    }
}`,
      python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
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

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter rotated sorted array: ").split()))
target = int(input("Enter target: "))

result = search(nums, target)

if result != -1:
    print(f"Index: {result}")
else:
    print("Not found")`
    }
  },
  70: {
    id: 70,
    title: 'Find Peak Element',
    description: 'Find a peak element in array (greater than neighbors).',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Index of peak element',
    example: {
      input: '[1,2,3,1]',
      output: '2'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findPeakElement(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Peak element index: " << findPeakElement(nums) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class FindPeakElement {
    public static int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.println("Peak element index: " + findPeakElement(nums));
        
        sc.close();
    }
}`,
      python: `def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if nums[mid] < nums[mid + 1]:
            left = mid + 1
        else:
            right = mid
    
    return left

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))

print(f"Peak element index: {find_peak_element(nums)}")`
    }
  },
  71: {
    id: 71,
    title: 'Sort Colors',
    description: 'Sort array with 0s, 1s, and 2s (Dutch National Flag).',
    difficulty: 'Medium',
    input: 'Array with 0,1,2',
    output: 'Sorted array',
    example: {
      input: '[2,0,2,1,1,0]',
      output: '[0,0,1,1,2,2]'
    },
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
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements (0,1,2): ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    sortColors(nums);
    
    cout << "Sorted array: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class SortColors {
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
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements (0,1,2): ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        sortColors(nums);
        
        System.out.print("Sorted array: ");
        for (int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
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

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements (0,1,2): ").split()))

sort_colors(nums)

print("Sorted array:", " ".join(map(str, nums)))`
    }
  },
  72: {
    id: 72,
    title: 'Subarray Sum Equals K',
    description: 'Count subarrays with sum equal to k.',
    difficulty: 'Medium',
    input: 'Array and target sum k',
    output: 'Count of subarrays',
    example: {
      input: '[1,1,1], k=2',
      output: '2'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixSum;
    prefixSum[0] = 1;
    
    int count = 0, sum = 0;
    
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
    int n, k;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Enter k: ";
    cin >> k;
    
    cout << "Number of subarrays: " << subarraySum(nums, k) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class SubarraySum {
    public static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixSum = new HashMap<>();
        prefixSum.put(0, 1);
        
        int count = 0, sum = 0;
        
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
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.print("Enter k: ");
        int k = sc.nextInt();
        
        System.out.println("Number of subarrays: " + subarraySum(nums, k));
        
        sc.close();
    }
}`,
      python: `def subarray_sum(nums, k):
    prefix_sum = {0: 1}
    count = 0
    total = 0
    
    for num in nums:
        total += num
        
        if total - k in prefix_sum:
            count += prefix_sum[total - k]
        
        prefix_sum[total] = prefix_sum.get(total, 0) + 1
    
    return count

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))
k = int(input("Enter k: "))

print(f"Number of subarrays: {subarray_sum(nums, k)}")`
    }
  },
  73: {
    id: 73,
    title: 'Product of Array Except Self',
    description: 'Product of all elements except current index.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Product array',
    example: {
      input: '[1,2,3,4]',
      output: '[24,12,8,6]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    
    // Left products
    int left = 1;
    for (int i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    
    // Right products
    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    vector<int> result = productExceptSelf(nums);
    
    cout << "Product array: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ProductExceptSelf {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, 1);
        
        // Left products
        int left = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }
        
        // Right products
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        int[] result = productExceptSelf(nums);
        
        System.out.print("Product array: ");
        for (int num : result) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # Left products
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    
    # Right products
    right = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    
    return result

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))

result = product_except_self(nums)

print("Product array:", " ".join(map(str, result)))`
    }
  },
  74: {
    id: 74,
    title: 'Next Permutation',
    description: 'Find next lexicographic permutation of array.',
    difficulty: 'Medium',
    input: 'Array of integers',
    output: 'Next permutation',
    example: {
      input: '[1,2,3]',
      output: '[1,3,2]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void nextPermutation(vector<int>& nums) {
    int n = nums.size();
    int i = n - 2;
    
    // Find first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Find element just larger than nums[i]
        int j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums[i], nums[j]);
    }
    
    // Reverse suffix
    reverse(nums.begin() + i + 1, nums.end());
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter elements: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    nextPermutation(nums);
    
    cout << "Next permutation: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class NextPermutation {
    public static void nextPermutation(int[] nums) {
        int n = nums.length;
        int i = n - 2;
        
        // Find first decreasing element
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        
        if (i >= 0) {
            // Find element just larger than nums[i]
            int j = n - 1;
            while (nums[j] <= nums[i]) {
                j--;
            }
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        
        // Reverse suffix
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
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter elements: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        nextPermutation(nums);
        
        System.out.print("Next permutation: ");
        for (int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        sc.close();
    }
}`,
      python: `def next_permutation(nums):
    n = len(nums)
    i = n - 2
    
    # Find first decreasing element
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    
    if i >= 0:
        # Find element just larger than nums[i]
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    
    # Reverse suffix
    nums[i + 1:] = reversed(nums[i + 1:])

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter elements: ").split()))

next_permutation(nums)

print("Next permutation:", " ".join(map(str, nums)))`
    }
  },
  75: {
    id: 75,
    title: 'Longest Palindromic Substring',
    description: 'Find longest palindromic substring.',
    difficulty: 'Medium',
    input: 'A string',
    output: 'Longest palindrome',
    example: {
      input: '"babad"',
      output: '"bab" or "aba"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

string expandAroundCenter(string s, int left, int right) {
    while (left >= 0 && right < s.length() && s[left] == s[right]) {
        left--;
        right++;
    }
    return s.substr(left + 1, right - left - 1);
}

string longestPalindrome(string s) {
    if (s.empty()) return "";
    
    string longest = "";
    
    for (int i = 0; i < s.length(); i++) {
        // Odd length palindromes
        string odd = expandAroundCenter(s, i, i);
        if (odd.length() > longest.length()) {
            longest = odd;
        }
        
        // Even length palindromes
        string even = expandAroundCenter(s, i, i + 1);
        if (even.length() > longest.length()) {
            longest = even;
        }
    }
    
    return longest;
}

int main() {
    string s;
    cout << "Enter a string: ";
    cin >> s;
    
    cout << "Longest palindrome: " << longestPalindrome(s) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class LongestPalindrome {
    public static String expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
    
    public static String longestPalindrome(String s) {
        if (s.isEmpty()) return "";
        
        String longest = "";
        
        for (int i = 0; i < s.length(); i++) {
            // Odd length palindromes
            String odd = expandAroundCenter(s, i, i);
            if (odd.length() > longest.length()) {
                longest = odd;
            }
            
            // Even length palindromes
            String even = expandAroundCenter(s, i, i + 1);
            if (even.length() > longest.length()) {
                longest = even;
            }
        }
        
        return longest;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a string: ");
        String s = sc.next();
        
        System.out.println("Longest palindrome: " + longestPalindrome(s));
        
        sc.close();
    }
}`,
      python: `def expand_around_center(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return s[left + 1:right]

def longest_palindrome(s):
    if not s:
        return ""
    
    longest = ""
    
    for i in range(len(s)):
        # Odd length palindromes
        odd = expand_around_center(s, i, i)
        if len(odd) > len(longest):
            longest = odd
        
        # Even length palindromes
        even = expand_around_center(s, i, i + 1)
        if len(even) > len(longest):
            longest = even
    
    return longest

# Input
s = input("Enter a string: ")

print(f"Longest palindrome: {longest_palindrome(s)}")`
    }
  },
  76: {
    id: 76,
    title: 'Group Anagrams',
    description: 'Group strings that are anagrams together.',
    difficulty: 'Medium',
    input: 'Array of strings',
    output: 'Grouped anagrams',
    example: {
      input: '["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    
    for (string s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        groups[key].push_back(s);
    }
    
    vector<vector<string>> result;
    for (auto& pair : groups) {
        result.push_back(pair.second);
    }
    
    return result;
}

int main() {
    int n;
    cout << "Enter number of strings: ";
    cin >> n;
    
    vector<string> strs(n);
    cout << "Enter strings: ";
    for (int i = 0; i < n; i++) {
        cin >> strs[i];
    }
    
    vector<vector<string>> result = groupAnagrams(strs);
    
    cout << "Grouped anagrams:" << endl;
    for (auto& group : result) {
        cout << "[";
        for (int i = 0; i < group.size(); i++) {
            cout << group[i];
            if (i < group.size() - 1) cout << ",";
        }
        cout << "]" << endl;
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
            
            groups.putIfAbsent(key, new ArrayList<>());
            groups.get(key).add(s);
        }
        
        return new ArrayList<>(groups.values());
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of strings: ");
        int n = sc.nextInt();
        
        String[] strs = new String[n];
        System.out.print("Enter strings: ");
        for (int i = 0; i < n; i++) {
            strs[i] = sc.next();
        }
        
        List<List<String>> result = groupAnagrams(strs);
        
        System.out.println("Grouped anagrams:");
        for (List<String> group : result) {
            System.out.println(group);
        }
        
        sc.close();
    }
}`,
      python: `def group_anagrams(strs):
    groups = {}
    
    for s in strs:
        key = ''.join(sorted(s))
        
        if key not in groups:
            groups[key] = []
        groups[key].append(s)
    
    return list(groups.values())

# Input
n = int(input("Enter number of strings: "))
strs = input("Enter strings: ").split()

result = group_anagrams(strs)

print("Grouped anagrams:")
for group in result:
    print(group)`
    }
  },
  77: {
    id: 77,
    title: 'Word Break',
    description: 'Check if string can be segmented into dictionary words.',
    difficulty: 'Medium',
    input: 'String and word dictionary',
    output: 'True if segmentable',
    example: {
      input: 's="leetcode", dict=["leet","code"]',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dict(wordDict.begin(), wordDict.end());
    int n = s.length();
    vector<bool> dp(n + 1, false);
    dp[0] = true;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.find(s.substr(j, i - j)) != dict.end()) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];
}

int main() {
    string s;
    int n;
    
    cout << "Enter string: ";
    cin >> s;
    
    cout << "Enter number of words in dictionary: ";
    cin >> n;
    
    vector<string> wordDict(n);
    cout << "Enter dictionary words: ";
    for (int i = 0; i < n; i++) {
        cin >> wordDict[i];
    }
    
    cout << (wordBreak(s, wordDict) ? "True" : "False") << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class WordBreak {
    public static boolean wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter string: ");
        String s = sc.next();
        
        System.out.print("Enter number of words in dictionary: ");
        int n = sc.nextInt();
        
        List<String> wordDict = new ArrayList<>();
        System.out.print("Enter dictionary words: ");
        for (int i = 0; i < n; i++) {
            wordDict.add(sc.next());
        }
        
        System.out.println(wordBreak(s, wordDict) ? "True" : "False");
        
        sc.close();
    }
}`,
      python: `def word_break(s, word_dict):
    word_set = set(word_dict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    
    return dp[n]

# Input
s = input("Enter string: ")
n = int(input("Enter number of words in dictionary: "))
word_dict = input("Enter dictionary words: ").split()

print("True" if word_break(s, word_dict) else "False")`
    }
  },
  78: {
    id: 78,
    title: 'Unique Paths',
    description: 'Count unique paths in grid from top-left to bottom-right.',
    difficulty: 'Medium',
    input: 'Grid dimensions m x n',
    output: 'Number of unique paths',
    example: {
      input: 'm=3, n=7',
      output: '28'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}

int main() {
    int m, n;
    cout << "Enter grid dimensions (m n): ";
    cin >> m >> n;
    
    cout << "Unique paths: " << uniquePaths(m, n) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class UniquePaths {
    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }
            }
        }
        
        return dp[m-1][n-1];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter grid dimensions (m n): ");
        int m = sc.nextInt();
        int n = sc.nextInt();
        
        System.out.println("Unique paths: " + uniquePaths(m, n));
        
        sc.close();
    }
}`,
      python: `def unique_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]

# Input
m, n = map(int, input("Enter grid dimensions (m n): ").split())

print(f"Unique paths: {unique_paths(m, n)}")`
    }
  },
  79: {
    id: 79,
    title: 'Jump Game',
    description: 'Check if you can reach the end of array by jumping.',
    difficulty: 'Medium',
    input: 'Array of jump lengths',
    output: 'True if reachable',
    example: {
      input: '[2,3,1,1,4]',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool canJump(vector<int>& nums) {
    int maxReach = 0;
    
    for (int i = 0; i < nums.size(); i++) {
        if (i > maxReach) {
            return false;
        }
        
        maxReach = max(maxReach, i + nums[i]);
        
        if (maxReach >= nums.size() - 1) {
            return true;
        }
    }
    
    return true;
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter jump lengths: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << (canJump(nums) ? "Can reach end" : "Cannot reach end") << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class JumpGame {
    public static boolean canJump(int[] nums) {
        int maxReach = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) {
                return false;
            }
            
            maxReach = Math.max(maxReach, i + nums[i]);
            
            if (maxReach >= nums.length - 1) {
                return true;
            }
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter jump lengths: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.println(canJump(nums) ? "Can reach end" : "Cannot reach end");
        
        sc.close();
    }
}`,
      python: `def can_jump(nums):
    max_reach = 0
    
    for i in range(len(nums)):
        if i > max_reach:
            return False
        
        max_reach = max(max_reach, i + nums[i])
        
        if max_reach >= len(nums) - 1:
            return True
    
    return True

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter jump lengths: ").split()))

print("Can reach end" if can_jump(nums) else "Cannot reach end")`
    }
  },
  80: {
    id: 80,
    title: 'Min Stack',
    description: 'Design stack with getMin operation in O(1).',
    difficulty: 'Medium',
    input: 'Stack operations',
    output: 'Stack with min tracking',
    example: {
      input: 'push(-2), push(0), push(-3), getMin(), pop(), getMin()',
      output: '-3, -2'
    },
    solutions: {
      cpp: `#include <iostream>
#include <stack>
using namespace std;

class MinStack {
private:
    stack<int> st;
    stack<int> minSt;
    
public:
    void push(int val) {
        st.push(val);
        
        if (minSt.empty() || val <= minSt.top()) {
            minSt.push(val);
        }
    }
    
    void pop() {
        if (st.top() == minSt.top()) {
            minSt.pop();
        }
        st.pop();
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return minSt.top();
    }
};

int main() {
    MinStack minStack;
    
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    
    cout << "Min: " << minStack.getMin() << endl;
    
    minStack.pop();
    
    cout << "Top: " << minStack.top() << endl;
    cout << "Min: " << minStack.getMin() << endl;
    
    return 0;
}`,
      java: `import java.util.Stack;

class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
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
        MinStack minStack = new MinStack();
        
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        
        System.out.println("Min: " + minStack.getMin());
        
        minStack.pop();
        
        System.out.println("Top: " + minStack.top());
        System.out.println("Min: " + minStack.getMin());
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

# Example usage
min_stack = MinStack()

min_stack.push(-2)
min_stack.push(0)
min_stack.push(-3)

print(f"Min: {min_stack.get_min()}")

min_stack.pop()

print(f"Top: {min_stack.top()}")
print(f"Min: {min_stack.get_min()}")`
    }
  },
  83: {
    id: 83,
    title: 'Regular Expression Matching',
    description: 'Implement regex matching with . and *.',
    difficulty: 'Hard',
    input: 'String and pattern',
    output: 'True if matches',
    example: {
      input: 's="aa", p="a*"',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isMatch(string s, string p) {
    int m = s.length();
    int n = p.length();
    
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, etc.
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
            dp[0][j] = dp[0][j-2];
        }
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == s[i-1] || p[j-1] == '.') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                dp[i][j] = dp[i][j-2]; // Zero occurrence
                
                if (p[j-2] == s[i-1] || p[j-2] == '.') {
                    dp[i][j] = dp[i][j] || dp[i-1][j]; // One or more occurrences
                }
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    string s, p;
    cout << "Enter string: ";
    cin >> s;
    cout << "Enter pattern: ";
    cin >> p;
    
    cout << (isMatch(s, p) ? "Match" : "No match") << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class RegexMatching {
    public static boolean isMatch(String s, String p) {
        int m = s.length();
        int n = p.length();
        
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;
        
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j-1) == '*') {
                dp[0][j] = dp[0][j-2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == s.charAt(i-1) || p.charAt(j-1) == '.') {
                    dp[i][j] = dp[i-1][j-1];
                } else if (p.charAt(j-1) == '*') {
                    dp[i][j] = dp[i][j-2];
                    
                    if (p.charAt(j-2) == s.charAt(i-1) || p.charAt(j-2) == '.') {
                        dp[i][j] = dp[i][j] || dp[i-1][j];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter string: ");
        String s = sc.next();
        System.out.print("Enter pattern: ");
        String p = sc.next();
        
        System.out.println(isMatch(s, p) ? "Match" : "No match");
        
        sc.close();
    }
}`,
      python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    for j in range(1, n + 1):
        if p[j-1] == '*':
            dp[0][j] = dp[0][j-2]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == s[i-1] or p[j-1] == '.':
                dp[i][j] = dp[i-1][j-1]
            elif p[j-1] == '*':
                dp[i][j] = dp[i][j-2]
                
                if p[j-2] == s[i-1] or p[j-2] == '.':
                    dp[i][j] = dp[i][j] or dp[i-1][j]
    
    return dp[m][n]

# Input
s = input("Enter string: ")
p = input("Enter pattern: ")

print("Match" if is_match(s, p) else "No match")`
    }
  },
  84: {
    id: 84,
    title: 'Wildcard Matching',
    description: 'Implement wildcard matching with ? and *.',
    difficulty: 'Hard',
    input: 'String and pattern',
    output: 'True if matches',
    example: {
      input: 's="aa", p="*"',
      output: 'True'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isMatch(string s, string p) {
    int m = s.length();
    int n = p.length();
    
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
    dp[0][0] = true;
    
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
            dp[0][j] = dp[0][j-1];
        }
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == s[i-1] || p[j-1] == '?') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                dp[i][j] = dp[i][j-1] || dp[i-1][j];
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    string s, p;
    cout << "Enter string: ";
    cin >> s;
    cout << "Enter pattern: ";
    cin >> p;
    
    cout << (isMatch(s, p) ? "Match" : "No match") << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class WildcardMatching {
    public static boolean isMatch(String s, String p) {
        int m = s.length();
        int n = p.length();
        
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;
        
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j-1) == '*') {
                dp[0][j] = dp[0][j-1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == s.charAt(i-1) || p.charAt(j-1) == '?') {
                    dp[i][j] = dp[i-1][j-1];
                } else if (p.charAt(j-1) == '*') {
                    dp[i][j] = dp[i][j-1] || dp[i-1][j];
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter string: ");
        String s = sc.next();
        System.out.print("Enter pattern: ");
        String p = sc.next();
        
        System.out.println(isMatch(s, p) ? "Match" : "No match");
        
        sc.close();
    }
}`,
      python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    for j in range(1, n + 1):
        if p[j-1] == '*':
            dp[0][j] = dp[0][j-1]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == s[i-1] or p[j-1] == '?':
                dp[i][j] = dp[i-1][j-1]
            elif p[j-1] == '*':
                dp[i][j] = dp[i][j-1] or dp[i-1][j]
    
    return dp[m][n]

# Input
s = input("Enter string: ")
p = input("Enter pattern: ")

print("Match" if is_match(s, p) else "No match")`
    }
  },
  85: {
    id: 85,
    title: 'Median of Two Sorted Arrays',
    description: 'Find median of two sorted arrays in O(log(m+n)).',
    difficulty: 'Hard',
    input: 'Two sorted arrays',
    output: 'Median value',
    example: {
      input: '[1,3], [2]',
      output: '2.0'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int m = nums1.size();
    int n = nums2.size();
    int low = 0, high = m;
    
    while (low <= high) {
        int partition1 = (low + high) / 2;
        int partition2 = (m + n + 1) / 2 - partition1;
        
        int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
        int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
        
        int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
        int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 == 0) {
                return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
            } else {
                return max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } else {
            low = partition1 + 1;
        }
    }
    
    return 0.0;
}

int main() {
    int m, n;
    cout << "Enter size of first array: ";
    cin >> m;
    
    vector<int> nums1(m);
    cout << "Enter first sorted array: ";
    for (int i = 0; i < m; i++) {
        cin >> nums1[i];
    }
    
    cout << "Enter size of second array: ";
    cin >> n;
    
    vector<int> nums2(n);
    cout << "Enter second sorted array: ";
    for (int i = 0; i < n; i++) {
        cin >> nums2[i];
    }
    
    cout << "Median: " << findMedianSortedArrays(nums1, nums2) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class MedianSortedArrays {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length;
        int n = nums2.length;
        int low = 0, high = m;
        
        while (low <= high) {
            int partition1 = (low + high) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            int maxLeft1 = (partition1 == 0) ? Integer.MIN_VALUE : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? Integer.MAX_VALUE : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? Integer.MIN_VALUE : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? Integer.MAX_VALUE : nums2[partition2];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                high = partition1 - 1;
            } else {
                low = partition1 + 1;
            }
        }
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter size of first array: ");
        int m = sc.nextInt();
        
        int[] nums1 = new int[m];
        System.out.print("Enter first sorted array: ");
        for (int i = 0; i < m; i++) {
            nums1[i] = sc.nextInt();
        }
        
        System.out.print("Enter size of second array: ");
        int n = sc.nextInt();
        
        int[] nums2 = new int[n];
        System.out.print("Enter second sorted array: ");
        for (int i = 0; i < n; i++) {
            nums2[i] = sc.nextInt();
        }
        
        System.out.println("Median: " + findMedianSortedArrays(nums1, nums2));
        
        sc.close();
    }
}`,
      python: `def find_median_sorted_arrays(nums1, nums2):
    if len(nums1) > len(nums2):
        return find_median_sorted_arrays(nums2, nums1)
    
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    
    while low <= high:
        partition1 = (low + high) // 2
        partition2 = (m + n + 1) // 2 - partition1
        
        max_left1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
        min_right1 = float('inf') if partition1 == m else nums1[partition1]
        
        max_left2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
        min_right2 = float('inf') if partition2 == n else nums2[partition2]
        
        if max_left1 <= min_right2 and max_left2 <= min_right1:
            if (m + n) % 2 == 0:
                return (max(max_left1, max_left2) + min(min_right1, min_right2)) / 2.0
            else:
                return max(max_left1, max_left2)
        elif max_left1 > min_right2:
            high = partition1 - 1
        else:
            low = partition1 + 1
    
    return 0.0

# Input
m = int(input("Enter size of first array: "))
nums1 = list(map(int, input("Enter first sorted array: ").split()))

n = int(input("Enter size of second array: "))
nums2 = list(map(int, input("Enter second sorted array: ").split()))

print(f"Median: {find_median_sorted_arrays(nums1, nums2)}")`
    }
  },
  86: {
    id: 86,
    title: 'Edit Distance',
    description: 'Minimum operations to convert one string to another.',
    difficulty: 'Hard',
    input: 'Two strings',
    output: 'Minimum edit distance',
    example: {
      input: '"horse", "ros"',
      output: '3'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int minDistance(string word1, string word2) {
    int m = word1.length();
    int n = word2.length();
    
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    
    for (int i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    
    for (int j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    string word1, word2;
    cout << "Enter first string: ";
    cin >> word1;
    cout << "Enter second string: ";
    cin >> word2;
    
    cout << "Edit distance: " << minDistance(word1, word2) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class EditDistance {
    public static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String word1 = sc.next();
        System.out.print("Enter second string: ");
        String word2 = sc.next();
        
        System.out.println("Edit distance: " + minDistance(word1, word2));
        
        sc.close();
    }
}`,
      python: `def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    
    return dp[m][n]

# Input
word1 = input("Enter first string: ")
word2 = input("Enter second string: ")

print(f"Edit distance: {min_distance(word1, word2)}")`
    }
  },
  87: {
    id: 87,
    title: 'Longest Increasing Path in Matrix',
    description: 'Find longest increasing path in a matrix.',
    difficulty: 'Hard',
    input: 'Matrix',
    output: 'Length of longest increasing path',
    example: {
      input: '[[9,9,4],[6,6,8],[2,1,1]]',
      output: '4'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int dfs(vector<vector<int>>& matrix, vector<vector<int>>& memo, int i, int j) {
    if (memo[i][j] != 0) {
        return memo[i][j];
    }
    
    int m = matrix.size();
    int n = matrix[0].size();
    int maxLen = 1;
    
    int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    
    for (auto& dir : dirs) {
        int x = i + dir[0];
        int y = j + dir[1];
        
        if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
            maxLen = max(maxLen, 1 + dfs(matrix, memo, x, y));
        }
    }
    
    memo[i][j] = maxLen;
    return maxLen;
}

int longestIncreasingPath(vector<vector<int>>& matrix) {
    if (matrix.empty()) return 0;
    
    int m = matrix.size();
    int n = matrix[0].size();
    vector<vector<int>> memo(m, vector<int>(n, 0));
    int result = 0;
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            result = max(result, dfs(matrix, memo, i, j));
        }
    }
    
    return result;
}

int main() {
    int m, n;
    cout << "Enter matrix dimensions (m n): ";
    cin >> m >> n;
    
    vector<vector<int>> matrix(m, vector<int>(n));
    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    cout << "Longest path: " << longestIncreasingPath(matrix) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class LongestIncreasingPath {
    private static int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    
    public static int dfs(int[][] matrix, int[][] memo, int i, int j) {
        if (memo[i][j] != 0) {
            return memo[i][j];
        }
        
        int m = matrix.length;
        int n = matrix[0].length;
        int maxLen = 1;
        
        for (int[] dir : dirs) {
            int x = i + dir[0];
            int y = j + dir[1];
            
            if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
                maxLen = Math.max(maxLen, 1 + dfs(matrix, memo, x, y));
            }
        }
        
        memo[i][j] = maxLen;
        return maxLen;
    }
    
    public static int longestIncreasingPath(int[][] matrix) {
        if (matrix.length == 0) return 0;
        
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] memo = new int[m][n];
        int result = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result = Math.max(result, dfs(matrix, memo, i, j));
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter matrix dimensions (m n): ");
        int m = sc.nextInt();
        int n = sc.nextInt();
        
        int[][] matrix = new int[m][n];
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        
        System.out.println("Longest path: " + longestIncreasingPath(matrix));
        
        sc.close();
    }
}`,
      python: `def longest_increasing_path(matrix):
    if not matrix:
        return 0
    
    m, n = len(matrix), len(matrix[0])
    memo = [[0] * n for _ in range(m)]
    
    def dfs(i, j):
        if memo[i][j] != 0:
            return memo[i][j]
        
        max_len = 1
        dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        for dx, dy in dirs:
            x, y = i + dx, j + dy
            
            if 0 <= x < m and 0 <= y < n and matrix[x][y] > matrix[i][j]:
                max_len = max(max_len, 1 + dfs(x, y))
        
        memo[i][j] = max_len
        return max_len
    
    result = 0
    for i in range(m):
        for j in range(n):
            result = max(result, dfs(i, j))
    
    return result

# Input
m, n = map(int, input("Enter matrix dimensions (m n): ").split())
matrix = []
print("Enter matrix elements:")
for i in range(m):
    row = list(map(int, input().split()))
    matrix.append(row)

print(f"Longest path: {longest_increasing_path(matrix)}")`
    }
  },
  88: {
    id: 88,
    title: 'Word Ladder',
    description: 'Find shortest transformation sequence from begin to end word.',
    difficulty: 'Hard',
    input: 'Begin word, end word, word list',
    output: 'Length of shortest transformation',
    example: {
      input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]',
      output: '5'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <unordered_set>
using namespace std;

int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    unordered_set<string> wordSet(wordList.begin(), wordList.end());
    
    if (wordSet.find(endWord) == wordSet.end()) {
        return 0;
    }
    
    queue<pair<string, int>> q;
    q.push({beginWord, 1});
    
    while (!q.empty()) {
        auto [word, level] = q.front();
        q.pop();
        
        if (word == endWord) {
            return level;
        }
        
        for (int i = 0; i < word.length(); i++) {
            string temp = word;
            for (char c = 'a'; c <= 'z'; c++) {
                temp[i] = c;
                
                if (wordSet.find(temp) != wordSet.end()) {
                    q.push({temp, level + 1});
                    wordSet.erase(temp);
                }
            }
        }
    }
    
    return 0;
}

int main() {
    string beginWord, endWord;
    int n;
    
    cout << "Enter begin word: ";
    cin >> beginWord;
    cout << "Enter end word: ";
    cin >> endWord;
    cout << "Enter number of words in list: ";
    cin >> n;
    
    vector<string> wordList(n);
    cout << "Enter word list: ";
    for (int i = 0; i < n; i++) {
        cin >> wordList[i];
    }
    
    cout << "Shortest transformation: " << ladderLength(beginWord, endWord, wordList) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class WordLadder {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        
        if (!wordSet.contains(endWord)) {
            return 0;
        }
        
        Queue<Pair> queue = new LinkedList<>();
        queue.offer(new Pair(beginWord, 1));
        
        while (!queue.isEmpty()) {
            Pair p = queue.poll();
            String word = p.word;
            int level = p.level;
            
            if (word.equals(endWord)) {
                return level;
            }
            
            char[] chars = word.toCharArray();
            for (int i = 0; i < chars.length; i++) {
                char original = chars[i];
                
                for (char c = 'a'; c <= 'z'; c++) {
                    chars[i] = c;
                    String temp = new String(chars);
                    
                    if (wordSet.contains(temp)) {
                        queue.offer(new Pair(temp, level + 1));
                        wordSet.remove(temp);
                    }
                }
                
                chars[i] = original;
            }
        }
        
        return 0;
    }
    
    static class Pair {
        String word;
        int level;
        
        Pair(String word, int level) {
            this.word = word;
            this.level = level;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter begin word: ");
        String beginWord = sc.next();
        System.out.print("Enter end word: ");
        String endWord = sc.next();
        System.out.print("Enter number of words in list: ");
        int n = sc.nextInt();
        
        List<String> wordList = new ArrayList<>();
        System.out.print("Enter word list: ");
        for (int i = 0; i < n; i++) {
            wordList.add(sc.next());
        }
        
        System.out.println("Shortest transformation: " + ladderLength(beginWord, endWord, wordList));
        
        sc.close();
    }
}`,
      python: `from collections import deque

def ladder_length(begin_word, end_word, word_list):
    word_set = set(word_list)
    
    if end_word not in word_set:
        return 0
    
    queue = deque([(begin_word, 1)])
    
    while queue:
        word, level = queue.popleft()
        
        if word == end_word:
            return level
        
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                temp = word[:i] + c + word[i+1:]
                
                if temp in word_set:
                    queue.append((temp, level + 1))
                    word_set.remove(temp)
    
    return 0

# Input
begin_word = input("Enter begin word: ")
end_word = input("Enter end word: ")
n = int(input("Enter number of words in list: "))
word_list = input("Enter word list: ").split()

print(f"Shortest transformation: {ladder_length(begin_word, end_word, word_list)}")`
    }
  },
  89: {
    id: 89,
    title: 'Largest Rectangle in Histogram',
    description: 'Find largest rectangle area in histogram.',
    difficulty: 'Hard',
    input: 'Array of heights',
    output: 'Maximum rectangle area',
    example: {
      input: '[2,1,5,6,2,3]',
      output: '10'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0;
    int n = heights.size();
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!st.empty() && h < heights[st.top()]) {
            int height = heights[st.top()];
            st.pop();
            
            int width = st.empty() ? i : i - st.top() - 1;
            maxArea = max(maxArea, height * width);
        }
        
        st.push(i);
    }
    
    return maxArea;
}

int main() {
    int n;
    cout << "Enter number of bars: ";
    cin >> n;
    
    vector<int> heights(n);
    cout << "Enter heights: ";
    for (int i = 0; i < n; i++) {
        cin >> heights[i];
    }
    
    cout << "Largest rectangle area: " << largestRectangleArea(heights) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class LargestRectangle {
    public static int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            
            stack.push(i);
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of bars: ");
        int n = sc.nextInt();
        
        int[] heights = new int[n];
        System.out.print("Enter heights: ");
        for (int i = 0; i < n; i++) {
            heights[i] = sc.nextInt();
        }
        
        System.out.println("Largest rectangle area: " + largestRectangleArea(heights));
        
        sc.close();
    }
}`,
      python: `def largest_rectangle_area(heights):
    stack = []
    max_area = 0
    n = len(heights)
    
    for i in range(n + 1):
        h = 0 if i == n else heights[i]
        
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        
        stack.append(i)
    
    return max_area

# Input
n = int(input("Enter number of bars: "))
heights = list(map(int, input("Enter heights: ").split()))

print(f"Largest rectangle area: {largest_rectangle_area(heights)}")`
    }
  },
  90: {
    id: 90,
    title: 'Maximal Rectangle',
    description: 'Find largest rectangle in binary matrix.',
    difficulty: 'Hard',
    input: 'Binary matrix',
    output: 'Maximum rectangle area',
    example: {
      input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
      output: '6'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

int largestRectangleInHistogram(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0;
    int n = heights.size();
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!st.empty() && h < heights[st.top()]) {
            int height = heights[st.top()];
            st.pop();
            
            int width = st.empty() ? i : i - st.top() - 1;
            maxArea = max(maxArea, height * width);
        }
        
        st.push(i);
    }
    
    return maxArea;
}

int maximalRectangle(vector<vector<char>>& matrix) {
    if (matrix.empty()) return 0;
    
    int m = matrix.size();
    int n = matrix[0].size();
    vector<int> heights(n, 0);
    int maxArea = 0;
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }
        
        maxArea = max(maxArea, largestRectangleInHistogram(heights));
    }
    
    return maxArea;
}

int main() {
    int m, n;
    cout << "Enter matrix dimensions (m n): ";
    cin >> m >> n;
    
    vector<vector<char>> matrix(m, vector<char>(n));
    cout << "Enter binary matrix (0s and 1s):" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    cout << "Maximal rectangle: " << maximalRectangle(matrix) << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class MaximalRectangle {
    public static int largestRectangleInHistogram(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            
            stack.push(i);
        }
        
        return maxArea;
    }
    
    public static int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) return 0;
        
        int m = matrix.length;
        int n = matrix[0].length;
        int[] heights = new int[n];
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            
            maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter matrix dimensions (m n): ");
        int m = sc.nextInt();
        int n = sc.nextInt();
        
        char[][] matrix = new char[m][n];
        System.out.println("Enter binary matrix (0s and 1s):");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.next().charAt(0);
            }
        }
        
        System.out.println("Maximal rectangle: " + maximalRectangle(matrix));
        
        sc.close();
    }
}`,
      python: `def largest_rectangle_histogram(heights):
    stack = []
    max_area = 0
    n = len(heights)
    
    for i in range(n + 1):
        h = 0 if i == n else heights[i]
        
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        
        stack.append(i)
    
    return max_area

def maximal_rectangle(matrix):
    if not matrix:
        return 0
    
    m, n = len(matrix), len(matrix[0])
    heights = [0] * n
    max_area = 0
    
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == '1':
                heights[j] += 1
            else:
                heights[j] = 0
        
        max_area = max(max_area, largest_rectangle_histogram(heights))
    
    return max_area

# Input
m, n = map(int, input("Enter matrix dimensions (m n): ").split())
matrix = []
print("Enter binary matrix (0s and 1s):")
for i in range(m):
    row = input().split()
    matrix.append(row)

print(f"Maximal rectangle: {maximal_rectangle(matrix)}")`
    }
  },
  91: {
    id: 91,
    title: 'Sudoku Solver',
    description: 'Solve Sudoku puzzle using backtracking.',
    difficulty: 'Hard',
    input: '9x9 grid with empty cells',
    output: 'Solved Sudoku',
    example: {
      input: '9x9 grid with some filled cells',
      output: 'Complete valid Sudoku'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isValid(vector<vector<char>>& board, int row, int col, char num) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num || board[i][col] == num) {
            return false;
        }
    }
    
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] == num) {
                return false;
            }
        }
    }
    
    return true;
}

bool solveSudoku(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char num = '1'; num <= '9'; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        
                        if (solveSudoku(board)) {
                            return true;
                        }
                        
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main() {
    vector<vector<char>> board(9, vector<char>(9));
    
    cout << "Enter Sudoku grid (use . for empty cells):" << endl;
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> board[i][j];
        }
    }
    
    if (solveSudoku(board)) {
        cout << "Solved Sudoku:" << endl;
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                cout << board[i][j] << " ";
            }
            cout << endl;
        }
    } else {
        cout << "No solution exists" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class SudokuSolver {
    public static boolean isValid(char[][] board, int row, int col, char num) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num) {
                return false;
            }
        }
        
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] == num) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    public static boolean solveSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, i, j, num)) {
                            board[i][j] = num;
                            
                            if (solveSudoku(board)) {
                                return true;
                            }
                            
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[][] board = new char[9][9];
        
        System.out.println("Enter Sudoku grid (use . for empty cells):");
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                board[i][j] = sc.next().charAt(0);
            }
        }
        
        if (solveSudoku(board)) {
            System.out.println("Solved Sudoku:");
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    System.out.print(board[i][j] + " ");
                }
                System.out.println();
            }
        } else {
            System.out.println("No solution exists");
        }
        
        sc.close();
    }
}`,
      python: `def is_valid(board, row, col, num):
    for i in range(9):
        if board[row][i] == num or board[i][col] == num:
            return False
    
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    
    for i in range(3):
        for j in range(3):
            if board[start_row + i][start_col + j] == num:
                return False
    
    return True

def solve_sudoku(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == '.':
                for num in '123456789':
                    if is_valid(board, i, j, num):
                        board[i][j] = num
                        
                        if solve_sudoku(board):
                            return True
                        
                        board[i][j] = '.'
                return False
    return True

# Input
board = []
print("Enter Sudoku grid (use . for empty cells):")
for i in range(9):
    row = input().split()
    board.append(row)

if solve_sudoku(board):
    print("Solved Sudoku:")
    for row in board:
        print(' '.join(row))
else:
    print("No solution exists")`
    }
  },
  92: {
    id: 92,
    title: 'Alien Dictionary',
    description: 'Derive order of characters in alien language.',
    difficulty: 'Hard',
    input: 'Array of sorted words',
    output: 'Character order',
    example: {
      input: '["wrt","wrf","er","ett","rftt"]',
      output: '"wertf"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

string alienOrder(vector<string>& words) {
    unordered_map<char, unordered_set<char>> graph;
    unordered_map<char, int> inDegree;
    
    // Initialize
    for (const string& word : words) {
        for (char c : word) {
            inDegree[c] = 0;
        }
    }
    
    // Build graph
    for (int i = 0; i < words.size() - 1; i++) {
        string word1 = words[i];
        string word2 = words[i + 1];
        int minLen = min(word1.length(), word2.length());
        
        for (int j = 0; j < minLen; j++) {
            if (word1[j] != word2[j]) {
                if (graph[word1[j]].find(word2[j]) == graph[word1[j]].end()) {
                    graph[word1[j]].insert(word2[j]);
                    inDegree[word2[j]]++;
                }
                break;
            }
        }
    }
    
    // Topological sort
    queue<char> q;
    for (auto& [c, degree] : inDegree) {
        if (degree == 0) {
            q.push(c);
        }
    }
    
    string result;
    while (!q.empty()) {
        char c = q.front();
        q.pop();
        result += c;
        
        for (char neighbor : graph[c]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] == 0) {
                q.push(neighbor);
            }
        }
    }
    
    return result.length() == inDegree.size() ? result : "";
}

int main() {
    int n;
    cout << "Enter number of words: ";
    cin >> n;
    
    vector<string> words(n);
    cout << "Enter words: ";
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    
    string order = alienOrder(words);
    
    if (!order.empty()) {
        cout << "Character order: " << order << endl;
    } else {
        cout << "Invalid input" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class AlienDictionary {
    public static String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> inDegree = new HashMap<>();
        
        for (String word : words) {
            for (char c : word.toCharArray()) {
                inDegree.put(c, 0);
                graph.put(c, new HashSet<>());
            }
        }
        
        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i];
            String word2 = words[i + 1];
            int minLen = Math.min(word1.length(), word2.length());
            
            for (int j = 0; j < minLen; j++) {
                if (word1.charAt(j) != word2.charAt(j)) {
                    char from = word1.charAt(j);
                    char to = word2.charAt(j);
                    
                    if (!graph.get(from).contains(to)) {
                        graph.get(from).add(to);
                        inDegree.put(to, inDegree.get(to) + 1);
                    }
                    break;
                }
            }
        }
        
        Queue<Character> queue = new LinkedList<>();
        for (char c : inDegree.keySet()) {
            if (inDegree.get(c) == 0) {
                queue.offer(c);
            }
        }
        
        StringBuilder result = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            result.append(c);
            
            for (char neighbor : graph.get(c)) {
                inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        
        return result.length() == inDegree.size() ? result.toString() : "";
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of words: ");
        int n = sc.nextInt();
        
        String[] words = new String[n];
        System.out.print("Enter words: ");
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        
        String order = alienOrder(words);
        
        if (!order.isEmpty()) {
            System.out.println("Character order: " + order);
        } else {
            System.out.println("Invalid input");
        }
        
        sc.close();
    }
}`,
      python: `from collections import defaultdict, deque

def alien_order(words):
    graph = defaultdict(set)
    in_degree = {c: 0 for word in words for c in word}
    
    for i in range(len(words) - 1):
        word1, word2 = words[i], words[i + 1]
        min_len = min(len(word1), len(word2))
        
        for j in range(min_len):
            if word1[j] != word2[j]:
                if word2[j] not in graph[word1[j]]:
                    graph[word1[j]].add(word2[j])
                    in_degree[word2[j]] += 1
                break
    
    queue = deque([c for c in in_degree if in_degree[c] == 0])
    result = []
    
    while queue:
        c = queue.popleft()
        result.append(c)
        
        for neighbor in graph[c]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return ''.join(result) if len(result) == len(in_degree) else ""

# Input
n = int(input("Enter number of words: "))
words = input("Enter words: ").split()

order = alien_order(words)

if order:
    print(f"Character order: {order}")
else:
    print("Invalid input")`
    }
  },
  93: {
    id: 93,
    title: 'Serialize and Deserialize Binary Tree',
    description: 'Convert binary tree to string and back.',
    difficulty: 'Hard',
    input: 'Binary tree',
    output: 'Serialized string',
    example: {
      input: '[1,2,3,null,null,4,5]',
      output: '"1,2,null,null,3,4,null,null,5,null,null"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <sstream>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        if (!root) return "null";
        
        string result = to_string(root->val);
        result += "," + serialize(root->left);
        result += "," + serialize(root->right);
        
        return result;
    }
    
    TreeNode* deserialize(string data) {
        istringstream iss(data);
        return deserializeHelper(iss);
    }
    
private:
    TreeNode* deserializeHelper(istringstream& iss) {
        string val;
        getline(iss, val, ',');
        
        if (val == "null") return NULL;
        
        TreeNode* node = new TreeNode(stoi(val));
        node->left = deserializeHelper(iss);
        node->right = deserializeHelper(iss);
        
        return node;
    }
};

int main() {
    // Example: Serialize [1,2,3,null,null,4,5]
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    
    Codec codec;
    string serialized = codec.serialize(root);
    cout << "Serialized: " << serialized << endl;
    
    TreeNode* deserialized = codec.deserialize(serialized);
    cout << "Deserialized tree root: " << deserialized->val << endl;
    
    return 0;
}`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class SerializeDeserialize {
    public String serialize(TreeNode root) {
        if (root == null) return "null";
        
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }
    
    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(queue);
    }
    
    private TreeNode deserializeHelper(Queue<String> queue) {
        String val = queue.poll();
        
        if (val.equals("null")) return null;
        
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        
        return node;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        SerializeDeserialize sd = new SerializeDeserialize();
        String serialized = sd.serialize(root);
        System.out.println("Serialized: " + serialized);
        
        TreeNode deserialized = sd.deserialize(serialized);
        System.out.println("Deserialized tree root: " + deserialized.val);
    }
}`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root):
        if not root:
            return "null"
        
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"
    
    def deserialize(self, data):
        def helper():
            val = next(values)
            if val == "null":
                return None
            
            node = TreeNode(int(val))
            node.left = helper()
            node.right = helper()
            
            return node
        
        values = iter(data.split(','))
        return helper()

# Example
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.right.left = TreeNode(4)
root.right.right = TreeNode(5)

codec = Codec()
serialized = codec.serialize(root)
print(f"Serialized: {serialized}")

deserialized = codec.deserialize(serialized)
print(f"Deserialized tree root: {deserialized.val}")`
    }
  },
  94: {
    id: 94,
    title: 'Critical Connections in Network',
    description: 'Find all bridges in an undirected graph.',
    difficulty: 'Hard',
    input: 'Graph edges',
    output: 'List of critical connections',
    example: {
      input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]',
      output: '[[1,3]]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
private:
    int timer = 0;
    
    void dfs(int node, int parent, vector<vector<int>>& graph, 
             vector<int>& disc, vector<int>& low, vector<vector<int>>& result) {
        disc[node] = low[node] = timer++;
        
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue;
            
            if (disc[neighbor] == -1) {
                dfs(neighbor, node, graph, disc, low, result);
                low[node] = min(low[node], low[neighbor]);
                
                if (low[neighbor] > disc[node]) {
                    result.push_back({node, neighbor});
                }
            } else {
                low[node] = min(low[node], disc[neighbor]);
            }
        }
    }
    
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        vector<vector<int>> graph(n);
        vector<int> disc(n, -1);
        vector<int> low(n, -1);
        vector<vector<int>> result;
        
        for (auto& conn : connections) {
            graph[conn[0]].push_back(conn[1]);
            graph[conn[1]].push_back(conn[0]);
        }
        
        dfs(0, -1, graph, disc, low, result);
        
        return result;
    }
};

int main() {
    int n, m;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of connections: ";
    cin >> m;
    
    vector<vector<int>> connections(m, vector<int>(2));
    cout << "Enter connections:" << endl;
    for (int i = 0; i < m; i++) {
        cin >> connections[i][0] >> connections[i][1];
    }
    
    Solution sol;
    vector<vector<int>> result = sol.criticalConnections(n, connections);
    
    cout << "Critical connections:" << endl;
    for (auto& conn : result) {
        cout << "[" << conn[0] << "," << conn[1] << "]" << endl;
    }
    
    return 0;
}`,
      java: `import java.util.*;

public class CriticalConnections {
    private int timer = 0;
    
    private void dfs(int node, int parent, List<List<Integer>> graph,
                     int[] disc, int[] low, List<List<Integer>> result) {
        disc[node] = low[node] = timer++;
        
        for (int neighbor : graph.get(node)) {
            if (neighbor == parent) continue;
            
            if (disc[neighbor] == -1) {
                dfs(neighbor, node, graph, disc, low, result);
                low[node] = Math.min(low[node], low[neighbor]);
                
                if (low[neighbor] > disc[node]) {
                    result.add(Arrays.asList(node, neighbor));
                }
            } else {
                low[node] = Math.min(low[node], disc[neighbor]);
            }
        }
    }
    
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        int[] disc = new int[n];
        int[] low = new int[n];
        Arrays.fill(disc, -1);
        Arrays.fill(low, -1);
        List<List<Integer>> result = new ArrayList<>();
        
        for (List<Integer> conn : connections) {
            graph.get(conn.get(0)).add(conn.get(1));
            graph.get(conn.get(1)).add(conn.get(0));
        }
        
        dfs(0, -1, graph, disc, low, result);
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of nodes: ");
        int n = sc.nextInt();
        System.out.print("Enter number of connections: ");
        int m = sc.nextInt();
        
        List<List<Integer>> connections = new ArrayList<>();
        System.out.println("Enter connections:");
        for (int i = 0; i < m; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            connections.add(Arrays.asList(u, v));
        }
        
        CriticalConnections cc = new CriticalConnections();
        List<List<Integer>> result = cc.criticalConnections(n, connections);
        
        System.out.println("Critical connections:");
        for (List<Integer> conn : result) {
            System.out.println("[" + conn.get(0) + "," + conn.get(1) + "]");
        }
        
        sc.close();
    }
}`,
      python: `class Solution:
    def __init__(self):
        self.timer = 0
    
    def critical_connections(self, n, connections):
        graph = [[] for _ in range(n)]
        disc = [-1] * n
        low = [-1] * n
        result = []
        
        for u, v in connections:
            graph[u].append(v)
            graph[v].append(u)
        
        def dfs(node, parent):
            disc[node] = low[node] = self.timer
            self.timer += 1
            
            for neighbor in graph[node]:
                if neighbor == parent:
                    continue
                
                if disc[neighbor] == -1:
                    dfs(neighbor, node)
                    low[node] = min(low[node], low[neighbor])
                    
                    if low[neighbor] > disc[node]:
                        result.append([node, neighbor])
                else:
                    low[node] = min(low[node], disc[neighbor])
        
        dfs(0, -1)
        return result

# Input
n = int(input("Enter number of nodes: "))
m = int(input("Enter number of connections: "))

connections = []
print("Enter connections:")
for i in range(m):
    u, v = map(int, input().split())
    connections.append([u, v])

sol = Solution()
result = sol.critical_connections(n, connections)

print("Critical connections:")
for conn in result:
    print(f"[{conn[0]},{conn[1]}]")`
    }
  },
  95: {
    id: 95,
    title: 'Shortest Path with Alternating Colors',
    description: 'Find shortest path alternating red and blue edges.',
    difficulty: 'Hard',
    input: 'Graph with colored edges',
    output: 'Shortest distances',
    example: {
      input: 'n=3, red_edges=[[0,1],[1,2]], blue_edges=[]',
      output: '[0,1,-1]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& red_edges, 
                                      vector<vector<int>>& blue_edges) {
    vector<vector<pair<int, int>>> graph(n);
    
    for (auto& e : red_edges) {
        graph[e[0]].push_back({e[1], 0}); // 0 for red
    }
    
    for (auto& e : blue_edges) {
        graph[e[0]].push_back({e[1], 1}); // 1 for blue
    }
    
    vector<int> result(n, -1);
    queue<tuple<int, int, int>> q; // node, color, distance
    vector<vector<bool>> visited(n, vector<bool>(2, false));
    
    q.push({0, 0, 0}); // Start with red
    q.push({0, 1, 0}); // Start with blue
    visited[0][0] = visited[0][1] = true;
    
    while (!q.empty()) {
        auto [node, color, dist] = q.front();
        q.pop();
        
        if (result[node] == -1) {
            result[node] = dist;
        }
        
        for (auto& [neighbor, edgeColor] : graph[node]) {
            if (edgeColor != color && !visited[neighbor][edgeColor]) {
                visited[neighbor][edgeColor] = true;
                q.push({neighbor, edgeColor, dist + 1});
            }
        }
    }
    
    return result;
}

int main() {
    int n, r, b;
    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter number of red edges: ";
    cin >> r;
    
    vector<vector<int>> red_edges(r, vector<int>(2));
    cout << "Enter red edges:" << endl;
    for (int i = 0; i < r; i++) {
        cin >> red_edges[i][0] >> red_edges[i][1];
    }
    
    cout << "Enter number of blue edges: ";
    cin >> b;
    
    vector<vector<int>> blue_edges(b, vector<int>(2));
    cout << "Enter blue edges:" << endl;
    for (int i = 0; i < b; i++) {
        cin >> blue_edges[i][0] >> blue_edges[i][1];
    }
    
    vector<int> result = shortestAlternatingPaths(n, red_edges, blue_edges);
    
    cout << "Shortest distances: [";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class ShortestAlternatingPath {
    public static int[] shortestAlternatingPaths(int n, int[][] red_edges, int[][] blue_edges) {
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] e : red_edges) {
            graph.get(e[0]).add(new int[]{e[1], 0}); // 0 for red
        }
        
        for (int[] e : blue_edges) {
            graph.get(e[0]).add(new int[]{e[1], 1}); // 1 for blue
        }
        
        int[] result = new int[n];
        Arrays.fill(result, -1);
        
        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visited = new boolean[n][2];
        
        queue.offer(new int[]{0, 0, 0}); // node, color, distance
        queue.offer(new int[]{0, 1, 0});
        visited[0][0] = visited[0][1] = true;
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int node = curr[0];
            int color = curr[1];
            int dist = curr[2];
            
            if (result[node] == -1) {
                result[node] = dist;
            }
            
            for (int[] next : graph.get(node)) {
                int neighbor = next[0];
                int edgeColor = next[1];
                
                if (edgeColor != color && !visited[neighbor][edgeColor]) {
                    visited[neighbor][edgeColor] = true;
                    queue.offer(new int[]{neighbor, edgeColor, dist + 1});
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number of nodes: ");
        int n = sc.nextInt();
        System.out.print("Enter number of red edges: ");
        int r = sc.nextInt();
        
        int[][] red_edges = new int[r][2];
        System.out.println("Enter red edges:");
        for (int i = 0; i < r; i++) {
            red_edges[i][0] = sc.nextInt();
            red_edges[i][1] = sc.nextInt();
        }
        
        System.out.print("Enter number of blue edges: ");
        int b = sc.nextInt();
        
        int[][] blue_edges = new int[b][2];
        System.out.println("Enter blue edges:");
        for (int i = 0; i < b; i++) {
            blue_edges[i][0] = sc.nextInt();
            blue_edges[i][1] = sc.nextInt();
        }
        
        int[] result = shortestAlternatingPaths(n, red_edges, blue_edges);
        
        System.out.print("Shortest distances: [");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) System.out.print(",");
        }
        System.out.println("]");
        
        sc.close();
    }
}`,
      python: `from collections import deque

def shortest_alternating_paths(n, red_edges, blue_edges):
    graph = [[] for _ in range(n)]
    
    for u, v in red_edges:
        graph[u].append((v, 0))  # 0 for red
    
    for u, v in blue_edges:
        graph[u].append((v, 1))  # 1 for blue
    
    result = [-1] * n
    queue = deque([(0, 0, 0), (0, 1, 0)])  # node, color, distance
    visited = [[False] * 2 for _ in range(n)]
    visited[0][0] = visited[0][1] = True
    
    while queue:
        node, color, dist = queue.popleft()
        
        if result[node] == -1:
            result[node] = dist
        
        for neighbor, edge_color in graph[node]:
            if edge_color != color and not visited[neighbor][edge_color]:
                visited[neighbor][edge_color] = True
                queue.append((neighbor, edge_color, dist + 1))
    
    return result

# Input
n = int(input("Enter number of nodes: "))
r = int(input("Enter number of red edges: "))

red_edges = []
print("Enter red edges:")
for i in range(r):
    u, v = map(int, input().split())
    red_edges.append([u, v])

b = int(input("Enter number of blue edges: "))

blue_edges = []
print("Enter blue edges:")
for i in range(b):
    u, v = map(int, input().split())
    blue_edges.append([u, v])

result = shortest_alternating_paths(n, red_edges, blue_edges)
print(f"Shortest distances: {result}")`
    }
  },
  96: {
    id: 96,
    title: 'Find Minimum in Rotated Sorted Array II',
    description: 'Find minimum in rotated array with duplicates.',
    difficulty: 'Hard',
    input: 'Rotated sorted array with duplicates',
    output: 'Minimum element',
    example: {
      input: '[2,2,2,0,1]',
      output: '0'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right--;
        }
    }
    
    return nums[left];
}

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter rotated sorted array: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Minimum element: " << findMin(nums) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class FindMinRotated {
    public static int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                right--;
            }
        }
        
        return nums[left];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter rotated sorted array: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.println("Minimum element: " + findMin(nums));
        
        sc.close();
    }
}`,
      python: `def find_min(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if nums[mid] > nums[right]:
            left = mid + 1
        elif nums[mid] < nums[right]:
            right = mid
        else:
            right -= 1
    
    return nums[left]

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter rotated sorted array: ").split()))

print(f"Minimum element: {find_min(nums)}")`
    }
  },
  97: {
    id: 97,
    title: 'Sliding Window Maximum',
    description: 'Find max in each sliding window of size k.',
    difficulty: 'Hard',
    input: 'Array and window size k',
    output: 'Array of window maximums',
    example: {
      input: 'nums=[1,3,-1,-3,5,3,6,7], k=3',
      output: '[3,3,5,5,6,7]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <deque>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        while (!dq.empty() && dq.front() < i - k + 1) {
            dq.pop_front();
        }
        
        while (!dq.empty() && nums[dq.back()] < nums[i]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}

int main() {
    int n, k;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter array: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    cout << "Enter window size: ";
    cin >> k;
    
    vector<int> result = maxSlidingWindow(nums, k);
    
    cout << "Window maximums: [";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class SlidingWindowMax {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> deque = new LinkedList<>();
        int[] result = new int[nums.length - k + 1];
        int ri = 0;
        
        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            if (i >= k - 1) {
                result[ri++] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter array: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        System.out.print("Enter window size: ");
        int k = sc.nextInt();
        
        int[] result = maxSlidingWindow(nums, k);
        
        System.out.print("Window maximums: [");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) System.out.print(",");
        }
        System.out.println("]");
        
        sc.close();
    }
}`,
      python: `from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    result = []
    
    for i in range(len(nums)):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter array: ").split()))
k = int(input("Enter window size: "))

result = max_sliding_window(nums, k)
print(f"Window maximums: {result}")`
    }
  },
  98: {
    id: 98,
    title: 'Shortest Palindrome',
    description: 'Find shortest palindrome by adding characters in front.',
    difficulty: 'Hard',
    input: 'String',
    output: 'Shortest palindrome',
    example: {
      input: '"aacecaaa"',
      output: '"aaacecaaa"'
    },
    solutions: {
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string shortestPalindrome(string s) {
    string rev = s;
    reverse(rev.begin(), rev.end());
    string combined = s + "#" + rev;
    
    int n = combined.length();
    vector<int> lps(n, 0);
    
    for (int i = 1; i < n; i++) {
        int j = lps[i - 1];
        
        while (j > 0 && combined[i] != combined[j]) {
            j = lps[j - 1];
        }
        
        if (combined[i] == combined[j]) {
            j++;
        }
        
        lps[i] = j;
    }
    
    int toAdd = s.length() - lps[n - 1];
    string prefix = s.substr(s.length() - toAdd);
    reverse(prefix.begin(), prefix.end());
    
    return prefix + s;
}

int main() {
    string s;
    cout << "Enter string: ";
    cin >> s;
    
    cout << "Shortest palindrome: " << shortestPalindrome(s) << endl;
    
    return 0;
}`,
      java: `import java.util.Scanner;

public class ShortestPalindrome {
    public static String shortestPalindrome(String s) {
        String rev = new StringBuilder(s).reverse().toString();
        String combined = s + "#" + rev;
        
        int n = combined.length();
        int[] lps = new int[n];
        
        for (int i = 1; i < n; i++) {
            int j = lps[i - 1];
            
            while (j > 0 && combined.charAt(i) != combined.charAt(j)) {
                j = lps[j - 1];
            }
            
            if (combined.charAt(i) == combined.charAt(j)) {
                j++;
            }
            
            lps[i] = j;
        }
        
        int toAdd = s.length() - lps[n - 1];
        String prefix = new StringBuilder(s.substring(s.length() - toAdd)).reverse().toString();
        
        return prefix + s;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter string: ");
        String s = sc.next();
        
        System.out.println("Shortest palindrome: " + shortestPalindrome(s));
        
        sc.close();
    }
}`,
      python: `def shortest_palindrome(s):
    rev = s[::-1]
    combined = s + "#" + rev
    
    n = len(combined)
    lps = [0] * n
    
    for i in range(1, n):
        j = lps[i - 1]
        
        while j > 0 and combined[i] != combined[j]:
            j = lps[j - 1]
        
        if combined[i] == combined[j]:
            j += 1
        
        lps[i] = j
    
    to_add = len(s) - lps[n - 1]
    prefix = s[len(s) - to_add:][::-1]
    
    return prefix + s

# Input
s = input("Enter string: ")

print(f"Shortest palindrome: {shortest_palindrome(s)}")`
    }
  },
  99: {
    id: 99,
    title: 'Count of Smaller Numbers After Self',
    description: 'For each element, count how many numbers to the right are smaller.',
    difficulty: 'Hard',
    input: 'Array of integers',
    output: 'Count array',
    example: {
      input: '[5,2,6,1]',
      output: '[2,1,1,0]'
    },
    solutions: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
private:
    void mergeSort(vector<pair<int, int>>& nums, int left, int right, vector<int>& counts) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid, counts);
        mergeSort(nums, mid + 1, right, counts);
        
        vector<pair<int, int>> temp;
        int i = left, j = mid + 1;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[i].first <= nums[j].first) {
                counts[nums[i].second] += rightCount;
                temp.push_back(nums[i++]);
            } else {
                rightCount++;
                temp.push_back(nums[j++]);
            }
        }
        
        while (i <= mid) {
            counts[nums[i].second] += rightCount;
            temp.push_back(nums[i++]);
        }
        
        while (j <= right) {
            temp.push_back(nums[j++]);
        }
        
        for (int k = 0; k < temp.size(); k++) {
            nums[left + k] = temp[k];
        }
    }
    
public:
    vector<int> countSmaller(vector<int>& nums) {
        int n = nums.size();
        vector<int> counts(n, 0);
        vector<pair<int, int>> numsPair;
        
        for (int i = 0; i < n; i++) {
            numsPair.push_back({nums[i], i});
        }
        
        mergeSort(numsPair, 0, n - 1, counts);
        
        return counts;
    }
};

int main() {
    int n;
    cout << "Enter array size: ";
    cin >> n;
    
    vector<int> nums(n);
    cout << "Enter array: ";
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    Solution sol;
    vector<int> result = sol.countSmaller(nums);
    
    cout << "Counts: [";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
      java: `import java.util.*;

public class CountSmaller {
    private void mergeSort(int[][] nums, int left, int right, int[] counts) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid, counts);
        mergeSort(nums, mid + 1, right, counts);
        
        List<int[]> temp = new ArrayList<>();
        int i = left, j = mid + 1;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[i][0] <= nums[j][0]) {
                counts[nums[i][1]] += rightCount;
                temp.add(nums[i++]);
            } else {
                rightCount++;
                temp.add(nums[j++]);
            }
        }
        
        while (i <= mid) {
            counts[nums[i][1]] += rightCount;
            temp.add(nums[i++]);
        }
        
        while (j <= right) {
            temp.add(nums[j++]);
        }
        
        for (int k = 0; k < temp.size(); k++) {
            nums[left + k] = temp.get(k);
        }
    }
    
    public List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        int[] counts = new int[n];
        int[][] numsPair = new int[n][2];
        
        for (int i = 0; i < n; i++) {
            numsPair[i] = new int[]{nums[i], i};
        }
        
        mergeSort(numsPair, 0, n - 1, counts);
        
        List<Integer> result = new ArrayList<>();
        for (int count : counts) {
            result.add(count);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        
        int[] nums = new int[n];
        System.out.print("Enter array: ");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }
        
        CountSmaller cs = new CountSmaller();
        List<Integer> result = cs.countSmaller(nums);
        
        System.out.println("Counts: " + result);
        
        sc.close();
    }
}`,
      python: `def count_smaller(nums):
    def merge_sort(nums_with_idx, left, right):
        if left >= right:
            return
        
        mid = (left + right) // 2
        merge_sort(nums_with_idx, left, mid)
        merge_sort(nums_with_idx, mid + 1, right)
        
        temp = []
        i, j = left, mid + 1
        right_count = 0
        
        while i <= mid and j <= right:
            if nums_with_idx[i][0] <= nums_with_idx[j][0]:
                counts[nums_with_idx[i][1]] += right_count
                temp.append(nums_with_idx[i])
                i += 1
            else:
                right_count += 1
                temp.append(nums_with_idx[j])
                j += 1
        
        while i <= mid:
            counts[nums_with_idx[i][1]] += right_count
            temp.append(nums_with_idx[i])
            i += 1
        
        while j <= right:
            temp.append(nums_with_idx[j])
            j += 1
        
        for k in range(len(temp)):
            nums_with_idx[left + k] = temp[k]
    
    n = len(nums)
    counts = [0] * n
    nums_with_idx = [(nums[i], i) for i in range(n)]
    
    merge_sort(nums_with_idx, 0, n - 1)
    
    return counts

# Input
n = int(input("Enter array size: "))
nums = list(map(int, input("Enter array: ").split()))

result = count_smaller(nums)
print(f"Counts: {result}")`
    }
  },
  100: {
    id: 100,
    title: 'Reverse Nodes in k-Group',
    description: 'Reverse linked list nodes in groups of k.',
    difficulty: 'Hard',
    input: 'Linked list and k',
    output: 'Modified linked list',
    example: {
      input: '1->2->3->4->5, k=2',
      output: '2->1->4->3->5'
    },
    solutions: {
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* reverseKGroup(ListNode* head, int k) {
    if (!head || k == 1) return head;
    
    ListNode* dummy = new ListNode(0);
    dummy->next = head;
    ListNode* curr = dummy;
    ListNode* prev = dummy;
    ListNode* next = dummy;
    
    int count = 0;
    while (curr->next) {
        curr = curr->next;
        count++;
    }
    
    while (count >= k) {
        curr = prev->next;
        next = curr->next;
        
        for (int i = 1; i < k; i++) {
            curr->next = next->next;
            next->next = prev->next;
            prev->next = next;
            next = curr->next;
        }
        
        prev = curr;
        count -= k;
    }
    
    return dummy->next;
}

void printList(ListNode* head) {
    while (head) {
        cout << head->val;
        if (head->next) cout << "->";
        head = head->next;
    }
    cout << endl;
}

int main() {
    int n, k;
    cout << "Enter list size: ";
    cin >> n;
    
    cout << "Enter list values: ";
    ListNode* dummy = new ListNode(0);
    ListNode* curr = dummy;
    
    for (int i = 0; i < n; i++) {
        int val;
        cin >> val;
        curr->next = new ListNode(val);
        curr = curr->next;
    }
    
    cout << "Enter k: ";
    cin >> k;
    
    ListNode* head = reverseKGroup(dummy->next, k);
    
    cout << "Result: ";
    printList(head);
    
    return 0;
}`,
      java: `import java.util.Scanner;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class ReverseKGroup {
    public static ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) return head;
        
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode curr = dummy;
        ListNode prev = dummy;
        ListNode next;
        
        int count = 0;
        while (curr.next != null) {
            curr = curr.next;
            count++;
        }
        
        while (count >= k) {
            curr = prev.next;
            next = curr.next;
            
            for (int i = 1; i < k; i++) {
                curr.next = next.next;
                next.next = prev.next;
                prev.next = next;
                next = curr.next;
            }
            
            prev = curr;
            count -= k;
        }
        
        return dummy.next;
    }
    
    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) System.out.print("->");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter list size: ");
        int n = sc.nextInt();
        
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        System.out.print("Enter list values: ");
        for (int i = 0; i < n; i++) {
            int val = sc.nextInt();
            curr.next = new ListNode(val);
            curr = curr.next;
        }
        
        System.out.print("Enter k: ");
        int k = sc.nextInt();
        
        ListNode head = reverseKGroup(dummy.next, k);
        
        System.out.print("Result: ");
        printList(head);
        
        sc.close();
    }
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    if not head or k == 1:
        return head
    
    dummy = ListNode(0)
    dummy.next = head
    curr = dummy
    prev = dummy
    
    count = 0
    while curr.next:
        curr = curr.next
        count += 1
    
    while count >= k:
        curr = prev.next
        next_node = curr.next
        
        for i in range(1, k):
            curr.next = next_node.next
            next_node.next = prev.next
            prev.next = next_node
            next_node = curr.next
        
        prev = curr
        count -= k
    
    return dummy.next

def print_list(head):
    result = []
    while head:
        result.append(str(head.val))
        head = head.next
    print("->".join(result))

# Input
n = int(input("Enter list size: "))
values = list(map(int, input("Enter list values: ").split()))

dummy = ListNode(0)
curr = dummy
for val in values:
    curr.next = ListNode(val)
    curr = curr.next

k = int(input("Enter k: "))

head = reverse_k_group(dummy.next, k)

print("Result: ", end="")
print_list(head)`
    }
  }
};

export default function CodingTopic() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { topicId } = useParams();
  const [copiedLang, setCopiedLang] = useState<string | null>(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const copyCode = (code: string, lang: string) => {
    navigator.clipboard.writeText(code);
    setCopiedLang(lang);
    toast.success(`${lang} code copied to clipboard!`);
    setTimeout(() => setCopiedLang(null), 2000);
  };

  const problem = getProblemById(Number(topicId));

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Problem Not Found</CardTitle>
            <CardDescription>The requested coding problem does not exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/coding-round')}>
              Back to Coding Round
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/coding-round')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold">{problem.title}</h1>
              <span className={`text-xs px-2 py-1 rounded ${
                problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
              }`}>
                {problem.difficulty}
              </span>
            </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Problem Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Description:</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Input:</h3>
                  <p className="text-muted-foreground">{problem.input}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Output:</h3>
                  <p className="text-muted-foreground">{problem.output}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Example:</h3>
                  <div className="bg-muted p-3 rounded-md">
                    <p><strong>Input:</strong> {problem.example.input}</p>
                    <p><strong>Output:</strong> {problem.example.output}</p>
                  </div>
                </div>
                
              </CardContent>
            </Card>
            
            {/* Online Compilers - Styled like Blind 75 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Practice Online</CardTitle>
                <CardDescription>
                  Copy the solution and run it in an online compiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(defaultCompilerLinks.cpp, '_blank')}
                  >
                    <span className="font-bold">C++</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(defaultCompilerLinks.java, '_blank')}
                  >
                    <span className="font-bold">Java</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(defaultCompilerLinks.python, '_blank')}
                  >
                    <span className="font-bold">Python</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Reference Solutions</CardTitle>
                <CardDescription>Implementation in C++, Java, and Python (view after attempting)</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="cpp">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="cpp">C++</TabsTrigger>
                    <TabsTrigger value="java">Java</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="cpp">
                    <div className="relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => copyCode(problem.solutions.cpp, 'C++')}
                      >
                        {copiedLang === 'C++' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                        <code>{problem.solutions.cpp}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="java">
                    <div className="relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => copyCode(problem.solutions.java, 'Java')}
                      >
                        {copiedLang === 'Java' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                        <code>{problem.solutions.java}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="python">
                    <div className="relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => copyCode(problem.solutions.python, 'Python')}
                      >
                        {copiedLang === 'Python' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                        <code>{problem.solutions.python}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
