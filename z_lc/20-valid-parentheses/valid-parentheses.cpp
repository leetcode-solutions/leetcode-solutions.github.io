class Solution {
public:
    bool isValid(string s) {
        #include <unordered_map>
        
        if (s.size() % 2 != 0) return false;
        unordered_map<char, char> pairs ({
            {'(', ')'},
            {'{', '}'},
            {'[', ']'},
        });
        vector<char> stack;
        for (char c : s) {
            if (auto it = pairs.find(c); it != pairs.end()) {
                stack.push_back(it->second);
            } else {
                if (stack.empty())
                    return false;
                if (auto last = stack.back(); stack.pop_back(), last != c)
                    return false;
            }
        }
        return stack.empty();
    }
};