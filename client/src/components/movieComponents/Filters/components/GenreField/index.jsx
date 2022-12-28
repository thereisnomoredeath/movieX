import React from 'react'
import { Field } from 'react-final-form'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useTranslation } from 'react-i18next'

function GenreField({ data }) {
  const { t } = useTranslation()
  return (
    <Field
      name='genre'
      render={({ input }) => (
        <FormControl sx={{ m: 1, minWidth: 135 }} size='small'>
          <InputLabel id='demo-simple-select-label'>{t('filters.sortBy')}</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            autoWidth
            label={t('filters.sortBy')}
            {...input}
          >
            {data.genres.map(({ name, id }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export default GenreField