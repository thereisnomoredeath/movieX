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

  if (error) return 'Something went wrong...'

  const changePage = (e, page) => {
    setPage(page)
  }

  const selected = {
    image: 'https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    adult: false,
    overview: `From DC Comics comes the Suicide Squad,
    an antihero team of incarcerated supervillains who act as deniable assets for the United States government,
    undertaking high-risk black ops missions in exchange for commuted prison sentences.`,
    release_date: '2016-08-03',
    genre_ids: [
      14,
      28,
      80,
    ],
    id: 297761,
    original_title: 'Suicide Squad',
    original_language: 'en',
    title: 'Suicide Squad',
    backdrop_path: '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
    vote_count: 1466,
    video: false,
    popularity: 5.91,
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
                    <MovieCard movie={movie} onCardSelect={() => {}} />
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
                <Grid key={selected.id} item xs={12} sm={12} md={12} lg={12}>
                  <MovieCardSelected movie={selected} onCardDelete={() => {}} />
                </Grid>
              </Grid>
            </Box>
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  )
}