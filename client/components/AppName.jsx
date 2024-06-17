import React from 'react';

const logoURL = 'https://i.imgur.com/EpJhwqM.jpeg';

const AppName = (props) => {
  return (
    <div id='appName'>
      <img src={logoURL} id='logo'></img>
    </div>
  );
};

export default AppName;
