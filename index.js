// console.info(2);
// console.debug(2 + 3);
// console.warn(6 * 3 - 10);
// console.error("started");

var myName = 'Anca';
var myAge = 1578;

console.info("My name is " + myName + ", I'm " + myAge + ' years old');
myAge = 30;
console.info("My name is " + myName + ", I'm " + myAge + ' years old');
myAge = 31;
console.info("My name is " + myName + ", I'm " + myAge + ' years old');

var jobTitle = "Analist servicii client";

var mottoElement = document.getElementById("motto")

console.info(mottoElement);
console.warn(mottoElement.innerHTML);
// mottoElement.innerHTML = mottoElement.innerHTML +  " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;