# Array Prototype Last

🔗 [Problem Link](https://leetcode.com/problems/array-prototype-last/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Write code that enhances all arrays such that you can call the&nbsp;array.last()&nbsp;method on any array and it will return the last element. If there are no elements in the array, it should return&nbsp;-1.

You may assume the array is the output of&nbsp;JSON.parse.

&nbsp;
Example 1:


Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.


Example 2:


Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.


&nbsp;
Constraints:


	arr is a valid JSON array
	0 &lt;= arr.length &lt;= 1000