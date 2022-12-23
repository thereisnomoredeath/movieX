import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import { useTranslation } from 'react-i18next'
import DeleteIcon from '@mui/icons-material/Delete'
import MovieRating from '../MovieRating'

const style = {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
}

export default function MovieCardSelected({
  movie, onCardDelete,
}) {
  const { t } = useTranslation()
  return (
    <Card sx={{ display: 'flex', m: '10px', position: 'relative' }}>
      <CardMedia
        component='img'
        sx={{ width: 120 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{
        display: 'flex', flexDirection: 'column', width: '100%',
      }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <CardHeader
            sx={{
              position: 'absolute', left: 0, top: 0, p: '10px',
            }}
            action={(
              <Box sx={style}>
                <DeleteIcon sx={{ cursor: 'pointer' }} htmlColor='rgba(0, 183, 255, .8)' onClick={() => onCardDelete(movie)} />
              </Box>
          )}
          />
          <Typography component='div' variant='h5'>
            {movie.title}
          </Typography>
          <Typography mt={1} variant='subtitle2'>
            <span style={{ color: '#00b7ff' }}>{t('runningTime.runtime')}</span>
            {' '}
            {movie.runtime}
            {' '}
            {t('runningTime.time')}
          </Typography>
          <Typography variant='subtitle2'>
            <span style={{ color: '#00b7ff' }}>{t('voteAverage')}</span>
            {' '}
            { (`${movie.rating * 0.5}`).slice(0, 3) || 0}
          </Typography>
          <Typography variant='subtitle2'>
            <span style={{ color: '#00b7ff' }}>{t('voteCount')}</span>
            {' '}
            {movie.voteCount || 0}
          </Typography>
          <MovieRating rating={movie.rating} />
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