class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        #include <algorithm>
        #include <unordered_map>
        
        unordered_map<char, int> inds;
        int res = 0;
        int i = 0;
        for(int j = 0; j < s.size(); ++j) {
            char c = s[j];
            if(auto iter = inds.find(c); iter != inds.end()) {
                i = std::max(i, iter->second + 1);
            }
            inds[c] = j;
            res = std::max(res, j - i + 1);
        }
        return res;
    }
};