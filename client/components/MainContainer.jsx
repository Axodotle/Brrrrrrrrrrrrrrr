import React from 'react';
//need to import/add app name component
import Dropdown from './Dropdown.jsx';
import RecipeContainer from './RecipeContainer.jsx';

const MainContainer = (props) => {
  return (
    <div classname='mainContainer'>
      {/* We might add our website name and logo in this portion as a component */}

      <Dropdown func={buttonClick}></Dropdown>
      {/* <RecipeContainer></RecipeContainer> */}
    </div>
  );
};

export default MainContainer;
