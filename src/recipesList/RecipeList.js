import React, { useState, useContext } from "react";
import { RecipeContext } from "../RecipeContext";
import Recipes from "./Recipes";

const RecipeList = () => {
  const { recipes, setRecipes, loading } = useContext(RecipeContext);

  return (
    <>
      {loading ? (
        <h2
          style={{
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          Finding Recipies for you...
        </h2>
      ) : recipes.length === 0 ? (
        <h2
          style={{
            color: "red",
          }}
        >
          Oops ! Sorry we didn't find any recipe .
        </h2>
      ) : (
        ""
      )}

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
    </>
  );
};

export default RecipeList;
