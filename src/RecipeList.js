import React from 'react'
import RecipeCard from "./RecipeCard";

const RecipeList = ({recipes}) => {
    return (
      <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">  
        <div className='recipe-list'>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={recipe.id}>
                <RecipeCard key={index} recipe={recipe} />
              </div>  
            ))
          ) : (
            <div className='carousel-item active'>
              <p>No recipes found</p>
            </div>  
          )}
        </div>
      </div>  
      );
    };

export default RecipeList