import planets from "/data.json";
export const getContent = (button, planetName) => {
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

export const generatePage = (planetData) => {
  const img = document.querySelector(".planet-img");
  const title = document.querySelector(".title h1");
  const description = document.querySelector(".description p");
  const sourceLink = document.querySelector(".source a");
  const rotation = document.querySelector(".rotation .value");
  const revolution = document.querySelector(".revolution .value");
  const radius = document.querySelector(".radius .value");
  const temperature = document.querySelector(".temperature .value");
  const button = document.querySelector("button.active")
  document.title = planetData.name;
  button.classList = `active ${planetData.name.toLowerCase()}`
  const { image, geology } = getContent(button, planetData.name);
  img.parentElement.classList = `planet-image planet-image--${planetData.name.toLowerCase()}`
  img.src = image;
  title.textContent = planetData.name;
  description.textContent = planetData.overview.content;
  sourceLink.href = planetData.overview.source;
  rotation.textContent = planetData.rotation;
  revolution.textContent = planetData.revolution;
  radius.textContent = planetData.radius;
  temperature.textContent = planetData.temperature;
  insertOrRemoveGeology(geology);
};
export const insertOrRemoveGeology = (geology) => {
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
};
