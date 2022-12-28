import React from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'

function SubmitField() {
  const { t } = useTranslation()
  return (
    <Button variant='outlined' type='submit' size='small'>
      {t('filters.submit')}
    </Button>
  )
}

export default SubmitField