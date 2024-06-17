import React from 'react';
import { useState, useEffect } from 'react';
//need to import/add app name component
import Dropdown from './Dropdown.jsx';
import RecipeContainer from './RecipeContainer.jsx';

const MainContainer = (props) => {
  // Main container will eventually receive the data from server and pass data to child component (recipe container)
  const [recipesState, changeRecipesState] = useState([]);

  //function that runs on buttonclick
  //on click, we would grab the current value stringify it
  const buttonClick = () => {
    const dropdown = document.querySelector('#cuisine'); // dropdown.value : 'italian'

    const url = `api/cuisine/${dropdown.value}`;
    fetch(url, {
      method: 'GET',
      // body: JSON.stringify({
      //   cuisine: dropdown.value,
      // }),
    })
      .then((data) => data.json())
      .then((data) => {
        changeRecipesState(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='mainContainer'>
      {/* We might add our website name and logo in this portion as a component */}

      <Dropdown buttonClick={buttonClick} />
      <RecipeContainer recipesState={recipesState} />
    </div>
  );
};

export default MainContainer;
