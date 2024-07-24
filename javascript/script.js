
import projectData from "./data.js"

const burger=document.querySelector(".burger i")


const nav=document.querySelector(".nav")

const burgerButton= document.querySelector("button.burger")

// navbar functionality
function showHamburger() {
  // nav.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");

  nav.classList.toggle("nav-active");
}
burgerButton.addEventListener("click",showHamburger)
// showHamburger();



// card display projects
function displayCards() {
  for(let item of projectData) {
    console.log(item.title)
    let makeCard = document.createElement("div");
    makeCard.className = "card";
    makeCard.innerHTML = `
    <h4>${item.title}</h4>
    <img src=${item.image} alt="${item.imageAlt}">
        <figcaption>${item.description}</figcaption>
		<a href="${item.link}">View Page</a>
        `
        document.querySelector(".card-wrapper").appendChild(makeCard);
  }

}
displayCards();

