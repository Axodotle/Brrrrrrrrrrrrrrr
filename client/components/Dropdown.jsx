import React from 'react';

const Dropdown = (props) => {
  return (
    <div className='dropdown'>
      <label for='cuisine'>What cuisine are you in the mood for?</label>
      <select name='cuisine' id='cuisine'>
        <option value='african'>African</option>
        <option value='asian'>Asian</option>
        <option value='american'>American</option>
        <option value='carribean'>Carribean</option>
        <option value='african'>African</option>
        <option value='african'>African</option>
        <option value='african'>African</option>
        <option value='african'>African</option>
        <option value='african'>African</option>
      </select>
    </div>
  );
};
