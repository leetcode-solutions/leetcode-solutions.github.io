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