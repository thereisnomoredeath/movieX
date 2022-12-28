import React from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

function ResetButton({ form, pristine }) {
  const { t } = useTranslation()
  return (
    <Button
      onClick={form.reset}
      disabled={pristine}
      variant='outlined'
      type='reset'
      size='small'
    >
      {t('filters.reset')}
    </Button>
  )
}

export default ResetButton