import React from 'react'
import { Field } from 'react-final-form'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useTranslation } from 'react-i18next'

import { SORT_OPTIONS } from '../../../../../utils/variables'

function SortField() {
  const { t } = useTranslation()
  return (
    <Field
      name='sortBy'
      render={({ input }) => (
        <FormControl sx={{ m: 1, minWidth: 135 }} size='small'>
          <InputLabel id='demo-select-small'>{t('filters.sortBy')}</InputLabel>
          <Select
            labelId='demo-select-small'
            id='demo-select-small'
            autoWidth
            label={t('filters.sortBy')}
            {...input}
          >
            {SORT_OPTIONS.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {t(`filters.sort.${label}`)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export default SortField