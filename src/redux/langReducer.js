import { SET_LANGUAGE } from "./actionTypes";
import translationEn from "../translation/en";
import translationAr from "../translation/ar";

const localStorageLang = localStorage.getItem("language");
const initialstate = {
  language: localStorageLang ? localStorageLang : "EN",
  translation: localStorageLang === "EN" ? translationEn : translationAr,
};

const langReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", payload);
      return {
        ...state,
        language: payload,
        translation: payload === "EN" ? translationEn : translationAr,
      };
    default:
      return state;
  }
};

export default langReducer;
