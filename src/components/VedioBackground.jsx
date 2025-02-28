import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const VedioBackground = ({ movieId }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/950396/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getMovieVideos();
  });
  return <div>VedioBackground</div>;
};

export default VedioBackground;
