---
slug: .
tags: [topological sort]
difficulty: medium
---

# Course Schedule

<Difficulty m />

https://leetcode.com/problems/course-schedule/

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_{i}, b_{i}]` indicates that you must take course `b_{i}` first if you want to take course `a_{i}`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

### Examples

<Example>

| | |
:--|:--
**Input**       | `numCourses = 2, prerequisites = [[1,0]]`
**Output**      | `true`
**Explanation** | There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

</Example>

### Constraints

- `1 <= numCourses <= 10^{5}`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= a_{i}, b_{i} < numCourses`
- All pairs `prerequisites[i]` are **unique**.

### Hints

<Hint>

This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.

</Hint>

<Hint>

[Topological Sort via DFS](https://class.coursera.org/algo-003/lecture/52) - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.

</Hint>

<Hint>

Topological sort could also be done via [BFS](http://en.wikipedia.org/wiki/Topological_sorting#Algorithms).

</Hint>

## Solution

This is the classic topological sort problem - finding if there is an ordering of vertices in a graph such that for all directed edges from $u$ to $v$, $u$ appears before $v$ in the ordering.

We can represent our list of prerequisites as a directed unweighted graph, where if course $a$ is a prerequisite of course $b$, then there is a directed edge from $a$ to $b$. Our goal is to see if we can create a topological ordering of this resultant graph; that is, we can visit all prerequisites before any given course, and thus being able to eventually finish all courses.

To see if an ordering's possible, we can maintain an array `can_take` to indicate which courses we can take (that is, all prerequisites have been fulfilled). To know which courses can be taken, we can maintain a count of the "remaining indegree" of each vertex, or the number of prerequisites for the class that haven't been "taken" yet.

Whenever we "take" a class, we thus decrement the remaining degree of all outgoing edges (each of those classes have "one less prerequisite remaining"). If the indegree of any of these becomes zero, we know all prerequisites for that class have thus been fulfilled, and as a result can add it to `can_take`.

Thus, to check if an ordering exists, we simply need to check if all courses have been in `can_take`.

```md codetabs

```python file="207-course-schedule/course-schedule.py"
```cpp file="207-course-schedule/course-schedule.cpp"
```rust file="207-course-schedule/course-schedule.rs"

```

## Similar Questions

<Similar title="Course Schedule II" m />

<Similar title="Graph Valid Tree" m />

<Similar title="Minimum Height Trees" m />

<Similar title="Course Schedule III" h />
