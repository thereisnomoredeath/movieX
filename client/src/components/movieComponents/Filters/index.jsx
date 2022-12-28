import React from 'react'
import { Form } from 'react-final-form'
import Box from '@mui/material/Box'
import { useQuery } from '@apollo/client'
import Loading from '../Loading'
import {
  ResetButton, YearField, ReleaseYearField, GenreField, SortField, AdultField, SubmitField, SortDirectionField,
} from './components'
import GENRES_QUERY from './quiery'

const wrapper = {
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 430px) and (orientation: portrait)': {
    flexFlow: 'column wrap',
  },
}

const year = {
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 430px) and (orientation: portrait)': {
    width: '85%',
    margin: '10px 0 0 0',
  },
}

const sort = {
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 430px) and (orientation: portrait)': {
    width: '90%',
    margin: '5px 0 0 0',
  },
}

const other = {
  display: 'flex',
  '@media (max-width: 430px) and (orientation: portrait)': {
    direction: 'row',
    width: '90%',
    margin: '5px 0 10px 0',
    paddingLeft: '12px',
  },
}

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
            <Box sx={wrapper}>
              <Box mr={3} ml={3} sx={year}>
                <Box mb={1.5}>
                  <YearField />
                </Box>
                <ReleaseYearField />
              </Box>
              <Box mr={3} sx={sort}>
                <GenreField data={data} />
                <SortField />
              </Box>
              <Box sx={other}>
                <Box sx={{ marginTop: 2 }}><SortDirectionField /></Box>
                <Box pb={1} ml={3} mr={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <AdultField />
                  <Box mb={1}><SubmitField /></Box>
                  <ResetButton pristine={pristine} form={form} />
                </Box>
              </Box>
            </Box>
          </form>
        )}
      />
    </div>
  )
}

export default Filters