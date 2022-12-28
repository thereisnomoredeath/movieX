import React from 'react'
import { Field } from 'react-final-form'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

function YearField() {
  const { t } = useTranslation()
  return (
    <Field
      name='year'
      render={({ input }) => (
        <TextField
          id='outlined-basic'
          size='small'
          label={t('filters.year')}
          variant='outlined'
          type='number'
          minvalue={1800}
          maxvalue={2030}
          {...input}
        />
      )}
    />
  )
}

export default YearField