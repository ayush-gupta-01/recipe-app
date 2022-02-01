import React from "react";
import Nav from "./components/Nav";
import Input from "./components/input/Input";
import Recipe from "./components/Recipe/Recipe";
import RecipeList from "./components/recipesList/RecipeList";
import Footer from "./components/Footer";
import { RecipeProvider } from "./RecipeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Nav />
        <Input />
        <Routes>
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
