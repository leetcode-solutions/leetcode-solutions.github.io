class Solution {
public:
    int maxArea(vector<int>& height) {
        #include <algorithm>
        
        int res = 0;
        int i = 0, j = height.size() - 1;
        while (i < j) {
            int h = std::min(height[i], height[j]);
            int area = h * (j - i);
            
            res = std::max(res, area);
            
            while (i < j && height[i] <= h) {
                ++i;
            }
            while (i < j && height[j] <= h) {
                --j;
            }
        }
        return res;
    }
};