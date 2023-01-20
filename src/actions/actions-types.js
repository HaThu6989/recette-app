import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SET_RECIPE } from "../constant/actions";
import { ADD_CHEF, DELETE_CHEF, SET_CHEF } from "../constant/actions";

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


export const editRecipe = (payload) => {
  return {
    type: EDIT_RECIPE,
    payload,
  };
};

export const setChef = (payload) => {
  return {
    type: SET_CHEF,
    payload,
  };
};

export const addChef = (payload) => {
  return {
    type: ADD_CHEF,
    payload,
  };
};

export const deleteChef = (payload) => {
  return {
    type: DELETE_CHEF,
    payload,
  };
};
