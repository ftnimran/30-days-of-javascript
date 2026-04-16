# Promise Time Limit

🔗 [Problem Link](https://leetcode.com/problems/promise-time-limit/)
📊 Difficulty: medium
📂 Category: Promise

## 📝 Description
Given an&nbsp;asynchronous function&nbsp;fn&nbsp;and a time t&nbsp;in milliseconds, return&nbsp;a new&nbsp;time limited&nbsp;version of the input function. fn takes arguments provided to the&nbsp;time limited&nbsp;function.

The time limited function should follow these rules:


	If the fn completes within the time limit of t milliseconds, the time limited function should&nbsp;resolve with the result.
	If the execution of the fn exceeds the time limit, the time limited function should reject with the string &quot;Time Limit Exceeded&quot;.


&nbsp;
Example 1:


Input: 
fn = async (n) =&gt; { 
&nbsp; await new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp; return n * n; 
}
inputs = [5]
t = 50
Output: {&quot;rejected&quot;:&quot;Time Limit Exceeded&quot;,&quot;time&quot;:50}
Explanation:
c...