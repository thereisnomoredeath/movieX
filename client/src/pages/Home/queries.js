import { gql } from '@apollo/client'

const MOVIES = gql`
    query {
        movies {
            page
            totalResults
            totalPages
            results {
                id
                title
                image: posterPath
                releaseDate
                rating: voteAverage
            }
        }
    }
`

export default MOVIES