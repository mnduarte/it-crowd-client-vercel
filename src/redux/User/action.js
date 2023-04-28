import Api from "../../services/Api";
import { LOADING, ERROR, GET_USER } from "./types";
import { ERROR_MESSAGE_TIMEOUT } from "../../utils/error";
import { TOKEN } from "../../constants/global.contant";

export const login = () => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.login();

    return localStorage.setItem(TOKEN, data.token);
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { loading: true },
  });
  try {
    const { data } = await Api.getUser();

    dispatch({
      type: GET_USER,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: ERROR_MESSAGE_TIMEOUT,
    });
  }
};
