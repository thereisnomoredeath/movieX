import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useQuery } from '@apollo/client'
import MovieCard from '../../components/movieComponents/MovieCard/index'
// import MovieCardSelected from '../../components/movieComponents/MovieCardSelected'
import MOVIES from './queries'

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  color: theme.palette.textColor,
  height: 'calc(100vh - 120px)',
  position: 'sticky',
  top: theme.spacing(2),
}))

const FiltersSection = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  color: theme.palette.textColor,
}))

const ListOfMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  color: theme.palette.textColor,
}))

export default function Home() {
  const { loading, error, data } = useQuery(MOVIES)
  if (error) return 'Ooooops, something went wrong...'
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FiltersSection>
            Filters section
          </FiltersSection>
        </Grid>
        <Grid item xs={12} md={8} pb={2}>
          <ListOfMovies>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && 'loadind...' }
              <Grid container spacing={2}>
                {data && data.movies.results.map((movie) => (
                  <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                    <MovieCard movie={movie} onCardSelect={() => {}} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </ListOfMovies>
        </Grid>
        <Grid item xs={12} md={4} pb={2}>
          <SelectedMovies />
        </Grid>
      </Grid>
    </Box>
  )
}

/* <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <MovieCardSelected onCardDelete={() => {}} />
                </Grid>
              </Grid>
            </Box> */