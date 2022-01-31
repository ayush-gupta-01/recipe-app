import React from "react";
import Nav from "./Nav";
import Input from "./input/Input";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./recipesList/RecipeList";
import Footer from "./Footer";
import { RecipeProvider } from "./RecipeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Nav />
        <Input />
        <Routes>
          {/* <Route path="/" element={<Input />} /> */}
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
