import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { dataUpcomingMovies } from "../data/dataUpcomingMovie";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        GET_API_OPTIONS
      );
      if (res?.status !== 200) {
        dispatch(addUpcomingMovies(dataUpcomingMovies?.results));
      } else {
        const json = await res?.json();
        dispatch(addUpcomingMovies(json?.results));
      }
    } catch (error) {
      dispatch(addUpcomingMovies(dataUpcomingMovies?.results));
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
