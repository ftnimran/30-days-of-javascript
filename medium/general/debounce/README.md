# Debounce

🔗 [Problem Link](https://leetcode.com/problems/debounce/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Given a function&nbsp;fn and a time in milliseconds&nbsp;t, return&nbsp;a&nbsp;debounced&nbsp;version of that function.

A&nbsp;debounced&nbsp;function is a function whose execution is delayed by&nbsp;t&nbsp;milliseconds and whose&nbsp;execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let&#39;s say&nbsp;t = 50ms, and the function was called at&nbsp;30ms,&nbsp;60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at&nbsp;150ms.

If instead&nbsp;t = 35ms, The 1st call would be cancelled, the 2nd would be executed at&nbsp;95ms, and the 3rd would be executed at&nbsp;135ms.



The above diagram&nbsp;shows how debounce will transform&nbsp;e...