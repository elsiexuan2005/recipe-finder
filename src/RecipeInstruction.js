import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const apiURLBase = 'https://api.spoonacular.com/recipes';

const RecipeInstruction = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [instructions, setInstructions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstructions = async () => {
        const endpoint = `/${id}/analyzedInstructions`;
        const urlToFetch = `${apiURLBase}${endpoint}?apiKey=${apiKey}`;

        try {
            const response = await axios.get(urlToFetch);
            setInstructions(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to load instructions');
            setLoading(false);
        }
    };

    fetchInstructions();
}, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='recipe-instruction'>
            <h2>Recipe Instructions</h2>
            {instructions && instructions.length > 0 ? (
                instructions[0].steps.map((step, index) => (
                    <div key={index}>
                        <h3>Step {index + 1}</h3>
                        <p>{step.step}</p>
                    </div>
                ))
            ) : (
                <p>No instructions available</p>
            )}
        </div>
    );
};

export default RecipeInstruction;