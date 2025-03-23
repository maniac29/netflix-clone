import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const MovieBackground = ({ movieId }) => {
    const trailerDetails = useSelector(store => store?.movies?.trailerDetails);
    useMovieTrailer(movieId);
  return (
    <div className="max-w-full overflow-x-hidden">
      <iframe
      className="w-full overflow-x-hidden aspect-video"
        src={"https://www.youtube.com/embed/" + trailerDetails?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MovieBackground;
