import React, { useState, useContext } from "react";
import { RecipeContext } from "../RecipeContext";
import Recipes from "./Recipes";

const RecipeList = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Recipes
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
