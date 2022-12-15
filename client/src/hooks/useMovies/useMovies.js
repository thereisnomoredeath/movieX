import React from 'react'

const useMovies = () => {
  const [ selectedMovies, setSelected ] = React.useState([])

  const selectCard = (movie) => {
    if (!(selectedMovies.find((el) => (el.id === movie.id)))) { setSelected([ ...selectedMovies, movie ]) }
  }

  const deleteCard = (movie) => {
    if (selectedMovies.length) setSelected(selectedMovies.filter((el) => el.id !== movie.id))
  }

  return {
    selectCard,
    deleteCard,
    selectedMovies,
  }
}

export default useMovies