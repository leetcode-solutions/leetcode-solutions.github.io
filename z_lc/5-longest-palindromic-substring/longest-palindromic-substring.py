# dynamic programming
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

# expand around center
class Solution:
    def longestPalindrome(self, s: str) -> str:
        SEPARATOR = '.'
        S = f'{SEPARATOR}{SEPARATOR.join(s)}{SEPARATOR}'
        n = len(S)

        center, length = 0, 0
        for c in range(n):
            l = 0
            while (i:=c-l-1) >= 0 and (j:=c+l+1) < n and S[i] == S[j]:
                l += 1
            if l > length:
                center, length = c, l
        start = (center - length) // 2
        return s[start : start+length]

# manachers algorithm
class Solution:
    def longestPalindrome(self, s: str) -> str:
        SEPARATOR = '.'
        S = f'{SEPARATOR}{SEPARATOR.join(s)}{SEPARATOR}'
        n = len(S)

        c, r, lens = 0, 0, [0]*n
        for i in range(n):
            if i < r:
                i_prime = c - (i - c)
                lens[i] = min(r - i, lens[i_prime])
                
            while (x:=i-1-lens[i]) >= 0 and (y:=i+1+lens[i]) < n and S[x] == S[y]:
                lens[i] += 1
                
            if i + lens[i] > r:
                c, r = i, i + lens[i]
        center, length = max(enumerate(lens), key=lambda x: x[1])
        start = (center - length) // 2
        return s[start : start+length]
