import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <p>Loading movies...</p>; // Display a fallback UI while data is being fetched
  }

  const mainMovies = movies[0];
  const { original_title, overview } = mainMovies;
  console.log("Movies in Redux Store:", movies);

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={mainMovies.id} />
    </div>
  );
};

export default MainContainer;
