import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    movie.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          {" "}
          {/* Adjusted margin */}
          <Movielist title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <Movielist title={"Trending"} movies={movie.nowPlayingMovies} />
          <Movielist title={"Popular.."} movies={movie.popularMovies} />
          <Movielist
            title={"Upcoming Movies.."}
            movies={movie.nowPlayingMovies}
          />
          <Movielist title={"Horror"} movies={movie.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
