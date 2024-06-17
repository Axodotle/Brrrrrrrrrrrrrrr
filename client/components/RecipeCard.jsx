import React from 'react';
import Ingredient from './Ingredient.jsx';
import { nanoid } from 'nanoid';

const RecipeCard = (props) => {
  const { name, ingredients, image } = props;

  //   console.log('name =', name, 'array =', array);

  const testArr = [
    { name: 'eggs' },
    { name: 'milk' },
    { name: 'cheese' },
    { name: 'watermelon' },
    { name: 'caviar' },
  ];

  //in the interest of time, we limited to only 5 ingredients
  const ingredientsList = [];
  for (let i = 0; i < 5; i++) {
    ingredientsList.push(
      <Ingredient ingName={ingredients[i].name} key={nanoid()} />
    );
  }

  console.log(ingredients);
  // sample image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D'

  return (
    <div className='RecipeCard'>
      <img className='RecipeCardImage' src={image} />
      <h2 className='RecipeCardTitle'>{name}</h2>
      <ul className='RecipeCardIngredients'>{ingredientsList}</ul>
    </div>
  );
};

export default RecipeCard;
