// dynamic programming
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

// expand around center
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

// manachers algorithm
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
