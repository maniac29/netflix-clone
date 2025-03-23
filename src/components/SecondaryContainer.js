import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store?.movies?.upcomingMovies);

  return (
    <div className='bg-black'>
      <div className='-mt-72 relative z-10 w-full overflow-x-hidden'>
      <MovieList title = {"Now Playing"} movies={nowPlayingMovies}/>
      <MovieList title = {"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title = {"Upcoming Movies"} movies={upcomingMovies}/>
      <MovieList title = {"Popular Movies"} movies={popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
