import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/Openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/movieSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch movie from TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`TMDB API error: ${response.status}`);
      }

      const json = await response.json();
      return json.results || [];
    } catch (err) {
      console.error("Error fetching movie from TMDB:", err);
      return [];
    }
  };

  // ✅ Implement Exponential Backoff for Rate Limits
  const fetchGPTResultsWithRetry = async (query, retries = 3, delay = 1000) => {
    try {
      return await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
    } catch (err) {
      if (err.response?.status === 429 && retries > 0) {
        console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchGPTResultsWithRetry(query, retries - 1, delay * 2);
      }
      throw err;
    }
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();

    if (!query) {
      setError("Please enter a search term!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      console.log("User Query:", query);

      const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query '${query}'. Only provide the names of 5 movies, comma-separated. Example: Gadar, DDLJ, BabySitter, Escape, Choose or Die`;

      const gptResults = await fetchGPTResultsWithRetry(gptQuery);

      if (!gptResults.choices || gptResults.choices.length === 0) {
        throw new Error("No GPT movie recommendations found.");
      }

      const gptMovies = gptResults.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());

      console.log("GPT Response Movies:", gptMovies);

      // ✅ Fetch TMDB details for each movie
      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      console.log("TMDB Results:", tmdbResults);

      // ✅ Dispatch results to Redux
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (err) {
      console.error("Error in GPT Search:", err);

      if (err.response?.status === 429) {
        setError(
          "OpenAI API rate limit exceeded! Please check your plan or try again later."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
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
          className={`col-span-3 m-4 py-2 px-4 text-white rounded-lg ${
            loading ? "bg-gray-500" : "bg-red-700"
          }`}
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Searching..." : lang?.[langKey]?.search || "Search"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default GptSearchBar;
