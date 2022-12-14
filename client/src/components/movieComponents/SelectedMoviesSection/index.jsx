import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SelectedIcon from '../../../images/SelectedIcon.svg'
import SelectedMoviesForm from '../SelectedMoviesForm'
import MovieCardSelected from '../MovieCardSelected'

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.textColor,
  height: 'calc(100vh - 120px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}))

const MoviesList = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.sections,
  overflowY: 'scroll',
  height: '100%',
  pb: '8px',
}))

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}))

function SelectedMoviesSection({ selectedMovies, deleteMovie }) {
  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component='img'
            sx={{
              minHeight: '134px',
              width: '40%',
              opacity: '.4',
            }}
            alt='cover'
            src={SelectedIcon}
          />
          <Typography variant='h4' mt={2}>
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    )
  }

  return (
    <SelectedMovies>
      <MoviesList elevation={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm />
      </Box>
    </SelectedMovies>
  )
}

export default SelectedMoviesSection
