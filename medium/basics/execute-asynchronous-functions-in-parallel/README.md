# Execute Asynchronous Functions in Parallel

🔗 [Problem Link](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/)
📊 Difficulty: medium
📂 Category: Basics

## 📝 Description
Given an array of&nbsp;asynchronous functions&nbsp;functions, return a new promise promise. Each function in the array accepts no arguments&nbsp;and returns a promise. All the promises should be executed in parallel.

promise resolves:


	When all the promises returned from&nbsp;functions&nbsp;were resolved successfully in parallel.&nbsp;The resolved&nbsp;value of&nbsp;promise should be an array of all the resolved values of promises in the same order as they were in the&nbsp;functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.


promise rejects:


	When any&nbsp;of the promises&nbsp;returned from&nbsp;functions&nbsp;were rejected.&nbsp;promise should also&nbsp;reject&nbsp;with the reason of the first rejection.


Plea...