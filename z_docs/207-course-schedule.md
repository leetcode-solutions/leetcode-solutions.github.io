---
tags: [medium, topological sort]
---

# Course Schedule

<Medium>Medium</Medium>

https://leetcode.com/problems/course-schedule/

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_{i}, b_{i}]` indicates that you must take course `b_{i}` first if you want to take course `a_{i}`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**Constraints**:
- `1 <= numCourses <= 10^{5}`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= a_{i}, b_{i} < numCourses`
- All pairs `prerequisites[i]` are **unique**.

## Solution

This is the classic topological sort problem - finding if there is an ordering of vertices in a graph such that for all directed edges from $u$ to $v$, $u$ appears before $v$ in the ordering.

We can represent our list of prerequisites as a directed unweighted graph, where if course $a$ is a prerequisite of course $b$, then there is a directed edge from $a$ to $b$. Our goal is to see if we can create a topological ordering of this resultant graph - that is, we can visit all prerequisites before any given course, and thus being able to eventually finish all courses.

To see if an ordering's possible, we can maintain an array `can_take` to indicate which courses we can take (that is, all prerequisites have been fulfilled). To know which courses can be taken, we can maintain a count of the "remaining indegree" of each vertex - that is, the number of prerequisites for the class that haven't been "taken" yet.

Whenever "taking" a class, we thus decrement the remaining degree of all outgoing edges - that is, the classes that have the class being taken as a prerequisite. If the indegree of any of these becomes zero, we know all prerequisites for that class have thus been fulfilled, and as a result can add it to `can_take`.

Thus, to check if an ordering exists, we simply need to check if all courses have been in `can_take`.

```md codetabs

```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        n = numCourses
        G = [set() for _ in range(n)]
        num_prereqs = [0] * n
        for course,prereq in prerequisites:
            G[prereq].add(course)
            num_prereqs[course] += 1
            
        can_take = [i for i in range(n) if num_prereqs[i] == 0]
        i = 0
        while i < len(can_take):
            taken = can_take[i]
            for postreq in G[taken]:
                num_prereqs[postreq] -= 1
                if num_prereqs[postreq] == 0:
                    can_take.append(postreq)
            i += 1
        return len(can_take) == n
```cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        int n = numCourses;
        vector<vector<int>> G(n);
        vector<int> num_prereqs(n, 0);
        for(auto& e : prerequisites) {
            int &course = e[0], &prereq = e[1];
            G[prereq].push_back(course);
            ++num_prereqs[course];
        }
        
        vector<int> can_take;
        for(int i=0; i<n; ++i) {
            if(num_prereqs[i] == 0) can_take.push_back(i);
        }
        
        for(int i=0; i<can_take.size(); ++i) {
            int taken = can_take[i];
            for(int& postreq : G[taken]) {
                if(--num_prereqs[postreq] == 0) can_take.push_back(postreq);
            }
        }
        return can_take.size() == n;
    }
};
```rust
impl Solution {
    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        let n = num_courses;
        let mut G: Vec<Vec<i32>> = vec![vec![]; n as usize];
        let mut num_prereqs: Vec<i32> = vec![0; n as usize];
        for e in prerequisites {
            let (course, prereq) = (e[0], e[1]);
            G[prereq as usize].push(course);
            num_prereqs[course as usize] += 1;
        }
        
        let mut can_take = num_prereqs.iter().enumerate()
            .filter(|(_, prereqs)| **prereqs == 0)
            .map(|(course, _)| course as i32)
            .collect::<Vec<i32>>();
        
        let mut i: usize = 0;
        while i < can_take.len() {
            let taken = can_take[i];
            for p in G[taken as usize].iter() {
                let postreq = *p;
                num_prereqs[postreq as usize] -= 1;
                if num_prereqs[postreq as usize] == 0 {
                    can_take.push(postreq);
                }
            }
            i += 1;
        }
        
        can_take.len() == (n as usize)
    }
}
```

## Related questions

<Medium>

[Course Schedule II](./course-schedule-ii)

</Medium>

<Medium>

[Graph Valid Tree](./graph-valid-tree)

</Medium>

<Medium>

[Minimum Height Trees](./minimum-height-trees)

</Medium>

<Hard>

[Course Schedule III](./course-schedule-iii)

</Hard>