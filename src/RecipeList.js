import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import RecipeCard from "./RecipeCard";
const apiURLBase = 'https://api.spoonacular.com/recipes';

const RecipeList = ({recipes}) => {

    const navigate = useNavigate();

    const handleClickToInstruction = (recipeId) => {
        console.log("Clicked", recipeId);
        const point = `/instructions/${recipeId}`;
        navigate(point);
    };
   
    return (  
        <div className='recipe-list'>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div className= 'list-body' key={recipe.id}>
                <RecipeCard recipe={recipe}  handleClick={() => handleClickToInstruction(recipe.id)} />
              </div>  
            ))
          ) : (
            <div className='list-body'>
              <p>No recipes found</p>
            </div>
          )}
        </div>
      );
    };

export default RecipeList;