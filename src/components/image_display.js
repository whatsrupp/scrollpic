import React, { Component } from 'react';

class ImageDisplay extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return(
      <img
        src={ this.props.activePicture }
        className='main-image'
      />
    )
  }
}

export default ImageDisplay
