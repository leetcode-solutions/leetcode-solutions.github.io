// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut dummy = Some(Box::new(ListNode {
            next: head,
            val: 0,
        }));
        let sz = {
            let (mut cur, mut count) = (dummy.as_ref(), 0);
            while cur.unwrap().next.is_some() {
                cur = cur.unwrap().next.as_ref();
                count += 1;
            }
            count
        };
        {
            let mut cur = dummy.as_mut();
            for _ in 0..(sz - n) {
                cur = cur.unwrap().next.as_mut();
            }
            let next = cur.as_mut().unwrap().next.as_mut().unwrap().next.take();
            cur.as_mut().unwrap().next = next;
        }
        dummy.unwrap().next
    }
}