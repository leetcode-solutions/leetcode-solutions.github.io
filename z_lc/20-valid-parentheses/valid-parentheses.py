class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False
        pairs = {'(': ')', '{': '}', '[': ']'}
        stack = []
        for c in s:
            if c in pairs:
                stack.append(pairs[c])
            else:
                if not stack or stack.pop() != c:
                    return False
        return not stack