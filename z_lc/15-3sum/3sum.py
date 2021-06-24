class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        nums.sort()
        
        def next_uniq(i, bound):
            i += 1
            while i < bound and nums[i] == nums[i-1]:
                i += 1
            return i
        def prev_uniq(i, bound):
            i -= 1
            while i > bound and nums[i] == nums[i+1]:
                i -= 1
            return i
        res = []
        for i in range(n - 2):
            if nums[i] > 0:
                break            
            if i > 0 and nums[i] == nums[i-1]:
                continue
            j, k = i + 1, n - 1
            while j < k:
                s = nums[i] + nums[j] + nums[k]
                if s == 0:
                    res.append([nums[i], nums[j], nums[k]])
                    j = next_uniq(j, k)
                    k = prev_uniq(k, j)
                elif s < 0:
                    j = next_uniq(j, k)
                else:
                    k = prev_uniq(k, j)
        return res