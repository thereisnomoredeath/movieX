import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
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
    height: '40%',
    boxShadow: 24,
    p: 4,
  },

}

export default function ConfirmModal({
  movie, open, closeModal, loading, data,
}) {
  return (
    <Loading loading={loading} />
    && (
    <Modal
      open={open}
      onClose={() => closeModal(false)}
    >
      <Box sx={style}>
        <Paper
          elevation={3}
          component='form'
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
          }}
        >
          {data && (
          <div>
            {data.id}
          </div>
          )}
          {movie.id}
        </Paper>
      </Box>
    </Modal>
    )
  )
}