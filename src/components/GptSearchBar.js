import React, { useRef } from "react";
import { gemini } from "../utils/gemini";

const GptSearchBar = () => {
  const searchTextRef = useRef(null);
  const handleGptSearchClick = async () => {
    const searchText = searchTextRef?.current?.value;
    const query =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText +
      ". Only give me names of 5 movies, comma seperated like the example result give ahead. Example result: Gabbar,Sholay,Don,Intersteller,SpiderMan No Way Home";
    const movieResult = await gemini(query);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today ?"
          ref={searchTextRef}
        />
        <button
          className=" p-4 m-4 cursor-pointer col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
