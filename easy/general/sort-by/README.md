# Sort By

🔗 [Problem Link](https://leetcode.com/problems/sort-by/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Given an array arr and a function fn, return a sorted array sortedArr. You can assume&nbsp;fn&nbsp;only returns numbers and those numbers determine the sort order of&nbsp;sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

&nbsp;
Example 1:


Input: arr = [5, 4, 1, 2, 3], fn = (x) =&gt; x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.


Example 2:


Input: arr = [{&quot;x&quot;: 1}, {&quot;x&quot;: 0}, {&quot;x&quot;: -1}], fn = (d) =&gt; d.x
Output: [{&quot;x&quot;: -1}, {&quot;x&quot;: 0}, {&quot;x&quot;: 1}]
Explanation: fn returns the value for the &quot;x&quot; key. So the array is sorted based on that value.


Example 3:
...