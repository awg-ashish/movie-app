export const initialState = {
  query: "",
  movies: [],
  pageNumber: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_SEARCH_MOVIES":
      return {
        ...state,
        movies: action.movies,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default reducer;
