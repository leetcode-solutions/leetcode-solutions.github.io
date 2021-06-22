---
slug: .
tags: [medium, array, two pointers]
---

# Container With Most Water

<Difficulty m />

https://leetcode.com/problems/container-with-most-water/

## Problem

Given `n` non-negative integers `a_{1}, a_{2}, ..., a_{n}`, where each represents a point at coordinate `(i, a_{i})`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, a_{i})` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

**Notice** that you may not slant the container.

### Examples



<Example>

![Visual example](./assets/example.jpg)

| | |
:--|:--
**Input**       | `height = [1,8,6,2,5,4,8,3,7]`  
**Output**      | `49`
**Explanation** | The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. In this case, the max area of water (blue section) the container can contain is 49.

</Example>

### Constraints

- `n == height.length`
- `2 <= n <= 10^{5}`
- `0 <= height[i] <= 10^{4}`

## Solution

Observe that given indices $i,j$ where $i < j$, the "amount of water" that can be contained is simply the area of the rectangle with width $j - i$ and height $h = min(height[i], height[j])$.

A naive approach may be to try every pair of indices, and pick the pair with the greatest resultant computed area; however, this would require computing $O(n^2)$ pairs.

We want to reduce this sample space while guaranteeing the max value will still be encountered. Suppose we begin with $i=0, j=n-1$, defining the widest possible container, and plan to try moving them inward in some way to test different pairs. In this manner, the width of the rectangle will decrease with each iteration of the algorithm.

Consider the height of the rectangle defined for $i$ and $j$, $h = min(height[i], height[j])$. We can observe that the line of height $h$ upper bounds the height for any pair of indices containing height $h$. Since we are decreasing the width with each iteration, then any future pair of vertices, if using an index $i < k < j$ with height $height[k] \leq h$, has less area than the current area from $i,j$. Thus, in each iteration,  we want to move $i$ inward as long as $heights[i] \leq h$, and likewise for $j$, as no possible rectange including those indices can have greater area than what we've already observed.

Since we only ever eliminate pairs of indices with lower possible area, continue until there are no more possible candidates of greater area, and begin where all possible pairs of indices can be reached, we can guarantee we'll encounter the best solution at some point during the algorithm. Furthermore, we can observe that $i$ and $j$ don't overlap and thus are modified at most $O(n)$ times, and that all other operations are $O(1)$ (assuming multiplication to be an $O(1)$ operation), making our algorithm $O(n)$ overall.

<VAlign>

| | |
:--|:--
**Time Complexity:**    |   $O(n)$
**Space Complexity:**   |   $O(1)$

</VAlign>

```md codetabs

```python file="11-container-with-most-water/container-with-most-water.py"
```cpp file="11-container-with-most-water/container-with-most-water.cpp"
```rust file="11-container-with-most-water/container-with-most-water.rs"

```

## Similar Questions

<Similar title="Trapping Rain Water" h />