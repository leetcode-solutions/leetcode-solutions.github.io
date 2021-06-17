---
tags: [easy]
---

# Two Sum

<Easy> Easy </Easy>

https://leetcode.com/problems/two-sum/

## Problem

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Constraints:**
- `2 <= nums.length <= 10^{4}`
- `-10^{9} <= nums[i] <= 10^{9}`
- `-10^{9} <= target <= 10^{9}`
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than `O(n^{2})` time complexity?

## Solution

We know there exists two indeces $i$, $j$ such that $i\neq j, nums[i] + nums[j] = target$. We can rewrite this as $nums[i] = target - nums[j]$ and vice versa.

To optimally find the two elements, suppose we iterate through the array, saving the values observed along the way. Let $n$ be the value observed at index $i$.

A naive approach may be to test the sum of $n$ with each already observed value to see if they sum to $target$. However, this would still result in $1+\ldots+n-1=O(n^2)$ comparisons.

Instead, it may be more useful to think of checking if $target - n$ has already been observed. This can be done in amortized $O(1)$ time if the observed values have been stored in a hashtable. We can also use this hashtable to store and access the index associated with each value in $O(1)$ time as well.

Thus, the algorithm is to iterate through `nums`, maintaining a hashtable `seen` mapping observed values to the index they were observed along the way; at each index `i` with value `n`, we simply check if `target - n` is in `seen`, and if so, return `i` and the index associated with our other value, `seen[target - n]`; otherwise, we add `n` and `i` to `seen`, and continue iterating.

```md codetabs

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i,n in enumerate(nums):
            complement = target - n
            if complement in seen:
                return [complement, i]
            seen[n] = i
        return None
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        #include <unordered_map>
        
        unordered_map<int, int> seen;
        for(int i=0; i<nums.size(); ++i) {
            int n = nums[i];
            int complement = target - n;
            if(auto iter = seen.find(complement); iter != seen.end()) {
                return vector<int> {i, iter->second};    
            }
            seen[n] = i;
        }
        return vector<int>();
    }
};
```rust
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;
        
        let mut seen = HashMap::new();
        for (i,n) in nums.iter().enumerate() {
            let complement = target - n;
            match seen.get(&complement) {
                Some(&index) => return vec![i as i32, index],
                None => seen.insert(n, i as i32),
            };
        }
        vec![]
    }
}

```

## Related questions

<Medium>

[3Sum](./3sum)

</Medium>

<Medium>

[4Sum](./4sum)

</Medium>

<Easy>

[Two Sum II - Input array is sorted](./two-sum-ii-input-array-is-sorted)

</Easy>

<Easy>

[Two Sum III - Data structure design](./two-sum-iii-data-structure-design)

</Easy>

<Medium>

[Subarray Sum Equals K](./subarray-sum-equals-k)

</Medium>

<Easy>

[Two Sum IV - Input is a BST](./two-sum-iv-input-is-a-bst)

</Easy>

<Easy>

[Two Sum Less Than K](./two-sum-less-than-k)

</Easy>

<Medium>

[Max Number of K-Sum Pairs](./max-number-of-k-sum-pairs)

</Medium>

<Medium>

[Count Good Meals](./count-good-meals)

</Medium>