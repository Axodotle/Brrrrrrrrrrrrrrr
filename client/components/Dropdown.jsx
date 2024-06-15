import React from 'react';

const Dropdown = (props) => {
  //function that runs on buttonclick
  //on click, we would grab the current value stingify it
  const buttonClick = () => {
    const dropdown = document.querySelector('#cuisine');
    fetch('api/cuisine', {
      method: 'GET',
      body: JSON.stringify({
        cuisine: dropdown.value,
      }),
    }).then((data) => data.json());
    // .then((data) => );
  };

  return (
    <div className='dropdown'>
      <label for='cuisine'>What cuisine are you in the mood for?</label>
      <select name='cuisine' id='cuisine'>
        <option value='african'>African</option>
        <option value='asian'>Asian</option>
        <option value='american'>American</option>
        <option value='carribean'>Carribean</option>
        <option value='indian'>Indian</option>
        <option value='italian'>Italian</option>
        <option value='mexican'>Mexican</option>
        <option value='african'>African</option>
        <option value='african'>African</option>
      </select>
      <button id='button' onClick={props.func}>
        Submit
      </button>
    </div>
  );
};

export default Dropdown;

// We expect to send {cuisine: 'american'}
