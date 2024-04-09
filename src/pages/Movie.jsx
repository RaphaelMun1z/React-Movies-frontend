import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import MovieDetails from '../components/MovieDetails'

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <>
      {movie && (
        <MovieDetails movie={movie} />
      )}
    </>
  )
}

export default Movie