// dynamic programming
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

// expand around center
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

// manachers algorithm
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        use std::cmp;

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
        
        let mut lens = vec![0; n];
        let (mut c, mut r) = (0, 0);
        for i in 0..n {
            if i < r {
                let i_prime = c - (i - c);
                lens[i] = cmp::min(r - i, lens[i_prime]);
            }
            
            loop {
                match (i as i32 - 1 - lens[i] as i32, i as i32 + 1 + lens[i] as i32) {
                    (x,y) if x >= 0
                        && (y as usize) < n
                        && S[x as usize] == S[y as usize]
                        => lens[i] += 1,
                    _ => break,
                }
            }
            
            if i + lens[i] > r {
                r = i + lens[i];
                c = i;
            }
        }
        let (center, len) = lens
            .iter()
            .enumerate()
            .max_by_key(|&(i,l)| l)
            .unwrap();
        let start = (center - len) / 2;
        s[start..(start+len)].to_string()
    }
}
