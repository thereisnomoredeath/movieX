import { gql } from '@apollo/client'

const MOVIES = gql`
    query Movies($page: Int) {
        movies(page: $page) {
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