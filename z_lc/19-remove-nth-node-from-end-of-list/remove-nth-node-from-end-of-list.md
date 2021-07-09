---
slug: .
tags: [medium, TODO]
---

# Remove Nth Node From End of List

<Difficulty m />

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

## Problem

Given the `head` of a linked list, remove the `n^{th}` node from the end of the list and return its head.

**Follow up:** Could you do this in one pass?

### Examples

<Example>

![](./assets/example.jpg)

| | |
:--|:--
**Input**       | `head = [1,2,3,4,5], n = 2`
**Output**      | `[1,2,3,5]`

</Example>

### Constraints

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

### Hints

<Hint>

Maintain two pointers and update one with a delay of `n` steps.

</Hint>

## Solution

Suppose we want to remove $node$, the $n^{th}$ node from the end of the list. Assuming we don't need to manage freeing memory (as is the case for this question), removing a node from a linked list is typically done by "linking" the neighbors of the node to remove together. That is, for a singly linked list, if $prev$ is the node where $prev.next = node$, then we set $prev.next := node.next$.

The straightforward solution is thus quite simple: we just need to find the size $sz$ of the linked list, and from that we can easily get the $(sz - n)^{th}$ node (assuming the head is the "first" node), whose $next$ field is the $n^{th}$ node from the end of the list. We can then easily "remove" that node and return the head of the linked list.

A common edge case for linked list algorithms is when the head of the linked list is modified in some way. For instance, if the node to remove is the head node itself, then we may need to "update" the head accordingly.

This edge case is typically handled by appending a "dummy" node to the front of the linked list; in this manner, the "true"/"original" head can be treated as any other node, and regardless of whether the original head was removed or not, we can get the resultant head of the linked list by accessing $dummy.next$.

We can observe that the straightforward solution is quite efficient, as we perform two passes in the algorithm, traversing the linked list at most two times. However, is there a way we can solve this in a single pass?

Suppose we have two pointers, $back$ and $front$, where $front$ is $n$ nodes "ahead" of front. Then, if we continue moving both pointers along the linked list, maintaining this distance along the way, when $front$ is at the tail node, $back$ is thus the $(n+1)^{th}$ node - the node that we're looking for.

The single pass solution actually performs the same number of traversal operations as the straightforward solution ($front$ traverses the whole linked list, and $back$ up until the $(n+1)^{th}$ node from the end), but potentially saves on the operations for counting the size of the linked list.

Both solutions use constant space, using a single dummy node in addition to either a single pointer and an integer (the straightforward solution) or two pointers (the one pass solution).

<VAlign>

| | |
:--|:--
**Time Complexity:**    |   $O(n)$
**Space Complexity:**   |   $O(1)$

</VAlign>

```md codetabs

```python file="19-remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list.py"

```cpp file="19-remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list.cpp"

```rust file="19-remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list.rs"
/// NOTE: this Rust solution uses the straightforward algorithm, since
/// the borrow checker did not like the two pointers approach

{{ FILE }}

```

## Similar Questions

<Similar title="Swapping Nodes in a Linked List" m />

<Similar title="Delete N Nodes after M Nodes of a Linked List" e />