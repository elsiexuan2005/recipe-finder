import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import RecipeInstruction from './RecipeInstruction';
const apiKey = process.env.REACT_APP_API_KEY;
const apiURLBase = 'https://api.spoonacular.com/recipes';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearchByIngredients = async (ingredients) => {
    const endpoint = '/findByIngredients';
    const urlToFetch = `${apiURLBase}${endpoint}?apiKey=${apiKey}&ingredients=${ingredients}&number=5`;
    
    try {
      const response = await axios.get(urlToFetch);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
    <div className="App">
      <h1>What's in your fridge?</h1>
      <SearchForm onSearch={handleSearchByIngredients} />
      <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/instructions/:id" element={<RecipeInstruction />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;


