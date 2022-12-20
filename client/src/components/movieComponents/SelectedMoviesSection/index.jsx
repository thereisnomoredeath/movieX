import React, { Suspense } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import SelectedIcon from '../../../images/SelectedIcon.svg'
import SelectedMoviesForm from '../SelectedMoviesForm'
import MovieCardSelected from '../MovieCardSelected'
import ConfirmModal from '../../ConfirmModal'
import '../../../utils/i18n'
import Loading from '../Loading'

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
  const { t } = useTranslation()
  const [ link, setLink ] = React.useState('')
  const [ listName, setListName ] = React.useState('')
  const onSubmit = ({ listName }) => {
    const ids = selectedMovies.map(({ id }) => id)
    const link = `${window.location.host}/recommend?title=${listName.split(' ').join('_')}&ids=${ids.join()}`
    setLink(link)
    setListName(listName)
  }

  const onCloseConfirmModal = () => {
    setLink('')
  }

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
          <Suspense fallback={Loading}>
            <Typography variant='h4' mt={2}>
              {t('selectedMoviesSectionTitle')}
            </Typography>
          </Suspense>
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
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
      <ConfirmModal open={!!link} url={link} title={listName} onClose={onCloseConfirmModal} />
    </SelectedMovies>
  )
}

export default SelectedMoviesSection
