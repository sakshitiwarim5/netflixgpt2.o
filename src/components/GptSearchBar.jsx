import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; // ✅ Import useDispatch
import lang from "../utils/languageConstants";
import { openai } from "../utils/Openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/movieSlice"; // ✅ Import the action

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch(); // ✅ Define dispatch
  const searchText = useRef(null);

  // ✅ Async function to search movies on TMDB
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      console.log(searchText.current.value);

      // ✅ Corrected GPT Query
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query '" +
        searchText.current.value +
        "' only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, DDLJ, BabySitter, Escape, Choose or Die";

      // ✅ Fetch GPT movie recommendations
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptResults.choices || !gptResults.choices.length) {
        console.error("No GPT movie recommendations found.");
        return;
      }

      console.log("GPT Response:", gptResults.choices?.[0]?.message?.content);

      // ✅ Extract movie names from GPT response
      const gptMovies = gptResults.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());

      // ✅ Fetch movie details from TMDB API for each movie name
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      // ✅ Wait for all API calls to complete
      const tmdbResults = await Promise.all(promiseArray);

      console.log("TMDB Results:", tmdbResults);

      // ✅ Dispatch the results to Redux store
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error in GPT Search:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder || "Search..."}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang?.[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
