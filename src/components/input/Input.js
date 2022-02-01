import React, { useState, useContext } from "react";
import { RecipeContext } from "../../RecipeContext";
import { useNavigate } from "react-router-dom";
import "./Input.css";

const Input = () => {
  const [search, setSearch] = useState("");
  const { query, setQuery } = useContext(RecipeContext);

  const setQueryHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const navigate = useNavigate();

  return (
    <div className="input">
      <h2>
        WELCOME TO{" "}
        <span
          style={{
            color: "red",
          }}
        >
          RECIPE FINDER
        </span>{" "}
      </h2>
      <h2>YOUR ONE PLACE TO FIND TASTY RECIPIES</h2>
      <h3>Enter Your Recipe here : </h3>

      <form action="" onSubmit={setQueryHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Item Name"
        />
        <button onClick={() => navigate("/recipe")}>Submit</button>
      </form>
    </div>
  );
};

export default Input;
