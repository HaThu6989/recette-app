import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteRecipe } from "../actions/actions-types";

function Recipe() {
  const { recipes, count, message } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (recipe) => {
    dispatch(deleteRecipe(recipe));
  };
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}>
              {recipe}
              <button onClick={() => handleDelete(recipe)}>Delete</button>
              <NavLink to={`/recipes/${index}`}>More Details</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
