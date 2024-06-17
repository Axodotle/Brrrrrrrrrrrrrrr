import React from 'react';
import Ingredient from './Ingredient.jsx';
import { nanoid } from 'nanoid';

const RecipeCard = (props) => {
  const { name, array, image } = props;

  const testArr = [
    { name: 'eggs' },
    { name: 'milk' },
    { name: 'cheese' },
    { name: 'watermelon' },
    { name: 'caviar' },
  ];

  const ingredients = [];
  for (let i = 0; i < 5; i++) {
    ingredients.push(<Ingredient ingName={testArr[i].name} key={nanoid()} />);
  }

  //   const ingredients = testArr.map((ingredient) => {
  //     console.log(ingredient.name);
  //     <h5>{ingredient.name}</h5>;
  //   });
  console.log(ingredients);

  return (
    <div className='RecipeCard'>
      <img
        className='RecipeCardImage'
        src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D'
      />
      <h2 className='RecipeCardTitle'>Recipe Name</h2>
      <ul className='RecipeCardIngredients'>
        {ingredients}
        {/* <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
        <li>Ingredient 4</li>
        <li>Ingredient 5</li> */}
        {/* {ingredients} */}
      </ul>
    </div>
  );
};

export default RecipeCard;
