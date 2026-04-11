# Memoize

🔗 [Problem Link](https://leetcode.com/problems/memoize/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Given a function fn, return a&nbsp;memoized&nbsp;version of that function.

A&nbsp;memoized&nbsp;function is a function that will never be called twice with&nbsp;the same inputs. Instead it will return&nbsp;a cached value.

You can assume there are&nbsp;3&nbsp;possible input functions:&nbsp;sum, fib,&nbsp;and&nbsp;factorial.


	sum&nbsp;accepts two integers&nbsp;a and b and returns a + b.&nbsp;Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
	fib&nbsp;accepts a&nbsp;single integer&nbsp;n and&nbsp;returns&nbsp;1 if n &lt;= 1 or&nbsp;fib(n - 1) + fib(n - 2)&nbsp;otherwise.
	factorial&nbsp;accepts a single integer&nbsp;n and r...