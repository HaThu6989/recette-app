import React from "react";
import Button from '../Styles/Button';
import Center from '../Styles/Grid/Center';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteRecipe } from "../actions/actions-types";

function Recipe() {
  
  const { recipes, count, message } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (recipe) => {
    // console.log("hi")
    dispatch(deleteRecipe(recipe));
  };
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}>
            <Center>
              {recipe}
              <Button onClick={() => handleDelete(recipe)}>Delete</Button>
              <NavLink to={`/recipes/${index}`}>More Details</NavLink>
            </Center>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
