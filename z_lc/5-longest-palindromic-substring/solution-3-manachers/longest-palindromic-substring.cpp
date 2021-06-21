class Solution {
public:
    string longestPalindrome(string s) {
        #include <algorithm>
        
        const char SEPARATOR = '.';
        string S(1, SEPARATOR);
        for(auto c : s) {
            S.push_back(c);
            S.push_back(SEPARATOR);
        }
        int n = S.size();
        
        vector<int> lens(n);
        int c = 0, r = 0;
        int center = 0, length = 0;
        for (int i = 0; i < n; ++i) {
            if (i < r) {
                int i_prime = c - (i - c);
                lens[i] = std::min(r - i, lens[i_prime]);
            }
            
            int x, y;
            while ((x=i-1-lens[i]) >= 0 && (y=i+1+lens[i]) < n && S[x]==S[y]) {
                ++lens[i];
            }
            
            if (i + lens[i] > r) {
                r = i + lens[i];
                c = i;
            }
            
            if (lens[i] > length) {
                length = lens[i];
                center = i;
            }
        }
        int start = (center - length) / 2;
        return s.substr(start, length);
    }
};