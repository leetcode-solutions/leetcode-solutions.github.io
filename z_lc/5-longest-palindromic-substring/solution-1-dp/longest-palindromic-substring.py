class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        
        memo = [[False]*n for i in range(n)]
        
        start, length = 0, 0
        for i in range(n-1, -1, -1):
            for j in range(i, n):
                if i == j:
                    memo[i][j] = True
                elif i+1 == j:
                    memo[i][j] = (s[i] == s[j])
                else:
                    memo[i][j] = s[i] == s[j] and memo[i+1][j-1]
                if memo[i][j] and length < j - i + 1:
                    start, length = i, j - i + 1
        return s[start : start+length]