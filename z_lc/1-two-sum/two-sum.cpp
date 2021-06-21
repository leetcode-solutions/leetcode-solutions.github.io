class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        #include <unordered_map>
        
        unordered_map<int, int> seen;
        for(int i=0; i<nums.size(); ++i) {
            int n = nums[i];
            int complement = target - n;
            if(auto iter = seen.find(complement); iter != seen.end()) {
                return vector<int> {i, iter->second};    
            }
            seen[n] = i;
        }
        return vector<int>();
    }
};