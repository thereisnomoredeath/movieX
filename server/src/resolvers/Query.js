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

  async function movieDetailsArray(parent, args, context) {
    const results = await Promise.all(args.id.map((id) => getMoviesById(id, context).then(res => res.data))).catch(reason => console.log(reason))
    return results.map(movie => new MovieDetails(movie))
  }

  module.exports = {
    movies,
    moviesById,
    movieDetails,
    movieDetailsArray
  }
  