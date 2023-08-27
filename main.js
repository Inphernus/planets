import planets from "./shared/data.json";
const getContent = (button, planetName) => {
  const buttonText = button.textContent.trim();
  const planetIndex = planets.findIndex((planet) => planet.name === planetName);
  const overviewRegEx = /overview/i;
  const structureRegEx = /structure/i;
  const geologyRegEx = /geology/i;
  switch (true) {
    case overviewRegEx.test(buttonText):
      return {
        content: planets[planetIndex].overview.content,
        source: planets[planetIndex].overview.source,
        image: planets[planetIndex].images.planet,
      };
    case structureRegEx.test(buttonText):
      return {
        content: planets[planetIndex].structure.content,
        source: planets[planetIndex].structure.source,
        image: planets[planetIndex].images.internal,
      };
    case geologyRegEx.test(buttonText):
      return {
        content: planets[planetIndex].geology.content,
        source: planets[planetIndex].geology.source,
        image: planets[planetIndex].images.planet,
        geology: planets[planetIndex].images.geology,
      };
    default:
      return Error("Case does not exist");
  }
};
const buttons = document.querySelectorAll("button");
const description = document.querySelector(".description p");
const source = document.querySelector(".source a");
const img = document.querySelector(".planet-image img");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const planetName = document.title;
    buttons.forEach((button) => button.classList.remove("active"));
    this.classList.add("active");
    const { content, source: src, image, geology } = getContent(this, planetName);
    description.textContent = content;
    source.href = src;
    img.src = `.${image}`;
    const geo = document.querySelector(".geology");
    if (geology) {
      geo?.remove();
      const img = document.createElement("img");
      img.src = `.${geology}`;
      img.classList.add("geology");
      document.querySelector(".planet-image").appendChild(img);
    } else {
      geo?.remove();
    }
  });
}

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  burger.classList.toggle("active");
}
