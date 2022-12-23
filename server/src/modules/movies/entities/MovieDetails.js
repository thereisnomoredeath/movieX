const {IMAGE_BASE_PATH} = require('../../../config/')
class MovieDetails {
    constructor(movie) {
        this.RD = movie
        this.adult = movie.adult
        this.budget = movie.budget
        this.genres = movie.genres
        this.homepage = movie.homepage
        this.id = movie.id
        this.originalLanguage = movie.original_language
        this.originalTitle = movie.original_title
        this.overview = movie.overview
        this.popularity = movie.popularity
        this.posterPath = IMAGE_BASE_PATH + movie.poster_path
        this.runtime = movie.runtime
        this.status = movie.status
        this.tagline = movie.tagline
        this.title = movie.title
        this.voteAverage = movie.vote_average
        this.voteCount = movie.vote_count
    }

    productionCountries() {
      return this.RD.production_countries.map((el) => el.name === "United States of America" ? {...el, name: "USA"} : el)
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
  MovieDetails
}