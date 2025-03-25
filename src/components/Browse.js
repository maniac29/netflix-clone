import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSeearch from "./GptSeearch";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.js";
import { loadLoader } from "../utils/loaderSlice.js";

const Browse = () => {
  const showGptScreen = useSelector((store) => store?.gpt?.showGptScreen);
  const showLoader = useSelector((store) => store?.loader?.showLoader);
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  const dispatch = useDispatch();
  //dispatch(loadLoader(true));
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  //dispatch(loadLoader(false));

  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      {showGptScreen ? (
        <GptSeearch />
      ) : movies !== null ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Browse;
