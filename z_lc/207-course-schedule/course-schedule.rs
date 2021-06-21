impl Solution {
    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        let n = num_courses;
        let mut G: Vec<Vec<i32>> = vec![vec![]; n as usize];
        let mut num_prereqs: Vec<i32> = vec![0; n as usize];
        for e in prerequisites {
            let (course, prereq) = (e[0], e[1]);
            G[prereq as usize].push(course);
            num_prereqs[course as usize] += 1;
        }
        
        let mut can_take = num_prereqs.iter().enumerate()
            .filter(|(_, prereqs)| **prereqs == 0)
            .map(|(course, _)| course as i32)
            .collect::<Vec<i32>>();
        
        let mut i: usize = 0;
        while i < can_take.len() {
            let taken = can_take[i];
            for p in G[taken as usize].iter() {
                let postreq = *p;
                num_prereqs[postreq as usize] -= 1;
                if num_prereqs[postreq as usize] == 0 {
                    can_take.push(postreq);
                }
            }
            i += 1;
        }
        
        can_take.len() == (n as usize)
    }
}