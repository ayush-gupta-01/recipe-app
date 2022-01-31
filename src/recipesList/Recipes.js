import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

const Recipes = ({ name, image, index }) => {
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Link to={`/recipe/${name}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
};

export default Recipes;
