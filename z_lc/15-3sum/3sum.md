---
slug: .
tags: [TODO]
difficulty: medium
---

# 3Sum

<Difficulty m />

https://leetcode.com/problems/3sum/

## Problem

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Examples

<Example>

| | |
:--|:--
**Input**       | `nums = [-1,0,1,2,-1,-4]`
**Output**      | `[[-1,-1,2],[-1,0,1]]`

</Example>

### Constraints

- `0 <= nums.length <= 3000`
- `-10^{5} <= nums[i] <= 10^{5}`

### Hints

<Hint>

So, we essentially need to find three numbers `x`, `y`, and `z` such that they add up to the given value. If we fix one of the numbers say `x`, we are left with the two-sum problem at hand!

</Hint>

<Hint>

For the two-sum problem, if we fix one of the numbers, say `x`, we have to scan the entire array to find the next number `y`, which is `value - x` where `value` is the input parameter. Can we change our array somehow so that this search becomes faster?

</Hint>

## Solution

A naive approach may be to test all three element combinations of the array; however, there are $O(n^3)$ possible combinations, which is far too slow.

Suppose we fix some element $x$ in $nums$. We can observe then that we are then solving a generalization of [Two Sum](../two-sum), where we want to find two other elements that sum to $-x$. Knowing that we can solve for Two Sum in $O(n)$ time and space, we can thus fix each element of $nums$ and solve for Two Sum accordingly, resulting in overall $O(n^2)$ time and $O(n)$ space (assuming the space used for Two Sum is reused between iterations).

While we've greatly optimized relative to the brute force approach, we still test up to all $n-1$ other elements when solving for Two Sum. We want to see if we can reduce the search space for solving Two Sum.

Suppose we preprocess $nums$ by sorting it in ascending order. While an $O(n\log n)$ operation, it is still less than our $O(n^2)$ solution so it likely doesn't have a too large impact on runtime. From the resultant $nums_{sorted}$, for each index $i$, we can then similarly fix $x=nums[i]$ and solve for Two Sum, with the subarray $nums[i+1:]$ as the search space. This brings the overall runtime to $O(n\log n) + O(1 + \ldots + n-1) = O(n\log n) + O(\frac{n^2}{2})$ - asymptotically still the same, but in practice for large $n$, potentially saving time with the lower coefficient on the dominant term.

As a side effect of sorting the array, it also becomes easier to avoid duplicate values: since the elements are sorted, whenever we want to move on to the "next element", we can easily check if it's duplicate by comparing to the previous value, and continue to move until the new value is different from the previous.

We can also observe that since we're solving Two Sum for $-x$ and that we're traversing the array in ascending order, if $x$ is ever greater than zero, then there are no more possible solutions, since the target is negative and the pool of candidates is positive.

We can further observe that to solve Two Sum when the array is sorted, we can use two pointers instead of the standard hash table solution: beginning with indeces $j = i+1, k = n-1$, we can shift $j$ and $k$ inward based on their sum relative to the target $-x$. This Two Sum algorithm identifies whether there is a solution in a single pass while using $O(1)$ space, a marked improvement over the hash table implementation. As a result, our overall algorithm, while still $O(n^2)$ time complexity, reduces to $O(1)$ space complexity (excluding return values, and assuming the input array $nums$ is mutable; otherwise, space complexity is still $O(n)$).

<VAlign>

| | |
:--|:--
**Time Complexity:**    |   $O(n^2)$
**Space Complexity:**   |   $O(1)$

</VAlign>

```md codetabs

```python file="15-3sum/3sum.py"
```cpp file="15-3sum/3sum.cpp"
```rust file="15-3sum/3sum.rs"

```

## Similar Questions

<Similar title="Two Sum" e />

<Similar title="3Sum Closest" m />

<Similar title="4Sum" m />

<Similar title="3Sum Smaller" m />
