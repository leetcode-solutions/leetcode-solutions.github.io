impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        use std::cmp;
        use std::collections::HashMap;
        
        let mut inds = HashMap::new();
        let mut res = 0;
        let mut i = 0;
        for (j,c) in s.chars().enumerate() {
            if let Some(k) = inds.get(&c) {
                i = cmp::max(i, *k + 1);
            }
            inds.insert(c, j);
            res = cmp::max(res, j - i + 1);
        }
        res as i32
    }
}