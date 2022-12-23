import { gql } from '@apollo/client'

const MOVIES = gql`
query MovieDetails($id: [Int]) {
  movieDetailsArray(id: $id) {
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
    voteAverage
    voteCount
  }
}
`

export default MOVIES