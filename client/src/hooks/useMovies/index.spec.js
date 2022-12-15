import { renderHook, act } from '@testing-library/react-hooks'
import useMovies from './useMovies'

describe('useMovies hook', () => {
  const movie = {
    id: 783432,
    title: 'movie title',
  }

  test('should select movie', () => {
    const { result } = renderHook(() => useMovies())
    act(() => {
      result.current.selectCard(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
  })

  test('should delete movie', () => {
    const { result } = renderHook(() => useMovies())
    act(() => {
      result.current.selectCard(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
    act(() => {
      result.current.deleteCard(movie)
    })
    expect(result.current.selectedMovies.length).toBe(0)
  })

  test('shouldn\'t equal movie again', () => {
    const { result } = renderHook(() => useMovies())
    act(() => {
      result.current.selectCard(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
    act(() => {
      result.current.selectCard(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
    expect(result.current.selectedMovies[0].id).toBe(movie.id)
  })
})