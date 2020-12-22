import React, { createContext, useContext } from "react";
import { useGlobalStateValue } from "./GlobalStateProvider";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [state] = useGlobalStateValue();
  const API_KEY = "cfe422613b250f702980a3bbf9e90716";
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
  const TRENDING_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const ACTION_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2020&with_genres=28%7C12`;
  const COMEDY_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2020&with_genres=35%7C10749`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${state.query}&page=${state.pageNumber}`;
  const value = {
    API_KEY: API_KEY,
    FEATURED_API: FEATURED_API,
    TRENDING_API: TRENDING_API,
    ACTION_API: ACTION_API,
    COMEDY_API: COMEDY_API,
    SEARCH_API: SEARCH_API,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiValue = () => useContext(ApiContext);
