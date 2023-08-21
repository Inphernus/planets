import handlebars from 'vite-plugin-handlebars';
import {resolve} from 'path'
import planets from "./shared/data.json";

const populateContent = (content) => {
  return {
    title: content.name,
    description: content.overview.content,
    source: content.overview.source,
    rotation: content.rotation,
    revolution: content.revolution,
    radius: content.radius,
    temperature: content.temperature
  }
};
const pageData = {
  '/pages/mercury.html': {
    ...populateContent(planets[0])
  },
  '/pages/venus.html': {
    ...populateContent(planets[1])
  },
  '/pages/earth.html': {
    ...populateContent(planets[2])
  },
  '/pages/mars.html': {
    ...populateContent(planets[3])
  },
  '/pages/jupiter.html': {
    ...populateContent(planets[4])
  },
  '/pages/saturn.html': {
    ...populateContent(planets[5])
  },
  '/pages/uranus.html': {
    ...populateContent(planets[6])
  },
  '/pages/neptune.html': {
    ...populateContent(planets[7])
  }
};

export default {
  plugins: [
    handlebars({
        partialDirectory: resolve(__dirname, 'partials'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
};