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


