import { ADD_RECIPE, DELETE_RECIPE, SET_RECIPE } from "../constant/actions";

export const setRecipe = (payload) => {
  return {
    type: SET_RECIPE,
    payload,
  };
};

export const addRecipe = (payload) => {
  return {
    type: ADD_RECIPE,
    payload,
  };
};

export const deleteRecipe = (payload) => {
  return {
    type: DELETE_RECIPE,
    payload,
  };
};
