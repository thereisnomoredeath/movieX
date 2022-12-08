const {IMAGE_BASE_PATH} = require('../../../config/')

class Movie {
    constructor(movie) {
        this.RD = movie
        this.id = movie.id
        this.title = movie.title
        this.posterPath = IMAGE_BASE_PATH + movie.poster_path
        this.genres = movie.genre_ids
        this.adult = movie.adult;
        this.overview = movie.overview;
        this.originalLanguage = movie.original_language;
        this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
        this.popularity = movie.popularity;
        this.voteCount = movie.vote_count;
        this.video = movie.video;
        this.voteAverage = movie.vote_average
        }

        releaseDate () {
            class MyDate {
                constructor(data){
                  this.YYYY = data[0];
                  this.MM = data[1];
                  this.DD = data[2];
                }
              
                DMY () {
                  return this.DD + '.' + this.MM + '.' + this.YYYY
                }
              
              }
                            
              return new MyDate(this.RD.release_date.split('-')).DMY()
            }
          }

module.exports = {
    Movie
}