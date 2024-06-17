import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const RecipeContainer = (props) => {
  const { recipesState } = props;

  const recipes = recipesState.map((recipe) => {
    console.log(recipe.title);
    return (
      <RecipeCard
        name={recipe.title}
        ingredients={recipe.ingredients}
        image={recipe.image} //add ingredient properties here
      />
    );
  });
  console.log('recipes', recipes);

  return (
    <div id='RecipeContainer'>
      {/* <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard /> */}
      {recipes}
    </div>
  );
};

export default RecipeContainer;
