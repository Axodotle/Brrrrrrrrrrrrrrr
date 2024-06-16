import React from 'react';

const RecipeCard = () => {
  return (
    <div className='RecipeCard'>
      <img
        className='RecipeCardImage'
        src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D'
      />
      <h2 className='RecipeCardTitle'>Recipe Name</h2>
      <ul className='RecipeCardIngredients'>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
        <li>Ingredient 4</li>
        <li>Ingredient 5</li>
      </ul>
    </div>
  );
};

export default RecipeCard;
