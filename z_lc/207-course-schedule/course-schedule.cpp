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