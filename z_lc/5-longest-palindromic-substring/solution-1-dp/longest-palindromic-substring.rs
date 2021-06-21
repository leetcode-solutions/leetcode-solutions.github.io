impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let S = s.as_bytes();
        let n = S.len();
        
        let mut memo = vec![vec![false; n]; n];
        
        let (mut start, mut len) = (0, 0);
        for i in (0..n).rev() {
            for j in i..n {
                memo[i][j] = match (i,j) {
                    (a, b) if a == b => true,
                    (a, b) if a+1 == b => S[i] == S[j],
                    _ => (S[i] == S[j]) && memo[i+1][j-1],
                };
                if memo[i][j] && len < j - i + 1 {
                    start = i;
                    len = j - i + 1;
                };
            }
        }
        s[start..start+len].to_string()
    }
}