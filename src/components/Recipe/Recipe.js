import React, { useContext } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../RecipeContext";

const Recipe = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  let data = recipes.filter((recipe, index) => recipe.recipe.label === id);
  data = data[0]?.recipe;
  return (
    <div className="data">
      <div className="row">
        <div>
          <h2
            style={{
              fontWeight: "900",
            }}
          >
            {data?.label}
          </h2>
          <img src={data?.image} alt={data?.label} />
          <h3>Calories : {data?.calories.toFixed(3)}</h3>
        </div>

        <div>
          <h3
            style={{
              color: "red",
              fontSize: "1.2rem",
            }}
          >
            Ingredients
          </h3>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            {data?.ingredients.map((ingredient, index) => (
              <li
                style={{
                  fontWeight: "600",
                }}
                key={index}
              >
                {ingredient.text}
              </li>
            ))}
          </ul>
          <h3>
            Recipe :{" "}
            <a href={data?.url} target="_blank">
              Click here
            </a>
          </h3>
        </div>
      </div>

      <h3
        style={{
          color: "blue",
          fontWeight: "bold",
          textDecoration: "underline",
          fontSize: "1.2rem",
        }}
      >
        Nutrients :{" "}
      </h3>
      <div className="nutrients-list">
        {data?.digest.map((i, index) => (
          <div className="nutrients" key={index}>
            <div
              style={{
                fontWeight: "bolder",
              }}
            >
              {i?.label} :
            </div>
            <div>
              {i?.total.toFixed(2)} {i?.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
