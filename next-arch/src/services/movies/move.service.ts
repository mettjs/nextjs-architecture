import Movie from "@/models/movie.model";
import BaseCrudService from "../baseCrud.service";

class MovieService extends BaseCrudService<Movie>{
  constructor() {
    super("Movie")
  }
}
const movieService = Object.freeze(new MovieService());

export default movieService;