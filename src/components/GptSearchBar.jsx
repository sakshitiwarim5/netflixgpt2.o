import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/Openai"; // Properly initialized OpenAI client
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/movieSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json.results || [];
    } catch (err) {
      console.error("TMDB Search Error:", err);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    setError(null);
    const query = searchText.current?.value?.trim();

    if (!query) {
      setError(
        lang[langKey]?.searchPlaceholder || "Please enter a search query"
      );
      return;
    }

    try {
      setIsLoading(true);

      // GPT-3.5 Turbo API Call
      const gptResults = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Act as a movie recommendation system. Suggest 5 movies for "${query}". 
                    Return only comma-separated names. Example format: Movie1,Movie2,Movie3`,
          },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 100,
      });

      // Validate GPT response
      if (!gptResults?.choices?.[0]?.message?.content) {
        throw new Error("Invalid response structure from GPT API");
      }

      // Process movies
      const gptMovies = gptResults.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim())
        .filter((movie) => movie.length > 0);

      if (gptMovies.length === 0) {
        throw new Error("No movies found in GPT response");
      }

      // Parallel TMDB searches
      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      // Filter out empty results
      const validResults = tmdbResults.filter((results) => results?.length > 0);

      if (validResults.length === 0) {
        throw new Error("No matching movies found on TMDB");
      }

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("GPT Search Error:", error);
      setError(error.message || "Failed to fetch movie recommendations");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={
            lang[langKey]?.gptSearchPlaceholder ||
            "What would you like to watch today?"
          }
          aria-label="Movie search input"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading
            ? lang[langKey]?.searching || "Searching..."
            : lang[langKey]?.search || "Search"}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {lang[langKey]?.errorMessage || "Error:"} {error}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
