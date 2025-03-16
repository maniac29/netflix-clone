import { useDispatch } from "react-redux";
import { GET_API_OPTIONS } from "../utils/constant";
import { addTrailerDetails } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        GET_API_OPTIONS
      );
      const json = await data.json();
      if (!!!json?.results) return;
      const trailers = json.results.filter((item) => item?.type === "Trailer");
      const viewTrailer = trailers.lenth > 0 ? trailers[0] : json.results[0];
      dispatch(addTrailerDetails(viewTrailer));
    };
    useEffect(() => {
      getMovieTrailer();
    }, []);
}
export default useMovieTrailer;