import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useQuery } from '@apollo/client'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { InfinitySpin } from 'react-loader-spinner'
import MovieCard from '../../components/movieComponents/MovieCard/index'
import MovieCardSelected from '../../components/movieComponents/MovieCardSelected'
import useMovies from '../../hooks/useMovies'
import MOVIES from './queries'

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  color: theme.palette.textColor,
  height: 'calc(100vh - 120px)',
  position: 'sticky',
  top: theme.spacing(2),
  overflowY: 'scroll',
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
  const [ page, setPage ] = React.useState(1)
  const { loading, error, data } = useQuery(MOVIES, { variables: { page } })
  const { selectCard, deleteCard, selectedMovies } = useMovies()

  if (error) return 'Something went wrong...'

  const changePage = (e, page) => {
    setPage(page)
  }

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
              {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <InfinitySpin
                    width='200'
                    color='#00b7ff'
                  />
                </Box>
              ) }
              <Grid container spacing={2}>
                {data && data.movies.results.map((movie) => (
                  <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                    <MovieCard movie={movie} onCardSelect={selectCard} />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Stack sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }} spacing={2}>
                    <Pagination onChange={changePage} page={page} count={data?.movies?.totalPages} variant='outlined' shape='rounded' />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </ListOfMovies>
        </Grid>
        <Grid item xs={12} md={4} pb={2}>
          <SelectedMovies>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                {selectedMovies.map((movie) => (
                  <Grid key={movie.id} item xs={12} sm={12} md={12} lg={12}>
                    <MovieCardSelected movie={movie} onCardDelete={deleteCard} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  )
}