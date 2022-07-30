// console.info(2);
// console.debug(2 + 3);
// console.warn(6 * 3 - 10);
// console.error("started");

var myName = "Anca";
var myAge = 30;

console.info("My name is " + myName + ", I'm " + myAge + " years old");
myAge = 30;
console.info("My name is " + myName + ", I'm " + myAge + " years old");
myAge = 31;
console.info("My name is " + myName + ", I'm " + myAge + " years old");

var jobTitle = "Analist servicii client";

var mottoElement = document.getElementById("motto");

console.info(mottoElement);
//console.warn(mottoElement.innerHTML);
// mottoElement.innerHTML = mottoElement.innerHTML +  " & " + jobTitle;
//mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "home";

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + nextPage).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.id.substring(5);
        console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
