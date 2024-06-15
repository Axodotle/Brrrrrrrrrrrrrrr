import React from 'react';
//need to import/add app name component
import Dropdown from './Dropdown.jsx';
import RecipeContainer from './Recipe Container.jsx';

const MainContainer = (props) => {
  return (
    <div classname='mainContainer'>
      <Dropdown></Dropdown>
      <RecipeContainer></RecipeContainer>
    </div>
  );
};

export default MainContainer;
