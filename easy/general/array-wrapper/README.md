# Array Wrapper

🔗 [Problem Link](https://leetcode.com/problems/array-wrapper/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Create a class&nbsp;ArrayWrapper that accepts&nbsp;an array of integers in its constructor. This class should have two features:


	When two instances of this class are added together with the&nbsp;+&nbsp;operator, the resulting value is the sum of all the elements in&nbsp;both arrays.
	When the&nbsp;String()&nbsp;function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].


&nbsp;
Example 1:


Input: nums = [[1,2],[3,4]], operation = &quot;Add&quot;
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10


Example 2:


Input: nums = [[23,98,42,70]], operation = &quot;String&quot;
Output: &quot;[23,98,42,70]&quot;
Explanation:
const obj = new ArrayWrapper([23,98,42,7...