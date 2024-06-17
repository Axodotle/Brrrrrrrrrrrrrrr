import React from 'react';
import { useState, useEffect } from 'react';
import AppName from './AppName.jsx';
import Dropdown from './Dropdown.jsx';
import RecipeContainer from './RecipeContainer.jsx';

const MainContainer = (props) => {
  // Main container will eventually receive the data from server and pass data to child component (recipe container)
  const [recipesState, changeRecipesState] = useState([]);

  const testRecipes = [
    {
      title: 'Chicken Curry',
      ingredients: [
        { name: 'olive oil' },
        { name: 'onion' },
        { name: 'garlic' },
        { name: 'curry powder' },
        { name: 'cinnamon' },
      ],
      image:
        'https://www.allrecipes.com/thmb/t6YnJqDAtsd7UZs06h8YpRbMMCM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/212721-indian-chicken-curry-murgh-kari-DDMFS-4x3-330302d59ca64543b3d7ead88c226f9a.jpg',
    },
    {
      title: 'Coconut Shrimp',
      ingredients: [
        { name: 'shrimp' },
        { name: 'coconut' },
        { name: 'panko breadcrumbs' },
        { name: 'sweet chili sauce' },
        { name: 'caviar' },
      ],
      image:
        'https://hips.hearstapps.com/hmg-prod/images/coconut-shrimp-recipe-2-1664218596.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      title: 'Ethiopian Lamb Tibs',
      ingredients: [
        { name: 'red wine' },
        { name: 'fresh lemon juice' },
        { name: 'berbere' },
        { name: 'smoked paprika' },
        { name: 'dijon mustar' },
      ],
      image:
        'https://video-images.vice.com/articles/627ec5972831880096d62148/lede/1652475401404-lamb-tibs-recipe.jpeg',
    },
  ];
  //function that runs on buttonclick
  //on click, we would grab the current value stringify it
  const buttonClick = () => {
    const dropdown = document.querySelector('#cuisine'); // dropdown.value : 'italian'

    const url = `api/search/${dropdown.value}/3`;
    console.log('dropdown.value', dropdown.value);
    changeRecipesState(testRecipes);
    // fetch(url, {
    //   method: 'GET',
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log('raw data from backend', data);
    //     changeRecipesState(data);
    //   })
    //   .catch((err) => console.log('fetch request error:', err));
  };

  return (
    <div id='MainContainer'>
      <AppName />
      <Dropdown buttonClick={buttonClick} />
      <RecipeContainer recipesState={recipesState} />
    </div>
  );
};

export default MainContainer;
