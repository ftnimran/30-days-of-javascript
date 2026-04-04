# Counter II

🔗 [Problem Link](https://leetcode.com/problems/counter-ii/)
📊 Difficulty: easy
📂 Category: Closure

## 📝 Description
Write a function&nbsp;createCounter. It should accept an initial integer&nbsp;init. It should return an object with three functions.

The three functions are:


	increment()&nbsp;increases&nbsp;the current value by 1 and then returns it.
	decrement()&nbsp;reduces the current value by 1 and then returns it.
	reset()&nbsp;sets the current value to&nbsp;init&nbsp;and then returns it.


&nbsp;
Example 1:


Input: init = 5, calls = [&quot;increment&quot;,&quot;reset&quot;,&quot;decrement&quot;]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4


Example 2:


Input: init = 0, calls = [&quot;increment&quot;,&quot;increment&quot;,&quot;decrement&quot;,&quot;reset&quot;,&quot;reset&quot;]
Output: [1,2,1,0,0]
Expl...