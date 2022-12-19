import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CheckIcon from '@mui/icons-material/Check'
import { SocialIcon } from 'react-social-icons'

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
  open, title, url, onClose,
}) {
  const [ buttonColor, setButtonColor ] = React.useState(false)
  const reset = () => {
    setButtonColor(false)
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={reset}
    >
      <Box sx={style}>
        <Typography sx={{ mb: '5px', color: '#FFF' }} variant='h5' component='h2'>
          {title}
          :
        </Typography>
        <Paper
          elevation={24}
          component='form'
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
          }}
        >
          <InputBase
            sx={{
              ml: 1, flex: 1, fontSize: '15px', height: '20px', p: '2px 0',
            }}
            defaultValue={url}
            autoFocus
          />
          <CopyToClipboard text={url} onCopy={(text, result) => setButtonColor(result)}>
            <IconButton type='button' sx={{ p: '10px', ml: '10px' }} aria-label='preview'>
              { buttonColor
                ? (<CheckIcon sx={{ fontSize: '1.4rem' }} htmlColor='#00FF7F' />)
                : (<ContentCutIcon sx={{ fontSize: '1.4rem' }} htmlColor='#00b7ff' />)}
            </IconButton>
          </CopyToClipboard>
          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
          <IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'>
            <VisibilityIcon sx={{ fontSize: '1.4rem' }} htmlColor='#FFF' />
          </IconButton>
        </Paper>
        <Box sx={{
          width: '100%', display: 'flex-inline', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Typography sx={{ mt: '15px', color: '#AFCA75' }} variant='h5'>
            Share width friends:
          </Typography>
          <SocialIcon
            style={{ height: 25, width: 25, margin: '10px 0' }}
            url={`https://telegram.me/share/url?url=http://${url}`}
            network='telegram'
          />
        </Box>
      </Box>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}