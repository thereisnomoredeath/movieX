import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Loading from '../movieComponents/Loading'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#201f1f',
  boxShadow: 27,
  p: 4,
  borderRadius: '7px',

  '@media (max-width: 430px) and (orientation: portrait)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    height: '80%',
    boxShadow: 24,
    p: 4,
  },

}

export default function ConfirmModal({
  open, closeModal, loading, data,
}) {
  const { t } = useTranslation()
  return (
    <Loading loading={loading} />
    && (
    <Modal
      open={open}
      onClose={() => closeModal(!open)}
    >
      <Box sx={style}>
        <Paper
          elevation={3}
          component='form'
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
          }}
        >
          <Box p={2}>
            <Typography variant='subtitle2'>
              <span style={{ color: '#00b7ff' }}>{t('overview')}</span>
              {' '}
              {data && data.overview}
            </Typography>
            <Typography pt={1} variant='subtitle2'>
              <span style={{ color: '#00b7ff' }}>{t('tagline')}</span>
              {' '}
              {data && data.tagline}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Modal>
    )
  )
}