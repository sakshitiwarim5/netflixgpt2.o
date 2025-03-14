import { useEffect } from "react";
import { addTrailerVideos } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //   const [trailerId, setTrailerId] = useState(null);
  const trailerVideos = useSelector((store) => store.movies.trailerVideos);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    !trailerVideos && getMovieVideos();
  });
};

export default useMovieTrailer;
