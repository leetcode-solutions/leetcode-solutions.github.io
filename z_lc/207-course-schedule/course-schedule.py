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