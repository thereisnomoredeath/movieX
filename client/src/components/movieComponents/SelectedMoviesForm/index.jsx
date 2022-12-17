import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import { Form, Field } from 'react-final-form'

function SelectedMoviesForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {}

        if (!values.listName) {
          errors.listName = 'Required'
        }

        return errors
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
            <Field
              name='listName'
              render={({ input }) => (
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder='Put the list name'
                  inputProps={{ 'aria-label': 'put list name' }}
                  {...input}
                />
              )}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton type='submit' color='primary' sx={{ p: '10px' }} aria-label='directions'>
              <CheckIcon htmlColor='#00b7ff' />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  )
}

export default SelectedMoviesForm