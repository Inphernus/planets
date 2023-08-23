import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
import planets from "./shared/data.json";

const populateContent = (content) => {
  const env = process.env.NODE_ENV;
  return {
    title: content.name,
    description: content.overview.content,
    source: content.overview.source,
    rotation: content.rotation,
    revolution: content.revolution,
    radius: content.radius,
    temperature: content.temperature,
    image: `/assets/planet-${content.name.toLowerCase()}.svg`,
    customStyles:
      env === "development"
        ? `/styles/${content.name.toLowerCase()}.scss`
        : env === "production"
        ? `/assets/${content.name.toLowerCase()}.scss`
        : null,
  };
};
const pageData = {
  "/index.html": {
    ...populateContent(planets[0]),
  },
  "/pages/venus.html": {
    ...populateContent(planets[1]),
  },
  "/pages/earth.html": {
    ...populateContent(planets[2]),
  },
  "/pages/mars.html": {
    ...populateContent(planets[3]),
  },
  "/pages/jupiter.html": {
    ...populateContent(planets[4]),
  },
  "/pages/saturn.html": {
    ...populateContent(planets[5]),
  },
  "/pages/uranus.html": {
    ...populateContent(planets[6]),
  },
  "/pages/neptune.html": {
    ...populateContent(planets[7]),
  },
};
console.log(pageData)

export default {
  server: {
    open: "/index.html",
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      helpers: {
        toLowerCase: function (str) {
          return str.toLowerCase();
        },
      },
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        venus: resolve(__dirname, "pages/venus.html"),
        earth: resolve(__dirname, "pages/earth.html"),
        mars: resolve(__dirname, "pages/mars.html"),
        jupiter: resolve(__dirname, "pages/jupiter.html"),
        saturn: resolve(__dirname, "pages/saturn.html"),
        uranus: resolve(__dirname, "pages/uranus.html"),
        neptune: resolve(__dirname, "pages/neptune.html"),
      },
    },
  },
};
