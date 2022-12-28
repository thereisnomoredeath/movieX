import React from 'react'
import { Field } from 'react-final-form'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useTranslation } from 'react-i18next'

function AdultField() {
  const { t } = useTranslation()
  return (
    <Field
      name='includeAdult'
      type='checkbox'
      render={({ input }) => (
        <FormControlLabel control={<Checkbox {...input} />} label={t('filters.includeAdult')} />
      )}
    />
  )
}

export default AdultField