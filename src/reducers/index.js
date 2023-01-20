import { combineReducers } from "redux";

import recipe from './recipe';
import chef from './chef';

export default combineReducers({
    recipeReducer : recipe,
    chefReducer : chef
});
