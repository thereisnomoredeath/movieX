const {getPopular, getImages, getMoviesById} = require('../modules/movies/index')
const {Movie} = require('../modules/movies/entities/Movie')
const {MovieDetails} = require('../modules/movies/entities/MovieDetails')

async function movies(parent, args) {
  return await getPopular(args.page)
  }

  async function images(parent, args) {
     return await getImages()
    }

    async function moviesById(parent, args) {
   return await Promise.all(args.id.map((id) => getMoviesById(id)))
   .then( movies => movies.map((movie) => new Movie(movie.data)))
   .catch( reason => console.log(reason))
  }

  async function movieDetails(parent, args) {
    const movie = await getMoviesById(args.id)
    return new MovieDetails(movie.data)
  }

  module.exports = {
    movies,
    images,
    moviesById,
    movieDetails
  }
  