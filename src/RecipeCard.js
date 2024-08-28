import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { title, image, usedIngredients, missedIngredients } = recipe;

  return (

    <div className='recipe'>
      <h2>{title}</h2>
      <img src={image} alt={title}/>
      <div className='used-ingredients'>
        <h3>Used ingredients</h3>
        <ul>
            {usedIngredients.map((ingredients, index)=> (
                <li key={index}>
                    <img src={ingredients.image} alt={ingredients.name} />
                    {ingredients.original}
                </li>
            )
            )}
        </ul>
      </div>
      <div className='missing-ingredients'>
      <ul>
            {missedIngredients.map((ingredients, index)=> (
                <li key={index}>
                    <img src={ingredients.image} alt={ingredients.name} />
                    {ingredients.original}
                </li>
            )
            )}
        </ul>
      </div>
    </div>

  );
};

export default RecipeCard;
 