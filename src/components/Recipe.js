import React from "react";
import { useSelector } from "react-redux";
import Button from '../Styles/Button';
import Center from '../Styles/Grid/Center';
function Recipe() {
  const { recipes, count, message } = useSelector((state) => state);
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}>
            <Center>
              {recipe}
              <br/>
              <Button>Delete</Button>
              <Button>Detail</Button>
            </Center>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
