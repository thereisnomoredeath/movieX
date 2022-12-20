import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Loading from '../../components/movieComponents/Loading'
import { MovieCard } from '../../components'
import MOVIES from './query'

const ListOfMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  color: theme.palette.textColor,
  height: '100%',
  padding: '0 15px 15px 15px',
}))

export default function Recommend() {
  const [ searchParams ] = useSearchParams()
  const ids = searchParams.getAll('ids')[0].split(',').map((id) => +id)
  const { loading, error, data } = useQuery(MOVIES, { variables: { id: ids } })
  if (error) return <div>Something went wrong...</div>
  return (
    <Box sx={{ flexGrow: 1, padding: '15px 0 15px 0', minHeight: 'calc(100vh - 48px)' }}>
      <ListOfMovies>
        <Loading loading={loading} />
        {data && (
        <Box sx={{ pt: '10px', textAlign: 'center', color: '#00b7ff' }}>
          <h1>{searchParams.getAll('title')[0].split('_').join(' ')}</h1>
        </Box>
        )}
        <Grid container spacing={2}>
          {data && data?.moviesById.map((movie) => (
            <Grid key={movie.title} item xs={6} sm={4} md={3} lg={2}>
              <MovieCard movie={movie} isFullVersion={false} />
            </Grid>
          ))}
        </Grid>
      </ListOfMovies>
    </Box>
  )
}