import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { title, image, usedIngredients, missedIngredients } = recipe;

  return (

    <div className='recipe' style= {{width: '20rem', margin: 'auto',  border: '2px solid black', borderRadius: '8px', padding: '10px'}}>
      <img src={image} alt={title}/>
      <div class="card-body">
        <h2 className='card-title'>{title}</h2>
            <div className='used-ingredients'>
                <h3>Used ingredients</h3>
                <ul>
                    {usedIngredients.map((ingredients, index)=> (
                        <li key={index}>
                            
                            {ingredients.original}
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div className='missing-ingredients'>
            <h3>Missing ingredients</h3>
            <ul>
                    {missedIngredients.map((ingredients, index)=> (
                        <li key={index}>
                        
                            {ingredients.original}
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecipeCard;
 