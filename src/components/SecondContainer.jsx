import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          {" "}
          {/* Adjusted margin */}
          <Movielist title={"Now Playing.."} movies={movies.nowPlayingMovies} />
          <Movielist title={"Trending"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Popular.."} movies={movies.popularMovies} />
          <Movielist
            title={"Upcoming Movies.."}
            movies={movies.nowPlayingMovies}
          />
          <Movielist title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
