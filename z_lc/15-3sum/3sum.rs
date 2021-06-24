impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let n = nums.len();
        if n < 3 {
            return vec![];
        }
        
        let mut A = nums;
        A.sort();
        
        let next_uniq = |mut i, bound| {
            while {i += 1; i < bound && A[i] == A[i-1]} {}
            i
        };
        let prev_uniq = |mut i, bound| {
            while {i -= 1; i > bound && A[i] == A[i+1]} {}
            i
        };
        
        let mut res = vec![];
        for i in 0..(n - 2) {
            if A[i] > 0 {
                break;
            }
            if i > 0 && A[i] == A[i - 1] {
                continue;
            }
            let (mut j, mut k) = (i + 1, n - 1);
            while j < k {
                match A[i] + A[j] + A[k] {
                    0 => {
                        res.push(vec![A[i], A[j], A[k]]);
                        j = next_uniq(j, k);
                        k = prev_uniq(k, j);
                    },
                    x if x < 0 => j = next_uniq(j, k),
                    _ => k = prev_uniq(k, j),
                }
            }
        }
        res
    }
}