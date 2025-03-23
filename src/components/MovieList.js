import React, { useRef } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const sideScrollRef = useRef(null);
  const scrollScreen = (scrollOffSet) => {
    if (sideScrollRef.current) {
      sideScrollRef.current.scrollLeft += scrollOffSet;
    }
  };
  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 text-white flex items-center justify-between">
        {title}{" "}
        <div>
          <span
            className="text-white cursor-pointer"
            onClick={()=>scrollScreen(-100)}
          >
            {"<"}
          </span>
          <span
            className="text-white ml-4 cursor-pointer"
            onClick={()=>scrollScreen(100)}
          >
            {">"}
          </span>
        </div>{" "}
      </h1>
      <div className="flex overflow-x-hidden" ref={sideScrollRef}>
        <div className="flex">
          {movies?.map((item, ind) => {
            return <MovieCard key={item?.id} posterPath={item?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
