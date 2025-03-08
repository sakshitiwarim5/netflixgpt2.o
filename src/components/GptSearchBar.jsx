import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants"; // Import lang if stored in a separate file

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder || "Search..."} // Handle undefined case
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={() => console.log("Search clicked")} // Temporary function
        >
          {lang?.[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
