import Api from "../../services/Api";
import { LOADING, ERROR, LIST_GAMES, GET_GAME } from "./types";
import { ERROR_MESSAGE_TIMEOUT } from "../../utils/error";

export const getGames = (name) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.getGames({ name });

    dispatch({
      type: LIST_GAMES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};

export const getGame = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.getGame({ id });

    dispatch({
      type: GET_GAME,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};

export const addFavorite = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    await Api.addFavorite({ id });
    const { data } = await Api.getGame({ id });

    dispatch({
      type: GET_GAME,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};

export const removeFavorite = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    await Api.removeFavorite({ id });
    const { data } = await Api.getGame({ id });

    dispatch({
      type: GET_GAME,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};
