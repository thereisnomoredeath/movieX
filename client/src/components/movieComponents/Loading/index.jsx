import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export default function Loading({ loading }) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <InfinitySpin
          width='200'
          color='#00b7ff'
        />
      </Box>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool,
}

Loading.defaultProps = {
  loading: false,
}