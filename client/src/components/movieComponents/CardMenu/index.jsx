import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function CardMenu({ children, onCardACtion }) {
  const [ anchorEl, setAnchorEl ] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ background: 'rgba(0, 0, 0, 0.3)', color: '#00b7ff' }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
            borderRadius: '10px',
          },
        }}
      >
        <MenuItem
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontSize: '14px',
            fontFamily: 'Helvetica',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiTouchRipple-root': {
              elevation: 24,
            },
            '&:hover': {
              borderRadius: '5px',
              margin: '0 7px',
            },
          }}
          onClick={onCardACtion}
        >
          {children}
        </MenuItem>
      </Menu>
    </>
  )
}