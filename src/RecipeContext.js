import React, { useState, useEffect, createContext } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState("banana");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      const data = await response.json();
      setRecipes(data.hits);
    };

    getdata();
  }, [query]);

  return (
    <RecipeContext.Provider value={{ query, setQuery, recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
