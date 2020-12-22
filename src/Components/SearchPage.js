import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStateValue } from "../Context/GlobalStateProvider";
import MovieCard from "./MovieCard";
import "./SearchPage.css";
const SearchPage = () => {
  const [state, ] = useGlobalStateValue();
  return (
    <div className="Search">
      {state.movies?.map((movie, index) => {
        return (
          <Link
            to={{
              pathname: `/MovieDetails/${movie.id}`,
            }}
            key={movie.id}
            className="Search__movieinfo"
          >
            <MovieCard {...movie} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
