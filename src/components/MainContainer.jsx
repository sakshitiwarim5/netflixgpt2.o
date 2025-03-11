import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movie || movie.length === 0) {
    return <p>Loading movies...</p>; // Display a fallback UI while data is being fetched
  }

  const mainMovie = movie[0];
//   console.log(mainMovie);
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
