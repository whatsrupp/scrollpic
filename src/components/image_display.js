import React, { Component } from 'react';

class ImageDisplay extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return(
      <img
        src='http://weknowyourdreams.com/images/bear/bear-05.jpg'
        className='main-image'
      />
    )
  }
}

export default ImageDisplay
