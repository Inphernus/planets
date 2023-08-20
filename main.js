import data from "./shared/data.json";

const populateContent = (content) => {
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  const source = document.querySelector(".source");
  title.textContent = content.name;
  description.textContent = content.overview.content;
  source.href = content.overview.source;
  const { rotation, revolution, radius, temperature } = content;
  const cardsData = Object.entries({
    rotation,
    revolution,
    radius,
    temperature,
  });
  for (const [key, value] of cardsData) {
    const card = document.querySelector(`.${key} .value`);
    card.textContent = value;
  }
};

populateContent(data[0]);
