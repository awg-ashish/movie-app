import { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Search from "./Components/Search";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import { useApiValue } from "./Context/ApiProvider";
function App() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const { FEATURED_API, TRENDING_API, ACTION_API, COMEDY_API } = useApiValue();
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data.results);
      });
    fetch(TRENDING_API)
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.results);
      });
    fetch(ACTION_API)
      .then((res) => res.json())
      .then((data) => {
        setActionMovies(data.results);
      });
    fetch(COMEDY_API)
      .then((res) => res.json())
      .then((data) => {
        setComedyMovies(data.results);
      });
  }, [ACTION_API, COMEDY_API, FEATURED_API, TRENDING_API]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App__header">
              <h1 className="App__title">Movies App</h1>
              <h3 className="App__tagline">Powered By The Movie DB</h3>
              <Search />
            </div>
            <h2 className="App__subtitle">Top 10 Trending</h2>
            <div className="App__movielist">
              {featuredMovies?.slice(0, 10).map((movie, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/MovieDetails/${movie.id}`,
                    }}
                    key={movie.id}
                    className="App__movieinfo"
                  >
                    <MovieCard {...movie} />
                  </Link>
                );
              })}
              <Link to="/trending" className="App__viewmore">
                View More
              </Link>
            </div>
            <h2 className="App__subtitle">Trending This Week</h2>
            <div className="App__movielist">
              {trendingMovies?.slice(0, 10).map((movie, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/MovieDetails/${movie.id}`,
                    }}
                    key={movie.id}
                    className="App__movieinfo"
                  >
                    <MovieCard {...movie} />
                  </Link>
                );
              })}
              <Link to="/trending" className="App__viewmore">
                View More
              </Link>
            </div>
            <h2 className="App__subtitle">Action And Adventure</h2>
            <div className="App__movielist">
              {actionMovies?.slice(0, 10).map((movie, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/MovieDetails/${movie.id}`,
                    }}
                    key={movie.id}
                    className="App__movieinfo"
                  >
                    <MovieCard {...movie} />
                  </Link>
                );
              })}
              <Link to="/action-adventure" className="App__viewmore">
                View More
              </Link>
            </div>
            <h2 className="App__subtitle">Comedy And Romance</h2>
            <div className="App__movielist">
              {comedyMovies?.slice(0, 10).map((movie, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/MovieDetails/${movie.id}`,
                    }}
                    key={movie.id}
                    className="App__movieinfo"
                  >
                    <MovieCard {...movie} />
                  </Link>
                );
              })}
              <Link to="/comedy-romance" className="App__viewmore">
                View More
              </Link>
            </div>
            <div className="App__bgcover"></div>
            <div className="App__overlay"></div>
          </Route>
          <Route exact path="/search">
            <div className="App__header">
              <h1 className="App__title">Movies App</h1>
              <h3 className="App__tagline">Powered By The Movie DB</h3>
              <Search />
            </div>
            <h2 className="App__subtitle">Search Results</h2>
            <div className="App__bgcover"></div>
            <div className="App__overlay"></div>
            <SearchPage />
          </Route>
          <Route path="/MovieDetails/" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
