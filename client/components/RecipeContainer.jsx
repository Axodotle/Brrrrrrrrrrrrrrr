import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const RecipeContainer = (props) => {
  const { recipesState } = props;

  const recipes = recipesState.map((recipe) => {
    <RecipeCard name={recipe.name} />;
  });

  return <div>{recipes}</div>;
};

export default RecipeContainer;
