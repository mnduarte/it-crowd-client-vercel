import { LOADING, ERROR, LIST_GAMES, GET_GAME } from "./types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  games: [],
  game: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LIST_GAMES:
      return {
        ...state,
        loading: false,
        error: null,
        games: action.payload,
      };
    case GET_GAME:
      return {
        ...state,
        loading: false,
        error: null,
        game: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
