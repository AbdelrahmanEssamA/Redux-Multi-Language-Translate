import { SET_LANGUAGE, SET_TRANSLATION } from "./actionTypes";

export const setLanguage = (data) => async (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: data,
  });
};
