impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        fn preprocess(s: &str) -> Vec<char> {
            const SEPARATOR: char = '.';
            let mut S: Vec<char> = Vec::with_capacity(s.len() * 2 + 1);
            S.push(SEPARATOR);
            for c in s.chars() {
                S.push(c);
                S.push(SEPARATOR);
            }
            S
        }
        let S = preprocess(&s);
        let n = S.len();
        
        let (mut center, mut len) = (0, 0);
        for c in 0..n {
            let mut l = 0;
            loop {
                match (c as i32 - 1 - l as i32, c as i32 + 1 + l as i32) {
                    (i,j) if i >= 0
                        && (j as usize) < n
                        && S[i as usize] == S[j as usize]
                        => l += 1,
                    _ => break,
                }
            }
            if l > len {
                center = c;
                len = l;
            }   
        }
        let start = (center - len) / 2;
        s[start..(start+len)].to_string()
    }
}