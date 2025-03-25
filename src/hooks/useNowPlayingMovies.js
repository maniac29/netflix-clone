import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { dataNowPlayingMovies } from "../data/dataNowPlayingMovies";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      
      try {
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US",GET_API_OPTIONS);
        if(res?.status !== 200){
          dispatch(addNowPlayingMovies(dataNowPlayingMovies?.results));
        }else{
          const json = await res?.json();
          dispatch(addNowPlayingMovies(json?.results));
        }
      } catch (error) {
        dispatch(addNowPlayingMovies(dataNowPlayingMovies?.results));
      }
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
};

export default useNowPlayingMovies;