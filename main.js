import planets from "./shared/data.json";
const getContent = (button) => {
  const planetName = document.title;
  const buttonText = button.textContent.trim();
  const planetIndex = planets.findIndex((planet) => (planet.name === planetName));
  switch (buttonText) {
    case "01 Overview":
      return {
        content: planets[planetIndex].overview.content,
        source: planets[planetIndex].overview.source,
      };
    case "02 Internal Structure":
      return {
        content: planets[planetIndex].structure.content,
        source: planets[planetIndex].structure.source,
      };
    case "03 Surface Geology":
      return {
        content: planets[planetIndex].geology.content,
        source: planets[planetIndex].geology.source,
      };
    default:
      return Error("Case does not exist");
  }
};
const buttons = document.querySelectorAll("button");
const description = document.querySelector(".description p");
const source = document.querySelector(".source a");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const planetName = document.title;
    buttons.forEach((button) => button.classList.remove(`${planetName}-active`));
    this.classList.add(`${planetName}-active`);
    const { content, source: src } = getContent(this);
    description.textContent = content;
    source.href = src;
  });
}
