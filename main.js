import { getContent, insertOrRemoveGeology } from "./helpers";
import { urlLocationHandler, urlRoute } from "./router.js";

const buttons = document.querySelectorAll("button");
const description = document.querySelector(".description p");
const source = document.querySelector(".source a");
const img = document.querySelector(".planet-image img");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu a");

for (const button of buttons) {
  button.addEventListener("click", function () {
    const planetName = document.title;
    buttons.forEach((button) => button.classList = '');
    this.classList = `active ${planetName.toLowerCase()}`
    const { content, source: src, image, geology } = getContent(this, planetName);
    description.textContent = content;
    source.href = src;
    img.src = `.${image}`;
    insertOrRemoveGeology(geology)
  });
}
burger.addEventListener("click", mobileMenu);
function mobileMenu() {
  navMenu.classList.toggle("active");
  burger.classList.toggle("active");
}

navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (e) {
    navMenu.classList.remove('active')
    urlRoute(e);
  });
});

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();
