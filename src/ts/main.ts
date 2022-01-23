import { IMovie } from "./models//interface/IService";
import { MovieService } from "./models/services/service";
import { createTextElement } from "./models/elements/textElement";
import { createInputElement } from "./models/elements/inputElement";

let header = document.createElement("header");
header.setAttribute("class", "");
let section = document.createElement("section");
section.setAttribute("class", "d-flex justify-content-between");

const heading = createTextElement("h1", "mainh1", "Sörch movie title", header);
const inputField = createInputElement(
  "input",
  "movieInput",
  "",
  "text",
  header,
  "Search.."
);
const submitBtn = createTextElement("button", "submitBtn", "GO", header);

let movieContainer = createTextElement("div", "movieContainer", "", section);
movieContainer.setAttribute("class", "d-flex justify-content-between mt-5");

// Appenda nya element i headern
document.body.append(header, section);

// Klick på submitknappen
submitBtn.addEventListener("click", () => {
  let service = new MovieService(inputField.value);
  let main = new Main();
  main.start(service);
});

class Main {
  start(service: IMovie) {
    movieContainer.innerText = "";

    service.getData().then((response) => {
      for (let i = 0; i < response.Search.length; i++) {
        // Div att placera texten
        let divMovie = document.createElement("div");
        movieContainer.append(divMovie);
        divMovie.setAttribute("id", "divMovie" + i);

        let divMovieInfo = document.getElementById("divMovie" + i);
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
      }
    });
  }
}
