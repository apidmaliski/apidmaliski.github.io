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

var activePage = "skills";

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");

  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills() {
  // initializare; conditie; post exec
  //for (var i = 1; i < 5; i++) {
  //console.info(`${i} * 5 = ${i * 5}`);
  //}

  var ul = document.querySelector(`#skills ul`);
  var skills = [
    { name: "html", endorsements: 15 },
    { name: "css", endorsements: 5 },
    { name: "js", endorsements: 10 },
  ];
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    //ul.innerHTML = ul.innerHTML + `<li>${skills[i]}</li>`;
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorsements} </li>`;
  }
}

displaySkills();
