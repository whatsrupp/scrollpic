import React from 'react';

// Image Tags require using a custom webpack loader
// External sources work fine!

const BackArrow = () => {
  return (

    <img src={require('../images/back.png')} />

  )
}

export default BackArrow
