<<<<<<< HEAD
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <Movielist
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestion;
=======
import React from 'react'

const GptMovieSuggestion = () => {
  return (
    <div>GptMovieSuggestion</div>
  )
}

export default GptMovieSuggestion
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b
