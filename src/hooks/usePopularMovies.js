import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { dataPopularMovies } from "../data/dataPopularMovies";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        GET_API_OPTIONS
      );
      if (res?.status !== 200) {
        dispatch(addPopularMovies(dataPopularMovies?.results));
      } else {
        const json = await res?.json();
        dispatch(addPopularMovies(json?.results));
      }
    } catch (error) {
      dispatch(addPopularMovies(dataPopularMovies?.results));
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
