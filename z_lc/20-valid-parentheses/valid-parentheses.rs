impl Solution {
    pub fn is_valid(s: String) -> bool {
        use std::collections::HashMap;
        if s.len() % 2 != 0 { return false; }
        let pairs: HashMap<char, char> = [
            ('(', ')'),
            ('{', '}'),
            ('[', ']'),
        ].iter().cloned().collect();
        let mut stack: Vec<char> = vec![];
        for c in s.chars() {
            match c {
                x if pairs.contains_key(&x) => stack.push(*pairs.get(&x).unwrap()),
                _ => if stack.is_empty() || stack.pop() != Some(c) { return false; },
            }
        }
        stack.is_empty()
    }
}