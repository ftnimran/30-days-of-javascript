# Event Emitter

🔗 [Problem Link](https://leetcode.com/problems/event-emitter/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Design an EventEmitter class. This interface&nbsp;is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:


	subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function&nbsp;will later be called when the event is emitted.
	An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to&nbsp;subscribe&nbsp;are referentially identical.
	The...