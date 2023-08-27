import { generatePage } from "./helpers";
import planets from "/data.json";
const urlRoutes = {
  "/": {
    data: planets[0],
  },
  "/venus": {
    data: planets[1],
  },
  "/earth": {
    data: planets[2],
  },
  "/mars": {
    data: planets[3],
  },
  "/jupiter": {
    data: planets[4],
  },
  "/saturn": {
    data: planets[5],
  },
  "/uranus": {
    data: planets[6],
  },
  "/neptune": {
    data: planets[7],
  },
};

// create a function that watches the url and calls the urlLocationHandler
export const urlRoute = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
 if(window.location.href !== event.target.href){
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
 }
};

// create a function that handles the url location
export const urlLocationHandler = async () => {
  let location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = urlRoutes[location];

  // get the html from the template
  // set the content of the content div to the html
  generatePage(route.data);
  // set the title of the document to the title of the route
};
