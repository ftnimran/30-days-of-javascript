# Is Object Empty

🔗 [Problem Link](https://leetcode.com/problems/is-object-empty/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Given an object or an array, return if it is empty.


	An empty object contains no key-value pairs.
	An empty array contains no elements.


You may assume the object or array is the output of&nbsp;JSON.parse.

&nbsp;
Example 1:


Input: obj = {&quot;x&quot;: 5, &quot;y&quot;: 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.


Example 2:


Input: obj = {}
Output: true
Explanation: The object doesn&#39;t have any key-value pairs so it is empty.


Example 3:


Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.


&nbsp;
Constraints:


	obj is a valid JSON object or array
	2 &lt;= JSON.stringify(obj).length &lt;= 105


&nbsp;
Can you solve it in O(1) time?