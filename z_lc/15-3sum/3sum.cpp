class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        #include <algorithm>
        
        int n = nums.size();
        
        std::sort(nums.begin(), nums.end());
        
        auto next_uniq = [&](int& i, const int& bound) {
            do { i += 1; } while (i < bound && nums[i] == nums[i-1]);
        };
        auto prev_uniq = [&](int& i, const int& bound) {
            do { i -= 1; } while (i > bound && nums[i] == nums[i+1]);
        };
        
        vector<vector<int>> res;
        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            int j = i + 1, k = n - 1;
            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                    res.push_back(vector<int>{nums[i], nums[j], nums[k]});
                    next_uniq(j, k);
                    prev_uniq(k, j);
                } else if (sum < 0) {
                    next_uniq(j, k);
                } else {
                    prev_uniq(k, j);
                }
            }
        }
        return res;
    }
};