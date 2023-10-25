export interface IFilm {
  Id: number;
  Title?: string;
  Year: number;
  Released: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: number;
  Type: string;
  Images: Array<string>;
}
