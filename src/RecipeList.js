import React from 'react'
import RecipeCard from "./RecipeCard";

const RecipeList = ({recipes}) => {
    return (
        <div>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      );
    };
   
export default RecipeList