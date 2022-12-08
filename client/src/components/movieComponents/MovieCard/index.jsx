import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardMenu from '../CardMenu/index'
import MovieRating from '../MovieRating'

export default function MovieCard({ movie, onCardSelect }) {
  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMedia
        component='img'
        height='250'
        image={movie.image}
        alt='cover'
      />
      <CardContent>
        <CardHeader
          sx={{ position: 'absolute', right: 0, top: 0 }}
          action={<CardMenu onCardACtion={onCardSelect}>Add to favorites</CardMenu>}
        />
        <Typography variant='h5'>
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
        <MovieRating rating={movie.rating} />
      </CardContent>
    </Card>
  )
}

MovieCard.propTypes = {
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
  onCardSelect: PropTypes.func.isRequired,
}