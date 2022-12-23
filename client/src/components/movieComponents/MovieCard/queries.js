import { gql } from '@apollo/client'

const MOVIE = gql`
query MovieDetails($id: Int) {
    movieDetails(id: $id) {
      adult
      budget
      genres {
        id
        name
      }
      homepage
      id
      originalLanguage
      originalTitle
      overview
      popularity
      image: posterPath
      productionCountries {
        iso_3166_1
        name
      }
      releaseDate
      runtime
      status
      tagline
      title
      rating: voteAverage
      voteCount
    }
  }
`

export default MOVIE