import { gql } from '@apollo/client'

const MOVIES = gql`
query Movies($filter: MoviesFilterInput) {
    movies(filter: $filter) {
            page
            totalResults
            totalPages
            results {
                id
                title
                image: posterPath
                releaseDate
                rating: voteAverage
                overview
            }
        }
    }
`

export default MOVIES