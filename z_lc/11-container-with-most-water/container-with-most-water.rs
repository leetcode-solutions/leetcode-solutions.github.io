impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        use std::cmp;

        let mut res = 0;
        let (mut i, mut j) = (0, height.len() - 1);
        while i < j {
            let h = cmp::min(height[i], height[j]);
            let area = (h as usize) * (j - i);
            
            res = cmp::max(res, area);
            
            while i < j && height[i] <= h {
                i += 1;
            }
            while i < j && height[j] <= h {
                j -= 1;
            }
        }
        res as i32
    }
}