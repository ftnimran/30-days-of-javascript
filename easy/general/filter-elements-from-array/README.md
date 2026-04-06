# Filter Elements from Array

🔗 [Problem Link](https://leetcode.com/problems/filter-elements-from-array/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:


	arr[i] - number&nbsp;from&nbsp;the arr
	i&nbsp;- index of arr[i]


filteredArr should only contain the elements from the&nbsp;arr for which the expression fn(arr[i], i) evaluates to a truthy value. A&nbsp;truthy&nbsp;value is a value where&nbsp;Boolean(value)&nbsp;returns&nbsp;true.

Please solve it without the built-in Array.filter method.

&nbsp;
Example 1:


Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n &gt; 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10

Example 2:


Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i =...