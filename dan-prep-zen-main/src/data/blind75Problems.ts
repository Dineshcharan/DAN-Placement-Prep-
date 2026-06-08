export interface Blind75Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  cppSolution: string;
  javaSolution: string;
  pythonSolution: string;
  compilerLinks: {
    cpp: string;
    java: string;
    python: string;
  };
}

export interface Blind75Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  problems: Blind75Problem[];
}

const defaultCompilerLinks = {
  cpp: 'https://www.programiz.com/cpp-programming/online-compiler/',
  java: 'https://www.programiz.com/java-programming/online-compiler/',
  python: 'https://www.programiz.com/python-programming/online-compiler/'
};

export const blind75Categories: Blind75Category[] = [
  {
    id: 'array',
    name: 'Array',
    icon: 'LayoutList',
    description: 'Master array manipulation and traversal techniques',
    problems: [
      {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
        examples: [
          { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
          { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
        ],
        constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
        javaSolution: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] result = sol.twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
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
};

int main() {
    Solution sol;
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = sol.twoSum(nums, 9);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []

# Test
sol = Solution()
print(sol.twoSum([2, 7, 11, 15], 9))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'best-time-to-buy-and-sell-stock',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
        examples: [
          { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' },
          { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'No transactions are done and the max profit = 0.' }
        ],
        constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
        javaSolution: `class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxProfit(new int[]{7, 1, 5, 3, 6, 4})); // 5
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
};

int main() {
    Solution sol;
    vector<int> prices = {7, 1, 5, 3, 6, 4};
    cout << sol.maxProfit(prices) << endl; // 5
    return 0;
}`,
        pythonSolution: `class Solution:
    def maxProfit(self, prices):
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
        return max_profit

# Test
sol = Solution()
print(sol.maxProfit([7, 1, 5, 3, 6, 4]))  # 5`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'contains-duplicate',
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
        examples: [
          { input: 'nums = [1,2,3,1]', output: 'true' },
          { input: 'nums = [1,2,3,4]', output: 'false' }
        ],
        constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.containsDuplicate(new int[]{1, 2, 3, 1})); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.count(num)) return true;
            seen.insert(num);
        }
        return false;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 1};
    cout << (sol.containsDuplicate(nums) ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def containsDuplicate(self, nums):
        return len(nums) != len(set(nums))

# Test
sol = Solution()
print(sol.containsDuplicate([1, 2, 3, 1]))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'product-of-array-except-self',
        title: 'Product of Array Except Self',
        difficulty: 'Medium',
        description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The algorithm must run in O(n) time and without using the division operation.',
        examples: [
          { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
          { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
        ],
        constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30'],
        javaSolution: `import java.util.*;

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.productExceptSelf(new int[]{1, 2, 3, 4})));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);
        
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 4};
    vector<int> result = sol.productExceptSelf(nums);
    for (int num : result) cout << num << " ";
    return 0;
}`,
        pythonSolution: `class Solution:
    def productExceptSelf(self, nums):
        n = len(nums)
        result = [1] * n
        
        for i in range(1, n):
            result[i] = result[i - 1] * nums[i - 1]
        
        right = 1
        for i in range(n - 1, -1, -1):
            result[i] *= right
            right *= nums[i]
        
        return result

# Test
sol = Solution()
print(sol.productExceptSelf([1, 2, 3, 4]))  # [24, 12, 8, 6]`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'maximum-subarray',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
        examples: [
          { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
          { input: 'nums = [1]', output: '1' }
        ],
        constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
        javaSolution: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})); // 6
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << sol.maxSubArray(nums) << endl; // 6
    return 0;
}`,
        pythonSolution: `class Solution:
    def maxSubArray(self, nums):
        max_sum = current_sum = nums[0]
        
        for num in nums[1:]:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        
        return max_sum

# Test
sol = Solution()
print(sol.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'maximum-product-subarray',
        title: 'Maximum Product Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find a subarray that has the largest product, and return the product.',
        examples: [
          { input: 'nums = [2,3,-2,4]', output: '6', explanation: '[2,3] has the largest product 6.' },
          { input: 'nums = [-2,0,-1]', output: '0' }
        ],
        constraints: ['1 <= nums.length <= 2 * 10^4', '-10 <= nums[i] <= 10'],
        javaSolution: `class Solution {
    public int maxProduct(int[] nums) {
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            int temp = maxProd;
            maxProd = Math.max(nums[i], Math.max(maxProd * nums[i], minProd * nums[i]));
            minProd = Math.min(nums[i], Math.min(temp * nums[i], minProd * nums[i]));
            result = Math.max(result, maxProd);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxProduct(new int[]{2, 3, -2, 4})); // 6
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            int temp = maxProd;
            maxProd = max({nums[i], maxProd * nums[i], minProd * nums[i]});
            minProd = min({nums[i], temp * nums[i], minProd * nums[i]});
            result = max(result, maxProd);
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 3, -2, 4};
    cout << sol.maxProduct(nums) << endl; // 6
    return 0;
}`,
        pythonSolution: `class Solution:
    def maxProduct(self, nums):
        max_prod = min_prod = result = nums[0]
        
        for num in nums[1:]:
            temp = max_prod
            max_prod = max(num, max_prod * num, min_prod * num)
            min_prod = min(num, temp * num, min_prod * num)
            result = max(result, max_prod)
        
        return result

# Test
sol = Solution()
print(sol.maxProduct([2, 3, -2, 4]))  # 6`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'find-minimum-in-rotated-sorted-array',
        title: 'Find Minimum in Rotated Sorted Array',
        difficulty: 'Medium',
        description: 'Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.',
        examples: [
          { input: 'nums = [3,4,5,1,2]', output: '1', explanation: 'The original array was [1,2,3,4,5] rotated 3 times.' },
          { input: 'nums = [4,5,6,7,0,1,2]', output: '0' }
        ],
        constraints: ['n == nums.length', '1 <= n <= 5000', '-5000 <= nums[i] <= 5000'],
        javaSolution: `class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return nums[left];
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.findMin(new int[]{3, 4, 5, 1, 2})); // 1
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return nums[left];
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 4, 5, 1, 2};
    cout << sol.findMin(nums) << endl; // 1
    return 0;
}`,
        pythonSolution: `class Solution:
    def findMin(self, nums):
        left, right = 0, len(nums) - 1
        
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        
        return nums[left]

# Test
sol = Solution()
print(sol.findMin([3, 4, 5, 1, 2]))  # 1`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'search-in-rotated-sorted-array',
        title: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        description: 'Given the array nums after rotation and an integer target, return the index of target if it is in nums, or -1 if it is not. You must write an algorithm with O(log n) runtime complexity.',
        examples: [
          { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
          { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' }
        ],
        constraints: ['1 <= nums.length <= 5000', '-10^4 <= nums[i] <= 10^4', '-10^4 <= target <= 10^4'],
        javaSolution: `class Solution {
    public int search(int[] nums, int target) {
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
        Solution sol = new Solution();
        System.out.println(sol.search(new int[]{4, 5, 6, 7, 0, 1, 2}, 0)); // 4
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
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
};

int main() {
    Solution sol;
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    cout << sol.search(nums, 0) << endl; // 4
    return 0;
}`,
        pythonSolution: `class Solution:
    def search(self, nums, target):
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

# Test
sol = Solution()
print(sol.search([4, 5, 6, 7, 0, 1, 2], 0))  # 4`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'three-sum',
        title: '3 Sum',
        difficulty: 'Medium',
        description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.',
        examples: [
          { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
          { input: 'nums = [0,1,1]', output: '[]' }
        ],
        constraints: ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
        javaSolution: `import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
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
        Solution sol = new Solution();
        System.out.println(sol.threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        
        for (int i = 0; i < nums.size() - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            int left = i + 1, right = nums.size() - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
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
};

int main() {
    Solution sol;
    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    auto result = sol.threeSum(nums);
    for (auto& triplet : result) {
        cout << "[" << triplet[0] << "," << triplet[1] << "," << triplet[2] << "] ";
    }
    return 0;
}`,
        pythonSolution: `class Solution:
    def threeSum(self, nums):
        nums.sort()
        result = []
        
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        
        return result

# Test
sol = Solution()
print(sol.threeSum([-1, 0, 1, 2, -1, -4]))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'container-with-most-water',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.',
        examples: [
          { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'The max area is between lines at index 1 and 8.' },
          { input: 'height = [1,1]', output: '1' }
        ],
        constraints: ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4'],
        javaSolution: `class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;
        
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, area);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7})); // 49
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxArea = 0;
        
        while (left < right) {
            int area = min(height[left], height[right]) * (right - left);
            maxArea = max(maxArea, area);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};

int main() {
    Solution sol;
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    cout << sol.maxArea(height) << endl; // 49
    return 0;
}`,
        pythonSolution: `class Solution:
    def maxArea(self, height):
        left, right = 0, len(height) - 1
        max_area = 0
        
        while left < right:
            area = min(height[left], height[right]) * (right - left)
            max_area = max(max_area, area)
            
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area

# Test
sol = Solution()
print(sol.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'binary',
    name: 'Binary',
    icon: 'Binary',
    description: 'Master bit manipulation techniques',
    problems: [
      {
        id: 'sum-of-two-integers',
        title: 'Sum of Two Integers',
        difficulty: 'Medium',
        description: 'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
        examples: [
          { input: 'a = 1, b = 2', output: '3' },
          { input: 'a = 2, b = 3', output: '5' }
        ],
        constraints: ['-1000 <= a, b <= 1000'],
        javaSolution: `class Solution {
    public int getSum(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        return a;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.getSum(1, 2)); // 3
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            unsigned carry = (unsigned)(a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        return a;
    }
};

int main() {
    Solution sol;
    cout << sol.getSum(1, 2) << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def getSum(self, a, b):
        MASK = 0xFFFFFFFF
        MAX = 0x7FFFFFFF
        
        while b != 0:
            carry = ((a & b) << 1) & MASK
            a = (a ^ b) & MASK
            b = carry
        
        return a if a <= MAX else ~(a ^ MASK)

# Test
sol = Solution()
print(sol.getSum(1, 2))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'number-of-1-bits',
        title: 'Number of 1 Bits',
        difficulty: 'Easy',
        description: 'Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).',
        examples: [
          { input: 'n = 11', output: '3', explanation: 'The binary representation of 11 is 1011.' },
          { input: 'n = 128', output: '1', explanation: 'The binary representation of 128 is 10000000.' }
        ],
        constraints: ['1 <= n <= 2^31 - 1'],
        javaSolution: `class Solution {
    public int hammingWeight(int n) {
        int count = 0;
        while (n != 0) {
            count += n & 1;
            n >>>= 1;
        }
        return count;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.hammingWeight(11)); // 3
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }
};

int main() {
    Solution sol;
    cout << sol.hammingWeight(11) << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def hammingWeight(self, n):
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count

# Test
sol = Solution()
print(sol.hammingWeight(11))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'counting-bits',
        title: 'Counting Bits',
        difficulty: 'Easy',
        description: 'Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1\'s in the binary representation of i.',
        examples: [
          { input: 'n = 2', output: '[0,1,1]' },
          { input: 'n = 5', output: '[0,1,1,2,1,2]' }
        ],
        constraints: ['0 <= n <= 10^5'],
        javaSolution: `import java.util.*;

class Solution {
    public int[] countBits(int n) {
        int[] dp = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i >> 1] + (i & 1);
        }
        return dp;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.countBits(5)));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> dp(n + 1);
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i >> 1] + (i & 1);
        }
        return dp;
    }
};

int main() {
    Solution sol;
    vector<int> result = sol.countBits(5);
    for (int num : result) cout << num << " ";
    return 0;
}`,
        pythonSolution: `class Solution:
    def countBits(self, n):
        dp = [0] * (n + 1)
        for i in range(1, n + 1):
            dp[i] = dp[i >> 1] + (i & 1)
        return dp

# Test
sol = Solution()
print(sol.countBits(5))  # [0, 1, 1, 2, 1, 2]`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'missing-number',
        title: 'Missing Number',
        difficulty: 'Easy',
        description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
        examples: [
          { input: 'nums = [3,0,1]', output: '2' },
          { input: 'nums = [0,1]', output: '2' }
        ],
        constraints: ['n == nums.length', '1 <= n <= 10^4', '0 <= nums[i] <= n'],
        javaSolution: `class Solution {
    public int missingNumber(int[] nums) {
        int xor = nums.length;
        for (int i = 0; i < nums.length; i++) {
            xor ^= i ^ nums[i];
        }
        return xor;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.missingNumber(new int[]{3, 0, 1})); // 2
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int xorVal = nums.size();
        for (int i = 0; i < nums.size(); i++) {
            xorVal ^= i ^ nums[i];
        }
        return xorVal;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 0, 1};
    cout << sol.missingNumber(nums) << endl; // 2
    return 0;
}`,
        pythonSolution: `class Solution:
    def missingNumber(self, nums):
        xor = len(nums)
        for i, num in enumerate(nums):
            xor ^= i ^ num
        return xor

# Test
sol = Solution()
print(sol.missingNumber([3, 0, 1]))  # 2`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'reverse-bits',
        title: 'Reverse Bits',
        difficulty: 'Easy',
        description: 'Reverse bits of a given 32 bits unsigned integer.',
        examples: [
          { input: 'n = 00000010100101000001111010011100', output: '964176192', explanation: 'The input binary string represents the unsigned integer 43261596.' }
        ],
        constraints: ['The input must be a binary string of length 32'],
        javaSolution: `class Solution {
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result <<= 1;
            result |= (n & 1);
            n >>>= 1;
        }
        return result;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.reverseBits(43261596));
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        for (int i = 0; i < 32; i++) {
            result <<= 1;
            result |= (n & 1);
            n >>= 1;
        }
        return result;
    }
};

int main() {
    Solution sol;
    cout << sol.reverseBits(43261596) << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def reverseBits(self, n):
        result = 0
        for i in range(32):
            result <<= 1
            result |= n & 1
            n >>= 1
        return result

# Test
sol = Solution()
print(sol.reverseBits(43261596))`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'TrendingUp',
    description: 'Master dynamic programming patterns and techniques',
    problems: [
      {
        id: 'climbing-stairs',
        title: 'Climbing Stairs',
        difficulty: 'Easy',
        description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
        examples: [
          { input: 'n = 2', output: '2', explanation: 'There are two ways: 1+1 and 2.' },
          { input: 'n = 3', output: '3', explanation: 'There are three ways: 1+1+1, 1+2, and 2+1.' }
        ],
        constraints: ['1 <= n <= 45'],
        javaSolution: `class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.climbStairs(5)); // 8
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};

int main() {
    Solution sol;
    cout << sol.climbStairs(5) << endl; // 8
    return 0;
}`,
        pythonSolution: `class Solution:
    def climbStairs(self, n):
        if n <= 2:
            return n
        prev2, prev1 = 1, 2
        for i in range(3, n + 1):
            curr = prev1 + prev2
            prev2, prev1 = prev1, curr
        return prev1

# Test
sol = Solution()
print(sol.climbStairs(5))  # 8`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'coin-change',
        title: 'Coin Change',
        difficulty: 'Medium',
        description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
        examples: [
          { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
          { input: 'coins = [2], amount = 3', output: '-1' }
        ],
        constraints: ['1 <= coins.length <= 12', '1 <= coins[i] <= 2^31 - 1', '0 <= amount <= 10^4'],
        javaSolution: `import java.util.*;

class Solution {
    public int coinChange(int[] coins, int amount) {
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
        Solution sol = new Solution();
        System.out.println(sol.coinChange(new int[]{1, 2, 5}, 11)); // 3
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
};

int main() {
    Solution sol;
    vector<int> coins = {1, 2, 5};
    cout << sol.coinChange(coins, 11) << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def coinChange(self, coins, amount):
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        
        for i in range(1, amount + 1):
            for coin in coins:
                if coin <= i:
                    dp[i] = min(dp[i], dp[i - coin] + 1)
        
        return dp[amount] if dp[amount] != float('inf') else -1

# Test
sol = Solution()
print(sol.coinChange([1, 2, 5], 11))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'longest-increasing-subsequence',
        title: 'Longest Increasing Subsequence',
        difficulty: 'Medium',
        description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
        examples: [
          { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: 'The longest increasing subsequence is [2,3,7,101].' },
          { input: 'nums = [0,1,0,3,2,3]', output: '4' }
        ],
        constraints: ['1 <= nums.length <= 2500', '-10^4 <= nums[i] <= 10^4'],
        javaSolution: `import java.util.*;

class Solution {
    public int lengthOfLIS(int[] nums) {
        List<Integer> sub = new ArrayList<>();
        
        for (int num : nums) {
            int pos = Collections.binarySearch(sub, num);
            if (pos < 0) pos = -(pos + 1);
            
            if (pos == sub.size()) {
                sub.add(num);
            } else {
                sub.set(pos, num);
            }
        }
        
        return sub.size();
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18})); // 4
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> sub;
        
        for (int num : nums) {
            auto it = lower_bound(sub.begin(), sub.end(), num);
            if (it == sub.end()) {
                sub.push_back(num);
            } else {
                *it = num;
            }
        }
        
        return sub.size();
    }
};

int main() {
    Solution sol;
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};
    cout << sol.lengthOfLIS(nums) << endl; // 4
    return 0;
}`,
        pythonSolution: `import bisect

class Solution:
    def lengthOfLIS(self, nums):
        sub = []
        
        for num in nums:
            pos = bisect.bisect_left(sub, num)
            if pos == len(sub):
                sub.append(num)
            else:
                sub[pos] = num
        
        return len(sub)

# Test
sol = Solution()
print(sol.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))  # 4`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'longest-common-subsequence',
        title: 'Longest Common Subsequence',
        difficulty: 'Medium',
        description: 'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.',
        examples: [
          { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'The longest common subsequence is "ace".' },
          { input: 'text1 = "abc", text2 = "def"', output: '0' }
        ],
        constraints: ['1 <= text1.length, text2.length <= 1000', 'text1 and text2 consist of only lowercase English characters'],
        javaSolution: `class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
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
        Solution sol = new Solution();
        System.out.println(sol.longestCommonSubsequence("abcde", "ace")); // 3
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
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
};

int main() {
    Solution sol;
    cout << sol.longestCommonSubsequence("abcde", "ace") << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def longestCommonSubsequence(self, text1, text2):
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        
        return dp[m][n]

# Test
sol = Solution()
print(sol.longestCommonSubsequence("abcde", "ace"))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'word-break',
        title: 'Word Break Problem',
        difficulty: 'Medium',
        description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
        examples: [
          { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true', explanation: 'Return true because "leetcode" can be segmented as "leet code".' },
          { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: 'true' }
        ],
        constraints: ['1 <= s.length <= 300', '1 <= wordDict.length <= 1000', '1 <= wordDict[i].length <= 20'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[s.length()];
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.wordBreak("leetcode", Arrays.asList("leet", "code"))); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        vector<bool> dp(s.size() + 1, false);
        dp[0] = true;
        
        for (int i = 1; i <= s.size(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.count(s.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[s.size()];
    }
};

int main() {
    Solution sol;
    vector<string> wordDict = {"leet", "code"};
    cout << (sol.wordBreak("leetcode", wordDict) ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def wordBreak(self, s, wordDict):
        word_set = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True
        
        for i in range(1, len(s) + 1):
            for j in range(i):
                if dp[j] and s[j:i] in word_set:
                    dp[i] = True
                    break
        
        return dp[len(s)]

# Test
sol = Solution()
print(sol.wordBreak("leetcode", ["leet", "code"]))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'combination-sum',
        title: 'Combination Sum',
        difficulty: 'Medium',
        description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.',
        examples: [
          { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
          { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' }
        ],
        constraints: ['1 <= candidates.length <= 30', '2 <= candidates[i] <= 40', 'All elements are distinct', '1 <= target <= 40'],
        javaSolution: `import java.util.*;

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int[] candidates, int remain, int start, 
                          List<Integer> path, List<List<Integer>> result) {
        if (remain == 0) {
            result.add(new ArrayList<>(path));
            return;
        }
        
        for (int i = start; i < candidates.length; i++) {
            if (candidates[i] <= remain) {
                path.add(candidates[i]);
                backtrack(candidates, remain - candidates[i], i, path, result);
                path.remove(path.size() - 1);
            }
        }
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.combinationSum(new int[]{2, 3, 6, 7}, 7));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> path;
        backtrack(candidates, target, 0, path, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& candidates, int remain, int start,
                  vector<int>& path, vector<vector<int>>& result) {
        if (remain == 0) {
            result.push_back(path);
            return;
        }
        
        for (int i = start; i < candidates.size(); i++) {
            if (candidates[i] <= remain) {
                path.push_back(candidates[i]);
                backtrack(candidates, remain - candidates[i], i, path, result);
                path.pop_back();
            }
        }
    }
};

int main() {
    Solution sol;
    vector<int> candidates = {2, 3, 6, 7};
    auto result = sol.combinationSum(candidates, 7);
    for (auto& combo : result) {
        for (int num : combo) cout << num << " ";
        cout << endl;
    }
    return 0;
}`,
        pythonSolution: `class Solution:
    def combinationSum(self, candidates, target):
        result = []
        
        def backtrack(remain, path, start):
            if remain == 0:
                result.append(path[:])
                return
            
            for i in range(start, len(candidates)):
                if candidates[i] <= remain:
                    path.append(candidates[i])
                    backtrack(remain - candidates[i], path, i)
                    path.pop()
        
        backtrack(target, [], 0)
        return result

# Test
sol = Solution()
print(sol.combinationSum([2, 3, 6, 7], 7))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'house-robber',
        title: 'House Robber',
        difficulty: 'Medium',
        description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected - you cannot rob two adjacent houses. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight.',
        examples: [
          { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4.' },
          { input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob house 1, 3, and 5. Total = 2 + 9 + 1 = 12.' }
        ],
        constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 400'],
        javaSolution: `class Solution {
    public int rob(int[] nums) {
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
        Solution sol = new Solution();
        System.out.println(sol.rob(new int[]{2, 7, 9, 3, 1})); // 12
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.size() == 1) return nums[0];
        
        int prev2 = 0, prev1 = 0;
        for (int num : nums) {
            int curr = max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 7, 9, 3, 1};
    cout << sol.rob(nums) << endl; // 12
    return 0;
}`,
        pythonSolution: `class Solution:
    def rob(self, nums):
        prev2, prev1 = 0, 0
        for num in nums:
            curr = max(prev1, prev2 + num)
            prev2, prev1 = prev1, curr
        return prev1

# Test
sol = Solution()
print(sol.rob([2, 7, 9, 3, 1]))  # 12`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'house-robber-ii',
        title: 'House Robber II',
        difficulty: 'Medium',
        description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle. You cannot rob two adjacent houses. Return the maximum amount of money you can rob.',
        examples: [
          { input: 'nums = [2,3,2]', output: '3', explanation: 'You cannot rob house 1 and house 3 (adjacent in circle).' },
          { input: 'nums = [1,2,3,1]', output: '4' }
        ],
        constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 1000'],
        javaSolution: `class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
        return Math.max(robRange(nums, 0, nums.length - 2),
                       robRange(nums, 1, nums.length - 1));
    }
    
    private int robRange(int[] nums, int start, int end) {
        int prev2 = 0, prev1 = 0;
        for (int i = start; i <= end; i++) {
            int curr = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.rob(new int[]{1, 2, 3, 1})); // 4
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.size() == 1) return nums[0];
        return max(robRange(nums, 0, nums.size() - 2),
                  robRange(nums, 1, nums.size() - 1));
    }
    
private:
    int robRange(vector<int>& nums, int start, int end) {
        int prev2 = 0, prev1 = 0;
        for (int i = start; i <= end; i++) {
            int curr = max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 1};
    cout << sol.rob(nums) << endl; // 4
    return 0;
}`,
        pythonSolution: `class Solution:
    def rob(self, nums):
        if len(nums) == 1:
            return nums[0]
        
        def rob_range(start, end):
            prev2, prev1 = 0, 0
            for i in range(start, end + 1):
                curr = max(prev1, prev2 + nums[i])
                prev2, prev1 = prev1, curr
            return prev1
        
        return max(rob_range(0, len(nums) - 2), rob_range(1, len(nums) - 1))

# Test
sol = Solution()
print(sol.rob([1, 2, 3, 1]))  # 4`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'decode-ways',
        title: 'Decode Ways',
        difficulty: 'Medium',
        description: 'A message containing letters from A-Z can be encoded into numbers using the mapping: A=1, B=2, ..., Z=26. Given a string s containing only digits, return the number of ways to decode it.',
        examples: [
          { input: 's = "12"', output: '2', explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).' },
          { input: 's = "226"', output: '3', explanation: '"226" could be decoded as "BZ", "VF", or "BBF".' }
        ],
        constraints: ['1 <= s.length <= 100', 's contains only digits and may contain leading zero(s)'],
        javaSolution: `class Solution {
    public int numDecodings(String s) {
        if (s.charAt(0) == '0') return 0;
        
        int n = s.length();
        int prev2 = 1, prev1 = 1;
        
        for (int i = 1; i < n; i++) {
            int curr = 0;
            if (s.charAt(i) != '0') {
                curr = prev1;
            }
            int twoDigit = Integer.parseInt(s.substring(i - 1, i + 1));
            if (twoDigit >= 10 && twoDigit <= 26) {
                curr += prev2;
            }
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.numDecodings("226")); // 3
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    int numDecodings(string s) {
        if (s[0] == '0') return 0;
        
        int n = s.size();
        int prev2 = 1, prev1 = 1;
        
        for (int i = 1; i < n; i++) {
            int curr = 0;
            if (s[i] != '0') {
                curr = prev1;
            }
            int twoDigit = stoi(s.substr(i - 1, 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                curr += prev2;
            }
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
};

int main() {
    Solution sol;
    cout << sol.numDecodings("226") << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def numDecodings(self, s):
        if s[0] == '0':
            return 0
        
        prev2, prev1 = 1, 1
        
        for i in range(1, len(s)):
            curr = 0
            if s[i] != '0':
                curr = prev1
            two_digit = int(s[i-1:i+1])
            if 10 <= two_digit <= 26:
                curr += prev2
            prev2, prev1 = prev1, curr
        
        return prev1

# Test
sol = Solution()
print(sol.numDecodings("226"))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'unique-paths',
        title: 'Unique Paths',
        difficulty: 'Medium',
        description: 'There is a robot on an m x n grid. The robot is initially located at the top-left corner and tries to move to the bottom-right corner. The robot can only move either down or right at any point. Return the number of possible unique paths.',
        examples: [
          { input: 'm = 3, n = 7', output: '28' },
          { input: 'm = 3, n = 2', output: '3' }
        ],
        constraints: ['1 <= m, n <= 100'],
        javaSolution: `class Solution {
    public int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        java.util.Arrays.fill(dp, 1);
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        
        return dp[n - 1];
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.uniquePaths(3, 7)); // 28
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<int> dp(n, 1);
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        
        return dp[n - 1];
    }
};

int main() {
    Solution sol;
    cout << sol.uniquePaths(3, 7) << endl; // 28
    return 0;
}`,
        pythonSolution: `class Solution:
    def uniquePaths(self, m, n):
        dp = [1] * n
        
        for i in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        
        return dp[n - 1]

# Test
sol = Solution()
print(sol.uniquePaths(3, 7))  # 28`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'jump-game',
        title: 'Jump Game',
        difficulty: 'Medium',
        description: 'You are given an integer array nums. You are initially positioned at the first index, and each element represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.',
        examples: [
          { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.' },
          { input: 'nums = [3,2,1,0,4]', output: 'false', explanation: 'You will always arrive at index 3 no matter what.' }
        ],
        constraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 10^5'],
        javaSolution: `class Solution {
    public boolean canJump(int[] nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.canJump(new int[]{2, 3, 1, 1, 4})); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > maxReach) return false;
            maxReach = max(maxReach, i + nums[i]);
        }
        return true;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 3, 1, 1, 4};
    cout << (sol.canJump(nums) ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def canJump(self, nums):
        max_reach = 0
        for i, num in enumerate(nums):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + num)
        return True

# Test
sol = Solution()
print(sol.canJump([2, 3, 1, 1, 4]))  # True`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'graph',
    name: 'Graph',
    icon: 'Share2',
    description: 'Master graph traversal and algorithms',
    problems: [
      {
        id: 'clone-graph',
        title: 'Clone Graph',
        difficulty: 'Medium',
        description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value and a list of its neighbors.',
        examples: [
          { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]' }
        ],
        constraints: ['The number of nodes will be between 1 and 100', '1 <= Node.val <= 100', 'No repeated edges and no self-loops'],
        javaSolution: `import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node(int val) { this.val = val; neighbors = new ArrayList<>(); }
}

class Solution {
    private Map<Node, Node> visited = new HashMap<>();
    
    public Node cloneGraph(Node node) {
        if (node == null) return null;
        
        if (visited.containsKey(node)) {
            return visited.get(node);
        }
        
        Node clone = new Node(node.val);
        visited.put(node, clone);
        
        for (Node neighbor : node.neighbors) {
            clone.neighbors.add(cloneGraph(neighbor));
        }
        
        return clone;
    }
    
    public static void main(String[] args) {
        System.out.println("Clone Graph solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node(int _val) : val(_val) {}
};

class Solution {
    unordered_map<Node*, Node*> visited;
public:
    Node* cloneGraph(Node* node) {
        if (!node) return nullptr;
        
        if (visited.count(node)) {
            return visited[node];
        }
        
        Node* clone = new Node(node->val);
        visited[node] = clone;
        
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(cloneGraph(neighbor));
        }
        
        return clone;
    }
};

int main() {
    cout << "Clone Graph solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors else []

class Solution:
    def cloneGraph(self, node):
        if not node:
            return None
        
        visited = {}
        
        def dfs(node):
            if node in visited:
                return visited[node]
            
            clone = Node(node.val)
            visited[node] = clone
            
            for neighbor in node.neighbors:
                clone.neighbors.append(dfs(neighbor))
            
            return clone
        
        return dfs(node)

# Test
print("Clone Graph solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'course-schedule',
        title: 'Course Schedule',
        difficulty: 'Medium',
        description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.',
        examples: [
          { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Take course 0, then course 1.' },
          { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'There is a cycle.' }
        ],
        constraints: ['1 <= numCourses <= 2000', '0 <= prerequisites.length <= 5000'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] pre : prerequisites) {
            graph.get(pre[1]).add(pre[0]);
            inDegree[pre[0]]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }
        
        int count = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            count++;
            for (int next : graph.get(course)) {
                if (--inDegree[next] == 0) {
                    queue.offer(next);
                }
            }
        }
        
        return count == numCourses;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.canFinish(2, new int[][]{{1, 0}})); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        for (auto& pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            inDegree[pre[0]]++;
        }
        
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) q.push(i);
        }
        
        int count = 0;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            count++;
            for (int next : graph[course]) {
                if (--inDegree[next] == 0) {
                    q.push(next);
                }
            }
        }
        
        return count == numCourses;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> prerequisites = {{1, 0}};
    cout << (sol.canFinish(2, prerequisites) ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `from collections import deque

class Solution:
    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        in_degree = [0] * numCourses
        
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1
        
        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        count = 0
        
        while queue:
            course = queue.popleft()
            count += 1
            for next_course in graph[course]:
                in_degree[next_course] -= 1
                if in_degree[next_course] == 0:
                    queue.append(next_course)
        
        return count == numCourses

# Test
sol = Solution()
print(sol.canFinish(2, [[1, 0]]))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'number-of-islands',
        title: 'Number of Islands',
        difficulty: 'Medium',
        description: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
        examples: [
          { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
          { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' }
        ],
        constraints: ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 300', 'grid[i][j] is "0" or "1"'],
        javaSolution: `class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
        return count;
    }
    
    private void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        char[][] grid = {{'1','1','0'},{'1','0','0'},{'0','0','1'}};
        System.out.println(sol.numIslands(grid)); // 2
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int count = 0;
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
        return count;
    }
    
private:
    void dfs(vector<vector<char>>& grid, int i, int j) {
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
};

int main() {
    Solution sol;
    vector<vector<char>> grid = {{'1','1','0'},{'1','0','0'},{'0','0','1'}};
    cout << sol.numIslands(grid) << endl; // 2
    return 0;
}`,
        pythonSolution: `class Solution:
    def numIslands(self, grid):
        def dfs(i, j):
            if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
                return
            grid[i][j] = '0'
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
        
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    count += 1
        return count

# Test
sol = Solution()
grid = [['1','1','0'],['1','0','0'],['0','0','1']]
print(sol.numIslands(grid))  # 2`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'pacific-atlantic-water-flow',
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'Medium',
        description: 'Given an m x n matrix of heights representing a continent, find the list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.',
        examples: [
          { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' }
        ],
        constraints: ['m == heights.length', 'n == heights[i].length', '1 <= m, n <= 200'],
        javaSolution: `import java.util.*;

class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        int m = heights.length, n = heights[0].length;
        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];
        
        for (int i = 0; i < m; i++) {
            dfs(heights, pacific, i, 0);
            dfs(heights, atlantic, i, n - 1);
        }
        for (int j = 0; j < n; j++) {
            dfs(heights, pacific, 0, j);
            dfs(heights, atlantic, m - 1, j);
        }
        
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }
        return result;
    }
    
    private void dfs(int[][] heights, boolean[][] visited, int i, int j) {
        visited[i][j] = true;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] d : dirs) {
            int ni = i + d[0], nj = j + d[1];
            if (ni >= 0 && ni < heights.length && nj >= 0 && nj < heights[0].length 
                && !visited[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                dfs(heights, visited, ni, nj);
            }
        }
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] heights = {{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}};
        System.out.println(sol.pacificAtlantic(heights));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        int m = heights.size(), n = heights[0].size();
        vector<vector<bool>> pacific(m, vector<bool>(n, false));
        vector<vector<bool>> atlantic(m, vector<bool>(n, false));
        
        for (int i = 0; i < m; i++) {
            dfs(heights, pacific, i, 0);
            dfs(heights, atlantic, i, n - 1);
        }
        for (int j = 0; j < n; j++) {
            dfs(heights, pacific, 0, j);
            dfs(heights, atlantic, m - 1, j);
        }
        
        vector<vector<int>> result;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.push_back({i, j});
                }
            }
        }
        return result;
    }
    
private:
    void dfs(vector<vector<int>>& heights, vector<vector<bool>>& visited, int i, int j) {
        visited[i][j] = true;
        int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
        for (auto& d : dirs) {
            int ni = i + d[0], nj = j + d[1];
            if (ni >= 0 && ni < heights.size() && nj >= 0 && nj < heights[0].size()
                && !visited[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                dfs(heights, visited, ni, nj);
            }
        }
    }
};

int main() {
    Solution sol;
    vector<vector<int>> heights = {{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}};
    auto result = sol.pacificAtlantic(heights);
    for (auto& cell : result) cout << "[" << cell[0] << "," << cell[1] << "] ";
    return 0;
}`,
        pythonSolution: `class Solution:
    def pacificAtlantic(self, heights):
        m, n = len(heights), len(heights[0])
        pacific = [[False] * n for _ in range(m)]
        atlantic = [[False] * n for _ in range(m)]
        
        def dfs(visited, i, j):
            visited[i][j] = True
            for di, dj in [(0,1),(0,-1),(1,0),(-1,0)]:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj] and heights[ni][nj] >= heights[i][j]:
                    dfs(visited, ni, nj)
        
        for i in range(m):
            dfs(pacific, i, 0)
            dfs(atlantic, i, n - 1)
        for j in range(n):
            dfs(pacific, 0, j)
            dfs(atlantic, m - 1, j)
        
        return [[i, j] for i in range(m) for j in range(n) if pacific[i][j] and atlantic[i][j]]

# Test
sol = Solution()
heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
print(sol.pacificAtlantic(heights))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'longest-consecutive-sequence',
        title: 'Longest Consecutive Sequence',
        difficulty: 'Medium',
        description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
        examples: [
          { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'The longest consecutive sequence is [1, 2, 3, 4].' },
          { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' }
        ],
        constraints: ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
        javaSolution: `import java.util.*;

class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        
        int maxLen = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int currentNum = num;
                int currentLen = 1;
                while (set.contains(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                maxLen = Math.max(maxLen, currentLen);
            }
        }
        return maxLen;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestConsecutive(new int[]{100, 4, 200, 1, 3, 2})); // 4
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int maxLen = 0;
        
        for (int num : numSet) {
            if (!numSet.count(num - 1)) {
                int currentNum = num;
                int currentLen = 1;
                while (numSet.count(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                maxLen = max(maxLen, currentLen);
            }
        }
        return maxLen;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {100, 4, 200, 1, 3, 2};
    cout << sol.longestConsecutive(nums) << endl; // 4
    return 0;
}`,
        pythonSolution: `class Solution:
    def longestConsecutive(self, nums):
        num_set = set(nums)
        max_len = 0
        
        for num in num_set:
            if num - 1 not in num_set:
                current_num = num
                current_len = 1
                while current_num + 1 in num_set:
                    current_num += 1
                    current_len += 1
                max_len = max(max_len, current_len)
        
        return max_len

# Test
sol = Solution()
print(sol.longestConsecutive([100, 4, 200, 1, 3, 2]))  # 4`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'alien-dictionary',
        title: 'Alien Dictionary',
        difficulty: 'Hard',
        description: 'There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you. You are given a list of strings words from the alien language\'s dictionary, where the strings are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language\'s rules. If there is no solution, return "". If there are multiple solutions, return any of them.',
        examples: [
          { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
          { input: 'words = ["z","x"]', output: '"zx"' }
        ],
        constraints: ['1 <= words.length <= 100', '1 <= words[i].length <= 100', 'words[i] consists of only lowercase English letters'],
        javaSolution: `import java.util.*;

class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();
        
        // Initialize
        for (String word : words) {
            for (char c : word.toCharArray()) {
                graph.putIfAbsent(c, new HashSet<>());
                indegree.putIfAbsent(c, 0);
            }
        }
        
        // Build graph
        for (int i = 0; i < words.length - 1; i++) {
            String w1 = words[i], w2 = words[i + 1];
            if (w1.length() > w2.length() && w1.startsWith(w2)) {
                return ""; // Invalid order
            }
            for (int j = 0; j < Math.min(w1.length(), w2.length()); j++) {
                if (w1.charAt(j) != w2.charAt(j)) {
                    if (!graph.get(w1.charAt(j)).contains(w2.charAt(j))) {
                        graph.get(w1.charAt(j)).add(w2.charAt(j));
                        indegree.put(w2.charAt(j), indegree.get(w2.charAt(j)) + 1);
                    }
                    break;
                }
            }
        }
        
        // Topological sort
        Queue<Character> queue = new LinkedList<>();
        for (char c : indegree.keySet()) {
            if (indegree.get(c) == 0) queue.offer(c);
        }
        
        StringBuilder result = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            result.append(c);
            for (char neighbor : graph.get(c)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);
                if (indegree.get(neighbor) == 0) queue.offer(neighbor);
            }
        }
        
        return result.length() == indegree.size() ? result.toString() : "";
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.alienOrder(new String[]{"wrt","wrf","er","ett","rftt"})); // wertf
    }
}`,
        cppSolution: `#include <iostream>
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
        unordered_map<char, int> indegree;
        
        // Initialize
        for (const string& word : words) {
            for (char c : word) {
                graph[c];
                indegree[c] = 0;
            }
        }
        
        // Build graph
        for (int i = 0; i < words.size() - 1; i++) {
            string w1 = words[i], w2 = words[i + 1];
            if (w1.size() > w2.size() && w1.substr(0, w2.size()) == w2) {
                return "";
            }
            for (int j = 0; j < min(w1.size(), w2.size()); j++) {
                if (w1[j] != w2[j]) {
                    if (!graph[w1[j]].count(w2[j])) {
                        graph[w1[j]].insert(w2[j]);
                        indegree[w2[j]]++;
                    }
                    break;
                }
            }
        }
        
        // Topological sort
        queue<char> q;
        for (auto& [c, deg] : indegree) {
            if (deg == 0) q.push(c);
        }
        
        string result;
        while (!q.empty()) {
            char c = q.front(); q.pop();
            result += c;
            for (char neighbor : graph[c]) {
                if (--indegree[neighbor] == 0) q.push(neighbor);
            }
        }
        
        return result.size() == indegree.size() ? result : "";
    }
};

int main() {
    Solution sol;
    vector<string> words = {"wrt","wrf","er","ett","rftt"};
    cout << sol.alienOrder(words) << endl; // wertf
    return 0;
}`,
        pythonSolution: `from collections import defaultdict, deque

class Solution:
    def alienOrder(self, words):
        graph = defaultdict(set)
        indegree = {c: 0 for word in words for c in word}
        
        # Build graph
        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i + 1]
            if len(w1) > len(w2) and w1.startswith(w2):
                return ""
            for j in range(min(len(w1), len(w2))):
                if w1[j] != w2[j]:
                    if w2[j] not in graph[w1[j]]:
                        graph[w1[j]].add(w2[j])
                        indegree[w2[j]] += 1
                    break
        
        # Topological sort
        queue = deque([c for c in indegree if indegree[c] == 0])
        result = []
        
        while queue:
            c = queue.popleft()
            result.append(c)
            for neighbor in graph[c]:
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)
        
        return "".join(result) if len(result) == len(indegree) else ""

# Test
sol = Solution()
print(sol.alienOrder(["wrt","wrf","er","ett","rftt"]))  # wertf`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'graph-valid-tree',
        title: 'Graph Valid Tree',
        difficulty: 'Medium',
        description: 'You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph. Return true if the edges of the given graph make up a valid tree, and false otherwise.',
        examples: [
          { input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]', output: 'true' },
          { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]', output: 'false' }
        ],
        constraints: ['1 <= n <= 2000', '0 <= edges.length <= 5000', 'edges[i].length == 2', '0 <= ai, bi < n'],
        javaSolution: `import java.util.*;

class Solution {
    private int[] parent;
    
    public boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;
        
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        
        for (int[] edge : edges) {
            if (!union(edge[0], edge[1])) return false;
        }
        
        return true;
    }
    
    private int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    
    private boolean union(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.validTree(5, new int[][]{{0,1},{0,2},{0,3},{1,4}})); // true
        System.out.println(sol.validTree(5, new int[][]{{0,1},{1,2},{2,3},{1,3},{1,4}})); // false
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
    vector<int> parent;
    
    int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
    
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;
        
        parent.resize(n);
        for (int i = 0; i < n; i++) parent[i] = i;
        
        for (auto& edge : edges) {
            if (!unite(edge[0], edge[1])) return false;
        }
        
        return true;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> edges1 = {{0,1},{0,2},{0,3},{1,4}};
    vector<vector<int>> edges2 = {{0,1},{1,2},{2,3},{1,3},{1,4}};
    cout << (sol.validTree(5, edges1) ? "true" : "false") << endl; // true
    cout << (sol.validTree(5, edges2) ? "true" : "false") << endl; // false
    return 0;
}`,
        pythonSolution: `class Solution:
    def validTree(self, n, edges):
        if len(edges) != n - 1:
            return False
        
        parent = list(range(n))
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return False
            parent[px] = py
            return True
        
        for a, b in edges:
            if not union(a, b):
                return False
        
        return True

# Test
sol = Solution()
print(sol.validTree(5, [[0,1],[0,2],[0,3],[1,4]]))  # True
print(sol.validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]))  # False`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'number-of-connected-components',
        title: 'Number of Connected Components in an Undirected Graph',
        difficulty: 'Medium',
        description: 'You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph. Return the number of connected components in the graph.',
        examples: [
          { input: 'n = 5, edges = [[0,1],[1,2],[3,4]]', output: '2' },
          { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]', output: '1' }
        ],
        constraints: ['1 <= n <= 2000', '1 <= edges.length <= 5000', 'edges[i].length == 2', '0 <= ai, bi < n'],
        javaSolution: `import java.util.*;

class Solution {
    private int[] parent;
    
    public int countComponents(int n, int[][] edges) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        
        int components = n;
        for (int[] edge : edges) {
            if (union(edge[0], edge[1])) {
                components--;
            }
        }
        
        return components;
    }
    
    private int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    
    private boolean union(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.countComponents(5, new int[][]{{0,1},{1,2},{3,4}})); // 2
        System.out.println(sol.countComponents(5, new int[][]{{0,1},{1,2},{2,3},{3,4}})); // 1
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
    vector<int> parent;
    
    int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        parent[px] = py;
        return true;
    }
    
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        parent.resize(n);
        for (int i = 0; i < n; i++) parent[i] = i;
        
        int components = n;
        for (auto& edge : edges) {
            if (unite(edge[0], edge[1])) {
                components--;
            }
        }
        
        return components;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> edges1 = {{0,1},{1,2},{3,4}};
    vector<vector<int>> edges2 = {{0,1},{1,2},{2,3},{3,4}};
    cout << sol.countComponents(5, edges1) << endl; // 2
    cout << sol.countComponents(5, edges2) << endl; // 1
    return 0;
}`,
        pythonSolution: `class Solution:
    def countComponents(self, n, edges):
        parent = list(range(n))
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return False
            parent[px] = py
            return True
        
        components = n
        for a, b in edges:
            if union(a, b):
                components -= 1
        
        return components

# Test
sol = Solution()
print(sol.countComponents(5, [[0,1],[1,2],[3,4]]))  # 2
print(sol.countComponents(5, [[0,1],[1,2],[2,3],[3,4]]))  # 1`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'interval',
    name: 'Interval',
    icon: 'CalendarRange',
    description: 'Master interval-based problems and scheduling',
    problems: [
      {
        id: 'insert-interval',
        title: 'Insert Interval',
        difficulty: 'Medium',
        description: 'You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.',
        examples: [
          { input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]', output: '[[1,5],[6,9]]' },
          { input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', output: '[[1,2],[3,10],[12,16]]' }
        ],
        constraints: ['0 <= intervals.length <= 10^4', 'intervals[i].length == 2', '0 <= starti <= endi <= 10^5'],
        javaSolution: `import java.util.*;

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;
        
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i++]);
        }
        
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.add(newInterval);
        
        while (i < intervals.length) {
            result.add(intervals[i++]);
        }
        
        return result.toArray(new int[result.size()][]);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] result = sol.insert(new int[][]{{1,3},{6,9}}, new int[]{2,5});
        for (int[] interval : result) {
            System.out.print(Arrays.toString(interval) + " ");
        }
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        int i = 0;
        
        while (i < intervals.size() && intervals[i][1] < newInterval[0]) {
            result.push_back(intervals[i++]);
        }
        
        while (i < intervals.size() && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[i][0]);
            newInterval[1] = max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push_back(newInterval);
        
        while (i < intervals.size()) {
            result.push_back(intervals[i++]);
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals = {{1,3},{6,9}};
    vector<int> newInterval = {2,5};
    auto result = sol.insert(intervals, newInterval);
    for (auto& interval : result) {
        cout << "[" << interval[0] << "," << interval[1] << "] ";
    }
    return 0;
}`,
        pythonSolution: `class Solution:
    def insert(self, intervals, newInterval):
        result = []
        i = 0
        
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        result.append(newInterval)
        
        while i < len(intervals):
            result.append(intervals[i])
            i += 1
        
        return result

# Test
sol = Solution()
print(sol.insert([[1,3],[6,9]], [2,5]))  # [[1,5],[6,9]]`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'merge-intervals',
        title: 'Merge Intervals',
        difficulty: 'Medium',
        description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
        examples: [
          { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', explanation: 'Intervals [1,3] and [2,6] overlap, so we merge them into [1,6].' },
          { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' }
        ],
        constraints: ['1 <= intervals.length <= 10^4', 'intervals[i].length == 2', '0 <= starti <= endi <= 10^4'],
        javaSolution: `import java.util.*;

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> result = new ArrayList<>();
        
        for (int[] interval : intervals) {
            if (result.isEmpty() || result.get(result.size() - 1)[1] < interval[0]) {
                result.add(interval);
            } else {
                result.get(result.size() - 1)[1] = Math.max(result.get(result.size() - 1)[1], interval[1]);
            }
        }
        
        return result.toArray(new int[result.size()][]);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] result = sol.merge(new int[][]{{1,3},{2,6},{8,10},{15,18}});
        for (int[] interval : result) {
            System.out.print(Arrays.toString(interval) + " ");
        }
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> result;
        
        for (auto& interval : intervals) {
            if (result.empty() || result.back()[1] < interval[0]) {
                result.push_back(interval);
            } else {
                result.back()[1] = max(result.back()[1], interval[1]);
            }
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals = {{1,3},{2,6},{8,10},{15,18}};
    auto result = sol.merge(intervals);
    for (auto& interval : result) {
        cout << "[" << interval[0] << "," << interval[1] << "] ";
    }
    return 0;
}`,
        pythonSolution: `class Solution:
    def merge(self, intervals):
        intervals.sort()
        result = []
        
        for interval in intervals:
            if not result or result[-1][1] < interval[0]:
                result.append(interval)
            else:
                result[-1][1] = max(result[-1][1], interval[1])
        
        return result

# Test
sol = Solution()
print(sol.merge([[1,3],[2,6],[8,10],[15,18]]))  # [[1,6],[8,10],[15,18]]`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'non-overlapping-intervals',
        title: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        description: 'Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
        examples: [
          { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1', explanation: '[1,3] can be removed.' },
          { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2' }
        ],
        constraints: ['1 <= intervals.length <= 10^5', 'intervals[i].length == 2'],
        javaSolution: `import java.util.*;

class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
        int count = 0;
        int prevEnd = Integer.MIN_VALUE;
        
        for (int[] interval : intervals) {
            if (interval[0] >= prevEnd) {
                prevEnd = interval[1];
            } else {
                count++;
            }
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}})); // 1
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
            return a[1] < b[1];
        });
        
        int count = 0;
        int prevEnd = INT_MIN;
        
        for (auto& interval : intervals) {
            if (interval[0] >= prevEnd) {
                prevEnd = interval[1];
            } else {
                count++;
            }
        }
        
        return count;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals = {{1,2},{2,3},{3,4},{1,3}};
    cout << sol.eraseOverlapIntervals(intervals) << endl; // 1
    return 0;
}`,
        pythonSolution: `class Solution:
    def eraseOverlapIntervals(self, intervals):
        intervals.sort(key=lambda x: x[1])
        count = 0
        prev_end = float('-inf')
        
        for start, end in intervals:
            if start >= prev_end:
                prev_end = end
            else:
                count += 1
        
        return count

# Test
sol = Solution()
print(sol.eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))  # 1`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'meeting-rooms',
        title: 'Meeting Rooms',
        difficulty: 'Easy',
        description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.',
        examples: [
          { input: 'intervals = [[0,30],[5,10],[15,20]]', output: 'false' },
          { input: 'intervals = [[7,10],[2,4]]', output: 'true' }
        ],
        constraints: ['0 <= intervals.length <= 10^4', 'intervals[i].length == 2', '0 <= starti < endi <= 10^6'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean canAttendMeetings(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.canAttendMeetings(new int[][]{{0,30},{5,10},{15,20}})); // false
        System.out.println(sol.canAttendMeetings(new int[][]{{7,10},{2,4}})); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());
        
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false;
            }
        }
        
        return true;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals1 = {{0,30},{5,10},{15,20}};
    vector<vector<int>> intervals2 = {{7,10},{2,4}};
    cout << (sol.canAttendMeetings(intervals1) ? "true" : "false") << endl; // false
    cout << (sol.canAttendMeetings(intervals2) ? "true" : "false") << endl; // true
    return 0;
}`,
        pythonSolution: `class Solution:
    def canAttendMeetings(self, intervals):
        intervals.sort()
        
        for i in range(1, len(intervals)):
            if intervals[i][0] < intervals[i - 1][1]:
                return False
        
        return True

# Test
sol = Solution()
print(sol.canAttendMeetings([[0,30],[5,10],[15,20]]))  # False
print(sol.canAttendMeetings([[7,10],[2,4]]))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'meeting-rooms-ii',
        title: 'Meeting Rooms II',
        difficulty: 'Medium',
        description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.',
        examples: [
          { input: 'intervals = [[0,30],[5,10],[15,20]]', output: '2' },
          { input: 'intervals = [[7,10],[2,4]]', output: '1' }
        ],
        constraints: ['1 <= intervals.length <= 10^4', '0 <= starti < endi <= 10^6'],
        javaSolution: `import java.util.*;

class Solution {
    public int minMeetingRooms(int[][] intervals) {
        int[] starts = new int[intervals.length];
        int[] ends = new int[intervals.length];
        
        for (int i = 0; i < intervals.length; i++) {
            starts[i] = intervals[i][0];
            ends[i] = intervals[i][1];
        }
        
        Arrays.sort(starts);
        Arrays.sort(ends);
        
        int rooms = 0, endPtr = 0;
        for (int start : starts) {
            if (start < ends[endPtr]) {
                rooms++;
            } else {
                endPtr++;
            }
        }
        
        return rooms;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.minMeetingRooms(new int[][]{{0,30},{5,10},{15,20}})); // 2
        System.out.println(sol.minMeetingRooms(new int[][]{{7,10},{2,4}})); // 1
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        vector<int> starts, ends;
        
        for (auto& interval : intervals) {
            starts.push_back(interval[0]);
            ends.push_back(interval[1]);
        }
        
        sort(starts.begin(), starts.end());
        sort(ends.begin(), ends.end());
        
        int rooms = 0, endPtr = 0;
        for (int start : starts) {
            if (start < ends[endPtr]) {
                rooms++;
            } else {
                endPtr++;
            }
        }
        
        return rooms;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals1 = {{0,30},{5,10},{15,20}};
    vector<vector<int>> intervals2 = {{7,10},{2,4}};
    cout << sol.minMeetingRooms(intervals1) << endl; // 2
    cout << sol.minMeetingRooms(intervals2) << endl; // 1
    return 0;
}`,
        pythonSolution: `class Solution:
    def minMeetingRooms(self, intervals):
        starts = sorted([i[0] for i in intervals])
        ends = sorted([i[1] for i in intervals])
        
        rooms = 0
        end_ptr = 0
        
        for start in starts:
            if start < ends[end_ptr]:
                rooms += 1
            else:
                end_ptr += 1
        
        return rooms

# Test
sol = Solution()
print(sol.minMeetingRooms([[0,30],[5,10],[15,20]]))  # 2
print(sol.minMeetingRooms([[7,10],[2,4]]))  # 1`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    icon: 'Link',
    description: 'Master linked list operations and techniques',
    problems: [
      {
        id: 'reverse-linked-list',
        title: 'Reverse a Linked List',
        difficulty: 'Easy',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
        examples: [
          { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
          { input: 'head = [1,2]', output: '[2,1]' }
        ],
        constraints: ['The number of nodes in the list is the range [0, 5000]', '-5000 <= Node.val <= 5000'],
        javaSolution: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
    
    public static void main(String[] args) {
        System.out.println("Reverse Linked List solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
};

int main() {
    cout << "Reverse Linked List solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head):
        prev = None
        curr = head
        
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        
        return prev

# Test
print("Reverse Linked List solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'detect-cycle-in-linked-list',
        title: 'Detect Cycle in a Linked List',
        difficulty: 'Easy',
        description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle, otherwise return false.',
        examples: [
          { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'There is a cycle where tail connects to node at index 1.' },
          { input: 'head = [1,2], pos = 0', output: 'true' }
        ],
        constraints: ['The number of nodes is in the range [0, 10^4]', '-10^5 <= Node.val <= 10^5'],
        javaSolution: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public boolean hasCycle(ListNode head) {
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
        System.out.println("Detect Cycle in Linked List solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
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
};

int main() {
    cout << "Detect Cycle in Linked List solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def hasCycle(self, head):
        if not head or not head.next:
            return False
        
        slow = fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        
        return False

# Test
print("Detect Cycle in Linked List solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'merge-two-sorted-lists',
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
        examples: [
          { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
          { input: 'list1 = [], list2 = [0]', output: '[0]' }
        ],
        constraints: ['The number of nodes in both lists is in the range [0, 50]', '-100 <= Node.val <= 100'],
        javaSolution: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        
        curr.next = list1 != null ? list1 : list2;
        return dummy.next;
    }
    
    public static void main(String[] args) {
        System.out.println("Merge Two Sorted Lists solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        
        while (list1 && list2) {
            if (list1->val <= list2->val) {
                curr->next = list1;
                list1 = list1->next;
            } else {
                curr->next = list2;
                list2 = list2->next;
            }
            curr = curr->next;
        }
        
        curr->next = list1 ? list1 : list2;
        return dummy.next;
    }
};

int main() {
    cout << "Merge Two Sorted Lists solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode()
        curr = dummy
        
        while list1 and list2:
            if list1.val <= list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next
        
        curr.next = list1 or list2
        return dummy.next

# Test
print("Merge Two Sorted Lists solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'merge-k-sorted-lists',
        title: 'Merge K Sorted Lists',
        difficulty: 'Hard',
        description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
        examples: [
          { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
          { input: 'lists = []', output: '[]' }
        ],
        constraints: ['k == lists.length', '0 <= k <= 10^4', '0 <= lists[i].length <= 500'],
        javaSolution: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        
        for (ListNode list : lists) {
            if (list != null) pq.offer(list);
        }
        
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            curr.next = node;
            curr = curr.next;
            if (node.next != null) pq.offer(node.next);
        }
        
        return dummy.next;
    }
    
    public static void main(String[] args) {
        System.out.println("Merge K Sorted Lists solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
        priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
        
        for (auto list : lists) {
            if (list) pq.push(list);
        }
        
        ListNode dummy(0);
        ListNode* curr = &dummy;
        
        while (!pq.empty()) {
            ListNode* node = pq.top();
            pq.pop();
            curr->next = node;
            curr = curr->next;
            if (node->next) pq.push(node->next);
        }
        
        return dummy.next;
    }
};

int main() {
    cout << "Merge K Sorted Lists solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists):
        heap = []
        for i, lst in enumerate(lists):
            if lst:
                heapq.heappush(heap, (lst.val, i, lst))
        
        dummy = ListNode()
        curr = dummy
        
        while heap:
            val, i, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        
        return dummy.next

# Test
print("Merge K Sorted Lists solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'remove-nth-node-from-end',
        title: 'Remove Nth Node From End Of List',
        difficulty: 'Medium',
        description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        examples: [
          { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' },
          { input: 'head = [1], n = 1', output: '[]' }
        ],
        constraints: ['The number of nodes in the list is sz', '1 <= sz <= 30', '1 <= n <= sz'],
        javaSolution: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy, slow = dummy;
        
        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }
        
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        
        slow.next = slow.next.next;
        return dummy.next;
    }
    
    public static void main(String[] args) {
        System.out.println("Remove Nth Node From End solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode dummy(0);
        dummy.next = head;
        ListNode* fast = &dummy;
        ListNode* slow = &dummy;
        
        for (int i = 0; i <= n; i++) {
            fast = fast->next;
        }
        
        while (fast) {
            fast = fast->next;
            slow = slow->next;
        }
        
        slow->next = slow->next->next;
        return dummy.next;
    }
};

int main() {
    cout << "Remove Nth Node From End solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0, head)
        fast = slow = dummy
        
        for _ in range(n + 1):
            fast = fast.next
        
        while fast:
            fast = fast.next
            slow = slow.next
        
        slow.next = slow.next.next
        return dummy.next

# Test
print("Remove Nth Node From End solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'reorder-list',
        title: 'Reorder List',
        difficulty: 'Medium',
        description: 'You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …',
        examples: [
          { input: 'head = [1,2,3,4]', output: '[1,4,2,3]' },
          { input: 'head = [1,2,3,4,5]', output: '[1,5,2,4,3]' }
        ],
        constraints: ['The number of nodes in the list is in the range [1, 5 * 10^4]', '1 <= Node.val <= 1000'],
        javaSolution: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null) return;
        
        // Find middle
        ListNode slow = head, fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Reverse second half
        ListNode prev = null, curr = slow.next;
        slow.next = null;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        // Merge
        ListNode first = head, second = prev;
        while (second != null) {
            ListNode tmp1 = first.next, tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
    
    public static void main(String[] args) {
        System.out.println("Reorder List solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    void reorderList(ListNode* head) {
        if (!head || !head->next) return;
        
        // Find middle
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next && fast->next->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        // Reverse second half
        ListNode* prev = nullptr;
        ListNode* curr = slow->next;
        slow->next = nullptr;
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        // Merge
        ListNode* first = head;
        ListNode* second = prev;
        while (second) {
            ListNode* tmp1 = first->next;
            ListNode* tmp2 = second->next;
            first->next = second;
            second->next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
};

int main() {
    cout << "Reorder List solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head):
        if not head or not head.next:
            return
        
        # Find middle
        slow = fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        
        # Reverse second half
        prev, curr = None, slow.next
        slow.next = None
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        
        # Merge
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2

# Test
print("Reorder List solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'matrix',
    name: 'Matrix',
    icon: 'Grid3X3',
    description: 'Master 2D array and matrix problems',
    problems: [
      {
        id: 'set-matrix-zeroes',
        title: 'Set Matrix Zeroes',
        difficulty: 'Medium',
        description: 'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0\'s. You must do it in place.',
        examples: [
          { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' },
          { input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' }
        ],
        constraints: ['m == matrix.length', 'n == matrix[0].length', '1 <= m, n <= 200'],
        javaSolution: `class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        boolean firstRowZero = false, firstColZero = false;
        
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) firstRowZero = true;
        }
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) firstColZero = true;
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        if (firstRowZero) {
            for (int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if (firstColZero) {
            for (int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
    
    public static void main(String[] args) {
        System.out.println("Set Matrix Zeroes solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRowZero = false, firstColZero = false;
        
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) firstRowZero = true;
        }
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) firstColZero = true;
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        if (firstRowZero) {
            for (int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if (firstColZero) {
            for (int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
};

int main() {
    cout << "Set Matrix Zeroes solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def setZeroes(self, matrix):
        m, n = len(matrix), len(matrix[0])
        first_row_zero = any(matrix[0][j] == 0 for j in range(n))
        first_col_zero = any(matrix[i][0] == 0 for i in range(m))
        
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
        
        if first_row_zero:
            for j in range(n):
                matrix[0][j] = 0
        if first_col_zero:
            for i in range(m):
                matrix[i][0] = 0

# Test
print("Set Matrix Zeroes solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'spiral-matrix',
        title: 'Spiral Matrix',
        difficulty: 'Medium',
        description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
        examples: [
          { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
          { input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', output: '[1,2,3,4,8,12,11,10,9,5,6,7]' }
        ],
        constraints: ['m == matrix.length', 'n == matrix[i].length', '1 <= m, n <= 10'],
        javaSolution: `import java.util.*;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            for (int j = left; j <= right; j++) result.add(matrix[top][j]);
            top++;
            
            for (int i = top; i <= bottom; i++) result.add(matrix[i][right]);
            right--;
            
            if (top <= bottom) {
                for (int j = right; j >= left; j--) result.add(matrix[bottom][j]);
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
        Solution sol = new Solution();
        System.out.println(sol.spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}}));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        int top = 0, bottom = matrix.size() - 1;
        int left = 0, right = matrix[0].size() - 1;
        
        while (top <= bottom && left <= right) {
            for (int j = left; j <= right; j++) result.push_back(matrix[top][j]);
            top++;
            
            for (int i = top; i <= bottom; i++) result.push_back(matrix[i][right]);
            right--;
            
            if (top <= bottom) {
                for (int j = right; j >= left; j--) result.push_back(matrix[bottom][j]);
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--) result.push_back(matrix[i][left]);
                left++;
            }
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    auto result = sol.spiralOrder(matrix);
    for (int num : result) cout << num << " ";
    return 0;
}`,
        pythonSolution: `class Solution:
    def spiralOrder(self, matrix):
        result = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        
        while top <= bottom and left <= right:
            for j in range(left, right + 1):
                result.append(matrix[top][j])
            top += 1
            
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                for j in range(right, left - 1, -1):
                    result.append(matrix[bottom][j])
                bottom -= 1
            
            if left <= right:
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result

# Test
sol = Solution()
print(sol.spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'rotate-image',
        title: 'Rotate Image',
        difficulty: 'Medium',
        description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place.',
        examples: [
          { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' }
        ],
        constraints: ['n == matrix.length == matrix[i].length', '1 <= n <= 20', '-1000 <= matrix[i][j] <= 1000'],
        javaSolution: `class Solution {
    public void rotate(int[][] matrix) {
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
        System.out.println("Rotate Image solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
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
};

int main() {
    cout << "Rotate Image solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def rotate(self, matrix):
        n = len(matrix)
        
        # Transpose
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        
        # Reverse each row
        for i in range(n):
            matrix[i].reverse()

# Test
matrix = [[1,2,3],[4,5,6],[7,8,9]]
Solution().rotate(matrix)
print(matrix)`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'word-search',
        title: 'Word Search',
        difficulty: 'Medium',
        description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring).',
        examples: [
          { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' },
          { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true' }
        ],
        constraints: ['m == board.length', 'n = board[i].length', '1 <= m, n <= 6', '1 <= word.length <= 15'],
        javaSolution: `class Solution {
    public boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (dfs(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    
    private boolean dfs(char[][] board, String word, int i, int j, int k) {
        if (k == word.length()) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
        if (board[i][j] != word.charAt(k)) return false;
        
        char temp = board[i][j];
        board[i][j] = '#';
        
        boolean found = dfs(board, word, i + 1, j, k + 1) ||
                       dfs(board, word, i - 1, j, k + 1) ||
                       dfs(board, word, i, j + 1, k + 1) ||
                       dfs(board, word, i, j - 1, k + 1);
        
        board[i][j] = temp;
        return found;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        System.out.println(sol.exist(board, "ABCCED")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (dfs(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    
private:
    bool dfs(vector<vector<char>>& board, string& word, int i, int j, int k) {
        if (k == word.size()) return true;
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return false;
        if (board[i][j] != word[k]) return false;
        
        char temp = board[i][j];
        board[i][j] = '#';
        
        bool found = dfs(board, word, i + 1, j, k + 1) ||
                    dfs(board, word, i - 1, j, k + 1) ||
                    dfs(board, word, i, j + 1, k + 1) ||
                    dfs(board, word, i, j - 1, k + 1);
        
        board[i][j] = temp;
        return found;
    }
};

int main() {
    Solution sol;
    vector<vector<char>> board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << (sol.exist(board, "ABCCED") ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def exist(self, board, word):
        def dfs(i, j, k):
            if k == len(word):
                return True
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
                return False
            if board[i][j] != word[k]:
                return False
            
            temp = board[i][j]
            board[i][j] = '#'
            
            found = (dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or
                    dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1))
            
            board[i][j] = temp
            return found
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                if dfs(i, j, 0):
                    return True
        return False

# Test
sol = Solution()
board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]
print(sol.exist(board, "ABCCED"))  # True`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'string',
    name: 'String',
    icon: 'Type',
    description: 'Master string manipulation and pattern matching',
    problems: [
      {
        id: 'longest-substring-without-repeating',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        description: 'Given a string s, find the length of the longest substring without repeating characters.',
        examples: [
          { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with the length of 3.' },
          { input: 's = "bbbbb"', output: '1' }
        ],
        constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces'],
        javaSolution: `import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c)) {
                left = Math.max(left, map.get(c) + 1);
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb")); // 3
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;
        int maxLen = 0, left = 0;
        
        for (int right = 0; right < s.size(); right++) {
            if (map.count(s[right])) {
                left = max(left, map[s[right]] + 1);
            }
            map[s[right]] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
};

int main() {
    Solution sol;
    cout << sol.lengthOfLongestSubstring("abcabcbb") << endl; // 3
    return 0;
}`,
        pythonSolution: `class Solution:
    def lengthOfLongestSubstring(self, s):
        char_map = {}
        max_len = left = 0
        
        for right, c in enumerate(s):
            if c in char_map:
                left = max(left, char_map[c] + 1)
            char_map[c] = right
            max_len = max(max_len, right - left + 1)
        
        return max_len

# Test
sol = Solution()
print(sol.lengthOfLongestSubstring("abcabcbb"))  # 3`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'longest-repeating-character-replacement',
        title: 'Longest Repeating Character Replacement',
        difficulty: 'Medium',
        description: 'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.',
        examples: [
          { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace the two "A"s with "B"s or vice versa.' },
          { input: 's = "AABABBA", k = 1', output: '4' }
        ],
        constraints: ['1 <= s.length <= 10^5', 's consists of only uppercase English letters', '0 <= k <= s.length'],
        javaSolution: `class Solution {
    public int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int maxCount = 0, maxLen = 0, left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            
            while (right - left + 1 - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.characterReplacement("ABAB", 2)); // 4
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    int characterReplacement(string s, int k) {
        int count[26] = {0};
        int maxCount = 0, maxLen = 0, left = 0;
        
        for (int right = 0; right < s.size(); right++) {
            count[s[right] - 'A']++;
            maxCount = max(maxCount, count[s[right] - 'A']);
            
            while (right - left + 1 - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
            }
            
            maxLen = max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
};

int main() {
    Solution sol;
    cout << sol.characterReplacement("ABAB", 2) << endl; // 4
    return 0;
}`,
        pythonSolution: `class Solution:
    def characterReplacement(self, s, k):
        count = {}
        max_count = max_len = left = 0
        
        for right, c in enumerate(s):
            count[c] = count.get(c, 0) + 1
            max_count = max(max_count, count[c])
            
            while right - left + 1 - max_count > k:
                count[s[left]] -= 1
                left += 1
            
            max_len = max(max_len, right - left + 1)
        
        return max_len

# Test
sol = Solution()
print(sol.characterReplacement("ABAB", 2))  # 4`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'minimum-window-substring',
        title: 'Minimum Window Substring',
        difficulty: 'Hard',
        description: 'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".',
        examples: [
          { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'The minimum window substring "BANC" includes "A", "B", and "C" from string t.' },
          { input: 's = "a", t = "a"', output: '"a"' }
        ],
        constraints: ['m == s.length', 'n == t.length', '1 <= m, n <= 10^5'],
        javaSolution: `import java.util.*;

class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> need = new HashMap<>();
        for (char c : t.toCharArray()) need.put(c, need.getOrDefault(c, 0) + 1);
        
        int left = 0, minLen = Integer.MAX_VALUE, minStart = 0;
        int required = need.size(), formed = 0;
        Map<Character, Integer> window = new HashMap<>();
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            window.put(c, window.getOrDefault(c, 0) + 1);
            
            if (need.containsKey(c) && window.get(c).intValue() == need.get(c).intValue()) {
                formed++;
            }
            
            while (formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }
                
                char leftChar = s.charAt(left);
                window.put(leftChar, window.get(leftChar) - 1);
                if (need.containsKey(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }
                left++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.minWindow("ADOBECODEBANC", "ABC")); // BANC
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> need, window;
        for (char c : t) need[c]++;
        
        int left = 0, minLen = INT_MAX, minStart = 0;
        int required = need.size(), formed = 0;
        
        for (int right = 0; right < s.size(); right++) {
            char c = s[right];
            window[c]++;
            
            if (need.count(c) && window[c] == need[c]) {
                formed++;
            }
            
            while (formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }
                
                char leftChar = s[left];
                window[leftChar]--;
                if (need.count(leftChar) && window[leftChar] < need[leftChar]) {
                    formed--;
                }
                left++;
            }
        }
        
        return minLen == INT_MAX ? "" : s.substr(minStart, minLen);
    }
};

int main() {
    Solution sol;
    cout << sol.minWindow("ADOBECODEBANC", "ABC") << endl; // BANC
    return 0;
}`,
        pythonSolution: `from collections import Counter

class Solution:
    def minWindow(self, s, t):
        need = Counter(t)
        window = {}
        left = 0
        min_len = float('inf')
        min_start = 0
        required = len(need)
        formed = 0
        
        for right, c in enumerate(s):
            window[c] = window.get(c, 0) + 1
            
            if c in need and window[c] == need[c]:
                formed += 1
            
            while formed == required:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                    min_start = left
                
                left_char = s[left]
                window[left_char] -= 1
                if left_char in need and window[left_char] < need[left_char]:
                    formed -= 1
                left += 1
        
        return "" if min_len == float('inf') else s[min_start:min_start + min_len]

# Test
sol = Solution()
print(sol.minWindow("ADOBECODEBANC", "ABC"))  # BANC`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        difficulty: 'Easy',
        description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
        examples: [
          { input: 's = "anagram", t = "nagaram"', output: 'true' },
          { input: 's = "rat", t = "car"', output: 'false' }
        ],
        constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        
        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isAnagram("anagram", "nagaram")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) return false;
        
        int count[26] = {0};
        for (int i = 0; i < s.size(); i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }
        
        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }
};

int main() {
    Solution sol;
    cout << (sol.isAnagram("anagram", "nagaram") ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)

# Test
sol = Solution()
print(sol.isAnagram("anagram", "nagaram"))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'group-anagrams',
        title: 'Group Anagrams',
        difficulty: 'Medium',
        description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
        examples: [
          { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
          { input: 'strs = [""]', output: '[[""]]' }
        ],
        constraints: ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100'],
        javaSolution: `import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        
        return new ArrayList<>(map.values());
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> map;
        
        for (string& s : strs) {
            string key = s;
            sort(key.begin(), key.end());
            map[key].push_back(s);
        }
        
        vector<vector<string>> result;
        for (auto& pair : map) {
            result.push_back(pair.second);
        }
        return result;
    }
};

int main() {
    Solution sol;
    vector<string> strs = {"eat","tea","tan","ate","nat","bat"};
    auto result = sol.groupAnagrams(strs);
    for (auto& group : result) {
        for (auto& s : group) cout << s << " ";
        cout << endl;
    }
    return 0;
}`,
        pythonSolution: `from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):
        groups = defaultdict(list)
        for s in strs:
            key = ''.join(sorted(s))
            groups[key].append(s)
        return list(groups.values())

# Test
sol = Solution()
print(sol.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'valid-parentheses',
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.',
        examples: [
          { input: 's = "()"', output: 'true' },
          { input: 's = "()[]{}"', output: 'true' },
          { input: 's = "(]"', output: 'false' }
        ],
        constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only "()[]{}"'],
        javaSolution: `import java.util.*;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != map.get(c)) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isValid("()[]{}")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <stack>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> map = {{')', '('}, {'}', '{'}, {']', '['}};
        
        for (char c : s) {
            if (map.count(c)) {
                if (st.empty() || st.top() != map[c]) {
                    return false;
                }
                st.pop();
            } else {
                st.push(c);
            }
        }
        
        return st.empty();
    }
};

int main() {
    Solution sol;
    cout << (sol.isValid("()[]{}") ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def isValid(self, s):
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        
        for c in s:
            if c in mapping:
                if not stack or stack.pop() != mapping[c]:
                    return False
            else:
                stack.append(c)
        
        return not stack

# Test
sol = Solution()
print(sol.isValid("()[]{}"))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        difficulty: 'Easy',
        description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.',
        examples: [
          { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
          { input: 's = "race a car"', output: 'false' }
        ],
        constraints: ['1 <= s.length <= 2 * 10^5', 's consists only of printable ASCII characters'],
        javaSolution: `class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isPalindrome("A man, a plan, a canal: Panama")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        int left = 0, right = s.size() - 1;
        
        while (left < right) {
            while (left < right && !isalnum(s[left])) left++;
            while (left < right && !isalnum(s[right])) right--;
            if (tolower(s[left]) != tolower(s[right])) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
};

int main() {
    Solution sol;
    cout << (sol.isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def isPalindrome(self, s):
        cleaned = ''.join(c.lower() for c in s if c.isalnum())
        return cleaned == cleaned[::-1]

# Test
sol = Solution()
print(sol.isPalindrome("A man, a plan, a canal: Panama"))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'longest-palindromic-substring',
        title: 'Longest Palindromic Substring',
        difficulty: 'Medium',
        description: 'Given a string s, return the longest palindromic substring in s.',
        examples: [
          { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
          { input: 's = "cbbd"', output: '"bb"' }
        ],
        constraints: ['1 <= s.length <= 1000', 's consist of only digits and English letters'],
        javaSolution: `class Solution {
    public String longestPalindrome(String s) {
        if (s.length() < 2) return s;
        
        int start = 0, maxLen = 1;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            
            if (len > maxLen) {
                maxLen = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substring(start, start + maxLen);
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestPalindrome("babad")); // bab or aba
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        if (s.size() < 2) return s;
        
        int start = 0, maxLen = 1;
        
        for (int i = 0; i < s.size(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = max(len1, len2);
            
            if (len > maxLen) {
                maxLen = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substr(start, maxLen);
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};

int main() {
    Solution sol;
    cout << sol.longestPalindrome("babad") << endl;
    return 0;
}`,
        pythonSolution: `class Solution:
    def longestPalindrome(self, s):
        def expand(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]
        
        result = ""
        for i in range(len(s)):
            odd = expand(i, i)
            even = expand(i, i + 1)
            result = max(result, odd, even, key=len)
        
        return result

# Test
sol = Solution()
print(sol.longestPalindrome("babad"))`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'palindromic-substrings',
        title: 'Palindromic Substrings',
        difficulty: 'Medium',
        description: 'Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.',
        examples: [
          { input: 's = "abc"', output: '3', explanation: 'Three palindromic strings: "a", "b", "c".' },
          { input: 's = "aaa"', output: '6', explanation: 'Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".' }
        ],
        constraints: ['1 <= s.length <= 1000', 's consists of lowercase English letters'],
        javaSolution: `class Solution {
    public int countSubstrings(String s) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            count += expandAroundCenter(s, i, i);
            count += expandAroundCenter(s, i, i + 1);
        }
        
        return count;
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }
        return count;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.countSubstrings("aaa")); // 6
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    int countSubstrings(string s) {
        int count = 0;
        
        for (int i = 0; i < s.size(); i++) {
            count += expandAroundCenter(s, i, i);
            count += expandAroundCenter(s, i, i + 1);
        }
        
        return count;
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
};

int main() {
    Solution sol;
    cout << sol.countSubstrings("aaa") << endl; // 6
    return 0;
}`,
        pythonSolution: `class Solution:
    def countSubstrings(self, s):
        def expand(left, right):
            count = 0
            while left >= 0 and right < len(s) and s[left] == s[right]:
                count += 1
                left -= 1
                right += 1
            return count
        
        total = 0
        for i in range(len(s)):
            total += expand(i, i)
            total += expand(i, i + 1)
        
        return total

# Test
sol = Solution()
print(sol.countSubstrings("aaa"))  # 6`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'tree',
    name: 'Tree',
    icon: 'GitBranch',
    description: 'Master binary tree and BST algorithms',
    problems: [
      {
        id: 'maximum-depth-of-binary-tree',
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        description: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
        examples: [
          { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
          { input: 'root = [1,null,2]', output: '2' }
        ],
        constraints: ['The number of nodes in the tree is in the range [0, 10^4]', '-100 <= Node.val <= 100'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    
    public static void main(String[] args) {
        System.out.println("Maximum Depth of Binary Tree solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root) return 0;
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};

int main() {
    cout << "Maximum Depth of Binary Tree solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root):
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

# Test
print("Maximum Depth of Binary Tree solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'same-tree',
        title: 'Same Tree',
        difficulty: 'Easy',
        description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
        examples: [
          { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' },
          { input: 'p = [1,2], q = [1,null,2]', output: 'false' }
        ],
        constraints: ['The number of nodes in both trees is in the range [0, 100]', '-10^4 <= Node.val <= 10^4'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    public static void main(String[] args) {
        System.out.println("Same Tree solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p->val != q->val) return false;
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};

int main() {
    cout << "Same Tree solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p, q):
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

# Test
print("Same Tree solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'invert-binary-tree',
        title: 'Invert/Flip Binary Tree',
        difficulty: 'Easy',
        description: 'Given the root of a binary tree, invert the tree, and return its root.',
        examples: [
          { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
          { input: 'root = [2,1,3]', output: '[2,3,1]' }
        ],
        constraints: ['The number of nodes in the tree is in the range [0, 100]', '-100 <= Node.val <= 100'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
        
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println("Invert Binary Tree solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return nullptr;
        
        TreeNode* temp = root->left;
        root->left = invertTree(root->right);
        root->right = invertTree(temp);
        
        return root;
    }
};

int main() {
    cout << "Invert Binary Tree solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root):
        if not root:
            return None
        
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root

# Test
print("Invert Binary Tree solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'binary-tree-level-order-traversal',
        title: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
        examples: [
          { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
          { input: 'root = [1]', output: '[[1]]' }
        ],
        constraints: ['The number of nodes in the tree is in the range [0, 2000]', '-1000 <= Node.val <= 1000'],
        javaSolution: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
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
        System.out.println("Level Order Traversal solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
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
};

int main() {
    cout << "Level Order Traversal solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root):
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

# Test
print("Level Order Traversal solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'validate-binary-search-tree',
        title: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node\'s key. The right subtree of a node contains only nodes with keys greater than the node\'s key. Both the left and right subtrees must also be binary search trees.',
        examples: [
          { input: 'root = [2,1,3]', output: 'true' },
          { input: 'root = [5,1,4,null,null,3,6]', output: 'false' }
        ],
        constraints: ['The number of nodes in the tree is in the range [1, 10^4]', '-2^31 <= Node.val <= 2^31 - 1'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    
    private boolean validate(TreeNode node, long min, long max) {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    
    public static void main(String[] args) {
        System.out.println("Validate BST solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    
private:
    bool validate(TreeNode* node, long min, long max) {
        if (!node) return true;
        if (node->val <= min || node->val >= max) return false;
        return validate(node->left, min, node->val) && validate(node->right, node->val, max);
    }
};

int main() {
    cout << "Validate BST solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root):
        def validate(node, min_val, max_val):
            if not node:
                return True
            if node.val <= min_val or node.val >= max_val:
                return False
            return validate(node.left, min_val, node.val) and validate(node.right, node.val, max_val)
        
        return validate(root, float('-inf'), float('inf'))

# Test
print("Validate BST solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'kth-smallest-element-in-bst',
        title: 'Kth Smallest Element in a BST',
        difficulty: 'Medium',
        description: 'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
        examples: [
          { input: 'root = [3,1,4,null,2], k = 1', output: '1' },
          { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3' }
        ],
        constraints: ['The number of nodes in the tree is n', '1 <= k <= n <= 10^4', '0 <= Node.val <= 10^4'],
        javaSolution: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            k--;
            if (k == 0) return curr.val;
            curr = curr.right;
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println("Kth Smallest Element in BST solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> st;
        TreeNode* curr = root;
        
        while (curr || !st.empty()) {
            while (curr) {
                st.push(curr);
                curr = curr->left;
            }
            curr = st.top();
            st.pop();
            k--;
            if (k == 0) return curr->val;
            curr = curr->right;
        }
        
        return -1;
    }
};

int main() {
    cout << "Kth Smallest Element in BST solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def kthSmallest(self, root, k):
        stack = []
        curr = root
        
        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            k -= 1
            if k == 0:
                return curr.val
            curr = curr.right
        
        return -1

# Test
print("Kth Smallest Element in BST solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'lowest-common-ancestor-bst',
        title: 'Lowest Common Ancestor of BST',
        difficulty: 'Medium',
        description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants.',
        examples: [
          { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', output: '6' },
          { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', output: '2' }
        ],
        constraints: ['The number of nodes in the tree is in the range [2, 10^5]', '-10^9 <= Node.val <= 10^9', 'All Node.val are unique', 'p != q', 'p and q will exist in the BST'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("LCA of BST solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while (root) {
            if (p->val < root->val && q->val < root->val) {
                root = root->left;
            } else if (p->val > root->val && q->val > root->val) {
                root = root->right;
            } else {
                return root;
            }
        }
        return nullptr;
    }
};

int main() {
    cout << "LCA of BST solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def lowestCommonAncestor(self, root, p, q):
        while root:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif p.val > root.val and q.val > root.val:
                root = root.right
            else:
                return root
        return None

# Test
print("LCA of BST solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'implement-trie',
        title: 'Implement Trie (Prefix Tree)',
        difficulty: 'Medium',
        description: 'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class with insert, search, and startsWith methods.',
        examples: [
          { input: '["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]', output: '[null, null, true, false, true, null, true]' }
        ],
        constraints: ['1 <= word.length, prefix.length <= 2000', 'word and prefix consist only of lowercase English letters'],
        javaSolution: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.children[idx] == null) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        node.isEnd = true;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEnd;
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.children[idx] == null) return null;
            node = node.children[idx];
        }
        return node;
    }
    
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println(trie.search("apple")); // true
        System.out.println(trie.startsWith("app")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class TrieNode {
public:
    TrieNode* children[26] = {nullptr};
    bool isEnd = false;
};

class Trie {
private:
    TrieNode* root;
    
    TrieNode* searchPrefix(string& word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) return nullptr;
            node = node->children[idx];
        }
        return node;
    }
    
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) {
                node->children[idx] = new TrieNode();
            }
            node = node->children[idx];
        }
        node->isEnd = true;
    }
    
    bool search(string word) {
        TrieNode* node = searchPrefix(word);
        return node && node->isEnd;
    }
    
    bool startsWith(string prefix) {
        return searchPrefix(prefix) != nullptr;
    }
};

int main() {
    Trie trie;
    trie.insert("apple");
    cout << (trie.search("apple") ? "true" : "false") << endl;
    cout << (trie.startsWith("app") ? "true" : "false") << endl;
    return 0;
}`,
        pythonSolution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True
    
    def search(self, word):
        node = self._search_prefix(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._search_prefix(prefix) is not None
    
    def _search_prefix(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                return None
            node = node.children[c]
        return node

# Test
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # True
print(trie.startsWith("app"))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'add-and-search-word',
        title: 'Add and Search Word',
        difficulty: 'Medium',
        description: 'Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class with addWord(word) and search(word) methods. The search method can search a literal word or a regular expression string containing only letters a-z or "." where "." means it can represent any letter.',
        examples: [
          { input: '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]', output: '[null,null,null,null,false,true,true,true]' }
        ],
        constraints: ['1 <= word.length <= 25', 'word in addWord consists of lowercase English letters', 'word in search consist of "." or lowercase English letters', 'There will be at most 3 dots in word for search queries'],
        javaSolution: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}

class WordDictionary {
    private TrieNode root;
    
    public WordDictionary() {
        root = new TrieNode();
    }
    
    public void addWord(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.children[idx] == null) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        node.isEnd = true;
    }
    
    public boolean search(String word) {
        return searchHelper(word, 0, root);
    }
    
    private boolean searchHelper(String word, int idx, TrieNode node) {
        if (node == null) return false;
        if (idx == word.length()) return node.isEnd;
        
        char c = word.charAt(idx);
        if (c == '.') {
            for (TrieNode child : node.children) {
                if (searchHelper(word, idx + 1, child)) return true;
            }
            return false;
        } else {
            return searchHelper(word, idx + 1, node.children[c - 'a']);
        }
    }
    
    public static void main(String[] args) {
        WordDictionary wd = new WordDictionary();
        wd.addWord("bad");
        wd.addWord("dad");
        wd.addWord("mad");
        System.out.println(wd.search("pad")); // false
        System.out.println(wd.search("bad")); // true
        System.out.println(wd.search(".ad")); // true
        System.out.println(wd.search("b..")); // true
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
using namespace std;

class TrieNode {
public:
    TrieNode* children[26] = {nullptr};
    bool isEnd = false;
};

class WordDictionary {
private:
    TrieNode* root;
    
    bool searchHelper(const string& word, int idx, TrieNode* node) {
        if (!node) return false;
        if (idx == word.size()) return node->isEnd;
        
        char c = word[idx];
        if (c == '.') {
            for (int i = 0; i < 26; i++) {
                if (searchHelper(word, idx + 1, node->children[i])) return true;
            }
            return false;
        } else {
            return searchHelper(word, idx + 1, node->children[c - 'a']);
        }
    }
    
public:
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!node->children[idx]) {
                node->children[idx] = new TrieNode();
            }
            node = node->children[idx];
        }
        node->isEnd = true;
    }
    
    bool search(string word) {
        return searchHelper(word, 0, root);
    }
};

int main() {
    WordDictionary wd;
    wd.addWord("bad");
    wd.addWord("dad");
    wd.addWord("mad");
    cout << (wd.search("pad") ? "true" : "false") << endl; // false
    cout << (wd.search("bad") ? "true" : "false") << endl; // true
    cout << (wd.search(".ad") ? "true" : "false") << endl; // true
    cout << (wd.search("b..") ? "true" : "false") << endl; // true
    return 0;
}`,
        pythonSolution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()
    
    def addWord(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True
    
    def search(self, word):
        def dfs(idx, node):
            if idx == len(word):
                return node.is_end
            
            c = word[idx]
            if c == '.':
                for child in node.children.values():
                    if dfs(idx + 1, child):
                        return True
                return False
            else:
                if c not in node.children:
                    return False
                return dfs(idx + 1, node.children[c])
        
        return dfs(0, self.root)

# Test
wd = WordDictionary()
wd.addWord("bad")
wd.addWord("dad")
wd.addWord("mad")
print(wd.search("pad"))  # False
print(wd.search("bad"))  # True
print(wd.search(".ad"))  # True
print(wd.search("b.."))  # True`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'word-search-ii',
        title: 'Word Search II',
        difficulty: 'Hard',
        description: 'Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.',
        examples: [
          { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' },
          { input: 'board = [["a","b"],["c","d"]], words = ["abcb"]', output: '[]' }
        ],
        constraints: ['m == board.length', 'n == board[i].length', '1 <= m, n <= 12', 'board[i][j] is a lowercase English letter', '1 <= words.length <= 3 * 10^4', '1 <= words[i].length <= 10'],
        javaSolution: `import java.util.*;

class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String word = null;
}

class Solution {
    private int[] dx = {0, 0, 1, -1};
    private int[] dy = {1, -1, 0, 0};
    
    public List<String> findWords(char[][] board, String[] words) {
        List<String> result = new ArrayList<>();
        TrieNode root = buildTrie(words);
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                dfs(board, i, j, root, result);
            }
        }
        
        return result;
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
    
    private void dfs(char[][] board, int i, int j, TrieNode node, List<String> result) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        
        char c = board[i][j];
        if (c == '#' || node.children[c - 'a'] == null) return;
        
        node = node.children[c - 'a'];
        if (node.word != null) {
            result.add(node.word);
            node.word = null; // Avoid duplicates
        }
        
        board[i][j] = '#';
        for (int d = 0; d < 4; d++) {
            dfs(board, i + dx[d], j + dy[d], node, result);
        }
        board[i][j] = c;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        char[][] board = {{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}};
        String[] words = {"oath","pea","eat","rain"};
        System.out.println(sol.findWords(board, words)); // [oath, eat]
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class TrieNode {
public:
    TrieNode* children[26] = {nullptr};
    string word = "";
};

class Solution {
    int dx[4] = {0, 0, 1, -1};
    int dy[4] = {1, -1, 0, 0};
    
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
    
    void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node, vector<string>& result) {
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return;
        
        char c = board[i][j];
        if (c == '#' || !node->children[c - 'a']) return;
        
        node = node->children[c - 'a'];
        if (!node->word.empty()) {
            result.push_back(node->word);
            node->word = "";
        }
        
        board[i][j] = '#';
        for (int d = 0; d < 4; d++) {
            dfs(board, i + dx[d], j + dy[d], node, result);
        }
        board[i][j] = c;
    }
    
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        vector<string> result;
        TrieNode* root = buildTrie(words);
        
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                dfs(board, i, j, root, result);
            }
        }
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<char>> board = {{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}};
    vector<string> words = {"oath","pea","eat","rain"};
    auto result = sol.findWords(board, words);
    for (string& s : result) cout << s << " ";
    return 0;
}`,
        pythonSolution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

class Solution:
    def findWords(self, board, words):
        root = self.buildTrie(words)
        result = []
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(board, i, j, root, result)
        
        return result
    
    def buildTrie(self, words):
        root = TrieNode()
        for word in words:
            node = root
            for c in word:
                if c not in node.children:
                    node.children[c] = TrieNode()
                node = node.children[c]
            node.word = word
        return root
    
    def dfs(self, board, i, j, node, result):
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
            return
        
        c = board[i][j]
        if c == '#' or c not in node.children:
            return
        
        node = node.children[c]
        if node.word:
            result.append(node.word)
            node.word = None
        
        board[i][j] = '#'
        for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            self.dfs(board, i + di, j + dj, node, result)
        board[i][j] = c

# Test
sol = Solution()
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words = ["oath","pea","eat","rain"]
print(sol.findWords(board, words))  # ['oath', 'eat']`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'binary-tree-maximum-path-sum',
        title: 'Binary Tree Maximum Path Sum',
        difficulty: 'Hard',
        description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.',
        examples: [
          { input: 'root = [1,2,3]', output: '6', explanation: 'The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.' },
          { input: 'root = [-10,9,20,null,null,15,7]', output: '42', explanation: 'The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.' }
        ],
        constraints: ['The number of nodes in the tree is in the range [1, 3 * 10^4]', '-1000 <= Node.val <= 1000'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    private int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }
    
    private int maxGain(TreeNode node) {
        if (node == null) return 0;
        
        int leftGain = Math.max(maxGain(node.left), 0);
        int rightGain = Math.max(maxGain(node.right), 0);
        
        int pathSum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, pathSum);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    public static void main(String[] args) {
        System.out.println("Binary Tree Maximum Path Sum solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
private:
    int maxSum = INT_MIN;
    
    int maxGain(TreeNode* node) {
        if (!node) return 0;
        
        int leftGain = max(maxGain(node->left), 0);
        int rightGain = max(maxGain(node->right), 0);
        
        int pathSum = node->val + leftGain + rightGain;
        maxSum = max(maxSum, pathSum);
        
        return node->val + max(leftGain, rightGain);
    }
    
public:
    int maxPathSum(TreeNode* root) {
        maxGain(root);
        return maxSum;
    }
};

int main() {
    cout << "Binary Tree Maximum Path Sum solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root):
        self.max_sum = float('-inf')
        
        def max_gain(node):
            if not node:
                return 0
            
            left_gain = max(max_gain(node.left), 0)
            right_gain = max(max_gain(node.right), 0)
            
            path_sum = node.val + left_gain + right_gain
            self.max_sum = max(self.max_sum, path_sum)
            
            return node.val + max(left_gain, right_gain)
        
        max_gain(root)
        return self.max_sum

# Test
print("Binary Tree Maximum Path Sum solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'serialize-deserialize-binary-tree',
        title: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        description: 'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link. Design an algorithm to serialize and deserialize a binary tree.',
        examples: [
          { input: 'root = [1,2,3,null,null,4,5]', output: '[1,2,3,null,null,4,5]' },
          { input: 'root = []', output: '[]' }
        ],
        constraints: ['The number of nodes in the tree is in the range [0, 10^4]', '-1000 <= Node.val <= 1000'],
        javaSolution: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Codec {
    public String serialize(TreeNode root) {
        if (root == null) return "null";
        StringBuilder sb = new StringBuilder();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node == null) {
                sb.append("null,");
            } else {
                sb.append(node.val).append(",");
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        return sb.toString();
    }

    public TreeNode deserialize(String data) {
        if (data.equals("null")) return null;
        String[] vals = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(vals[0]));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        
        while (!queue.isEmpty() && i < vals.length) {
            TreeNode node = queue.poll();
            if (!vals[i].equals("null")) {
                node.left = new TreeNode(Integer.parseInt(vals[i]));
                queue.offer(node.left);
            }
            i++;
            if (i < vals.length && !vals[i].equals("null")) {
                node.right = new TreeNode(Integer.parseInt(vals[i]));
                queue.offer(node.right);
            }
            i++;
        }
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println("Serialize and Deserialize Binary Tree solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
#include <string>
#include <queue>
#include <sstream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        if (!root) return "null";
        string result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            if (!node) {
                result += "null,";
            } else {
                result += to_string(node->val) + ",";
                q.push(node->left);
                q.push(node->right);
            }
        }
        return result;
    }

    TreeNode* deserialize(string data) {
        if (data == "null") return nullptr;
        stringstream ss(data);
        string val;
        getline(ss, val, ',');
        TreeNode* root = new TreeNode(stoi(val));
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            if (getline(ss, val, ',') && val != "null") {
                node->left = new TreeNode(stoi(val));
                q.push(node->left);
            }
            if (getline(ss, val, ',') && val != "null") {
                node->right = new TreeNode(stoi(val));
                q.push(node->right);
            }
        }
        return root;
    }
};

int main() {
    cout << "Serialize and Deserialize Binary Tree solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root):
        if not root:
            return "null"
        result = []
        queue = deque([root])
        while queue:
            node = queue.popleft()
            if node:
                result.append(str(node.val))
                queue.append(node.left)
                queue.append(node.right)
            else:
                result.append("null")
        return ",".join(result)

    def deserialize(self, data):
        if data == "null":
            return None
        vals = data.split(",")
        root = TreeNode(int(vals[0]))
        queue = deque([root])
        i = 1
        while queue and i < len(vals):
            node = queue.popleft()
            if vals[i] != "null":
                node.left = TreeNode(int(vals[i]))
                queue.append(node.left)
            i += 1
            if i < len(vals) and vals[i] != "null":
                node.right = TreeNode(int(vals[i]))
                queue.append(node.right)
            i += 1
        return root

# Test
print("Serialize and Deserialize Binary Tree solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'subtree-of-another-tree',
        title: 'Subtree of Another Tree',
        difficulty: 'Easy',
        description: 'Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.',
        examples: [
          { input: 'root = [3,4,5,1,2], subRoot = [4,1,2]', output: 'true' },
          { input: 'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]', output: 'false' }
        ],
        constraints: ['The number of nodes in the root tree is in the range [1, 2000]', 'The number of nodes in the subRoot tree is in the range [1, 1000]', '-10^4 <= root.val <= 10^4', '-10^4 <= subRoot.val <= 10^4'],
        javaSolution: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return false;
        if (isSameTree(root, subRoot)) return true;
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    
    private boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    public static void main(String[] args) {
        System.out.println("Subtree of Another Tree solution implemented.");
    }
}`,
        cppSolution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if (!root) return false;
        if (isSameTree(root, subRoot)) return true;
        return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
    }
    
private:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p->val != q->val) return false;
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};

int main() {
    cout << "Subtree of Another Tree solution implemented." << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root, subRoot):
        if not root:
            return False
        if self.isSameTree(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
    
    def isSameTree(self, p, q):
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

# Test
print("Subtree of Another Tree solution implemented.")`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'construct-binary-tree-preorder-inorder',
        title: 'Construct Binary Tree from Preorder and Inorder Traversal',
        difficulty: 'Medium',
        description: 'Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.',
        examples: [
          { input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', output: '[3,9,20,null,null,15,7]' },
          { input: 'preorder = [-1], inorder = [-1]', output: '[-1]' }
        ],
        constraints: ['1 <= preorder.length <= 3000', 'inorder.length == preorder.length', '-3000 <= preorder[i], inorder[i] <= 3000', 'preorder and inorder consist of unique values'],
        javaSolution: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

class Solution {
    private int preIndex = 0;
    private Map<Integer, Integer> inorderMap = new HashMap<>();
    
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for (int i = 0; i < inorder.length; i++) {
            inorderMap.put(inorder[i], i);
        }
        return build(preorder, 0, inorder.length - 1);
    }
    
    private TreeNode build(int[] preorder, int left, int right) {
        if (left > right) return null;
        
        int rootVal = preorder[preIndex++];
        TreeNode root = new TreeNode(rootVal);
        
        int inorderIndex = inorderMap.get(rootVal);
        root.left = build(preorder, left, inorderIndex - 1);
        root.right = build(preorder, inorderIndex + 1, right);
        
        return root;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        TreeNode root = sol.buildTree(new int[]{3,9,20,15,7}, new int[]{9,3,15,20,7});
        System.out.println("Tree constructed with root: " + root.val);
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
private:
    int preIndex = 0;
    unordered_map<int, int> inorderMap;
    
    TreeNode* build(vector<int>& preorder, int left, int right) {
        if (left > right) return nullptr;
        
        int rootVal = preorder[preIndex++];
        TreeNode* root = new TreeNode(rootVal);
        
        int inorderIndex = inorderMap[rootVal];
        root->left = build(preorder, left, inorderIndex - 1);
        root->right = build(preorder, inorderIndex + 1, right);
        
        return root;
    }
    
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        for (int i = 0; i < inorder.size(); i++) {
            inorderMap[inorder[i]] = i;
        }
        return build(preorder, 0, inorder.size() - 1);
    }
};

int main() {
    Solution sol;
    vector<int> preorder = {3,9,20,15,7};
    vector<int> inorder = {9,3,15,20,7};
    TreeNode* root = sol.buildTree(preorder, inorder);
    cout << "Tree constructed with root: " << root->val << endl;
    return 0;
}`,
        pythonSolution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, preorder, inorder):
        inorder_map = {val: idx for idx, val in enumerate(inorder)}
        self.pre_idx = 0
        
        def build(left, right):
            if left > right:
                return None
            
            root_val = preorder[self.pre_idx]
            self.pre_idx += 1
            root = TreeNode(root_val)
            
            inorder_idx = inorder_map[root_val]
            root.left = build(left, inorder_idx - 1)
            root.right = build(inorder_idx + 1, right)
            
            return root
        
        return build(0, len(inorder) - 1)

# Test
sol = Solution()
root = sol.buildTree([3,9,20,15,7], [9,3,15,20,7])
print(f"Tree constructed with root: {root.val}")`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  },
  {
    id: 'heap',
    name: 'Heap',
    icon: 'Layers',
    description: 'Master heap and priority queue problems',
    problems: [
      {
        id: 'top-k-frequent-elements',
        title: 'Top K Frequent Elements',
        difficulty: 'Medium',
        description: 'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
        examples: [
          { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
          { input: 'nums = [1], k = 1', output: '[1]' }
        ],
        constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', 'k is in the range [1, the number of unique elements]'],
        javaSolution: `import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }
        
        PriorityQueue<Integer> heap = new PriorityQueue<>(
            (a, b) -> count.get(a) - count.get(b)
        );
        
        for (int num : count.keySet()) {
            heap.offer(num);
            if (heap.size() > k) heap.poll();
        }
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = heap.poll();
        }
        return result;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.topKFrequent(new int[]{1,1,1,2,2,3}, 2)));
    }
}`,
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        for (int num : nums) count[num]++;
        
        auto cmp = [&count](int a, int b) {
            return count[a] > count[b];
        };
        priority_queue<int, vector<int>, decltype(cmp)> heap(cmp);
        
        for (auto& [num, freq] : count) {
            heap.push(num);
            if (heap.size() > k) heap.pop();
        }
        
        vector<int> result;
        while (!heap.empty()) {
            result.push_back(heap.top());
            heap.pop();
        }
        return result;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1,1,1,2,2,3};
    auto result = sol.topKFrequent(nums, 2);
    for (int num : result) cout << num << " ";
    return 0;
}`,
        pythonSolution: `from collections import Counter
import heapq

class Solution:
    def topKFrequent(self, nums, k):
        count = Counter(nums)
        return heapq.nlargest(k, count.keys(), key=count.get)

# Test
sol = Solution()
print(sol.topKFrequent([1,1,1,2,2,3], 2))  # [1, 2]`,
        compilerLinks: defaultCompilerLinks
      },
      {
        id: 'find-median-from-data-stream',
        title: 'Find Median from Data Stream',
        difficulty: 'Hard',
        description: 'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values. Implement the MedianFinder class: addNum(int num) adds the integer num from the data stream to the data structure, findMedian() returns the median of all elements so far.',
        examples: [
          { input: '["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]', output: '[null, null, null, 1.5, null, 2.0]' }
        ],
        constraints: ['-10^5 <= num <= 10^5', 'There will be at least one element in the data structure before calling findMedian'],
        javaSolution: `import java.util.*;

class MedianFinder {
    private PriorityQueue<Integer> small; // max heap
    private PriorityQueue<Integer> large; // min heap
    
    public MedianFinder() {
        small = new PriorityQueue<>(Collections.reverseOrder());
        large = new PriorityQueue<>();
    }
    
    public void addNum(int num) {
        small.offer(num);
        large.offer(small.poll());
        
        if (large.size() > small.size()) {
            small.offer(large.poll());
        }
    }
    
    public double findMedian() {
        if (small.size() > large.size()) {
            return small.peek();
        }
        return (small.peek() + large.peek()) / 2.0;
    }
    
    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian()); // 1.5
        mf.addNum(3);
        System.out.println(mf.findMedian()); // 2.0
    }
}`,
        cppSolution: `#include <iostream>
#include <queue>
using namespace std;

class MedianFinder {
    priority_queue<int> small; // max heap
    priority_queue<int, vector<int>, greater<int>> large; // min heap
    
public:
    void addNum(int num) {
        small.push(num);
        large.push(small.top());
        small.pop();
        
        if (large.size() > small.size()) {
            small.push(large.top());
            large.pop();
        }
    }
    
    double findMedian() {
        if (small.size() > large.size()) {
            return small.top();
        }
        return (small.top() + large.top()) / 2.0;
    }
};

int main() {
    MedianFinder mf;
    mf.addNum(1);
    mf.addNum(2);
    cout << mf.findMedian() << endl; // 1.5
    mf.addNum(3);
    cout << mf.findMedian() << endl; // 2.0
    return 0;
}`,
        pythonSolution: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap (negated)
        self.large = []  # min heap
    
    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    
    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2.0

# Test
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # 1.5
mf.addNum(3)
print(mf.findMedian())  # 2.0`,
        compilerLinks: defaultCompilerLinks
      }
    ]
  }
];

export const getAllBlind75Problems = (): Blind75Problem[] => {
  return blind75Categories.flatMap(category => category.problems);
};

export const getBlind75ProblemById = (problemId: string): Blind75Problem | undefined => {
  return getAllBlind75Problems().find(problem => problem.id === problemId);
};

export const getBlind75CategoryById = (categoryId: string): Blind75Category | undefined => {
  return blind75Categories.find(category => category.id === categoryId);
};
