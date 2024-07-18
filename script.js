//Practice Example-01: push() and pop() method
let users=["Ekhlas","Rony","Azam","Idris","Polash","Babu","Ferdous"];
// adding a new user
users.push("Raja");
console.log(users);
// removing the last user
let Lastuser= users.pop();
console.log(Lastuser);
console.log(users);
//Practice Example-02: push() and pop() method
// Managing a Browser History Stack
let Browser_History=[];

Browser_History.push('home.html');
Browser_History.push('about.html');
Browser_History.push('contact.html');
console.log(Browser_History);


let lastvisited_page=Browser_History.pop();
console.log(lastvisited_page);
console.log(Browser_History);
// Practice Example -03: Implementing an Undo Feature
// In a text editor, you might implement an undo feature where each action is pushed onto a stack, and popping from the stack undoes the last action.

let action_taken=[];
// Performing actions
action_taken.push('typed "Hello"');
action_taken.push('typed "World"');
action_taken.push('typed "World"');
// undo last action
let lastaction=action_taken.pop();
console.log(lastaction);
// Final page
console.log(action_taken);
//Practice Example -04: Handling a Call Center Queue
let callstack=[];

// Incoming call
callstack.push('Call from customer "Bill"');
callstack.push('Call from customer "Joe"');
callstack.push('Call from customer "Biden"');
console.log(callstack);
// Handling the most recent call
let latest_call = callstack.pop();
console.log(`The last call is :${latest_call}`);
console.log(callstack);



