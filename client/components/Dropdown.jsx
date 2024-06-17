import React from 'react';

const Dropdown = (props) => {
  const { buttonClick } = props;

  return (
    <div className='dropdown'>
      <label htmlFor='cuisine'>What cuisine are you in the mood for?</label>
      <select name='cuisine' id='cuisine'>
        <option value='african'>African</option>
        <option value='asian'>Asian</option>
        <option value='american'>American</option>
        <option value='carribean'>Carribean</option>
        <option value='indian'>Indian</option>
        <option value='italian'>Italian</option>
        <option value='mediterranean'>Mediterranean</option>
        <option value='mexican'>Mexican</option>
      </select>
      <button id='button' onClick={buttonClick}>
        Submit
      </button>
    </div>
  );
};

export default Dropdown;

// We expect to send {cuisine: 'american'}
