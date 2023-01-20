import "./App.css";
import Recipe from "./components/Recipe";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipes/:recipeIndex" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
