import { LOADING, ERROR, GET_USER } from "./types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  user: null,
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
    case GET_USER:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
