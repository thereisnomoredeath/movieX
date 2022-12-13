import React from 'react'

const useMovies = () => {
  const [ selectedMovies, setSelected ] = React.useState([])

  const selectCard = React.useCallback((movie) => {
    if (!(selectedMovies.find((el) => (el.id === movie.id)))) { setSelected([ ...selectedMovies, movie ]) }
  }, [ selectedMovies ])

  const deleteCard = React.useCallback((movie) => {
    if (selectedMovies.length) setSelected(selectedMovies.filter((el) => el.id !== movie.id))
  }, [ selectedMovies ])

  return {
    selectCard,
    deleteCard,
    selectedMovies,
  }
}

export default useMovies