import React from 'react'
import { Form } from 'react-final-form'
import Box from '@mui/material/Box'
import { useQuery } from '@apollo/client'
import Loading from '../Loading'
import {
  YearField, ReleaseYearField, GenreField, SortField, AdultField, SubmitField, SortDirectionField,
} from './components'
import GENRES_QUERY from './quiery'
import ResetButton from './components/ResetButton'

function Filters({ onSubmit, initialValues }) {
  const { loading, data } = useQuery(GENRES_QUERY, { onError: (error) => console.log(error) }) // eslint-disable-line

  if (loading) return (<Loading loading={loading} />)

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({
          handleSubmit, pristine, form,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <YearField />
                </Box>
                <Box mr={3}>
                  <ReleaseYearField />
                </Box>
                <Box mr={3}>
                  <GenreField data={data} />
                </Box>
                <AdultField />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <SortField />
                </Box>
                <SortDirectionField />
              </Box>
            </Box>
            <Box>
              <SubmitField />
            </Box>
            <Box>
              <ResetButton pristine={pristine} form={form} />
            </Box>
          </form>
        )}
      />
    </div>
  )
}

export default Filters