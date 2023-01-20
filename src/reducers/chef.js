import { ADD_CHEF, DELETE_CHEF, SET_CHEF } from "../constant/actions";

let stateInit = {
  chefs: ["Sundus", "Ha-thu", "chef1"],
  chef: "",
  message: "",
};

let chefReducer = (state = stateInit, action = {}) => {
    const { chefs, chef} = state;
    switch (action.type) {
      case SET_CHEF:
        const { name, value } = action.payload;
        return {
          ...state,
          [name]: value,
        };
  
      case ADD_CHEF:
        if (chef.trim() === "") {
          return { ...state, message: "Vous avez oublié le nom de votre chef" };
        }
        if (chefs.includes(chef)) {
          return { ...state, message: `Le chef ${chef} existe déjà` };
        }
        return {
          ...state,
          chefs: chefs.concat(chef),
          message: `Merci ! votre chef ${chef} a été bien ajouté`,
          chef: "",
          count: count + 1,
        };
  
      case DELETE_CHEF:
        const chefDelete = action.payload;
        if (chefs.includes(chefDelete) === false) {
          return {
            ...state,
            message: `Attention vous essayer de supprimer le chef ${chefDelete} mais il n'existe pas`,
          };
        }
        return {
          ...state,
          chefs: chefs.filter((chef) => chef !== chefDelete),
          count: count - 1,
          message: `Le chef ${chefDelete} a été bien supprimé`,
        };
  
      default:
        return state;
    }
  };