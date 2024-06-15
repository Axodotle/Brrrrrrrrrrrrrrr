import React from 'react';
//need to import/add app name component
import Dropdown from './Dropdown.jsx';
import RecipeContainer from './RecipeContainer.jsx';

const MainContainer = (props) => {
  // Main container will eventually receive the data from server and pass data to child component (recipe container)

  return (
    <div classname='mainContainer'>
      {/* We might add our website name and logo in this portion as a component */}

      <Dropdown />
      <RecipeContainer />
    </div>
  );
};

export default MainContainer;
