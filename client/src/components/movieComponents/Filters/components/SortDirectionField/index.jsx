import React from 'react'
import { Field } from 'react-final-form'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useTranslation } from 'react-i18next'

import { SORT_DIRECTION } from '../../../../../utils/variables'

function SortDirectionField() {
  const { t } = useTranslation()
  return (
    <Field
      name='sortDirection'
      type='radio'
      render={({ input }) => (
        <FormControl>
          <FormLabel id='sortDirection'>{t('filters.sortDirection')}</FormLabel>
          <RadioGroup
            row
            name='sortDirection'
            {...input}
            defaultValue={SORT_DIRECTION.DESC}
          >
            <FormControlLabel value={SORT_DIRECTION.ASC} control={<Radio />} label={t('filters.sortDirectionOptions.asc')} />
            <FormControlLabel value={SORT_DIRECTION.DESC} control={<Radio />} label={t('filters.sortDirectionOptions.desc')} />
          </RadioGroup>
        </FormControl>
      )}
    />
  )
}

export default SortDirectionField