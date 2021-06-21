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