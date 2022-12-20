import { gql } from '@apollo/client'

const MOVIES = gql`
query MoviesById($id: [Int]) {
    moviesById(id: $id) {
      title
      releaseDate
      image: posterPath
      rating: voteAverage
    }
  }
`

export default MOVIES