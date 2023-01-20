import { ADD_RECIPE, DELETE_RECIPE, SET_RECIPE } from "../constant/actions";

let stateInit = {
  recipes: ["Ratatouille", "Gateau", "Pizza"],
  count: 3,
  recipe: "",
  message: "",
};

let recipeReducer = (state = stateInit, action = {}) => {
  const { recipes, recipe, count } = state;
  switch (action.type) {
    case SET_RECIPE:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };

    case ADD_RECIPE:
      if (recipe.trim() === "") {
        return { ...state, message: "Vous avez oublié le nom de votre recipe" };
      }
      if (recipes.includes(recipe)) {
        return { ...state, message: `Le recipe ${recipe} existe déjà` };
      }
      return {
        ...state,
        recipes: recipes.concat(recipe),
        message: `Merci ! votre recipe ${recipe} a été bien ajouté`,
        recipe: "",
        count: count + 1,
      };

    case DELETE_RECIPE:
      const recipeDelete = action.payload;
      if (recipes.includes(recipeDelete) === false) {
        return {
          ...state,
          message: `Attention vous essayer de supprimer le recipe ${recipeDelete} mais il n'existe pas`,
        };
      }
      return {
        ...state,
        recipes: recipes.filter((recipe) => recipe !== recipeDelete),
        count: count - 1,
        message: `Le recipe ${recipeDelete} a été bien supprimé`,
      };

    default:
      return state;
  }
};

export default recipeReducer;
