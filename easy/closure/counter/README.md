# Counter

🔗 [Problem Link](https://leetcode.com/problems/counter/)
📊 Difficulty: easy
📂 Category: Closure

## 📝 Description
Given an integer&nbsp;n,&nbsp;return a counter function. This counter function initially returns&nbsp;n&nbsp;and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

&nbsp;
Example 1:


Input: 
n = 10 
[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.


Example 2:


Input: 
n = -2
[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.


&nbsp;
Constraints:


	-1000&nbsp;&lt;= n &lt;= 10...