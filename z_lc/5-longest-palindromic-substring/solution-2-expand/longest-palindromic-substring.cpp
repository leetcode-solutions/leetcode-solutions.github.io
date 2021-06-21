class Solution {
public:
    string longestPalindrome(string s) {
        const char SEPARATOR = '.';
        string S(1, SEPARATOR);
        for(auto c : s) {
            S.push_back(c);
            S.push_back(SEPARATOR);
        }
        int n = S.size();
        int center = 0, length = 0;
        for (int c = 0; c < n; ++c) {
            int l = 0, i, j;
            while ((i=c-l-1) >= 0 && (j=c+l+1) < n && S[i]==S[j]) {
                ++l;
            }
            if (l > length) {
                center = c;
                length = l;
            }
        }
        int start = (center - length) / 2;
        return s.substr(start, length);
    }
};