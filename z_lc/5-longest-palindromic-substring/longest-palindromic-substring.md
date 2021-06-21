---
slug: .
tags: [medium, string]
---

# Longest Palindromic Substring

<Difficulty m />

https://leetcode.com/problems/longest-palindromic-substring/

## Problem

Given a string `s`, return _the longest palindromic substring_ in `s`.

**Constraints:**
- `1 <= s.length <= 1000`
- `s` consists of only digits and English letters (lower-case and/or upper-case)

## Solution
Suppose our string $s = s_0 s_1 \ldots s_{n-1}$.

A naive approach may be to check each substring to identify all palindromes and select the longest identified one. However, there are $\frac{n(n+1)}{2} = O(n^2)$ substrings, each of which we would need to check whether it's a palindrome, of which is $O(k)$ for a $k$-length string, making this quite slow: the substrings total $O(n^3)$ length, so on average each substring would take $O(\frac{n^3}{n^2})=O(n)$ time to check for being a palindrome, resulting in overall $O(n^3)$ time complexity.

### Solution 1: Dynamic Programming

One way we can optimize this is by recognizing that if we have some substring $s_i s_{i+1} \ldots s_j$ for $0 \leq i \leq j < n$, then it is only a palindrome if $s_{i+1} s_{i+2} \ldots s_{j-1}$ is a palindrome.

More specifically, we can determine whether the substring described by $i,j$ is palindromic based on three cases:
- if $i=j$, the substring is trivially palindromic
- if $i+1=j$, the substring palindromic if $s_i = s_j$
- otherwise, the substring is palindromic if and only if $s_i = s_j$ and the substring described by $i+1,j-1$ is palindromic

Thus, we can use a 2D array `memo` to cache our results, where `memo[i][j]` indicates whether the substring from index `i` to `j` is a palindrome.

Since we want to compute `memo[i+1]` before `memo[i]` for our dynamic programming approach to work, we thus begin with `i=n-1` and work down in our iterating of substrings. Thus, we iterate over each `i`, starting from `n-1` and going down; for each `i`, we check all possible substrings starting from `i`, checking if they are palindromic and updating `memo` while doing so, and updating the longest observed palindromic substring so far as well.

<VAlign>

| | |
:--|:--
**Time complexity** | $O(n^2)$
**Space complexity** | $O(n^2)$

</VAlign>

```md codetabs

```python file="5-longest-palindromic-substring/solution-1-dp/longest-palindromic-substring.py"
```cpp file="5-longest-palindromic-substring/solution-1-dp/longest-palindromic-substring.cpp"
```rust file="5-longest-palindromic-substring/solution-1-dp/longest-palindromic-substring.rs"

```

### Solution 2: Expand Around Center

Rather than testing each substring for whether they are a palindrome, we can instead try to only consider the palindromes.

We can approach finding palindromes by "expanding" them from a center, rather than picking two ends and checking if the resultant string is a palindrome; by doing so, the moment we expand to a substring that is not a palindrome, we know all larger substrings with the same center cannot be palindromes, and can thus skip them.

However, this "expand around center" approach has a shortcoming, in that the "center" can be under two possible "types": for odd-length substrings, the center is a single character, whereas for even lengths, the center is "between" two characters. While possible to work around, it may be helpful to preprocess the string to make the center always be, say, a single character.

To resolve this issue, suppose our string $s$ is of length $n$, and let $\Sigma$ be our alphabet, the set of all possible characters in $s$. We can introduce some character $c\notin\Sigma$ between each character in our original string $s$, including the outer boundaries. Let our resultant string be $S$. By doing so, we make the string of length $2n+1$, which must be odd, without affecting the palindromic properties of the substrings. This makes the palindrome finding process simpler, as the "dummy" characters are used to represent expanding even-length palindromes in the original string. Furthermore, if we have a palindrome centered at index $c$ and of "length" (in one direction) $l$ in $S$, we can map this to the palindrome of total length $l$ starting at index $\lfloor\frac{c - l}{2}\rfloor$ in $s$.

With this in mind, we can simply try to expand palindromes from each character in $S$ as the center, maintaining the longest observed palindrome's center and expansion length along the way. When we're finished, we can thus easily produce the corresponding palindrome in $s$.

<VAlign>

| | |
:--|:--
**Time Complexity:** | $O(n^2)$
**Space Complexity:** | $O(n)$
</VAlign>

```md codetabs

```python file="5-longest-palindromic-substring/solution-2-expand/longest-palindromic-substring.py"
```cpp file="5-longest-palindromic-substring/solution-2-expand/longest-palindromic-substring.cpp"
```rust file="5-longest-palindromic-substring/solution-2-expand/longest-palindromic-substring.rs"

```

### Solution 3: Manacher's Algorithm

In the first solution, we optimized the time needed to identify palindromes out of all possible substrings. In the second solution, we optimized the number of substrings needed to be checked by directly identifying palindromes by expanding from some center. For both cases, however, there would be little to no improvement for strings consisting of a single character, where every given substring is a palindrome. We can use the symmetric property of palindromes to try to further optimize the solution.

Suppose we create string $S$ from $s$ similar to how was done in Solution 2. Suppose we have an array $lengths$, where $lengths[i]$ indicates the length of the longest palindrome centered at index $i$ in $S$. Assume that similar to Solution 2, we identify palindromes by expanding from each character in $S$ as the center, starting from the beginning of $S$.

Let $r$ be the rightmost index of $S$ visited at any point in expanding from some center $c$; that is, $r=max(i+lengths[i])$ for all $i$ observed so far, and $c$ is the corresponding $i$.

Consider index $i$ where $c < i < r$. We can rewrite $i = c + k$, where $0 < k < lengths[c]$. Let $i' = c - k$, the value of $i$ "reflected" across $c$. Observe the two possible cases for $lengths[i']$:
- if $k + lengths[i'] \leq r - c$, then the largest palindrome centered at $i'$ is a substring of the largest palindrome centered at $c$; thus, the largest palindrome centered at $i$ must be equal to that at $i'$; that is, $lengths[i]=lengths[i']$. Since $i=c+k$, we can rewrite our condition to checking if $i + lengths[i'] \leq r$, or $lengths[i'] \leq r - i$.
- otherwise, we still know that $lengths[i] \geq r-i$, and must manually expand from there to find the largest palindrome centered at $i$. If this expands past $r$, that is, the resultant $i + lengths[i]>r$, then we update $c$ and $r$ respectively.

Since we only expand starting from $r$, the rightmost index explored so far, in total the algorithm expands at most $n$ times, a significant improvement. Meanwhile, all other operations in the loop are $O(1)$, and since we perform a single pass over the whole string (of length $2n$), the resultant algorithm is $O(n)$.

<VAlign>

| | |
:--|:--
**Time Complexity:** | $O(n)$
**Space Complexity:** | $O(n)$

</VAlign>

```md codetabs

```python file="5-longest-palindromic-substring/solution-3-manachers/longest-palindromic-substring.py"
```cpp file="5-longest-palindromic-substring/solution-3-manachers/longest-palindromic-substring.cpp"
```rust file="5-longest-palindromic-substring/solution-3-manachers/longest-palindromic-substring.rs"

```

## Similar Questions

<Similar title="Shortest Palindrome" h />

<Similar title="Palindrome Permutation" e />

<Similar title="Palindrome Pairs" h />

<Similar title="Longest Palindromic Subsequence" m />

<Similar title="Palindromic Substrings" m />