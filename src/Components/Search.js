import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalStateValue } from "../Context/GlobalStateProvider";
import { useApiValue } from "../Context/ApiProvider";
import "./Search.css";
const Search = () => {
  const [state, dispatch] = useGlobalStateValue();
  const { SEARCH_API } = useApiValue();
  useEffect(() => {
    if (state.query) {
      fetch(SEARCH_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          dispatch({
            type: "LOAD_SEARCH_MOVIES",
            movies: data.results,
          });
        });
    }
  }, [state.query, SEARCH_API, dispatch]);

  let history = useHistory();
  const searchHandler = (e) => {
    e.target.value ? history.push("/search") : history.push("/");
    dispatch({
      type: "SET_SEARCH_QUERY",
      query: e.target.value,
    });
  };
  return (
    <div className="Search">
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Type to search..."
        value={state.query}
      />
    </div>
  );
};

export default Search;
