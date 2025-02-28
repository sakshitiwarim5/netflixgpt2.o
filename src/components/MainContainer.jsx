import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <p>Loading movies...</p>; // Display a fallback UI while data is being fetched
  }

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
