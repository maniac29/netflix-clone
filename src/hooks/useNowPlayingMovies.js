import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US",GET_API_OPTIONS);
      const json = await res.json();
      dispatch(addNowPlayingMovies(json?.results));
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
};

export default useNowPlayingMovies;