import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { dataTopRated } from "../data/dataTopRated";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const res = await fetch("https://api.themoviedb.org/3/movie/top_rated",GET_API_OPTIONS);
      if(res?.status !== 200){
        dispatch(addTopRatedMovies(dataTopRated?.results));
      }else{
        const json = await res?.json();
        dispatch(addTopRatedMovies(json?.results));
      }
    }
  
    useEffect(()=>{
        getTopRatedMovies();
    },[])
};

export default useTopRatedMovies;