import { IMovie } from "../interface/IService";

export class MovieService implements IMovie {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  getData() {
    console.log(this.title);

    return fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=97fb0efc&s=" +
        this.title +
        "&type=movie"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}
