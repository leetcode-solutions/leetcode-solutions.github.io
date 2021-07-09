# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution: 
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(next = head)
        back, front = dummy, dummy
        for i in range(n+1):
            front = front.next
        while front:
            back, front = back.next, front.next
        back.next = back.next.next
        return dummy.next