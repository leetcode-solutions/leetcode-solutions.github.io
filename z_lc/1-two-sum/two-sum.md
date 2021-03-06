---
slug: ../two-sum
tags: [array, hash table]
difficulty: easy
---

# Two Sum

<Difficulty e />

https://leetcode.com/problems/two-sum/

## Problem

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Follow-up:** Can you come up with an algorithm that is less than `O(n^{2})` time complexity?

### Examples

<Example>

| | |
:--|:--
**Input**       | `nums = [2,7,11,15], target = 9`
**Output**      | `[0,1]`
**Explanation** | Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

</Example>

### Constraints

- `2 <= nums.length <= 10^{4}`
- `-10^{9} <= nums[i] <= 10^{9}`
- `-10^{9} <= target <= 10^{9}`
- **Only one valid answer exists.**

### Hints

<Hint>

A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.

</Hint>

<Hint>

So, if we fix one of the numbers, say, `x`, we have to scan the entire array to find the next number `y`, which is `value - x`, where `value` is the input parameter. Can we change our array somehow so that this search becomes faster?

</Hint>

<Hint>

The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

</Hint>

## Solution

A naive approach may be to try all combinations of distinct indices $i,j$, and returning the pair whose sum is $target$. However, with $1 + \ldots + n-1 = O(n^2)$ pairs, this approach would take quite long.

We know there exists two indeces $i, j$ such that $i\neq j, nums[i] + nums[j] = target$. We can rewrite this as $nums[i] = target - nums[j]$ and vice versa.

To optimally find the two elements, suppose we iterate through the array, saving the values observed along the way. Let $n$ be the value observed at index $i$.

Let the value at some index $i$ be $n=nums[i]$. Rather than trying pairs of indices to see if their values sum up to $target$, it may be more useful to think of checking if $target - n$ has already been seen at each index $i$. 

We can observe that we want to be able to quickly check if some value, $target - n$, has already been observed. This lends to using a hash table to store values observed so far, as they offer amortized $O(1)$ lookup; furthermore, the hashtable would let us easily get the index associated with the value as well. 

Thus, the algorithm is to iterate through `nums`, maintaining a hashtable `seen` mapping observed values to the index they were observed along the way; at each index `i` with value `n`, we simply check if `target - n` is in `seen`, and if so, return `i` and the index associated with our other value, `seen[target - n]`; otherwise, we add `n` and `i` to `seen`, and continue iterating.

```md codetabs

```python file="1-two-sum/two-sum.py"
```cpp file="1-two-sum/two-sum.cpp"
```rust file="1-two-sum/two-sum.rs"

```

## Similar Questions

<Similar title="3Sum" m />

<Similar title="4Sum" m />

<Similar title="Two Sum II - Input array is sorted" e />

<Similar title="Two Sum III - Data structure design" e />

<Similar title="Subarray Sum Equals K" m />

<Similar title="Two Sum IV - Input is a BST" e />

<Similar title="Two Sum Less Than K" e />

<Similar title="Max Number of K-Sum Pairs" m />

<Similar title="Count Good Meals"  m/>
