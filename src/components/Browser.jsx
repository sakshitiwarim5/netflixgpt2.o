import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  // Renamed from "Browser" to "Browse" (common convention)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Fetch data ONLY when GPT search is inactive
  useNowPlayingMovies(!showGptSearch);
  usePopularMovies(!showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
