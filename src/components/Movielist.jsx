import MovieCard from "./MovieCard";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Movielist = ({ title, movies = [] }) => {
  // ✅ Renamed prop to "movies" and added default value
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (movies.length === 0) return null; // ✅ Early return if no movies

  return (
    <div className="px-6 relative group">
      <h1 className="text-lg md:text-3xl py-4 text-white font-semibold">
        {title}
      </h1>

      {/* Scroll buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        onClick={() => scroll("left")}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Movie list */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-2"
        >
          {movies.map((movies) => (
            <MovieCard
              key={movies.id}
              posterPath={movies.poster_path}
              title={movies.title} // ✅ Added fallback props
            />
          ))}
        </div>
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        onClick={() => scroll("right")}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Movielist;
