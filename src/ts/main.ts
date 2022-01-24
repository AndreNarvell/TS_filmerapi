//Interface import
import { IMovie } from "./models//interface/IService";
//Class import
import { MovieService } from "./models/services/service";
//Function import
import { createTextElement } from "./models/elements/textElement";
//Function import
import { createInputElement } from "./models/elements/inputElement";

//Creating header
let header = document.createElement("header");
header.setAttribute("class", "");

//Creating section
let section = document.createElement("section");
section.setAttribute("id", "section");
section.setAttribute("class", "d-flex justify-content-between");

//Creating div
let movieContainer = createTextElement("div", "movieContainer", "", section);
movieContainer.setAttribute("class", "d-flex justify-content-between mt-5");

//Creating h1
const heading = createTextElement(
  "h1",
  "mainh1",
  "Sööörch movie title",
  header
);

//Creating input
const inputField = createInputElement(
  "input",
  "movieInput",
  "text",
  header,
  "Search.."
);
//Creating button
const submitBtn = createTextElement("button", "submitBtn", "GO", header);

//Append created elements
document.body.append(header, section);

//Eventlistener starting main
submitBtn.addEventListener("click", () => {
  let service = new MovieService(inputField.value);
  let main = new Main();
  main.start(service);
});

//Fetching and adding fetch info to DOM
class Main {
  start(service: IMovie) {
    movieContainer.innerText = "";

    service.getData().then((response) => {
      for (let i = 0; i < response.Search.length; i++) {
        let divMovie = document.createElement("div");
        movieContainer.append(divMovie);
        divMovie.setAttribute("id", "divMovie" + i);
        divMovie.setAttribute("class", "divMovie");

        let divMovieInfo = document.getElementById("divMovie" + i);

        if (response.Search[i].Poster != "N/A") {
          divMovieInfo.innerHTML +=
            `<h2> ` +
            response.Search[i].Title +
            ` </h2>
          <h3> ` +
            response.Search[i].Year +
            ` </h3>
          <img src=` +
            response.Search[i].Poster +
            `> `;
        } else {
          divMovieInfo.innerHTML +=
            `<h2> ` +
            response.Search[i].Title +
            ` </h2>
        <h3> ` +
            response.Search[i].Year +
            ` </h3>
        <img src=https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png> `;
        }
      }
    });
  }
}

const scrollContainer = document.querySelector("section");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
