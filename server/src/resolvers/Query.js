const {getPopular, getMoviesById} = require('../modules/movies/index')
const {Movie} = require('../modules/movies/entities/Movie')
const {MovieDetails} = require('../modules/movies/entities/MovieDetails')

async function movies(parent, args, context) {
  return await getPopular(args.page, context)
  }

    async function moviesById(parent, args, context) {
   return await Promise.all(args.id.map((id) => getMoviesById(id, context)))
   .then( movies => movies.map((movie) => new Movie(movie.data)))
   .catch( reason => console.log(reason))
  }

  async function movieDetails(parent, args, context) {
    const movie = await getMoviesById(args.id, context)
    return new MovieDetails(movie.data)
  }

  module.exports = {
    movies,
    moviesById,
    movieDetails
  }
  