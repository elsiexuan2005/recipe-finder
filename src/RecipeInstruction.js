import React from 'react';
const recipeInstruction = ({recipe}) => {
    const { title, servings, ingredients, instruction} = recipe;
    return (
        <div className='instruction'>
            <h2>{title}</h2>
            <div className='instruction-body'>
                <h3>{servings}</h3>
                <h3>{ingredients.map((index, item)=> (
                    <li key = {index}>
                        {item}
                    </li>
                ) )}
                </h3>
                <h3>{instruction}</h3>
            </div>
        </div>
    )   
}