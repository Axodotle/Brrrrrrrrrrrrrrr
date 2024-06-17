import React from 'react';

const RecipeCard = (props) => {
  const { name } = props;

  return (
    <div className='recipeCard'>
      <h2>{name}</h2>
      <ul className='ingredients'>
        <li></li>
      </ul>
    </div>
  );
};

export default RecipeCard;
