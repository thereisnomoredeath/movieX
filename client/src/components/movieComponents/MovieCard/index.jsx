import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import MovieRating from '../MovieRating'
import CardMenu from '../CardMenu/index'
import Loading from '../Loading'
import CardModal from '../../CardModal'
import MOVIE from './queries'

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
  movie, onCardSelect, isFullVersion,
}) {
  const { t } = useTranslation()
  const [ modalState, setModalState ] = React.useState('')
  const { loading, data } = useQuery(MOVIE, { variables: { id: movie.id }, onError: (error) => console.log(error)}) //eslint-disable-line
  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          height='250'
          image={movie.image}
          alt='cover'
        />
        <PrivacyTipIcon
          sx={{
            fontSize: 40, position: 'absolute', bottom: 0, right: 0, cursor: 'pointer', zIndex: 88, padding: '10px', color: 'rgba(0, 183, 255, 0.7)',
          }}
          onClick={() => setModalState(!modalState)}
        />
        {isFullVersion && (
        <StyledImg>
          <AddBoxOutlinedIcon sx={{ fontSize: 80, color: '' }} onClick={() => onCardSelect(data?.movieDetails)} />
        </StyledImg>
        )}
      </Box>
      <Loading loading={loading} />
      <CardContent>
        {isFullVersion && (
        <CardHeader
          sx={{ position: 'absolute', right: 0, top: 0 }}
          action={(
            <CardMenu
              onCardACtion={() => onCardSelect(data?.movieDetails)}
            >
              {t('button')}
            </CardMenu>
)}
        />
        )}
        <Typography variant='h5'>
          {movie.title}
        </Typography>
        <Typography mt={1} variant='subtitle2'>
          <span style={{ color: '#00b7ff' }}>{t('releaseDate')}</span>
          {' '}
          {movie.releaseDate.slice(0, 4)}
        </Typography>
        <Typography variant='subtitle2'>
          <span style={{ color: '#00b7ff' }}>{t('genres')}</span>
          {' '}
          {data && data?.movieDetails?.genres.map((movie) => movie?.name.toLowerCase()).join(', ')}
        </Typography>
        <Typography variant='subtitle2'>
          <span style={{ color: '#00b7ff' }}>{t('country')}</span>
          {' '}
          {data && data?.movieDetails?.productionCountries.map((movie) => movie?.name).join(', ')}
        </Typography>
        <MovieRating rating={data?.movieDetails?.rating} />
      </CardContent>
      <CardModal open={!!modalState} data={data?.movieDetails} closeModal={setModalState} loading={loading} />
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
  onCardSelect: PropTypes.func,
  isFullVersion: PropTypes.bool,
}