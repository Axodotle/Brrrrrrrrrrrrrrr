import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const RecipeContainer = (props) => {
  const { recipesState } = props;

  const recipes = recipesState.map((recipe) => {
    <RecipeCard
      name={recipe.title}
      ingredients={recipe.array}
      image={recipe.image} //add ingredient properties here
    />;
  });

  return (
    <div id='RecipeContainer'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      {/* {recipes} */}
    </div>
  );
};

export default RecipeContainer;
