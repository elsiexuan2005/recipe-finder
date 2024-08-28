import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);
const apiURLBase = 'https://api.spoonacular.com/recipes';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearchByIngredients = async (ingredients) => {
    const endpoint = '/findByIngredients';
    const urlToFetch = `${apiURLBase}${endpoint}?apiKey=${apiKey}&ingredients=${ingredients}&number=5`;
    

    try {
      const response = await axios.get(urlToFetch);
      setRecipes(response.data);
      console.log(setRecipes);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Data cannot be fetched, sorry");
    }
  };

  return (
    <div className="App">
      <h1>What's in your fridge?</h1>
      <SearchForm onSearch={handleSearchByIngredients} />
    </div>
  );
}

export default App;


