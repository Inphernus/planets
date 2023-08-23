import planets from "./shared/data.json";
const getContent = (button, planetName) => {
  const buttonText = button.textContent.trim();
  const planetIndex = planets.findIndex((planet) => (planet.name === planetName));
  switch (buttonText) {
    case "01 Overview":
      return {
        content: planets[planetIndex].overview.content,
        source: planets[planetIndex].overview.source,
        image: planets[planetIndex].images.planet
      };
    case "02 Internal Structure":
      return {
        content: planets[planetIndex].structure.content,
        source: planets[planetIndex].structure.source,
        image: planets[planetIndex].images.internal
      };
    case "03 Surface Geology":
      return {
        content: planets[planetIndex].geology.content,
        source: planets[planetIndex].geology.source,
        image: planets[planetIndex].images.geology
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
    const planetName = document.title
    buttons.forEach((button) => button.classList.remove('active'));
    this.classList.add('active');
    const { content, source: src, image } = getContent(this, planetName);
    description.textContent = content;
    source.href = src;
    img.src = `.${image}`
  });
}
