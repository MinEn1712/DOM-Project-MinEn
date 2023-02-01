//Cau 1
let navBar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");

function addSection(section, num){
    let list = document.createElement("li");
    list.innerHTML = `<a href="#${section.id}" class="menu__link">Section ${num}</a>`;
    list.classList.add(section.id);
    navBar.appendChild(list);
}

for(let i = 0; i < sections.length; i++){
    addSection(sections[i], i + 1);
}

//Cau 2
const navLi = document.querySelectorAll(".navbar__menu #navbar__list li");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.id; 
      section.classList.add("your-active-class");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

//Cau 3
const myButton = document.getElementById('myBtn');

window.addEventListener('scroll',() => {
    const yIndexSection2 = document.getElementById('section1').offsetTop;
    if(pageYOffset >= yIndexSection2){
        myButton.style.display = 'block';
    }
    else myButton.style.display = 'none';
});

myButton.onclick = topFunction();

function topFunction() {
    document.documentElement.scrollTop = 0; 
}

//Cau 4

//const responsiveNavBar = document.createElement("div");
const toggleButton = document.createElement("a");
toggleButton.classList.add("toggle__button");
toggleButton.href = "#";
for(let i = 0; i < 3; i++){
    const bar = document.createElement("span");
    bar.classList.add("bar");
    toggleButton.appendChild(bar);
};
navBar.appendChild(toggleButton);

const navBarLinks = document.querySelectorAll(".menu__link");
toggleButton.addEventListener("click", () => {
    navBarLinks.style.display = block;
});

