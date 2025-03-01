import MovieCard from "./MovieCard";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  // Function to scroll left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the container width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 relative group">
      {/* Section Title */}
      <h1 className="text-lg md:text-3xl py-4 text-white font-semibold">
        {title}
      </h1>

      {/* Left Scroll Button (Appears only on hover) */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        onClick={() => scroll("left")}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Movie List Container (No scrollbar visible) */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-2"
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>

      {/* Right Scroll Button (Appears only on hover) */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        onClick={() => scroll("right")}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Gradient Fade Effect on Both Sides */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default MovieList;
