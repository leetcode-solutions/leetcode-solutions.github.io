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