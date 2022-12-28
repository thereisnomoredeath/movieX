import { gql } from '@apollo/client'

const GENRES_QUERY = gql`
query Genres {
    genres {
        id
        name
    }
}
`

export default GENRES_QUERY