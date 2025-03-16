import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {

  const store = useSelector(store => store?.movies?.nowPlayingMovies)
  return (
    <div className='bg-black'>
      <div className='-mt-80 pl-12 relative z-10'>
      <MovieList title = {"Now Playing"} movies={store}/>
      <MovieList title = {"Trending"} movies={store}/>
      <MovieList title = {"Action"} movies={store}/>
      <MovieList title = {"Romantic"} movies={store}/>
      <MovieList title = {"Thriller"} movies={store}/>
      <MovieList title = {"People's Choice"} movies={store}/>
      <MovieList title = {"Horror"} movies={store}/>
      <MovieList title = {"Sports"} movies={store}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
