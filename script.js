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
// In a call center application, you might handle incoming calls using a stack where each new call is pushed onto the stack, and the most recent call is handled first.
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
//Practice Example -05: Managing a Playlist
// In a music player application, you might manage a playlist where songs are added to the end of the playlist and the last song can be removed.
let play_list=[];
// At first add songs to the play_list
play_list.push('Song of "Ed Sheeran"');
play_list.push('Song of "Taylor Swift"');
play_list.push('Song of "Dua Lipa"');
play_list.push('Song of "Adele"');
play_list.push('Song of "Ariana Grande"');

console.log(play_list);

// Now remove the last song from the play_list
let last_song=play_list.pop();
console.log(`The last song is ${last_song}`);
console.log(play_list);

//Practice Example -06: Tracking User Navigation
// In a single-page application (SPA), you might track user navigation to implement a custom back button.
let nav_stack=[];
// navigation through the app
nav_stack.push('/home');
nav_stack.push('/profile');
nav_stack.push('/setting');
nav_stack.push('/contact');
nav_stack.push('/course');

console.log(nav_stack);

// Back navigation
let last_nav_page=nav_stack.pop();
console.log(`The last navigated page is ${last_nav_page}`);
console.log(nav_stack);



