import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Added useSelector
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice"; // ✅ Correct action import

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1", // ✅ Added pagination
        API_OPTIONS
      );

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    // ✅ Check if movies array is empty, not just falsy
    if (!popularMovies?.length) getPopularMovies();
  }, [dispatch, popularMovies?.length]);

  return null;
};

export default usePopularMovies;
