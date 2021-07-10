---
slug: ../valid-parentheses
tags: [string, stack]
difficulty: easy
---

# Valid Parentheses

<Difficulty e />

https://leetcode.com/problems/valid-parentheses/

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

### Examples

<Example>

| | |
:--|:--
**Input**       | `s = "()"`
**Output**      | `true`

</Example>

### Constraints

- `1 <= s.length <= 10^{4}`
- `s` consists of parentheses only `'()[]{}'`

### Hints

<Hint>

An interesting property about a valid parentheses expression is that a sub-expression of a valid expression should also be a valid expression (Not every sub-expression) e.g.

```
{ { } [ ] [ [ [ ] ] ] } is VALID expression
          [ [ [ ] ] ]   is VALID sub-expression
  { } [ ]               is VALID sub-expression
```

Can we exploit this recursive structure somehow?

</Hint>

<Hint>

What if whenever we encounter a matching pair of parentheses in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.

```
{ { ( { } ) } }
      |_|

{ { (     ) } }
    |_____|

{ {         } }
  |_________|

{             }
|_____________|

VALID EXPRESSION!
```

</Hint>

<Hint>

The **stack** data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively, i.e. from outside to inwards.

</Hint>

## Solution

Observe that for open brackets to be closed "in the correct order", this means when we encounter a closing bracket, it must match the most recently seen open bracket that has not been closed yet for the string to possibly be valid.

Suppose we iterate through the string, maintaining a list of the unclosed brackets observed so far. Consider character $c$ in the string:
- if $c$ is an open bracket, we simply add it to the end of the list
- otherwise, $c$ is a closing bracket. In this case, there are three possible cases:
  - if the list is empty, then we have no more unclosed brackets, but have just observed a closing bracket. Thus, the string is not valid.
  - if $c$ matches the end of the list, that pair of brackets is now matched, so remove the end of the list (as it's no longer unclosed) and continue
  - otherwise, the string is not valid as the brackets are not closed in the correct order.

We can observe that we're only ever adding or removing from the end of the list - that is, this "list" is really just a stack, where the top of the stack is the next expected closing brace for the input to remain valid.

We can observe that since the string only contains the parentheses, of which must be matched to be possibly valid, we can also automatically rule out any string with odd length.

We iterate up to the entire string a single time, and the stack contains up to half of the string's size, so both the time and space complexity of this algorithm is $O(n)$. 

<VAlign>

| | |
:--|:--
**Time Complexity:**    |   $O(n)$
**Space Complexity:**   |   $O(n)$

</VAlign>

```md codetabs

```python file="20-valid-parentheses/valid-parentheses.py"
```cpp file="20-valid-parentheses/valid-parentheses.cpp"
```rust file="20-valid-parentheses/valid-parentheses.rs"

```

## Similar Questions

<Similar title="Generate Parentheses" m />

<Similar title="Longest Valid Parentheses" h />

<Similar title="Remove Invalid Parentheses" h />

<Similar title="Check if Word is Valid After Substitutions" m />