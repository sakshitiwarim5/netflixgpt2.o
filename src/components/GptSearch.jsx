import React from "react";
import { BG_URL } from "../utils/constant";
import GptSearchBar from "./GptSearchBar"; // ✅ Fix: Remove curly braces
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 min-h-screen bg-cover bg-center">
        <img src={BG_URL} alt="bg"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
