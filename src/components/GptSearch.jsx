import React from "react";
import { BG_URL } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
<<<<<<< HEAD
        className="fixed inset-0 -z-10 bg-cover bg-center"
=======
        className="absolute inset-0 -z-10 bg-cover bg-center"
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b
        style={{
          backgroundImage: `url(${BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Main Content */}
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
