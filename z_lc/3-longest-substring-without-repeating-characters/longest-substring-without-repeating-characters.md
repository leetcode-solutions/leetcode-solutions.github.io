---
slug: ../longest-substring-without-repeating-characters
tags: [string, hash table, two pointers]
difficulty: medium
---

# Longest Substring Without Repeating Characters

<Difficulty m />

https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Problem

Given a string `s`, find the length of the **longest substring** without repeating characters.

### Examples

<Example>

| | |
:--|:--
**Input**       | `s = "abcabcbb"`
**Output**      | `3`
**Explanation** | The answer is `"abc"`, with the length of 3.

</Example>

### Constraints

- `0 <= s.length <= 5 * 10^{4}`
- `s` consists of English letters, digits, symbols, and spaces.

## Solution

Suppose our string $s=s_0s_1\ldots s_{n-1}$. Consider some $0\leq i \leq j \leq n-1$, indicating the substring $s_is_{i+1}\ldots s_j$.

Suppose $s_is_{i+1}\ldots s_j$ contains no repeating characters. Then if $s_{j+1}$ is also distinct, $s_is_{i+1}\ldots s_{j+1}$ is also valid and of longer length.

Intuitively, this implies that $j$ can be "expanded" from some initial value until it introduces a repeated character. Thus, a general approach we can use to solve this problem is to begin with $i=j=0$, and then continuously increase $j$ until it reaches a repeating character, at which point $i$ will need to be updated to maintain our loop invariant that $s_is_{i+1}\ldots s_j$ is a substring containing no repeating characters.

We can observe that if $s_is_{i+1}\ldots s_j$ contains no repeating characters but $s_{j+1}=c$ is already in our substring at index $i\leq k\leq j$, then we have to "shift over" $i$ to at least $k+1$ to exclude $c$ and thus make the resulting substring have no repeating characters. Finding $k$ can be accomplished in amoritized $O(1)$ time given $c$ by maintaining a hash table mapping each character to the latest observed index containing that character.

Thus, the algorithm iterate through the characters of `s`, maintaining a hashtable `inds` mapping characters to the last index containing that character and index `i` indicating the beginning of our substring; At each index `j` in `s` with character `c`, if we have already observed `c` (that is, `c` is in `inds`), we update `i` to `inds[c] + 1` if necessary (that is, if `c` is in the window $s_is_{i+1}\ldots s_{j-1}$) such that the resultant $s_is_{i+1}\ldots s_j$ contains no repeating characters. At the end of each iteration, we also update the latest index `c` was observed, `inds[c]`, to `j`, and update our longest length observed if necessary.

```md codetabs

```python file="3-longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.py"
```cpp file="3-longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.cpp"
```rust file="3-longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.rs"

```

## Similar Questions

<Similar title="Longest Substring with At Most Two Distinct Characters" m />

<Similar title="Longest Substring with At Most K Distinct Characters" m />

<Similar title="Subarrays with K Different Integers" h />

<Similar title="Maximum Erasure Value" m />