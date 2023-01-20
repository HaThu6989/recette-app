import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  // const { recipes } = useSelector((state) => state);
  // const { recipeIndex } = useParams();
  // const recipeDetails = recipes.find((recipe) => {
  //   return recipe.id == recipeIndex;
  // });

  return (
    <div>
      <h1> Recipe Details ... </h1>
      {/* Name : {recipeDetails} */}
      <br />
    </div>
  );
}

export default RecipeDetail;
