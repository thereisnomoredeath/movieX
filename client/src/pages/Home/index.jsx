import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useQuery } from '@apollo/client'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { MovieCard, SelectedMoviesSection } from '../../components'
import useMovies from '../../hooks/useMovies/useMovies'
import useFilters from '../../hooks/useFelters/useFilters'
import Loading from '../../components/movieComponents/Loading'
import Filters from '../../components/movieComponents/Filters'
import MOVIES from './queries'

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
  const { filter, setPage, setFilters } = useFilters()
  const { loading, data } = useQuery(MOVIES, { variables: {filter}, onError: (error) => console.log(error)}) //eslint-disable-line
  const { selectCard, deleteCard, selectedMovies } = useMovies()

  const changePage = (e, page) => {
    setPage(page)
  }

  const onSubmit = (data) => {
    setFilters(data)
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FiltersSection>
            <Filters
              onSubmit={onSubmit}
              initialValues={filter}
            />
          </FiltersSection>
        </Grid>
        <Grid item xs={12} md={8} pb={2}>
          <ListOfMovies>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Loading loading={loading} />
              <Grid container spacing={2}>
                {data && data.movies.results.map((movie) => (
                  <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                    <MovieCard movie={movie} onCardSelect={selectCard} isFullVersion />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Stack sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }} spacing={2}>
                    <Pagination onChange={changePage} page={filter.page} count={500} variant='outlined' shape='rounded' />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </ListOfMovies>
        </Grid>
        <Grid item xs={12} md={4} pb={2}>
          <SelectedMoviesSection selectedMovies={selectedMovies} deleteMovie={deleteCard} />
        </Grid>
      </Grid>
    </Box>
  )
}