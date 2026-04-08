# Function Composition

🔗 [Problem Link](https://leetcode.com/problems/function-composition/)
📊 Difficulty: easy
📂 Category: Basics

## 📝 Description
Given an array of functions&nbsp;[f1, f2, f3,&nbsp;..., fn], return&nbsp;a new function&nbsp;fn&nbsp;that is the function&nbsp;composition of the array of functions.

The&nbsp;function&nbsp;composition&nbsp;of&nbsp;[f(x), g(x), h(x)]&nbsp;is&nbsp;fn(x) = f(g(h(x))).

The&nbsp;function&nbsp;composition&nbsp;of an empty list of functions is the&nbsp;identity function&nbsp;f(x) = x.

You may assume each&nbsp;function&nbsp;in the array accepts one integer as input&nbsp;and returns one integer as output.

&nbsp;
Example 1:


Input: functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65


Example 2:


Input: functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x]...