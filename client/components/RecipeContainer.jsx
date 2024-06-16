import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const RecipeContainer = () => {
  console.log('hey');

  return (
    <div id='RecipeContainer'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
};

export default RecipeContainer;
