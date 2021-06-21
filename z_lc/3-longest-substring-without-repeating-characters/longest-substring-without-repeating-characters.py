class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        inds = {}
        res = 0
        i = 0
        for j,c in enumerate(s):
            if c in inds:
                i = max(i, inds[c] + 1)
            inds[c] = j
            res = max(res, j - i + 1)
        return res