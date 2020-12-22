import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./MovieDetails.css";
import { useGlobalStateValue } from "../Context/GlobalStateProvider";

const MovieDetails = ({ location: { pathname } }) => {
  const URISplit = pathname.split("/");
  const movieId = URISplit[URISplit.length - 1];
  const [movieDetails, setMovieDetails] = useState({});
  const [, dispatch] = useGlobalStateValue();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bd88dff8594d65f5947365e0cf5e3ec2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetails(data);
      });
  }, [movieId]);
  let history = useHistory();
  const handleBack = () => {
    history.go(-1);
  };
  const handleHome = () => {
    dispatch({
      type: "SET_SEARCH_QUERY",
      query: "",
    });
    history.push("/");
  };
  let color;
  if (movieDetails.vote_average < 5) color = "salmon";
  else if (movieDetails.vote_average < 7.5) color = "orange";
  else color = "lightgreen";
  return (
    <div className="movieDetails">
      <div
        className="movieDetails__bg-image"
        style={{
          backgroundImage: `url(
          https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}
        )`,
        }}
      ></div>
      <div className="movieDetails__overlay"></div>
      <div className="movieDetails__container">
        <div className="movieDetails__imgcontainer">
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt=""
          />
        </div>
        <div className="movieDetails__textcontainer">
          <div className="movieDetails__textcontainer__heading">
            <h1>{movieDetails.title}</h1>
            <h3>{movieDetails.tagline}</h3>
          </div>

          <p className="movieDetails__textcontainer__overview">
            {movieDetails.overview}
          </p>
          <p className="movieDetails__textcontainer__genre">
            {movieDetails.genres?.map((genre) => genre.name).join(", ")}
          </p>
          <div className="movieDetails__textcontainer__otherDetails">
            <p>
              <span className="movieDetails__textcontainer__otherDetails__label">
                Running Time
              </span>
              <br />
              <span className="movieDetails__textcontainer__otherDetails__info">
                {movieDetails.runtime} min
              </span>
            </p>
            <p>
              <span className="movieDetails__textcontainer__otherDetails__label">
                Release Date
              </span>
              <br />
              <span className="movieDetails__textcontainer__otherDetails__info">
                {movieDetails.release_date}
              </span>
            </p>
            <p>
              <span className="movieDetails__textcontainer__otherDetails__label">
                Rating
              </span>
              <br />
              <span
                className="movieDetails__textcontainer__otherDetails__info"
                style={{
                  backgroundColor: `${color}`,
                  borderRadius: "3px",
                  padding: "0 7px",
                  color: "black",
                }}
              >
                {movieDetails.vote_average}/10
              </span>
            </p>
          </div>
          <div className="movieDetails__textcontainer__linkcontainer">
            <Link
              to=""
              className="movieDetails__textcontainer__links"
              onClick={handleHome}
            >
              Home
            </Link>
            &nbsp;&nbsp;
            <Link
              onClick={handleBack}
              to=""
              className="movieDetails__textcontainer__links"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
