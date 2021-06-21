class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        
        bool memo[n][n];
        
        int start = 0, len = 0;
        for(int i=n-1; i>=0; --i) {
            for(int j=i; j<n; ++j) {
                if(i == j) {
                    memo[i][j] = true;
                } else if(i+1 == j) {
                    memo[i][j] = s[i] == s[j];
                } else {
                    memo[i][j] = (s[i] == s[j]) && memo[i+1][j-1];
                }
                if(memo[i][j] && len < j - i + 1) {
                    start = i;
                    len = j - i + 1;
                }
            }
        }
        return s.substr(start, len);
    }
};