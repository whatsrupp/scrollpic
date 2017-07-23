import React, { Component } from 'react';

// Image Tags require using a custom webpack loader
// External sources work fine!


class BackArrow extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: true
    }
  }

  render(){

    if(this.state.active){
      return(
        <img src={require('../images/arrows/back.png')} />
      )
    } else {
      return(
        <img className='inactive' src={require('../images/arrows/back.png')} />
      )
    }
  }

}

export default BackArrow
