/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode dummy = ListNode(0, head);
        ListNode *back = &dummy, *front = &dummy;
        for(int _=0; _<n+1; ++_) {
            front = front->next;
        }
        while(front) {
            back = back->next;
            front = front->next;
        }
        back->next = back->next->next;
        return dummy.next;
    }
};