class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        i, j = 0, len(height) - 1
        while i < j:
            h = min(height[i], height[j])
            area = h * (j - i)
            
            res = max(res, area)
            
            while i < j and height[i] < h:
                i += 1
            while i < j and height[j] < h:
                j -= 1
        return res