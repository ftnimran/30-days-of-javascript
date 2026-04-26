# Compact Object

🔗 [Problem Link](https://leetcode.com/problems/compact-object/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Given an object or array&nbsp;obj, return a compact object.

A compact object&nbsp;is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where&nbsp;the indices are&nbsp;keys. A value is&nbsp;considered falsy&nbsp;when Boolean(value) returns false.

You may assume the&nbsp;obj is&nbsp;the output of&nbsp;JSON.parse. In other words, it is valid JSON.

&nbsp;
Example 1:


Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.


Example 2:


Input: obj = {&quot;a&quot;: null, &quot;b&quot;: [false, 1]}
Output: {&quot;b&quot;: [1]}
Explanation: obj[&quot;a&quot;] and obj[&quot;b&quot;][0] had falsy values and were removed...