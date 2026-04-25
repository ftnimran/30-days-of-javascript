# Flatten Deeply Nested Array

🔗 [Problem Link](https://leetcode.com/problems/flatten-deeply-nested-array/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Given a&nbsp;multi-dimensional array&nbsp;arr&nbsp;and a depth n, return&nbsp;a&nbsp;flattened&nbsp;version of that array.

A multi-dimensional&nbsp;array is a recursive data structure that contains integers or other&nbsp;multi-dimensional&nbsp;arrays.

A&nbsp;flattened&nbsp;array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting&nbsp;is less&nbsp;than&nbsp;n. The depth of the elements in the first array are considered to be&nbsp;0.

Please solve it without the built-in&nbsp;Array.flat method.

&nbsp;
Example 1:


Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11],...