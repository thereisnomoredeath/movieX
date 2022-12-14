import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardHeader } from '@mui/material'
import MovieRating from '../MovieRating'

export default function MovieCardSelected({
  movie, onCardDelete,
}) {
  return (
    <Card sx={{ display: 'flex', m: '10px' }}>
      <CardMedia
        component='img'
        sx={{ width: 120 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <CardHeader
            sx={{ position: 'absolute', right: '15px', top: '15px' }}
          />
          <Typography component='div' variant='h5'>
            {movie.title}
          </Typography>
          <Typography mt={1} variant='subtitle2'>
            <span style={{ color: '#00b7ff' }}>Release date: </span>
            {' '}
            {movie.releaseDate}
          </Typography>
          <Typography variant='subtitle2'>
            <span style={{ color: '#00b7ff' }}>Runtime: </span>
            {' '}
            {movie.runtime}
            {' '}
            minutes
          </Typography>
          <MovieRating rating={movie.popularity} />
          <Button onClick={() => onCardDelete(movie)} variant='outlined'>
            X
          </Button>
        </CardContent>
      </Box>
    </Card>
  )
}

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    runtime: PropTypes.number,
    popularity: PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func.isRequired,
}