import React from 'react'
import { SORT_DIRECTION } from '../../utils/variables'

const useFilters = () => {
  const [ filter, setFilterFields ] = React.useState({
    page: 1,
    sortBy: 'popularity',
    sortDirection: SORT_DIRECTION.DESC,
    includeAdult: false,
  })

  const setFilters = (filterFields) => {
    setFilterFields({
      ...filter,
      ...filterFields,
      year: filterFields.year && +filterFields.year,
      primaryReleaseYear: filterFields.primaryReleaseYear && +filterFields.primaryReleaseYear,
    })
  }

  const setPage = (page) => {
    setFilterFields({ ...filter, page })
  }

  return {
    filter,
    setPage,
    setFilters,
  }
}

export default useFilters