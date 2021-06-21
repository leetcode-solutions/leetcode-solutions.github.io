impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;
        
        let mut seen = HashMap::new();
        for (i,n) in nums.iter().enumerate() {
            let complement = target - n;
            match seen.get(&complement) {
                Some(&index) => return vec![i as i32, index],
                None => seen.insert(n, i as i32),
            };
        }
        vec![]
    }
}
