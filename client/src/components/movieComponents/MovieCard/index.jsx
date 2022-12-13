import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import Box from '@mui/material/Box'
import MovieRating from '../MovieRating'
import CardMenu from '../CardMenu/index'

const StyledImg = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(255, 255, 255, .8)',
    opacity: '.7',
    color: theme.palette.bgcolor,
  },
}))

export default function MovieCard({
  movie, onCardSelect,
}) {
  const [ open, setOpen ] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height='250'
          image={movie.image}
          alt='cover'
        />
        <StyledImg>
          <AddBoxOutlinedIcon sx={{ fontSize: 80, color: '' }} onClick={() => onCardSelect(movie)} />
        </StyledImg>
      </Box>
      <CardContent>
        <CardHeader
          sx={{ position: 'absolute', right: 0, top: 0 }}
          action={(
            <CardMenu
              onCardACtion={() => onCardSelect(movie)}
            >
              Add to favorites
            </CardMenu>
)}
        />
        <Typography variant='h5'>
          {movie.title}
        </Typography>
        <Typography mt={1} variant='subtitle2'>
          <span style={{ color: '#00b7ff' }}>Release date: </span>
          {' '}
          {movie.releaseDate}
        </Typography>
        <MovieRating rating={movie.rating} />
        <div>
          <Button sx={{ color: '#00b7ff' }} onClick={handleToggle}>Show overview</Button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <div style={{ backgroundColor: '#232323', width: '300px', height: '300px' }}>
              {movie.overview}
            </div>
          </Backdrop>
        </div>
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