import React from "react";
import { useSelector } from "react-redux";

function Recipe() {
  const { recipes, count, message } = useSelector((state) => state);
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}>
              {recipe}
              <button>Delete</button>
              <button>Detail</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
