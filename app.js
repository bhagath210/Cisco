const main = require('./main'); // accessing the object having functions
main.list();
var question1={"id":11, "question":"How old are you?", "answer":"1 day"}; // JSON formate representation of data
main.addQA(question1); // calling the function
var question2={"id":10, "question":"How do you do?"};
main.addQuestion(question2);
var question3= {"id":10, "answer":"good"};
main.addAnswer(question3);
main.list();

// main.list();
// main.delete(7);
// main.delete(8);
console.log('end....');